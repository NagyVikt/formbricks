export interface TIso639Language {
  alpha2: string;
  label: {
    "en-US": string;
    "de-DE": string;
    "pt-BR": string;
    "fr-FR": string;
    "zh-Hant-TW": string;
    "pt-PT": string;
    "hu-HU": string; // Added Hungarian locale
  };
}

export const iso639Languages: TIso639Language[] = [
  {
    alpha2: "aa",
    label: {
      "en-US": "Afar",
      "de-DE": "Afar",
      "pt-BR": "Afar",
      "fr-FR": "Afar",
      "zh-Hant-TW": "阿法爾語",
      "pt-PT": "Afar",
      "hu-HU": "Afar", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "ab",
    label: {
      "en-US": "Abkhazian",
      "de-DE": "Abchasisch",
      "pt-BR": "Abcásio",
      "fr-FR": "Abkhaze",
      "zh-Hant-TW": "阿布哈茲語",
      "pt-PT": "Abcásio",
      "hu-HU": "Abkhazian", // TODO: Add Hungarian translation (Abház)
    },
  },
  {
    alpha2: "ae",
    label: {
      "en-US": "Avestan",
      "de-DE": "Avestisch",
      "pt-BR": "Avestano",
      "fr-FR": "Avestique",
      "zh-Hant-TW": "阿維斯陀語",
      "pt-PT": "Avestano",
      "hu-HU": "Avestan", // TODO: Add Hungarian translation (Avesztai)
    },
  },
  {
    alpha2: "af",
    label: {
      "en-US": "Afrikaans",
      "de-DE": "Afrikaans",
      "pt-BR": "Afrikâner",
      "fr-FR": "Afrikaans",
      "zh-Hant-TW": "南非語",
      "pt-PT": "Afrikâner",
      "hu-HU": "Afrikaans", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "ak",
    label: {
      "en-US": "Akan",
      "de-DE": "Akan",
      "pt-BR": "Akan",
      "fr-FR": "Akan",
      "zh-Hant-TW": "阿肯語",
      "pt-PT": "Akan",
      "hu-HU": "Akan", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "am",
    label: {
      "en-US": "Amharic",
      "de-DE": "Amharisch",
      "pt-BR": "Amárico",
      "fr-FR": "Amharique",
      "zh-Hant-TW": "阿姆哈拉語",
      "pt-PT": "Amárico",
      "hu-HU": "Amharic", // TODO: Add Hungarian translation (Amhara)
    },
  },
  {
    alpha2: "an",
    label: {
      "en-US": "Aragonese",
      "de-DE": "Aragonesisch",
      "pt-BR": "Aragonês",
      "fr-FR": "Aragonês",
      "zh-Hant-TW": "阿拉貢語",
      "pt-PT": "Aragones",
      "hu-HU": "Aragonese", // TODO: Add Hungarian translation (Aragóniai)
    },
  },
  {
    alpha2: "ar",
    label: {
      "en-US": "Arabic",
      "de-DE": "Arabisch",
      "pt-BR": "Árabe",
      "fr-FR": "Arabe",
      "zh-Hant-TW": "阿拉伯語",
      "pt-PT": "Arábico",
      "hu-HU": "Arabic", // TODO: Add Hungarian translation (Arab)
    },
  },
  {
    alpha2: "as",
    label: {
      "en-US": "Assamese",
      "de-DE": "Assamesisch",
      "pt-BR": "Assamês",
      "fr-FR": "Assamais",
      "zh-Hant-TW": "阿薩姆語",
      "pt-PT": "Assamese",
      "hu-HU": "Assamese", // TODO: Add Hungarian translation (Asszámi)
    },
  },
  {
    alpha2: "av",
    label: {
      "en-US": "Avaric",
      "de-DE": "Avarisch",
      "pt-BR": "Avaric",
      "fr-FR": "Avaric",
      "zh-Hant-TW": "阿瓦爾語",
      "pt-PT": "Avaric",
      "hu-HU": "Avaric", // TODO: Add Hungarian translation (Avar)
    },
  },
  {
    alpha2: "ay",
    label: {
      "en-US": "Aymara",
      "de-DE": "Aymara",
      "pt-BR": "Aymara",
      "fr-FR": "Aymara",
      "zh-Hant-TW": "艾馬拉語",
      "pt-PT": "Aymara",
      "hu-HU": "Aymara", // TODO: Add Hungarian translation (Ajmara)
    },
  },
  {
    alpha2: "az",
    label: {
      "en-US": "Azerbaijani",
      "de-DE": "Aserbaidschanisch",
      "pt-BR": "Azerbaijano",
      "fr-FR": "Azerbaïdjanais",
      "zh-Hant-TW": "亞塞拜然語",
      "pt-PT": "Azerbaijano",
      "hu-HU": "Azerbaijani", // TODO: Add Hungarian translation (Azeri)
    },
  },
  {
    alpha2: "ba",
    label: {
      "en-US": "Bashkir",
      "de-DE": "Baschkirisch",
      "pt-BR": "Basco", // Note: This seems to be 'Basque' in pt-BR, Bashkir is 'Baxir'
      "fr-FR": "Bashkir",
      "zh-Hant-TW": "巴什基爾語",
      "pt-PT": "Basco", // Note: This seems to be 'Basque' in pt-PT, Bashkir is 'Baxir'
      "hu-HU": "Bashkir", // TODO: Add Hungarian translation (Baskír)
    },
  },
  {
    alpha2: "be",
    label: {
      "en-US": "Belarusian",
      "de-DE": "Weißrussisch",
      "pt-BR": "Bielorrusso",
      "fr-FR": "Biélorusse",
      "zh-Hant-TW": "白俄羅斯語",
      "pt-PT": "Bielorrusso",
      "hu-HU": "Belarusian", // TODO: Add Hungarian translation (Belarusz)
    },
  },
  {
    alpha2: "bg",
    label: {
      "en-US": "Bulgarian",
      "de-DE": "Bulgarisch",
      "pt-BR": "Búlgaro",
      "fr-FR": "Bulgare",
      "zh-Hant-TW": "保加利亞語",
      "pt-PT": "Búlgaro",
      "hu-HU": "Bulgarian", // TODO: Add Hungarian translation (Bolgár)
    },
  },
  {
    alpha2: "bh",
    label: {
      "en-US": "Bihari languages",
      "de-DE": "Biharische Sprachen",
      "pt-BR": "Bihari",
      "fr-FR": "Bihari",
      "zh-Hant-TW": "比哈里語",
      "pt-PT": "Bihari",
      "hu-HU": "Bihari languages", // TODO: Add Hungarian translation (Bihari nyelvek)
    },
  },
  {
    alpha2: "bi",
    label: {
      "en-US": "Bislama",
      "de-DE": "Bislama",
      "pt-BR": "Bislama",
      "fr-FR": "Bislama",
      "zh-Hant-TW": "比斯拉馬語",
      "pt-PT": "Bislama",
      "hu-HU": "Bislama", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "bm",
    label: {
      "en-US": "Bambara",
      "de-DE": "Bambara",
      "pt-BR": "Bambara",
      "fr-FR": "Bambara",
      "zh-Hant-TW": "班巴拉語",
      "pt-PT": "Bambara",
      "hu-HU": "Bambara", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "bn",
    label: {
      "en-US": "Bengali",
      "de-DE": "Bengali",
      "pt-BR": "Bengali",
      "fr-FR": "Bengali",
      "zh-Hant-TW": "孟加拉語",
      "pt-PT": "Bengali",
      "hu-HU": "Bengali", // TODO: Add Hungarian translation (Bengáli)
    },
  },
  {
    alpha2: "bo",
    label: {
      "en-US": "Tibetan",
      "de-DE": "Tibetisch",
      "pt-BR": "Tibetano",
      "fr-FR": "Tibétain",
      "zh-Hant-TW": "藏語",
      "pt-PT": "Tibetano",
      "hu-HU": "Tibetan", // TODO: Add Hungarian translation (Tibeti)
    },
  },
  {
    alpha2: "br",
    label: {
      "en-US": "Breton",
      "de-DE": "Bretonisch",
      "pt-BR": "Breton",
      "fr-FR": "Breton",
      "zh-Hant-TW": "布列塔尼語",
      "pt-PT": "Breton",
      "hu-HU": "Breton", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "bs",
    label: {
      "en-US": "Bosnian",
      "de-DE": "Bosnisch",
      "pt-BR": "Bósnio",
      "fr-FR": "Bosnien",
      "zh-Hant-TW": "波士尼亞語",
      "pt-PT": "Bosnian",
      "hu-HU": "Bosnian", // TODO: Add Hungarian translation (Bosnyák)
    },
  },
  {
    alpha2: "ca",
    label: {
      "en-US": "Catalan; Valencian",
      "de-DE": "Katalanisch; Valencisch",
      "pt-BR": "Catalão; Valenciano",
      "fr-FR": "Catalan; Valencian",
      "zh-Hant-TW": "加泰隆尼亞語；瓦倫西亞語",
      "pt-PT": "Catalão; Valenciano",
      "hu-HU": "Catalan; Valencian", // TODO: Add Hungarian translation (Katalán; Valenciai)
    },
  },
  {
    alpha2: "ce",
    label: {
      "en-US": "Chechen",
      "de-DE": "Tschetschenisch",
      "pt-BR": "Checheno",
      "fr-FR": "Tchechen",
      "zh-Hant-TW": "車臣語",
      "pt-PT": "Tchechen",
      "hu-HU": "Chechen", // TODO: Add Hungarian translation (Csecsen)
    },
  },
  {
    alpha2: "ch",
    label: {
      "en-US": "Chamorro",
      "de-DE": "Chamorro",
      "pt-BR": "Chamorro",
      "fr-FR": "Chamorro",
      "zh-Hant-TW": "查莫羅語",
      "pt-PT": "Chamorro",
      "hu-HU": "Chamorro", // TODO: Add Hungarian translation (Csamoró)
    },
  },
  {
    alpha2: "co",
    label: {
      "en-US": "Corsican",
      "de-DE": "Korsisch",
      "pt-BR": "Corsican",
      "fr-FR": "Corsican",
      "zh-Hant-TW": "科西嘉語",
      "pt-PT": "Corsican",
      "hu-HU": "Corsican", // TODO: Add Hungarian translation (Korzikai)
    },
  },
  {
    alpha2: "cr",
    label: {
      "en-US": "Cree",
      "de-DE": "Cree",
      "pt-BR": "Cree",
      "fr-FR": "Cree",
      "zh-Hant-TW": "克里語",
      "pt-PT": "Cree",
      "hu-HU": "Cree", // TODO: Add Hungarian translation (Krí)
    },
  },
  {
    alpha2: "cs",
    label: {
      "en-US": "Czech",
      "de-DE": "Tschechisch",
      "pt-BR": "Tcheco",
      "fr-FR": "Tcheque",
      "zh-Hant-TW": "捷克語",
      "pt-PT": "Tcheco",
      "hu-HU": "Czech", // TODO: Add Hungarian translation (Cseh)
    },
  },
  {
    alpha2: "cu",
    label: {
      "en-US": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
      "de-DE": "Kirchenslawisch; Altbulgarisch; Kirchenslawisch; Altbulgarisch; Altkirchliches Slawisch",
      "pt-BR":
        "Slavônico eclesiástico; Antigo eslavônico; Sânscrito eclesiástico; Antigo búlgaro; Antigo sânscrito eclesiástico",
      "fr-FR":
        "Slavon épiscopal; Ancien slave; Sanscrit épiscopal; Ancien bulgare; Ancien sanscrit épiscopal",
      "zh-Hant-TW": "教會斯拉夫語；古教會斯拉夫語；古保加利亞語",
      "pt-PT":
        "Sânscrito eclesiástico; Antigo eslavônico; Sânscrito eclesiástico; Antigo búlgaro; Antigo sânscrito eclesiástico",
      "hu-HU": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic", // TODO: Add Hungarian translation (Egyházi szláv; Ószláv; Óbolgár)
    },
  },
  {
    alpha2: "cv",
    label: {
      "en-US": "Chuvash",
      "de-DE": "Tschuwaschisch",
      "pt-BR": "Tchuvasco",
      "fr-FR": "Tchuvasche",
      "zh-Hant-TW": "楚瓦什語",
      "pt-PT": "Tchuvasche",
      "hu-HU": "Chuvash", // TODO: Add Hungarian translation (Csuvas)
    },
  },
  {
    alpha2: "cy",
    label: {
      "en-US": "Welsh",
      "de-DE": "Walisisch",
      "pt-BR": "Galês",
      "fr-FR": "Gallois",
      "zh-Hant-TW": "威爾斯語",
      "pt-PT": "Galês",
      "hu-HU": "Welsh", // TODO: Add Hungarian translation (Walesi)
    },
  },
  {
    alpha2: "da",
    label: {
      "en-US": "Danish",
      "de-DE": "Dänisch",
      "pt-BR": "Dinamarquês",
      "fr-FR": "Danois",
      "zh-Hant-TW": "丹麥語",
      "pt-PT": "Dinamarquês",
      "hu-HU": "Danish", // TODO: Add Hungarian translation (Dán)
    },
  },
  {
    alpha2: "de",
    label: {
      "en-US": "German",
      "de-DE": "Deutsch",
      "pt-BR": "Alemão",
      "fr-FR": "Allemand",
      "zh-Hant-TW": "德語",
      "pt-PT": "Alemão",
      "hu-HU": "German", // TODO: Add Hungarian translation (Német)
    },
  },
  {
    alpha2: "dv",
    label: {
      "en-US": "Divehi; Dhivehi; Maldivian",
      "de-DE": "Divehi; Dhivehi; Maldivisch",
      "pt-BR": "Divehi; Dhivehi; Maldiviano",
      "fr-FR": "Divehi; Dhivehi; Maldivien",
      "zh-Hant-TW": "迪維西語；迪維西語；馬爾地夫語",
      "pt-PT": "Divehi; Dhivehi; Maldiviano",
      "hu-HU": "Divehi; Dhivehi; Maldivian", // TODO: Add Hungarian translation (Divehi; Maldív)
    },
  },
  {
    alpha2: "dz",
    label: {
      "en-US": "Dzongkha",
      "de-DE": "Dzongkha",
      "pt-BR": "Dzongkha",
      "fr-FR": "Dzongkha",
      "zh-Hant-TW": "宗喀語",
      "pt-PT": "Dzongkha",
      "hu-HU": "Dzongkha", // TODO: Add Hungarian translation (Dzongkha)
    },
  },
  {
    alpha2: "ee",
    label: {
      "en-US": "Ewe",
      "de-DE": "Ewe",
      "pt-BR": "Ewe",
      "fr-FR": "Ewe",
      "zh-Hant-TW": "埃維語",
      "pt-PT": "Ewe",
      "hu-HU": "Ewe", // TODO: Add Hungarian translation (Eve)
    },
  },
  {
    alpha2: "el",
    label: {
      "en-US": "Greek, Modern (1453-)",
      "de-DE": "Griechisch, Modern (ab 1453)",
      "pt-BR": "Grego moderno (1453-)",
      "fr-FR": "Grec moderne (après 1453)",
      "zh-Hant-TW": "希臘語（現代，1453-）",
      "pt-PT": "Grego moderno (1453-)",
      "hu-HU": "Greek, Modern (1453-)", // TODO: Add Hungarian translation (Újgörög)
    },
  },
  {
    alpha2: "en",
    label: {
      "en-US": "English",
      "de-DE": "Englisch",
      "pt-BR": "Inglês",
      "fr-FR": "Anglais",
      "zh-Hant-TW": "英文",
      "pt-PT": "Inglês",
      "hu-HU": "English", // TODO: Add Hungarian translation (Angol)
    },
  },
  {
    alpha2: "eo",
    label: {
      "en-US": "Esperanto",
      "de-DE": "Esperanto",
      "pt-BR": "Esperanto",
      "fr-FR": "Esperanto",
      "zh-Hant-TW": "世界語",
      "pt-PT": "Esperanto",
      "hu-HU": "Esperanto", // TODO: Add Hungarian translation (Eszperantó)
    },
  },
  {
    alpha2: "es",
    label: {
      "en-US": "Spanish; Castilian",
      "de-DE": "Spanisch; Kastilisch",
      "pt-BR": "Espanhol; Castelao",
      "fr-FR": "Espagnol; Castillan",
      "zh-Hant-TW": "西班牙語；卡斯提爾語",
      "pt-PT": "Espanhol; Castelao",
      "hu-HU": "Spanish; Castilian", // TODO: Add Hungarian translation (Spanyol; Kasztíliai)
    },
  },
  {
    alpha2: "et",
    label: {
      "en-US": "Estonian",
      "de-DE": "Estnisch",
      "pt-BR": "Estoniano",
      "fr-FR": "Estonien",
      "zh-Hant-TW": "愛沙尼亞語",
      "pt-PT": "Estoniano",
      "hu-HU": "Estonian", // TODO: Add Hungarian translation (Észt)
    },
  },
  {
    alpha2: "eu",
    label: {
      "en-US": "Basque",
      "de-DE": "Baskisch",
      "pt-BR": "Basco",
      "fr-FR": "Basque",
      "zh-Hant-TW": "巴斯克語",
      "pt-PT": "Basco",
      "hu-HU": "Basque", // TODO: Add Hungarian translation (Baszk)
    },
  },
  {
    alpha2: "fa",
    label: {
      "en-US": "Persian",
      "de-DE": "Persisch",
      "pt-BR": "Persa",
      "fr-FR": "Persan",
      "zh-Hant-TW": "波斯語",
      "pt-PT": "Persa",
      "hu-HU": "Persian", // TODO: Add Hungarian translation (Perzsa)
    },
  },
  {
    alpha2: "ff",
    label: {
      "en-US": "Fulah",
      "de-DE": "Fulah",
      "pt-BR": "Fulah",
      "fr-FR": "Fulah",
      "zh-Hant-TW": "富拉語",
      "pt-PT": "Fulah",
      "hu-HU": "Fulah", // TODO: Add Hungarian translation (Fula)
    },
  },
  {
    alpha2: "fi",
    label: {
      "en-US": "Finnish",
      "de-DE": "Finnisch",
      "pt-BR": "Finlandês",
      "fr-FR": "Finlandais",
      "zh-Hant-TW": "芬蘭語",
      "pt-PT": "Finlandês",
      "hu-HU": "Finnish", // TODO: Add Hungarian translation (Finn)
    },
  },
  {
    alpha2: "fj",
    label: {
      "en-US": "Fijian",
      "de-DE": "Fidschianisch",
      "pt-BR": "Fijiano",
      "fr-FR": "Fijien",
      "zh-Hant-TW": "斐濟語",
      "pt-PT": "Fijiano",
      "hu-HU": "Fijian", // TODO: Add Hungarian translation (Fidzsi)
    },
  },
  {
    alpha2: "fo",
    label: {
      "en-US": "Faroese",
      "de-DE": "Färöisch",
      "pt-BR": "Feroês",
      "fr-FR": "Féroïen",
      "zh-Hant-TW": "法羅語",
      "pt-PT": "Feroês",
      "hu-HU": "Faroese", // TODO: Add Hungarian translation (Feröeri)
    },
  },
  {
    alpha2: "fr",
    label: {
      "en-US": "French",
      "de-DE": "Französisch",
      "pt-BR": "Francês",
      "fr-FR": "Français",
      "zh-Hant-TW": "法語",
      "pt-PT": "Francês",
      "hu-HU": "French", // TODO: Add Hungarian translation (Francia)
    },
  },
  {
    alpha2: "fy",
    label: {
      "en-US": "Western Frisian",
      "de-DE": "Westfriesisch",
      "pt-BR": "Frísio ocidental",
      "fr-FR": "Frison occidental",
      "zh-Hant-TW": "西弗里斯蘭語",
      "pt-PT": "Frísio ocidental",
      "hu-HU": "Western Frisian", // TODO: Add Hungarian translation (Nyugati fríz)
    },
  },
  {
    alpha2: "ga",
    label: {
      "en-US": "Irish",
      "de-DE": "Irischer",
      "pt-BR": "Irlandês",
      "fr-FR": "Irlandais",
      "zh-Hant-TW": "愛爾蘭語",
      "pt-PT": "Irlandês",
      "hu-HU": "Irish", // TODO: Add Hungarian translation (Ír)
    },
  },
  {
    alpha2: "gd",
    label: {
      "en-US": "Gaelic; Scottish Gaelic",
      "de-DE": "Gälisch; Schottisch Gälisch",
      "pt-BR": "Gaelico escocês; Gaélico escocês",
      "fr-FR": "Gaélique écossais; Gaélique écossais",
      "zh-Hant-TW": "蓋爾語；蘇格蘭蓋爾語",
      "pt-PT": "Gaélico escocês; Gaélico escocês",
      "hu-HU": "Gaelic; Scottish Gaelic", // TODO: Add Hungarian translation (Gael; Skót gael)
    },
  },
  {
    alpha2: "gl",
    label: {
      "en-US": "Galician",
      "de-DE": "Galicisch",
      "pt-BR": "Galego",
      "fr-FR": "Galicien",
      "zh-Hant-TW": "加利西亞語",
      "pt-PT": "Galego",
      "hu-HU": "Galician", // TODO: Add Hungarian translation (Galíciai)
    },
  },
  {
    alpha2: "gn",
    label: {
      "en-US": "Guarani",
      "de-DE": "Guarani",
      "pt-BR": "Guarani",
      "fr-FR": "Guarani",
      "zh-Hant-TW": "瓜拉尼語",
      "pt-PT": "Guarani",
      "hu-HU": "Guarani", // TODO: Add Hungarian translation (Guarani)
    },
  },
  {
    alpha2: "gu",
    label: {
      "en-US": "Gujarati",
      "de-DE": "Gujarati",
      "pt-BR": "Gujarati",
      "fr-FR": "Gujarati",
      "zh-Hant-TW": "古吉拉特語",
      "pt-PT": "Gujarati",
      "hu-HU": "Gujarati", // TODO: Add Hungarian translation (Gudzsaráti)
    },
  },
  {
    alpha2: "gv",
    label: {
      "en-US": "Manx",
      "de-DE": "Manx",
      "pt-BR": "Manx",
      "fr-FR": "Manx",
      "zh-Hant-TW": "曼島語",
      "pt-PT": "Manx",
      "hu-HU": "Manx", // TODO: Add Hungarian translation (Manx)
    },
  },
  {
    alpha2: "ha",
    label: {
      "en-US": "Hausa",
      "de-DE": "Hausa",
      "pt-BR": "Hausa",
      "fr-FR": "Hausa",
      "zh-Hant-TW": "豪薩語",
      "pt-PT": "Hausa",
      "hu-HU": "Hausa", // TODO: Add Hungarian translation (Hausza)
    },
  },
  {
    alpha2: "he",
    label: {
      "en-US": "Hebrew",
      "de-DE": "Hebräisch",
      "pt-BR": "Hebraico",
      "fr-FR": "Hébreu",
      "zh-Hant-TW": "希伯來語",
      "pt-PT": "Hebraico",
      "hu-HU": "Hebrew", // TODO: Add Hungarian translation (Héber)
    },
  },
  {
    alpha2: "hi",
    label: {
      "en-US": "Hindi",
      "de-DE": "Hindi",
      "pt-BR": "Hindi",
      "fr-FR": "Hindi",
      "zh-Hant-TW": "印地語",
      "pt-PT": "Hindi",
      "hu-HU": "Hindi", // TODO: Add Hungarian translation (Hindi)
    },
  },
  {
    alpha2: "ho",
    label: {
      "en-US": "Hiri Motu",
      "de-DE": "Hiri Motu",
      "pt-BR": "Hiri Motu",
      "fr-FR": "Hiri Motu",
      "zh-Hant-TW": "希里莫圖語",
      "pt-PT": "Hiri Motu",
      "hu-HU": "Hiri Motu", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "hr",
    label: {
      "en-US": "Croatian",
      "de-DE": "Kroatisch",
      "pt-BR": "Croata",
      "fr-FR": "Croate",
      "zh-Hant-TW": "克羅埃西亞語",
      "pt-PT": "Croata",
      "hu-HU": "Croatian", // TODO: Add Hungarian translation (Horvát)
    },
  },
  {
    alpha2: "ht",
    label: {
      "en-US": "Haitian; Haitian Creole",
      "de-DE": "Haitian; Haitian Creole",
      "pt-BR": "Haitiano; Crioulo haitiano",
      "fr-FR": "Haïtien; Créole haïtien",
      "zh-Hant-TW": "海地語；海地克里奧爾語",
      "pt-PT": "Haitiano; Crioulo haitiano",
      "hu-HU": "Haitian; Haitian Creole", // TODO: Add Hungarian translation (Haiti; Haiti kreol)
    },
  },
  {
    alpha2: "hu",
    label: {
      "en-US": "Hungarian",
      "de-DE": "Ungarisch",
      "pt-BR": "Húngaro",
      "fr-FR": "Hongrois",
      "zh-Hant-TW": "匈牙利語",
      "pt-PT": "Húngaro",
      "hu-HU": "Magyar", // Hungarian for Hungarian
    },
  },
  {
    alpha2: "hy",
    label: {
      "en-US": "Armenian",
      "de-DE": "Armenisch",
      "pt-BR": "Armênio",
      "fr-FR": "Arménien",
      "zh-Hant-TW": "亞美尼亞語",
      "pt-PT": "Armênio",
      "hu-HU": "Armenian", // TODO: Add Hungarian translation (Örmény)
    },
  },
  {
    alpha2: "hz",
    label: {
      "en-US": "Herero",
      "de-DE": "Herero",
      "pt-BR": "Herero",
      "fr-FR": "Herero",
      "zh-Hant-TW": "赫雷羅語",
      "pt-PT": "Herero",
      "hu-HU": "Herero", // TODO: Add Hungarian translation
    },
  },
  {
    alpha2: "ia",
    label: {
      "en-US": "Interlingua (International Auxiliary Language Association)",
      "de-DE": "Interlingua (Internationaler Hilfssprachverband)",
      "pt-BR": "Interlingua (Associação Internacional de Línguas Auxiliares)",
      "fr-FR": "Interlingua (Association internationale des langues auxiliaires)",
      "zh-Hant-TW": "國際語（國際輔助語言協會）",
      "pt-PT": "Interlingua (Associação Internacional de Línguas Auxiliares)",
      "hu-HU": "Interlingua (International Auxiliary Language Association)", // TODO: Add Hungarian translation (Interlingua)
    },
  },
  {
    alpha2: "id",
    label: {
      "en-US": "Indonesian",
      "de-DE": "Indonesisch",
      "pt-BR": "Indonésio",
      "fr-FR": "Indonésien",
      "zh-Hant-TW": "印尼語",
      "pt-PT": "Indonésio",
      "hu-HU": "Indonesian", // TODO: Add Hungarian translation (Indonéz)
    },
  },
  {
    alpha2: "ie",
    label: {
      "en-US": "Interlingue; Occidental",
      "de-DE": "Interlingue; Occidental",
      "pt-BR": "Interlingue; Ocidental",
      "fr-FR": "Interlingue; Ocidental",
      "zh-Hant-TW": "國際語；西方語",
      "pt-PT": "Interlingue; Ocidental",
      "hu-HU": "Interlingue; Occidental", // TODO: Add Hungarian translation (Interlingue; Okcidentál)
    },
  },
  {
    alpha2: "ig",
    label: {
      "en-US": "Igbo",
      "de-DE": "Igbo",
      "pt-BR": "Igbo",
      "fr-FR": "Igbo",
      "zh-Hant-TW": "伊博語",
      "pt-PT": "Igbo",
      "hu-HU": "Igbo", // TODO: Add Hungarian translation (Igbo)
    },
  },
  {
    alpha2: "ii",
    label: {
      "en-US": "Sichuan Yi; Nuosu",
      "de-DE": "Sichuan Yi; Nuosu",
      "pt-BR": "Sichuan Yi; Nuosu",
      "fr-FR": "Sichuan Yi; Nuosu",
      "zh-Hant-TW": "彝語；諾蘇語",
      "pt-PT": "Sichuan Yi; Nuosu",
      "hu-HU": "Sichuan Yi; Nuosu", // TODO: Add Hungarian translation (Szecsuáni ji; Nuoszu)
    },
  },
  {
    alpha2: "ik",
    label: {
      "en-US": "Inupiaq",
      "de-DE": "Inupiaq",
      "pt-BR": "Inupiaq",
      "fr-FR": "Inupiaq",
      "zh-Hant-TW": "依努皮克語",
      "pt-PT": "Inupiaq",
      "hu-HU": "Inupiaq", // TODO: Add Hungarian translation (Inupiak)
    },
  },
  {
    alpha2: "io",
    label: {
      "en-US": "Ido",
      "de-DE": "Ido",
      "pt-BR": "Ido",
      "fr-FR": "Ido",
      "zh-Hant-TW": "伊多語",
      "pt-PT": "Ido",
      "hu-HU": "Ido", // TODO: Add Hungarian translation (Idó)
    },
  },
  {
    alpha2: "is",
    label: {
      "en-US": "Icelandic",
      "de-DE": "Isländisch",
      "pt-BR": "Islandês",
      "fr-FR": "Islandais",
      "zh-Hant-TW": "冰島語",
      "pt-PT": "Islandês",
      "hu-HU": "Icelandic", // TODO: Add Hungarian translation (Izlandi)
    },
  },
  {
    alpha2: "it",
    label: {
      "en-US": "Italian",
      "de-DE": "Italienisch",
      "pt-BR": "Italiano",
      "fr-FR": "Italien",
      "zh-Hant-TW": "義大利語",
      "pt-PT": "Italiano",
      "hu-HU": "Italian", // TODO: Add Hungarian translation (Olasz)
    },
  },
  {
    alpha2: "iu",
    label: {
      "en-US": "Inuktitut",
      "de-DE": "Inuktitut",
      "pt-BR": "Inuktitut",
      "fr-FR": "Inuktitut",
      "zh-Hant-TW": "因紐特語",
      "pt-PT": "Inuktitut",
      "hu-HU": "Inuktitut", // TODO: Add Hungarian translation (Inuktitut)
    },
  },
  {
    alpha2: "ja",
    label: {
      "en-US": "Japanese",
      "de-DE": "Japanisch",
      "pt-BR": "Japonês",
      "fr-FR": "Japonais",
      "zh-Hant-TW": "日語",
      "pt-PT": "Japonês",
      "hu-HU": "Japanese", // TODO: Add Hungarian translation (Japán)
    },
  },
  {
    alpha2: "jv",
    label: {
      "en-US": "Javanese",
      "de-DE": "Javanisch",
      "pt-BR": "Javonês",
      "fr-FR": "Javanais",
      "zh-Hant-TW": "爪哇語",
      "pt-PT": "Javonês",
      "hu-HU": "Javanese", // TODO: Add Hungarian translation (Jávai)
    },
  },
  {
    alpha2: "ka",
    label: {
      "en-US": "Georgian",
      "de-DE": "Georgisch",
      "pt-BR": "Georgiano",
      "fr-FR": "Géorgien",
      "zh-Hant-TW": "喬治亞語",
      "pt-PT": "Georgiano",
      "hu-HU": "Georgian", // TODO: Add Hungarian translation (Grúz)
    },
  },
  {
    alpha2: "kg",
    label: {
      "en-US": "Kongo",
      "de-DE": "Kongo",
      "pt-BR": "Kongo",
      "fr-FR": "Kongo",
      "zh-Hant-TW": "剛果語",
      "pt-PT": "Kongo",
      "hu-HU": "Kongo", // TODO: Add Hungarian translation (Kongói)
    },
  },
  {
    alpha2: "ki",
    label: {
      "en-US": "Kikuyu; Gikuyu",
      "de-DE": "Kikuyu; Gikuyu",
      "pt-BR": "Kikuyu; Gikuyu",
      "fr-FR": "Kikuyu; Gikuyu",
      "zh-Hant-TW": "吉庫尤語",
      "pt-PT": "Kikuyu; Gikuyu",
      "hu-HU": "Kikuyu; Gikuyu", // TODO: Add Hungarian translation (Kikuju)
    },
  },
  {
    alpha2: "kj",
    label: {
      "en-US": "Kuanyama; Kwanyama",
      "de-DE": "Kuanyama; Kwanyama",
      "pt-BR": "Kuanyama; Kwanyama",
      "fr-FR": "Kuanyama; Kwanyama",
      "zh-Hant-TW": "寬亞瑪語；寬亞瑪語",
      "pt-PT": "Kuanyama; Kwanyama",
      "hu-HU": "Kuanyama; Kwanyama", // TODO: Add Hungarian translation (Kuanyama)
    },
  },
  {
    alpha2: "kk",
    label: {
      "en-US": "Kazakh",
      "de-DE": "Kasachisch",
      "pt-BR": "Cazaque",
      "fr-FR": "Kazakh",
      "zh-Hant-TW": "哈薩克語",
      "pt-PT": "Cazaque",
      "hu-HU": "Kazakh", // TODO: Add Hungarian translation (Kazah)
    },
  },
  {
    alpha2: "kl",
    label: {
      "en-US": "Kalaallisut; Greenlandic",
      "de-DE": "Kalaallisut; Grönländisch",
      "pt-BR": "Kalaallisut; Groelândico",
      "fr-FR": "Kalaallisut; Groenlandais",
      "zh-Hant-TW": "格陵蘭語",
      "pt-PT": "Kalaallisut; Greenlandic",
      "hu-HU": "Kalaallisut; Greenlandic", // TODO: Add Hungarian translation (Kalaallisut; Grönlandi)
    },
  },
  {
    alpha2: "km",
    label: {
      "en-US": "Central Khmer",
      "de-DE": "Zentral-Khmer",
      "pt-BR": "Khmer central",
      "fr-FR": "Khmer central",
      "zh-Hant-TW": "中央高棉語",
      "pt-PT": "Khmer central",
      "hu-HU": "Central Khmer", // TODO: Add Hungarian translation (Közép-khmer)
    },
  },
  {
    alpha2: "kn",
    label: {
      "en-US": "Kannada",
      "de-DE": "Kannada",
      "pt-BR": "Canarês",
      "fr-FR": "Kannada",
      "zh-Hant-TW": "卡納達語",
      "pt-PT": "Kannada",
      "hu-HU": "Kannada", // TODO: Add Hungarian translation (Kannada)
    },
  },
  {
    alpha2: "ko",
    label: {
      "en-US": "Korean",
      "de-DE": "Koreanisch",
      "pt-BR": "Coreano",
      "fr-FR": "Coréen",
      "zh-Hant-TW": "韓語",
      "pt-PT": "Coreano",
      "hu-HU": "Korean", // TODO: Add Hungarian translation (Koreai)
    },
  },
  {
    alpha2: "kr",
    label: {
      "en-US": "Kanuri",
      "de-DE": "Kanuri",
      "pt-BR": "Kanuri",
      "fr-FR": "Kanuri",
      "zh-Hant-TW": "卡努里語",
      "pt-PT": "Kanuri",
      "hu-HU": "Kanuri", // TODO: Add Hungarian translation (Kanuri)
    },
  },
  {
    alpha2: "ks",
    label: {
      "en-US": "Kashmiri",
      "de-DE": "Kashmiri",
      "pt-BR": "Kashmiri",
      "fr-FR": "Kashmiri",
      "zh-Hant-TW": "卡什米爾語",
      "pt-PT": "Kashmiri",
      "hu-HU": "Kashmiri", // TODO: Add Hungarian translation (Kasmíri)
    },
  },
  {
    alpha2: "ku",
    label: {
      "en-US": "Kurdish",
      "de-DE": "Kurdisch",
      "pt-BR": "Curdo",
      "fr-FR": "Kurde",
      "zh-Hant-TW": "庫爾德語",
      "pt-PT": "Kurdish",
      "hu-HU": "Kurdish", // TODO: Add Hungarian translation (Kurd)
    },
  },
  {
    alpha2: "kv",
    label: {
      "en-US": "Komi",
      "de-DE": "Komi",
      "pt-BR": "Komi",
      "fr-FR": "Komi",
      "zh-Hant-TW": "科米語",
      "pt-PT": "Komi",
      "hu-HU": "Komi", // TODO: Add Hungarian translation (Komi)
    },
  },
  {
    alpha2: "kw",
    label: {
      "en-US": "Cornish",
      "de-DE": "Kornisch",
      "pt-BR": "Cornualles",
      "fr-FR": "Cornouaillois",
      "zh-Hant-TW": "康瓦爾語",
      "pt-PT": "Cornualles",
      "hu-HU": "Cornish", // TODO: Add Hungarian translation (Korni)
    },
  },
  {
    alpha2: "ky",
    label: {
      "en-US": "Kirghiz; Kyrgyz",
      "de-DE": "Kirgisisch; Kirgisischer",
      "pt-BR": "Kirguiz; Quirguiz",
      "fr-FR": "Kirghiz; Kyrgyz",
      "zh-Hant-TW": "吉爾吉斯語",
      "pt-PT": "Kirghiz; Kyrgyz",
      "hu-HU": "Kirghiz; Kyrgyz", // TODO: Add Hungarian translation (Kirgiz)
    },
  },
  {
    alpha2: "la",
    label: {
      "en-US": "Latin",
      "de-DE": "Lateinisch",
      "pt-BR": "Latim",
      "fr-FR": "Latin",
      "zh-Hant-TW": "拉丁語",
      "pt-PT": "Latim",
      "hu-HU": "Latin", // TODO: Add Hungarian translation (Latin)
    },
  },
  {
    alpha2: "lb",
    label: {
      "en-US": "Luxembourgish; Letzeburgesch",
      "de-DE": "Luxemburgisch; Letzeburgesch",
      "pt-BR": "Luxemburguês; Luxemburguês",
      "fr-FR": "Luxembourgeois; Letzeburgesch",
      "zh-Hant-TW": "盧森堡語",
      "pt-PT": "Luxembourgish; Letzeburgesch",
      "hu-HU": "Luxembourgish; Letzeburgesch", // TODO: Add Hungarian translation (Luxemburgi; Lëtzebuergesch)
    },
  },
  {
    alpha2: "lg",
    label: {
      "en-US": "Ganda",
      "de-DE": "Ganda",
      "pt-BR": "Ganda",
      "fr-FR": "Ganda",
      "zh-Hant-TW": "干達語",
      "pt-PT": "Ganda",
      "hu-HU": "Ganda", // TODO: Add Hungarian translation (Ganda)
    },
  },
  {
    alpha2: "li",
    label: {
      "en-US": "Limburgan; Limburger; Limburgish",
      "de-DE": "Limburgisch; Limburger; Limburgish",
      "pt-BR": "Limburguês; Limburguês; Limburguês",
      "fr-FR": "Limbourgeois; Limbourgeois; Limbourgeois",
      "zh-Hant-TW": "林堡語",
      "pt-PT": "Limburgan; Limburger; Limburgish",
      "hu-HU": "Limburgan; Limburger; Limburgish", // TODO: Add Hungarian translation (Limburgi)
    },
  },
  {
    alpha2: "ln",
    label: {
      "en-US": "Lingala",
      "de-DE": "Lingala",
      "pt-BR": "Lingala",
      "fr-FR": "Lingala",
      "zh-Hant-TW": "林加拉語",
      "pt-PT": "Lingala",
      "hu-HU": "Lingala", // TODO: Add Hungarian translation (Lingala)
    },
  },
  {
    alpha2: "lo",
    label: {
      "en-US": "Lao",
      "de-DE": "Lao",
      "pt-BR": "Lao",
      "fr-FR": "Lao",
      "zh-Hant-TW": "寮語",
      "pt-PT": "Lao",
      "hu-HU": "Lao", // TODO: Add Hungarian translation (Lao)
    },
  },
  {
    alpha2: "lt",
    label: {
      "en-US": "Lithuanian",
      "de-DE": "Litauisch",
      "pt-BR": "Lituano",
      "fr-FR": "Lituanien",
      "zh-Hant-TW": "立陶宛語",
      "pt-PT": "Lituaniano",
      "hu-HU": "Lithuanian", // TODO: Add Hungarian translation (Litván)
    },
  },
  {
    alpha2: "lu",
    label: {
      "en-US": "Luba-Katanga",
      "de-DE": "Luba-Katanga",
      "pt-BR": "Luba-Katanga",
      "fr-FR": "Luba-Katanga",
      "zh-Hant-TW": "盧巴-加丹加語",
      "pt-PT": "Luba-Katanga",
      "hu-HU": "Luba-Katanga", // TODO: Add Hungarian translation (Luba-Katanga)
    },
  },
  {
    alpha2: "lv",
    label: {
      "en-US": "Latvian",
      "de-DE": "Lettisch",
      "pt-BR": "Letão",
      "fr-FR": "Letton",
      "zh-Hant-TW": "拉脫維亞語",
      "pt-PT": "Letão",
      "hu-HU": "Latvian", // TODO: Add Hungarian translation (Lett)
    },
  },
  {
    alpha2: "mg",
    label: {
      "en-US": "Malagasy",
      "de-DE": "Malagasy",
      "pt-BR": "Malagasy",
      "fr-FR": "Malagasy",
      "zh-Hant-TW": "馬拉加斯語",
      "pt-PT": "Malagasy",
      "hu-HU": "Malagasy", // TODO: Add Hungarian translation (Malgas)
    },
  },
  {
    alpha2: "mh",
    label: {
      "en-US": "Marshallese",
      "de-DE": "Marshallese",
      "pt-BR": "Marshallês",
      "fr-FR": "Marshallese",
      "zh-Hant-TW": "馬紹爾語",
      "pt-PT": "Marshallese",
      "hu-HU": "Marshallese", // TODO: Add Hungarian translation (Marshalli)
    },
  },
  {
    alpha2: "mi",
    label: {
      "en-US": "Maori",
      "de-DE": "Maori",
      "pt-BR": "Maori",
      "fr-FR": "Maori",
      "zh-Hant-TW": "毛利語",
      "pt-PT": "Maori",
      "hu-HU": "Maori", // TODO: Add Hungarian translation (Maori)
    },
  },
  {
    alpha2: "mk",
    label: {
      "en-US": "Macedonian",
      "de-DE": "Mazedonisch",
      "pt-BR": "Macedônio",
      "fr-FR": "Macédonien",
      "zh-Hant-TW": "馬其頓語",
      "pt-PT": "Macedónio",
      "hu-HU": "Macedonian", // TODO: Add Hungarian translation (Macedón)
    },
  },
  {
    alpha2: "ml",
    label: {
      "en-US": "Malayalam",
      "de-DE": "Malayalam",
      "pt-BR": "Malayalam",
      "fr-FR": "Malayalam",
      "zh-Hant-TW": "馬拉雅拉姆語",
      "pt-PT": "Malayalam",
      "hu-HU": "Malayalam", // TODO: Add Hungarian translation (Malajálam)
    },
  },
  {
    alpha2: "mn",
    label: {
      "en-US": "Mongolian",
      "de-DE": "Mongolisch",
      "pt-BR": "Mongol",
      "fr-FR": "Mongol",
      "zh-Hant-TW": "蒙古語",
      "pt-PT": "Mongol",
      "hu-HU": "Mongolian", // TODO: Add Hungarian translation (Mongol)
    },
  },
  {
    alpha2: "mr",
    label: {
      "en-US": "Marathi",
      "de-DE": "Marathi",
      "pt-BR": "Marati",
      "fr-FR": "Marathi",
      "zh-Hant-TW": "馬拉地語",
      "pt-PT": "Marathi",
      "hu-HU": "Marathi", // TODO: Add Hungarian translation (Maráthi)
    },
  },
  {
    alpha2: "ms",
    label: {
      "en-US": "Malay",
      "de-DE": "Malay",
      "pt-BR": "Malaio",
      "fr-FR": "Malais",
      "zh-Hant-TW": "馬來語",
      "pt-PT": "Malay",
      "hu-HU": "Malay", // TODO: Add Hungarian translation (Maláj)
    },
  },
  {
    alpha2: "mt",
    label: {
      "en-US": "Maltese",
      "de-DE": "Maltesisch",
      "pt-BR": "Maltês",
      "fr-FR": "Maltès",
      "zh-Hant-TW": "馬爾他語",
      "pt-PT": "Maltês",
      "hu-HU": "Maltese", // TODO: Add Hungarian translation (Máltai)
    },
  },
  {
    alpha2: "my",
    label: {
      "en-US": "Burmese",
      "de-DE": "Birmanisch",
      "pt-BR": "Birmanês",
      "fr-FR": "Birman",
      "zh-Hant-TW": "緬甸語",
      "pt-PT": "Birmanês",
      "hu-HU": "Burmese", // TODO: Add Hungarian translation (Burmai)
    },
  },
  {
    alpha2: "na",
    label: {
      "en-US": "Nauru",
      "de-DE": "Nauru",
      "pt-BR": "Nauru",
      "fr-FR": "Nauru",
      "zh-Hant-TW": "諾魯語",
      "pt-PT": "Nauru",
      "hu-HU": "Nauru", // TODO: Add Hungarian translation (Naurui)
    },
  },
  {
    alpha2: "nb",
    label: {
      "en-US": "Bokmål, Norwegian; Norwegian Bokmål",
      "de-DE": "Bokmål, Norwegisch; Norwegische Bokmål",
      "pt-BR": "Bokmål, Norueguês; Bokmål Norueguês",
      "fr-FR": "Bokmål, Norvégien; Bokmål Norvégien",
      "zh-Hant-TW": "巴克摩挪威語；挪威巴克摩語",
      "pt-PT": "Bokmål, Norueguês; Bokmål Norueguês",
      "hu-HU": "Bokmål, Norwegian; Norwegian Bokmål", // TODO: Add Hungarian translation (Norvég bokmål)
    },
  },
  {
    alpha2: "nd",
    label: {
      "en-US": "Ndebele, North; North Ndebele",
      "de-DE": "Ndebele, Nord; Nord Ndebele",
      "pt-BR": "Ndebele, Norte; Norte Ndebele",
      "fr-FR": "Ndebele, Nord; Nord Ndebele",
      "zh-Hant-TW": "北恩德貝萊語；北恩德貝萊語",
      "pt-PT": "Ndebele, Norte; Norte Ndebele",
      "hu-HU": "Ndebele, North; North Ndebele", // TODO: Add Hungarian translation (Északi ndebele)
    },
  },
  {
    alpha2: "ne",
    label: {
      "en-US": "Nepali",
      "de-DE": "Nepali",
      "pt-BR": "Nepali",
      "fr-FR": "Népalais",
      "zh-Hant-TW": "尼泊爾語",
      "pt-PT": "Nepali",
      "hu-HU": "Nepali", // TODO: Add Hungarian translation (Nepáli)
    },
  },
  {
    alpha2: "ng",
    label: {
      "en-US": "Ndonga",
      "de-DE": "Ndonga",
      "pt-BR": "Ndonga",
      "fr-FR": "Ndonga",
      "zh-Hant-TW": "恩敦加語",
      "pt-PT": "Ndonga",
      "hu-HU": "Ndonga", // TODO: Add Hungarian translation (Ndonga)
    },
  },
  {
    alpha2: "nl",
    label: {
      "en-US": "Dutch; Flemish",
      "de-DE": "Holländisch; Flämisch",
      "pt-BR": "Holandês; Flamengo",
      "fr-FR": "Néerlandais; Flamand",
      "zh-Hant-TW": "荷蘭語；法蘭德斯語",
      "pt-PT": "Holandês; Flamengo",
      "hu-HU": "Dutch; Flemish", // TODO: Add Hungarian translation (Holland; Flamand)
    },
  },
  {
    alpha2: "nn",
    label: {
      "en-US": "Norwegian Nynorsk; Nynorsk, Norwegian",
      "de-DE": "Norwegische Nynorsk; Nynorsk, Norwegisch",
      "pt-BR": "Norwegian Nynorsk; Nynorsk, Norueguês",
      "fr-FR": "Norvégien Nynorsk; Nynorsk, Norvégien",
      "zh-Hant-TW": "挪威尼諾斯克語；尼諾斯克語，挪威語",
      "pt-PT": "Norwegian Nynorsk; Nynorsk, Norwegian",
      "hu-HU": "Norwegian Nynorsk; Nynorsk, Norwegian", // TODO: Add Hungarian translation (Norvég nynorsk)
    },
  },
  {
    alpha2: "no",
    label: {
      "en-US": "Norwegian",
      "de-DE": "Norwegisch",
      "pt-BR": "Norueguês",
      "fr-FR": "Norvégien",
      "zh-Hant-TW": "挪威語",
      "pt-PT": "Norueguês",
      "hu-HU": "Norwegian", // TODO: Add Hungarian translation (Norvég)
    },
  },
  {
    alpha2: "nr",
    label: {
      "en-US": "Ndebele, South; South Ndebele",
      "de-DE": "Ndebele, Süd; Süd Ndebele",
      "pt-BR": "Ndebele, Sul; Sul Ndebele",
      "fr-FR": "Ndebele, Sud; Sud Ndebele",
      "zh-Hant-TW": "南恩德貝萊語",
      "pt-PT": "Ndebele, Sul; Sul Ndebele",
      "hu-HU": "Ndebele, South; South Ndebele", // TODO: Add Hungarian translation (Déli ndebele)
    },
  },
  {
    alpha2: "nv",
    label: {
      "en-US": "Navajo; Navaho",
      "de-DE": "Navajo; Navaho",
      "pt-BR": "Navajo; Navaho",
      "fr-FR": "Navajo; Navaho",
      "zh-Hant-TW": "納瓦荷語",
      "pt-PT": "Navajo; Navaho",
      "hu-HU": "Navajo; Navaho", // TODO: Add Hungarian translation (Navahó)
    },
  },
  {
    alpha2: "ny",
    label: {
      "en-US": "Chichewa; Chewa; Nyanja",
      "de-DE": "Chichewa; Chewa; Nyanja",
      "pt-BR": "Chichewa; Chewa; Nyanja",
      "fr-FR": "Chichewa; Chewa; Nyanja",
      "zh-Hant-TW": "齊切瓦語；契瓦語；尼揚加語",
      "pt-PT": "Chichewa; Chewa; Nyanja",
      "hu-HU": "Chichewa; Chewa; Nyanja", // TODO: Add Hungarian translation (Csicseva; Cseva; Njandzsa)
    },
  },
  {
    alpha2: "oc",
    label: {
      "en-US": "Occitan (post 1500)",
      "de-DE": "Occitan (post 1500)",
      "pt-BR": "Occitano (pós 1500)",
      "fr-FR": "Occitan (post 1500)",
      "zh-Hant-TW": "奧克語（1500 年後）",
      "pt-PT": "Occitano (pós 1500)",
      "hu-HU": "Occitan (post 1500)", // TODO: Add Hungarian translation (Okcitán (1500 után))
    },
  },
  {
    alpha2: "oj",
    label: {
      "en-US": "Ojibwa",
      "de-DE": "Ojibwa",
      "pt-BR": "Ojibwa",
      "fr-FR": "Ojibwa",
      "zh-Hant-TW": "奧吉布瓦語",
      "pt-PT": "Ojibwa",
      "hu-HU": "Ojibwa", // TODO: Add Hungarian translation (Odzsibva)
    },
  },
  {
    alpha2: "om",
    label: {
      "en-US": "Oromo",
      "de-DE": "Oromo",
      "pt-BR": "Oromo",
      "fr-FR": "Oromo",
      "zh-Hant-TW": "奧羅莫語",
      "pt-PT": "Oromo",
      "hu-HU": "Oromo", // TODO: Add Hungarian translation (Oromo)
    },
  },
  {
    alpha2: "or",
    label: {
      "en-US": "Oriya",
      "de-DE": "Oriya",
      "pt-BR": "Oriya",
      "fr-FR": "Oriya",
      "zh-Hant-TW": "奧里亞語",
      "pt-PT": "Oriya",
      "hu-HU": "Oriya", // TODO: Add Hungarian translation (Orija)
    },
  },
  {
    alpha2: "os",
    label: {
      "en-US": "Ossetian; Ossetic",
      "de-DE": "Ossetian; Ossetic",
      "pt-BR": "Ossetiano; Ossético",
      "fr-FR": "Ossète; Ossète",
      "zh-Hant-TW": "奧塞提亞語",
      "pt-PT": "Ossetian; Ossetic",
      "hu-HU": "Ossetian; Ossetic", // TODO: Add Hungarian translation (Oszét)
    },
  },
  {
    alpha2: "pa",
    label: {
      "en-US": "Panjabi; Punjabi",
      "de-DE": "Panjabi; Punjabi",
      "pt-BR": "Panjabi; Punjabi",
      "fr-FR": "Panjabi; Punjabi",
      "zh-Hant-TW": "旁遮普語",
      "pt-PT": "Panjabi; Punjabi",
      "hu-HU": "Panjabi; Punjabi", // TODO: Add Hungarian translation (Pandzsábi)
    },
  },
  {
    alpha2: "pi",
    label: {
      "en-US": "Pali",
      "de-DE": "Pali",
      "pt-BR": "Pali",
      "fr-FR": "Pali",
      "zh-Hant-TW": "巴利語",
      "pt-PT": "Pali",
      "hu-HU": "Pali", // TODO: Add Hungarian translation (Páli)
    },
  },
  {
    alpha2: "pl",
    label: {
      "en-US": "Polish",
      "de-DE": "Polnisch",
      "pt-BR": "Polonês",
      "fr-FR": "Polonais",
      "zh-Hant-TW": "波蘭語",
      "pt-PT": "Polonês",
      "hu-HU": "Polish", // TODO: Add Hungarian translation (Lengyel)
    },
  },
  {
    alpha2: "ps",
    label: {
      "en-US": "Pushto; Pashto",
      "de-DE": "Pushto; Pashto",
      "pt-BR": "Pushto; Pashto",
      "fr-FR": "Poushto; Pashto",
      "zh-Hant-TW": "普什圖語",
      "pt-PT": "Pushto; Pashto",
      "hu-HU": "Pushto; Pashto", // TODO: Add Hungarian translation (Pastu)
    },
  },
  {
    alpha2: "pt",
    label: {
      "en-US": "Portuguese",
      "de-DE": "Portugiesisch",
      "pt-BR": "Português",
      "fr-FR": "Portugais",
      "zh-Hant-TW": "葡萄牙語",
      "pt-PT": "Português",
      "hu-HU": "Portuguese", // TODO: Add Hungarian translation (Portugál)
    },
  },
  {
    alpha2: "qu",
    label: {
      "en-US": "Quechua",
      "de-DE": "Quechua",
      "pt-BR": "Quechua",
      "fr-FR": "Quechua",
      "zh-Hant-TW": "蓋丘亞語",
      "pt-PT": "Quechua",
      "hu-HU": "Quechua", // TODO: Add Hungarian translation (Kecsua)
    },
  },
  {
    alpha2: "rm",
    label: {
      "en-US": "Romansh",
      "de-DE": "Rämisch",
      "pt-BR": "Romeno", // Note: This seems to be 'Romanian' in pt-BR, Romansh is 'Romanche'
      "fr-FR": "Romansh",
      "zh-Hant-TW": "羅曼什語",
      "pt-PT": "Romansh",
      "hu-HU": "Romansh", // TODO: Add Hungarian translation (Rétoromán)
    },
  },
  {
    alpha2: "rn",
    label: {
      "en-US": "Rundi",
      "de-DE": "Rundi",
      "pt-BR": "Rundi",
      "fr-FR": "Rundi",
      "zh-Hant-TW": "盧安達語", // Note: This is Kinyarwanda, Rundi is Kirundi
      "pt-PT": "Rundi",
      "hu-HU": "Rundi", // TODO: Add Hungarian translation (Rundi)
    },
  },
  {
    alpha2: "ro",
    label: {
      "en-US": "Romanian; Moldavian; Moldovan",
      "de-DE": "Rumänisch; Moldauisch; Moldauisch",
      "pt-BR": "Romeno; Moldavo; Moldavo",
      "fr-FR": "Roumain; Moldave; Moldave",
      "zh-Hant-TW": "羅馬尼亞語；摩爾多瓦語",
      "pt-PT": "Romeno; Moldavo; Moldavo",
      "hu-HU": "Romanian; Moldavian; Moldovan", // TODO: Add Hungarian translation (Román; Moldáv)
    },
  },
  {
    alpha2: "ru",
    label: {
      "en-US": "Russian",
      "de-DE": "Russisch",
      "pt-BR": "Russo",
      "fr-FR": "Russe",
      "zh-Hant-TW": "俄語",
      "pt-PT": "Russo",
      "hu-HU": "Russian", // TODO: Add Hungarian translation (Orosz)
    },
  },
  {
    alpha2: "rw",
    label: {
      "en-US": "Kinyarwanda",
      "de-DE": "Kinyarwanda",
      "pt-BR": "Kinyarwanda",
      "fr-FR": "Kinyarwanda",
      "zh-Hant-TW": "盧安達語",
      "pt-PT": "Kinyarwanda",
      "hu-HU": "Kinyarwanda", // TODO: Add Hungarian translation (Kinyarwanda)
    },
  },
  {
    alpha2: "sa",
    label: {
      "en-US": "Sanskrit",
      "de-DE": "Sanskrit",
      "pt-BR": "Sânscrito",
      "fr-FR": "Sanskrit",
      "zh-Hant-TW": "梵語",
      "pt-PT": "Sanskrit",
      "hu-HU": "Sanskrit", // TODO: Add Hungarian translation (Szanszkrit)
    },
  },
  {
    alpha2: "sc",
    label: {
      "en-US": "Sardinian",
      "de-DE": "Sardisch",
      "pt-BR": "Sardo",
      "fr-FR": "Sardien",
      "zh-Hant-TW": "薩丁尼亞語",
      "pt-PT": "Sardo",
      "hu-HU": "Sardinian", // TODO: Add Hungarian translation (Szárd)
    },
  },
  {
    alpha2: "sd",
    label: {
      "en-US": "Sindhi",
      "de-DE": "Sindhi",
      "pt-BR": "Sindhi",
      "fr-FR": "Sindhi",
      "zh-Hant-TW": "信德語",
      "pt-PT": "Sindhi",
      "hu-HU": "Sindhi", // TODO: Add Hungarian translation (Szindhi)
    },
  },
  {
    alpha2: "se",
    label: {
      "en-US": "Northern Sami",
      "de-DE": "Nordischer Sami",
      "pt-BR": "Sami do Norte",
      "fr-FR": "Sami du Nord",
      "zh-Hant-TW": "北薩米語",
      "pt-PT": "Sami do Norte",
      "hu-HU": "Northern Sami", // TODO: Add Hungarian translation (Északi számi)
    },
  },
  {
    alpha2: "sg",
    label: {
      "en-US": "Sango",
      "de-DE": "Sango",
      "pt-BR": "Sango",
      "fr-FR": "Sango",
      "zh-Hant-TW": "桑戈語",
      "pt-PT": "Sango",
      "hu-HU": "Sango", // TODO: Add Hungarian translation (Szangó)
    },
  },
  {
    alpha2: "si",
    label: {
      "en-US": "Sinhala; Sinhalese",
      "de-DE": "Sinhala; Sinhalese",
      "pt-BR": "Sinhala; Sinhalese",
      "fr-FR": "Sinhala; Sinhalese",
      "zh-Hant-TW": "僧伽羅語",
      "pt-PT": "Sinhala; Sinhalese",
      "hu-HU": "Sinhala; Sinhalese", // TODO: Add Hungarian translation (Szingaléz)
    },
  },
  {
    alpha2: "sk",
    label: {
      "en-US": "Slovak",
      "de-DE": "Slowakisch",
      "pt-BR": "Eslovaco",
      "fr-FR": "Slovaque",
      "zh-Hant-TW": "斯洛伐克語",
      "pt-PT": "Slovak",
      "hu-HU": "Slovak", // TODO: Add Hungarian translation (Szlovák)
    },
  },
  {
    alpha2: "sl",
    label: {
      "en-US": "Slovenian",
      "de-DE": "Slowenisch",
      "pt-BR": "Esloveno",
      "fr-FR": "Slovène",
      "zh-Hant-TW": "斯洛維尼亞語",
      "pt-PT": "Esloveno",
      "hu-HU": "Slovenian", // TODO: Add Hungarian translation (Szlovén)
    },
  },
  {
    alpha2: "sm",
    label: {
      "en-US": "Samoan",
      "de-DE": "Samoan",
      "pt-BR": "Samoano",
      "fr-FR": "Samoan",
      "zh-Hant-TW": "薩摩亞語",
      "pt-PT": "Samoan",
      "hu-HU": "Samoan", // TODO: Add Hungarian translation (Szamoai)
    },
  },
  {
    alpha2: "sn",
    label: {
      "en-US": "Shona",
      "de-DE": "Shona",
      "pt-BR": "Shona",
      "fr-FR": "Shona",
      "zh-Hant-TW": "修納語",
      "pt-PT": "Shona",
      "hu-HU": "Shona", // TODO: Add Hungarian translation (Sona)
    },
  },
  {
    alpha2: "so",
    label: {
      "en-US": "Somali",
      "de-DE": "Somali",
      "pt-BR": "Somali",
      "fr-FR": "Somali",
      "zh-Hant-TW": "索馬里語",
      "pt-PT": "Somali",
      "hu-HU": "Somali", // TODO: Add Hungarian translation (Szomáli)
    },
  },
  {
    alpha2: "sq",
    label: {
      "en-US": "Albanian",
      "de-DE": "Albanisch",
      "pt-BR": "Albânico",
      "fr-FR": "Albanais",
      "zh-Hant-TW": "阿爾巴尼亞語",
      "pt-PT": "Albanian",
      "hu-HU": "Albanian", // TODO: Add Hungarian translation (Albán)
    },
  },
  {
    alpha2: "sr",
    label: {
      "en-US": "Serbian",
      "de-DE": "Serbisch",
      "pt-BR": "Sérvio",
      "fr-FR": "Serbe",
      "zh-Hant-TW": "塞爾維亞語",
      "pt-PT": "Serbian",
      "hu-HU": "Serbian", // TODO: Add Hungarian translation (Szerb)
    },
  },
  {
    alpha2: "ss",
    label: {
      "en-US": "Swati",
      "de-DE": "Swati",
      "pt-BR": "Swati",
      "fr-FR": "Swati",
      "zh-Hant-TW": "史瓦濟語",
      "pt-PT": "Swati",
      "hu-HU": "Swati", // TODO: Add Hungarian translation (Szvázi)
    },
  },
  {
    alpha2: "st",
    label: {
      "en-US": "Sotho, Southern",
      "de-DE": "Sotho, Süd",
      "pt-BR": "Sotho, Sul",
      "fr-FR": "Sotho, Sud",
      "zh-Hant-TW": "南索托語",
      "pt-PT": "Sotho, Sul",
      "hu-HU": "Sotho, Southern", // TODO: Add Hungarian translation (Déli szotó)
    },
  },
  {
    alpha2: "su",
    label: {
      "en-US": "Sundanese",
      "de-DE": "Sundanesisch",
      "pt-BR": "Sundanês",
      "fr-FR": "Sundanais",
      "zh-Hant-TW": "巽他語",
      "pt-PT": "Sundanese",
      "hu-HU": "Sundanese", // TODO: Add Hungarian translation (Szundanéz)
    },
  },
  {
    alpha2: "sv",
    label: {
      "en-US": "Swedish",
      "de-DE": "Schwedisch",
      "pt-BR": "Sueco",
      "fr-FR": "Suédois",
      "zh-Hant-TW": "瑞典語",
      "pt-PT": "Sueco",
      "hu-HU": "Swedish", // TODO: Add Hungarian translation (Svéd)
    },
  },
  {
    alpha2: "sw",
    label: {
      "en-US": "Swahili",
      "de-DE": "Swahili",
      "pt-BR": "Swahili",
      "fr-FR": "Swahili",
      "zh-Hant-TW": "史瓦希里語",
      "pt-PT": "Swahili",
      "hu-HU": "Swahili", // TODO: Add Hungarian translation (Szuahéli)
    },
  },
  {
    alpha2: "ta",
    label: {
      "en-US": "Tamil",
      "de-DE": "Tamil",
      "pt-BR": "Tâmil",
      "fr-FR": "Tamoul",
      "zh-Hant-TW": "泰米爾語",
      "pt-PT": "Tamil",
      "hu-HU": "Tamil", // TODO: Add Hungarian translation (Tamil)
    },
  },
  {
    alpha2: "te",
    label: {
      "en-US": "Telugu",
      "de-DE": "Telugu",
      "pt-BR": "Telugu",
      "fr-FR": "Telugu",
      "zh-Hant-TW": "泰盧固語",
      "pt-PT": "Telugu",
      "hu-HU": "Telugu", // TODO: Add Hungarian translation (Telugu)
    },
  },
  {
    alpha2: "tg",
    label: {
      "en-US": "Tajik",
      "de-DE": "Tadschikisch",
      "pt-BR": "Tajique",
      "fr-FR": "Tadjik",
      "zh-Hant-TW": "塔吉克語",
      "pt-PT": "Tadjik",
      "hu-HU": "Tajik", // TODO: Add Hungarian translation (Tádzsik)
    },
  },
  {
    alpha2: "th",
    label: {
      "en-US": "Thai",
      "de-DE": "Thai",
      "pt-BR": "Tailandês",
      "fr-FR": "Thaïlandais",
      "zh-Hant-TW": "泰語",
      "pt-PT": "Tailandês",
      "hu-HU": "Thai", // TODO: Add Hungarian translation (Thai)
    },
  },
  {
    alpha2: "ti",
    label: {
      "en-US": "Tigrinya",
      "de-DE": "Tigrinya",
      "pt-BR": "Tigrinya",
      "fr-FR": "Tigrinya",
      "zh-Hant-TW": "提格利尼亞語",
      "pt-PT": "Tigrinya",
      "hu-HU": "Tigrinya", // TODO: Add Hungarian translation (Tigrinya)
    },
  },
  {
    alpha2: "tk",
    label: {
      "en-US": "Turkmen",
      "de-DE": "Turkmenisch",
      "pt-BR": "Turcomano",
      "fr-FR": "Turkmène",
      "zh-Hant-TW": "土庫曼語",
      "pt-PT": "Turkmène",
      "hu-HU": "Turkmen", // TODO: Add Hungarian translation (Türkmén)
    },
  },
  {
    alpha2: "tl",
    label: {
      "en-US": "Tagalog",
      "de-DE": "Tagalog",
      "pt-BR": "Tagalo",
      "fr-FR": "Tagalog",
      "zh-Hant-TW": "他加祿語",
      "pt-PT": "Tagalo",
      "hu-HU": "Tagalog", // TODO: Add Hungarian translation (Tagalog)
    },
  },
  {
    alpha2: "tn",
    label: {
      "en-US": "Tswana",
      "de-DE": "Tswana",
      "pt-BR": "Tswana",
      "fr-FR": "Tswana",
      "zh-Hant-TW": "茨瓦納語",
      "pt-PT": "Tswana",
      "hu-HU": "Tswana", // TODO: Add Hungarian translation (Csvana)
    },
  },
  {
    alpha2: "to",
    label: {
      "en-US": "Tonga (Tonga Islands)",
      "de-DE": "Tonga (Tonga-Inseln)",
      "pt-BR": "Tonga (Ilhas Tonga)",
      "fr-FR": "Tonga (Îles Tonga)",
      "zh-Hant-TW": "東加語",
      "pt-PT": "Tonga (Ilhas Tonga)",
      "hu-HU": "Tonga (Tonga Islands)", // TODO: Add Hungarian translation (Tongai)
    },
  },
  {
    alpha2: "tr",
    label: {
      "en-US": "Turkish",
      "de-DE": "Türkisch",
      "pt-BR": "Turco",
      "fr-FR": "Turc",
      "zh-Hant-TW": "土耳其語",
      "pt-PT": "Turco",
      "hu-HU": "Turkish", // TODO: Add Hungarian translation (Török)
    },
  },
  {
    alpha2: "ts",
    label: {
      "en-US": "Tsonga",
      "de-DE": "Tsonga",
      "pt-BR": "Tsonga",
      "fr-FR": "Tsonga",
      "zh-Hant-TW": "聰加語",
      "pt-PT": "Tsonga",
      "hu-HU": "Tsonga", // TODO: Add Hungarian translation (Conga)
    },
  },
  {
    alpha2: "tt",
    label: {
      "en-US": "Tatar",
      "de-DE": "Tatarisch",
      "pt-BR": "Tatar",
      "fr-FR": "Tatar",
      "zh-Hant-TW": "韃靼語",
      "pt-PT": "Tatar",
      "hu-HU": "Tatar", // TODO: Add Hungarian translation (Tatár)
    },
  },
  {
    alpha2: "tw",
    label: {
      "en-US": "Twi",
      "de-DE": "Twi",
      "pt-BR": "Twi",
      "fr-FR": "Twi",
      "zh-Hant-TW": "特威語",
      "pt-PT": "Twi",
      "hu-HU": "Twi", // TODO: Add Hungarian translation (Twi)
    },
  },
  {
    alpha2: "ty",
    label: {
      "en-US": "Tahitian",
      "de-DE": "Tahitisch",
      "pt-BR": "Tahitiano",
      "fr-FR": "Tahitien",
      "zh-Hant-TW": "大溪地語",
      "pt-PT": "Tahitian",
      "hu-HU": "Tahitian", // TODO: Add Hungarian translation (Tahiti)
    },
  },
  {
    alpha2: "ug",
    label: {
      "en-US": "Uighur; Uyghur",
      "de-DE": "Uighur; Uyghur",
      "pt-BR": "Uigur; Uigur",
      "fr-FR": "Ouïghour; Ouïghour",
      "zh-Hant-TW": "維吾爾語",
      "pt-PT": "Uighur; Uyghur",
      "hu-HU": "Uighur; Uyghur", // TODO: Add Hungarian translation (Ujgur)
    },
  },
  {
    alpha2: "uk",
    label: {
      "en-US": "Ukrainian",
      "de-DE": "Ukrainisch",
      "pt-BR": "Ucraniano",
      "fr-FR": "Ukrainien",
      "zh-Hant-TW": "烏克蘭語",
      "pt-PT": "Ucraniano",
      "hu-HU": "Ukrainian", // TODO: Add Hungarian translation (Ukrán)
    },
  },
  {
    alpha2: "ur",
    label: {
      "en-US": "Urdu",
      "de-DE": "Urdu",
      "pt-BR": "Urdu",
      "fr-FR": "Urdu",
      "zh-Hant-TW": "烏爾都語",
      "pt-PT": "Urdu",
      "hu-HU": "Urdu", // TODO: Add Hungarian translation (Urdu)
    },
  },
  {
    alpha2: "uz",
    label: {
      "en-US": "Uzbek",
      "de-DE": "Usbekisch",
      "pt-BR": "Usbeque",
      "fr-FR": "Ouzbek",
      "zh-Hant-TW": "烏茲別克語",
      "pt-PT": "Uzbek",
      "hu-HU": "Uzbek", // TODO: Add Hungarian translation (Üzbég)
    },
  },
  {
    alpha2: "ve",
    label: {
      "en-US": "Venda",
      "de-DE": "Venda",
      "pt-BR": "Venda",
      "fr-FR": "Venda",
      "zh-Hant-TW": "文達語",
      "pt-PT": "Venda",
      "hu-HU": "Venda", // TODO: Add Hungarian translation (Venda)
    },
  },
  {
    alpha2: "vi",
    label: {
      "en-US": "Vietnamese",
      "de-DE": "Vietnamesisch",
      "pt-BR": "Vietnamita",
      "fr-FR": "Vietnamien",
      "zh-Hant-TW": "越南語",
      "pt-PT": "Vietnamita",
      "hu-HU": "Vietnamese", // TODO: Add Hungarian translation (Vietnámi)
    },
  },
  {
    alpha2: "vo",
    label: {
      "en-US": "Volapük",
      "de-DE": "Volapük",
      "pt-BR": "Volapük",
      "fr-FR": "Volapük",
      "zh-Hant-TW": "沃拉普克語",
      "pt-PT": "Volapük",
      "hu-HU": "Volapük", // TODO: Add Hungarian translation (Volapük)
    },
  },
  {
    alpha2: "wa",
    label: {
      "en-US": "Walloon",
      "de-DE": "Wallonisch",
      "pt-BR": "Valão",
      "fr-FR": "Valon",
      "zh-Hant-TW": "瓦隆語",
      "pt-PT": "Valão",
      "hu-HU": "Walloon", // TODO: Add Hungarian translation (Vallon)
    },
  },
  {
    alpha2: "wo",
    label: {
      "en-US": "Wolof",
      "de-DE": "Wolof",
      "pt-BR": "Wolof",
      "fr-FR": "Wolof",
      "zh-Hant-TW": "沃洛夫語",
      "pt-PT": "Wolof",
      "hu-HU": "Wolof", // TODO: Add Hungarian translation (Volof)
    },
  },
  {
    alpha2: "xh",
    label: {
      "en-US": "Xhosa",
      "de-DE": "Xhosa",
      "pt-BR": "Xhosa",
      "fr-FR": "Xhosa",
      "zh-Hant-TW": "科薩語",
      "pt-PT": "Xhosa",
      "hu-HU": "Xhosa", // TODO: Add Hungarian translation (Hosza)
    },
  },
  {
    alpha2: "yi",
    label: {
      "en-US": "Yiddish",
      "de-DE": "Jiddisch",
      "pt-BR": "Iídiche",
      "fr-FR": "Yiddish",
      "zh-Hant-TW": "意第緒語",
      "pt-PT": "Yiddish",
      "hu-HU": "Yiddish", // TODO: Add Hungarian translation (Jiddis)
    },
  },
  {
    alpha2: "yo",
    label: {
      "en-US": "Yoruba",
      "de-DE": "Yoruba",
      "pt-BR": "Iorubá",
      "fr-FR": "Yoruba",
      "zh-Hant-TW": "約魯巴語",
      "pt-PT": "Yoruba",
      "hu-HU": "Yoruba", // TODO: Add Hungarian translation (Joruba)
    },
  },
  {
    alpha2: "za",
    label: {
      "en-US": "Zhuang; Chuang",
      "de-DE": "Zhuang; Chuang",
      "pt-BR": "Zhuang; Chuang",
      "fr-FR": "Zhuang; Chuang",
      "zh-Hant-TW": "壯語",
      "pt-PT": "Zhuang; Chuang",
      "hu-HU": "Zhuang; Chuang", // TODO: Add Hungarian translation (Zsuang)
    },
  },
  {
    alpha2: "zh-Hans",
    label: {
      "en-US": "Chinese (Simplified)",
      "de-DE": "Chinesisch (Vereinfacht)",
      "pt-BR": "Chinês (Simplificado)",
      "fr-FR": "Chinois (Simplifié)",
      "zh-Hant-TW": "簡體中文",
      "pt-PT": "Chinês (Simplificado)",
      "hu-HU": "Chinese (Simplified)", // TODO: Add Hungarian translation (Kínai (egyszerűsített))
    },
  },
  {
    alpha2: "zh-Hant",
    label: {
      "en-US": "Chinese (Traditional)",
      "de-DE": "Chinesisch (Traditionell)",
      "pt-BR": "Chinês (Tradicional)",
      "fr-FR": "Chinois (Traditionnel)",
      "zh-Hant-TW": "繁體中文",
      "pt-PT": "Chinês (Tradicional)",
      "hu-HU": "Chinese (Traditional)", // TODO: Add Hungarian translation (Kínai (hagyományos))
    },
  },
  {
    alpha2: "zu",
    label: {
      "en-US": "Zulu",
      "de-DE": "Zulu",
      "pt-BR": "Zulu",
      "fr-FR": "Zulu",
      "zh-Hant-TW": "祖魯語",
      "pt-PT": "Zulu",
      "hu-HU": "Zulu", // TODO: Add Hungarian translation (Zulu)
    },
  },
];

export const getLanguageLabel = (languageCode: string, locale: string): string | undefined => {
  const language = iso639Languages.find((lang) => lang.alpha2 === languageCode);
  // Type assertion to tell TypeScript that we know the structure of label
  // This will now correctly infer hu-HU as a possible key for locale
  return language?.label[locale as keyof typeof language.label];
};
