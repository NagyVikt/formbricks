import { createI18nString } from "@/lib/i18n/utils";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { TSurvey } from "@formbricks/types/surveys/types";
import { TSurveyQuestionTypeEnum } from "@formbricks/types/surveys/types";
import { QuestionFormInput } from "./index";

// Mock all the modules that might cause server-side environment variable access issues
vi.mock("@/lib/constants", () => ({
  IS_FORMBRICKS_CLOUD: false,
  ENCRYPTION_KEY: "test-encryption-key",
  WEBAPP_URL: "http://localhost:3000",
  DEFAULT_BRAND_COLOR: "#64748b",
  AVAILABLE_LOCALES: ["en-US", "de-DE", "pt-BR", "fr-FR", "zh-Hant-TW", "pt-PT", "hu-HU"], // Added hu-HU
  DEFAULT_LOCALE: "en-US",
  IS_PRODUCTION: false,
  PASSWORD_RESET_DISABLED: false,
  EMAIL_VERIFICATION_DISABLED: false,
  DEBUG: false,
  E2E_TESTING: false,
  RATE_LIMITING_DISABLED: true,
  ENTERPRISE_LICENSE_KEY: "test-license-key",
  GITHUB_ID: "test-github-id",
  GITHUB_SECRET: "test-github-secret",
  POSTHOG_API_KEY: "mock-posthog-api-key",
  POSTHOG_API_HOST: "mock-posthog-host",
  IS_POSTHOG_CONFIGURED: true,
  GOOGLE_CLIENT_ID: "test-google-client-id",
  GOOGLE_CLIENT_SECRET: "test-google-client-secret",
  AZUREAD_CLIENT_ID: "test-azuread-client-id",
  AZUREAD_CLIENT_SECRET: "test-azure",
  AZUREAD_TENANT_ID: "test-azuread-tenant-id",
  OIDC_DISPLAY_NAME: "test-oidc-display-name",
  OIDC_CLIENT_ID: "test-oidc-client-id",
  OIDC_ISSUER: "test-oidc-issuer",
  OIDC_CLIENT_SECRET: "test-oidc-client-secret",
  OIDC_SIGNING_ALGORITHM: "test-oidc-signing-algorithm",
  SENTRY_DSN: "mock-sentry-dsn",
}));

// Mock env module
vi.mock("@/lib/env", () => ({
  env: {
    IS_FORMBRICKS_CLOUD: "0",
    ENCRYPTION_KEY: "test-encryption-key",
    NODE_ENV: "test",
    ENTERPRISE_LICENSE_KEY: "test-license-key",
  },
}));

// Mock server-only module to prevent error
vi.mock("server-only", () => ({}));

// Mock crypto for hashString
vi.mock("crypto", () => ({
  default: {
    createHash: () => ({
      update: () => ({
        digest: () => "mocked-hash",
      }),
    }),
    createCipheriv: () => ({
      update: () => "encrypted-",
      final: () => "data",
    }),
    createDecipheriv: () => ({
      update: () => "decrypted-",
      final: () => "data",
    }),
    randomBytes: () => Buffer.from("random-bytes"),
  },
  createHash: () => ({
    update: () => ({
      digest: () => "mocked-hash",
    }),
  }),
  randomBytes: () => Buffer.from("random-bytes"),
}));

vi.mock("@tolgee/react", () => ({
  useTranslate: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock("@/lib/utils/hooks/useSyncScroll", () => ({
  useSyncScroll: vi.fn(),
}));

vi.mock("@formkit/auto-animate/react", () => ({
  useAutoAnimate: () => [null],
}));

vi.mock("lodash", () => ({
  debounce: (fn: (...args: any[]) => unknown) => fn,
}));

// Mock hashString function
vi.mock("@/lib/hashString", () => ({
  hashString: (str: string) => "hashed_" + str,
}));

// Mock recallToHeadline to return test values for language switching test
vi.mock("@/lib/utils/recall", () => ({
  recallToHeadline: (value: any, _survey: any, _useOnlyNumbers = false) => {
    // For the language switching test, return different values based on language
    if (value && typeof value === "object") {
      return {
        default: "Test Headline",
        fr: "Test Headline FR",
        hu: "Test Headline HU", // Added Hungarian
        ...value,
      };
    }
    return value;
  },
}));

// Mock UI components
vi.mock("@/modules/ui/components/input", () => ({
  Input: ({
    id,
    value,
    className,
    placeholder,
    onChange,
    "aria-label": ariaLabel,
    isInvalid,
    ...rest
  }: any) => (
    <input
      data-testid={id}
      id={id}
      value={value || ""}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      aria-label={ariaLabel}
      aria-invalid={isInvalid === true ? "true" : undefined}
      {...rest}
    />
  ),
}));

vi.mock("@/modules/ui/components/button", () => ({
  Button: ({ children, onClick, "aria-label": ariaLabel, variant, size, ...rest }: any) => (
    <button
      onClick={onClick}
      data-testid={ariaLabel}
      aria-label={ariaLabel}
      data-variant={variant}
      data-size={size}
      {...rest}>
      {children}
    </button>
  ),
}));

vi.mock("@/modules/ui/components/tooltip", () => ({
  TooltipRenderer: ({ children, tooltipContent }: any) => (
    <span data-tooltip={tooltipContent}>{children}</span>
  ),
}));

// Mock component imports to avoid rendering real components that might access server-side resources
vi.mock("@/modules/survey/components/question-form-input/components/multi-lang-wrapper", () => ({
  MultiLangWrapper: ({ render, value, onChange }: any) => {
    return render({
      value,
      onChange: (val: any) => onChange({ default: val }), // Simplified mock, real one handles languages
      children: null,
    });
  },
}));

vi.mock("@/modules/survey/components/question-form-input/components/recall-wrapper", () => ({
  RecallWrapper: ({ render, value, onChange }: any) => {
    return render({
      value,
      onChange,
      highlightedJSX: <></>,
      children: null,
      isRecallSelectVisible: false,
    });
  },
}));

// Mock file input component
vi.mock("@/modules/ui/components/file-input", () => ({
  FileInput: () => <div data-testid="file-input">environments.surveys.edit.add_photo_or_video</div>,
}));

// Mock license-check module
vi.mock("@/modules/ee/license-check/lib/utils", () => ({
  verifyLicense: () => ({ verified: true }),
  isRestricted: () => false,
}));

const mockUpdateQuestion = vi.fn();
const mockUpdateSurvey = vi.fn();
const mockUpdateChoice = vi.fn();
const mockSetSelectedLanguageCode = vi.fn();

const surveyLanguages = ["en", "fr", "hu"]; // Define languages used in mockSurvey

const defaultLanguages = [
  {
    id: "lan_123",
    default: true,
    enabled: true,
    language: {
      id: "en",
      code: "en",
      name: "English",
      createdAt: new Date(),
      updatedAt: new Date(),
      alias: null,
      projectId: "project_123",
    },
  },
  {
    id: "lan_456",
    default: false,
    enabled: true,
    language: {
      id: "fr",
      code: "fr",
      name: "French",
      createdAt: new Date(),
      updatedAt: new Date(),
      alias: null,
      projectId: "project_123",
    },
  },
  { // Added Hungarian language
    id: "lan_789",
    default: false,
    enabled: true,
    language: {
      id: "hu",
      code: "hu",
      name: "Hungarian",
      createdAt: new Date(),
      updatedAt: new Date(),
      alias: null,
      projectId: "project_123",
    },
  },
];

const mockSurvey = {
  id: "survey_123",
  name: "Test Survey",
  type: "link",
  createdAt: new Date(),
  updatedAt: new Date(),
  environmentId: "env_123",
  status: "draft",
  questions: [
    {
      id: "question_1",
      type: TSurveyQuestionTypeEnum.OpenText,
      headline: createI18nString({ default: "First Question", fr: "Première Question", hu: "Első Kérdés" }, surveyLanguages),
      subheader: createI18nString({ default: "Subheader text", fr: "Texte du sous-titre", hu: "Alcím szöveg" }, surveyLanguages),
      required: true,
      inputType: "text",
      charLimit: {
        enabled: false,
      },
    },
    {
      id: "question_2",
      type: TSurveyQuestionTypeEnum.MultipleChoiceSingle,
      headline: createI18nString({ default: "Second Question", fr: "Deuxième Question", hu: "Második Kérdés" }, surveyLanguages),
      required: false,
      choices: [
        { id: "choice_1", label: createI18nString({ default: "Choice 1", fr: "Choix 1", hu: "1. Választás" }, surveyLanguages) },
        { id: "choice_2", label: createI18nString({ default: "Choice 2", fr: "Choix 2", hu: "2. Választás" }, surveyLanguages) },
      ],
    },
    {
      id: "question_3",
      type: TSurveyQuestionTypeEnum.Rating,
      headline: createI18nString({ default: "Rating Question", fr: "Question d'Évaluation", hu: "Értékelő Kérdés" }, surveyLanguages),
      required: true,
      scale: "number",
      range: 5,
      lowerLabel: createI18nString({ default: "Low", fr: "Bas", hu: "Alacsony" }, surveyLanguages),
      upperLabel: createI18nString({ default: "High", fr: "Haut", hu: "Magas" }, surveyLanguages),
      isColorCodingEnabled: false,
    },
  ],
  recontactDays: null,
  welcomeCard: {
    enabled: true,
    headline: createI18nString({ default: "Welcome", fr: "Bienvenue", hu: "Üdvözöljük" }, surveyLanguages),
    html: createI18nString({ default: "<p>Welcome to our survey</p>", fr: "<p>Bienvenue à notre sondage</p>", hu: "<p>Üdvözöljük felmérésünkön</p>" }, surveyLanguages),
    buttonLabel: createI18nString({ default: "Start", fr: "Commencer", hu: "Kezdés" }, surveyLanguages),
    fileUrl: "",
    videoUrl: "",
    timeToFinish: false,
    showResponseCount: false,
  },
  languages: defaultLanguages,
  autoClose: null,
  projectOverwrites: {},
  styling: {},
  singleUse: {
    enabled: false,
    isEncrypted: false,
  },
  resultShareKey: null,
  endings: [
    {
      id: "ending_1",
      type: "endScreen",
      headline: createI18nString({ default: "Thank you", fr: "Merci", hu: "Köszönjük" }, surveyLanguages),
      subheader: createI18nString({ default: "Feedback submitted", fr: "Commentaires soumis", hu: "Visszajelzés elküldve" }, surveyLanguages),
      imageUrl: "",
    },
  ],
  delay: 0,
  autoComplete: null,
  triggers: [],
  segment: null,
  hiddenFields: { enabled: false, fieldIds: [] },
  variables: [],
  followUps: [],
} as unknown as TSurvey;

describe("QuestionFormInput", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup(); // Clean up the DOM after each test
    vi.clearAllMocks();
    // Consider if vi.resetModules() is needed here or if it causes issues with mocks.
    // It can be useful for ensuring mocks are fresh for each test, but sometimes can interfere.
  });

  test("renders with headline input", async () => {
    render(
      <QuestionFormInput
        id="headline"
        value={mockSurvey.questions[0].headline} // Use the survey's i18n string
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Headline"
        locale="en-US" // This prop might be for formatting, not for selected language of content
      />
    );

    expect(screen.getByLabelText("Headline")).toBeInTheDocument();
    expect(screen.getByTestId("headline")).toBeInTheDocument();
  });

  test("handles input changes correctly", async () => {
    const user = userEvent.setup();

    render(
      <QuestionFormInput
        id="headline-test"
        value={mockSurvey.questions[0].headline}
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Headline"
        locale="en-US"
      />
    );

    const input = screen.getByTestId("headline-test");
    await user.clear(input);
    await user.type(input, "New Headline");

    // The mockUpdateQuestion should be called by the MultiLangWrapper's onChange
    // or directly if MultiLangWrapper is simplified.
    // Given the mock, it's likely called with { default: "New Headline" }
    expect(mockUpdateQuestion).toHaveBeenCalled();
  });

  test("handles choice updates correctly", async () => {
    mockUpdateChoice.mockImplementation((_) => {
      return;
    });

    if (mockSurvey.questions[1].type !== TSurveyQuestionTypeEnum.MultipleChoiceSingle) {
      throw new Error("Question type is not MultipleChoiceSingle");
    }

    render(
      <QuestionFormInput
        id="choice.0" // This ID structure implies it might be handled specially
        value={mockSurvey.questions[1].choices?.[0].label}
        localSurvey={mockSurvey}
        questionIdx={1} // Index of the question
        updateChoice={mockUpdateChoice} // Prop for updating choices
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Choice"
        locale="en-US"
      />
    );

    const input = screen.getByTestId("choice.0"); // Assuming testId matches the ID
    // Simulate change that would be handled by MultiLangWrapper or RecallWrapper
    // The mocked MultiLangWrapper calls onChange({ default: val })
    // So, the component logic should then call updateChoice with the correct structure.
    await fireEvent.change(input, { target: { value: "Updated Choice" } });

    // We expect updateChoice to be called with the choice index and the updated label object
    // The exact call depends on how QuestionFormInput processes the onChange from MultiLangWrapper
    // For this test to pass with the current mocks, QuestionFormInput would need to internally call
    // updateChoice(0, { label: { default: "Updated Choice" } }) or similar.
    // If the component itself doesn't call updateChoice based on the mocked MultiLangWrapper,
    // this test might need adjustment or the component's internal logic for choices needs to be considered.

    // Forcing the call to check if the mock is set up correctly for other parts of the test.
    // This line might be redundant if the component correctly calls updateChoice.
    // mockUpdateChoice(0, { label: { default: "Updated Choice" } });

    expect(mockUpdateChoice).toHaveBeenCalled();
  });

  test("handles welcome card updates correctly", async () => {
    const user = userEvent.setup();

    render(
      <QuestionFormInput
        id="headline-welcome" // ID for welcome card headline
        value={mockSurvey.welcomeCard.headline}
        localSurvey={mockSurvey}
        questionIdx={-1} // Special index for welcome card
        updateSurvey={mockUpdateSurvey} // Prop for updating survey-level fields
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Welcome Headline"
        locale="en-US"
      />
    );

    const input = screen.getByTestId("headline-welcome");
    await user.clear(input);
    await user.type(input, "New Welcome");

    expect(mockUpdateSurvey).toHaveBeenCalled();
  });

  test("handles end screen card updates correctly", async () => {
    const user = userEvent.setup();
    const endScreenHeadline =
      mockSurvey.endings[0].type === "endScreen" ? mockSurvey.endings[0].headline : undefined;

    render(
      <QuestionFormInput
        id="headline-ending" // ID for end screen headline
        value={endScreenHeadline}
        localSurvey={mockSurvey}
        questionIdx={mockSurvey.questions.length} // Special index for end screen
        updateSurvey={mockUpdateSurvey}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="End Screen Headline"
        locale="en-US"
      />
    );

    const input = screen.getByTestId("headline-ending");
    await user.clear(input);
    await user.type(input, "New Thank You");

    expect(mockUpdateSurvey).toHaveBeenCalled();
  });

  test("handles nested property updates correctly (e.g., rating labels)", async () => {
    const user = userEvent.setup();

    if (mockSurvey.questions[2].type !== TSurveyQuestionTypeEnum.Rating) {
      throw new Error("Question type is not Rating");
    }

    render(
      <QuestionFormInput
        id="lowerLabel" // ID for a nested property
        value={mockSurvey.questions[2].lowerLabel}
        localSurvey={mockSurvey}
        questionIdx={2} // Index of the rating question
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Lower Label"
        locale="en-US"
      />
    );

    const input = screen.getByTestId("lowerLabel");
    await user.clear(input);
    await user.type(input, "New Lower Label");

    expect(mockUpdateQuestion).toHaveBeenCalled();
  });

  test("toggles image uploader when button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <QuestionFormInput
        id="headline"
        value={mockSurvey.questions[0].headline}
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Headline"
        locale="en-US"
      />
    );

    const toggleButton = screen.getByTestId("Toggle image uploader");
    await user.click(toggleButton);

    expect(screen.getByTestId("file-input")).toBeInTheDocument();
  });

  test("removes subheader when remove button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <QuestionFormInput
        id="subheader"
        value={mockSurvey.questions[0].subheader}
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Subheader"
        locale="en-US"
      />
    );

    const removeButton = screen.getByTestId("Remove description");
    await user.click(removeButton);
    // The component should call updateQuestion with the subheader set to undefined
    expect(mockUpdateQuestion).toHaveBeenCalledWith(0, { subheader: undefined });
  });

  test("handles language switching (renders component, actual value check depends on mocks)", async () => {
    render(
      <QuestionFormInput
        id="headline-lang"
        value={createI18nString({ default: "Test Headline", fr: "Test Headline FR", hu: "Test Headline HU" }, surveyLanguages)}
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="hu" // Test with Hungarian selected
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Headline"
        locale="hu-HU" // This might be for display formatting
      />
    );
    // Check if the input field is rendered. The actual displayed value depends on how
    // MultiLangWrapper and RecallWrapper are implemented and how they use selectedLanguageCode.
    // With the current simplified mocks, the input will likely show the 'default' value or an empty string.
    expect(screen.getByTestId("headline-lang")).toBeInTheDocument();
    // To properly test language switching effect on the input value,
    // the MultiLangWrapper mock would need to be more sophisticated
    // to actually pass down the value for the selectedLanguageCode.
  });

  test("handles max length constraint", async () => {
    render(
      <QuestionFormInput
        id="headline-maxlength"
        value={createI18nString("Test", surveyLanguages)}
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Headline"
        maxLength={10}
        locale="en-US"
      />
    );

    const input = screen.getByTestId("headline-maxlength");
    expect(input).toHaveAttribute("maxLength", "10");
  });

  test("uses custom placeholder when provided", () => {
    render(
      <QuestionFormInput
        id="headline-placeholder"
        value={createI18nString("", surveyLanguages)}
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Headline"
        placeholder="Custom placeholder"
        locale="en-US"
      />
    );

    const input = screen.getByTestId("headline-placeholder");
    expect(input).toHaveAttribute("placeholder", "Custom placeholder");
  });

  test("handles onBlur callback", async () => {
    const onBlurMock = vi.fn();
    const user = userEvent.setup();

    render(
      <QuestionFormInput
        id="headline-blur"
        value={mockSurvey.questions[0].headline}
        localSurvey={mockSurvey}
        questionIdx={0}
        updateQuestion={mockUpdateQuestion}
        isInvalid={false}
        selectedLanguageCode="en"
        setSelectedLanguageCode={mockSetSelectedLanguageCode}
        label="Headline"
        onBlur={onBlurMock}
        locale="en-US"
      />
    );

    const input = screen.getByTestId("headline-blur");
    // Click to focus, then blur
    await user.click(input); // Focus
    fireEvent.blur(input); // Blur

    expect(onBlurMock).toHaveBeenCalled();
  });
});
