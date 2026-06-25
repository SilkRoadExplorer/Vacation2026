// ════════════════════════════════════════════════════════════════
// trip.js — REISEDATEN
// ────────────────────────────────────────────────────────────────
// Das ist die EINZIGE Datei, die du änderst, um den Reiseplan anzupassen.
// Füge Tage zu 'days' hinzu oder entferne sie — der Rest passiert automatisch.
//
// Jeder Tag:
//   num      — Tagesnummer
//   date     — {pl, en, de} kurzes Datum, z.B. '1. Aug'
//   type     — rest | transit | china | gansu | xian | c  (bestimmt Akzentfarbe)
//   title    — {pl, en, de} Überschrift
//   loc      — {pl, en, de} Ort / Unterzeile
//   cost     — String, z.B. '~30 €'
//   costNote — {pl, en, de} Kostennotiz
//   body     — {pl, en, de} Beschreibungstext
//   chips    — [{kind, text:{pl,en,de}}]  kind: rest|transit|border|nature|culture|city|history|silk
//   links    — [{kind, url, text:{pl,en,de}}]  kind: food|sights|transport|sleep
//   transit  — optional {route, total, rows:[{label,val}], change}
//   fact     — optional {type, icon, title, text}  type: wow|history|nature|culture
//   naadam   — optional Spezial-Box (nur Tag 4)
// ════════════════════════════════════════════════════════════════

window.TRIP = {
  "meta": {
    "id": "silk-road-2026",
    "header": {
      "overline": {
        "pl": "Jedwabny Szlak · 1 osoba · 1–15 sierpnia 2026",
        "en": "Silk Road · 1 person · 1–15 August 2026",
        "de": "Seidenstraße · 1 Person · 1.–15. August 2026"
      },
      "title": {
        "pl": "Wakacje 2026",
        "en": "Holiday 2026",
        "de": "Urlaub 2026"
      },
      "subtitle": {
        "pl": "Jedwabny Szlak do Xi'anu",
        "en": "Silk Road to Xi'an",
        "de": "Seidenstraße nach Xi'an"
      },
      "route": {
        "pl": "Ałmaty → Horgos → Sajram → Yining → Turpan → Jiayuguan → Zhangye → Xi'an",
        "en": "Almaty → Khorgos → Sayram → Yining → Turpan → Jiayuguan → Zhangye → Xi'an",
        "de": "Almaty → Khorgos → Sayram → Yining → Turpan → Jiayuguan → Zhangye → Xi'an"
      },
      "badge": {
        "pl": "Jedwabny Szlak do Xi'anu",
        "en": "Silk Road to Xi'an",
        "de": "Seidenstraße nach Xi'an"
      }
    },
    "total": {
      "label": {
        "pl": "Jedwabny Szlak do Xi'anu · ~1.253 €",
        "en": "Silk Road to Xi'an · ~€1,253",
        "de": "Seidenstraße nach Xi'an · ~1.253 €"
      },
      "desc": {
        "pl": "Łącznie na 1 osobę · 15 dni · 2 kraje",
        "en": "Total per person · 15 days · 2 countries",
        "de": "Gesamt pro Person · 15 Tage · 2 Länder"
      },
      "breakdown": [
        {
          "label": {
            "pl": "Noclegi",
            "en": "Accommodation",
            "de": "Unterkünfte"
          },
          "val": "~350 €"
        },
        {
          "label": {
            "pl": "Jedzenie",
            "en": "Food",
            "de": "Essen"
          },
          "val": "~280 €"
        },
        {
          "label": {
            "pl": "Transport (pociągi)",
            "en": "Transport (trains)",
            "de": "Transport (Züge)"
          },
          "val": "~113 €"
        },
        {
          "label": {
            "pl": "Wstępy + bufor",
            "en": "Entries + buffer",
            "de": "Eintritte + Puffer"
          },
          "val": "~510 €"
        }
      ],
      "note": {
        "pl": "na miejscu · lot tam Wiedeń–Ałmaty, z powrotem Xi'an–Wiedeń (MU5064)",
        "en": "on-site · flight out Vienna–Almaty, return Xi'an–Vienna (MU5064)",
        "de": "vor Ort · Hinflug Wien–Almaty, Rückflug Xi'an–Wien (MU5064)"
      }
    },
    "map": {
      "title": {
        "pl": "🗺️ Trasa — Ałmaty → Xi'an",
        "en": "🗺️ Route — Almaty → Xi'an",
        "de": "🗺️ Route — Almaty → Xi'an"
      },
      "caption": {
        "pl": "Kliknij marker — szczegóły",
        "en": "Click a marker for details",
        "de": "Marker anklicken für Details"
      },
      "stops": [
        {
          "name": {
            "pl": "Ałmaty",
            "en": "Almaty",
            "de": "Almaty"
          },
          "lat": 43.238,
          "lng": 76.945,
          "days": {
            "pl": "Dni 1–3",
            "en": "Days 1–3",
            "de": "Tage 1–3"
          },
          "icon": "🏙️"
        },
        {
          "name": {
            "pl": "Horgos",
            "en": "Khorgos",
            "de": "Khorgos"
          },
          "lat": 44.205,
          "lng": 80.412,
          "days": {
            "pl": "Dzień 4",
            "en": "Day 4",
            "de": "Tag 4"
          },
          "icon": "🛂"
        },
        {
          "name": {
            "pl": "Sajram",
            "en": "Sayram",
            "de": "Sayram"
          },
          "lat": 43.87,
          "lng": 81.235,
          "days": {
            "pl": "Dzień 4",
            "en": "Day 4",
            "de": "Tag 4"
          },
          "icon": "🏔️"
        },
        {
          "name": {
            "pl": "Yining",
            "en": "Yining",
            "de": "Yining"
          },
          "lat": 43.908,
          "lng": 81.324,
          "days": {
            "pl": "Dni 4–5",
            "en": "Days 4–5",
            "de": "Tage 4–5"
          },
          "icon": "🕌"
        },
        {
          "name": {
            "pl": "Ürümqi",
            "en": "Ürümqi",
            "de": "Ürümqi"
          },
          "lat": 43.793,
          "lng": 87.627,
          "days": {
            "pl": "Przesiadka",
            "en": "Transit",
            "de": "Umstieg"
          },
          "icon": "🚄",
          "transit": true
        },
        {
          "name": {
            "pl": "Turpan",
            "en": "Turpan",
            "de": "Turpan"
          },
          "lat": 42.951,
          "lng": 89.189,
          "days": {
            "pl": "Dni 6–7",
            "en": "Days 6–7",
            "de": "Tage 6–7"
          },
          "icon": "🌵"
        },
        {
          "name": {
            "pl": "Jiayuguan",
            "en": "Jiayuguan",
            "de": "Jiayuguan"
          },
          "lat": 39.802,
          "lng": 98.3,
          "days": {
            "pl": "Dzień 8",
            "en": "Day 8",
            "de": "Tag 8"
          },
          "icon": "🏯"
        },
        {
          "name": {
            "pl": "Zhangye",
            "en": "Zhangye",
            "de": "Zhangye"
          },
          "lat": 38.939,
          "lng": 100.449,
          "days": {
            "pl": "Dzień 9",
            "en": "Day 9",
            "de": "Tag 9"
          },
          "icon": "🌈"
        },
        {
          "name": {
            "pl": "Xi'an",
            "en": "Xi'an",
            "de": "Xi'an"
          },
          "lat": 34.341,
          "lng": 108.94,
          "days": {
            "pl": "Dni 10–13",
            "en": "Days 10–13",
            "de": "Tage 10–13"
          },
          "icon": "🏛️"
        }
      ]
    },
    "sectionLabels": []
  },
  "ui": {
    "langNames": {
      "pl": "PL",
      "en": "EN",
      "de": "DE"
    },
    "dayWord": {
      "pl": "Dzień",
      "en": "Day",
      "de": "Tag"
    },
    "booked": {
      "pl": "✓ zarezerwowane",
      "en": "✓ booked",
      "de": "✓ gebucht"
    },
    "resetBtn": {
      "pl": "↺ Reset",
      "en": "↺ Reset",
      "de": "↺ Zurücksetzen"
    },
    "packProgress": {
      "pl": "spakowano",
      "en": "packed",
      "de": "gepackt"
    },
    "factLabels": {
      "wow": {
        "pl": "Ciekawostka",
        "en": "Fun fact",
        "de": "Wissenswertes"
      },
      "history": {
        "pl": "Historia",
        "en": "History",
        "de": "Geschichte"
      },
      "nature": {
        "pl": "Przyroda",
        "en": "Nature",
        "de": "Natur"
      },
      "culture": {
        "pl": "Kultura",
        "en": "Culture",
        "de": "Kultur"
      }
    }
  },
  "days": [
    {
      "num": 1,
      "date": {
        "pl": "1 sie",
        "en": "1 Aug",
        "de": "1. Aug"
      },
      "type": "rest",
      "title": {
        "pl": "Przylot Ałmaty — Odpoczynek",
        "en": "Arriving Almaty — Rest day",
        "de": "Ankunft Almaty — Erholung"
      },
      "loc": {
        "pl": "Ałmaty · Hotel",
        "en": "Almaty · Hotel",
        "de": "Almaty · Hotel"
      },
      "cost": "~30 €",
      "costNote": {
        "pl": "Hotel + transfer",
        "en": "Hotel + transfer",
        "de": "Hotel + Transfer"
      },
      "body": {
        "pl": "Przylot rano, transfer z lotniska przez Yandex Go (~5 €), hotel, lekka kolacja. Brak programu — aklimatyzacja po locie.",
        "en": "Morning arrival, airport transfer via Yandex Go (~€5), hotel, light dinner. No agenda — acclimatisation after the flight.",
        "de": "Ankunft morgens, Flughafentransfer per Yandex Go (~5 €), Hotel, leichtes Abendessen. Kein Programm — Akklimatisierung nach dem Flug."
      },
      "chips": [
        {
          "kind": "rest",
          "text": {
            "pl": "Dzień przyjazdu",
            "en": "Arrival day",
            "de": "Ankunftstag"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=beshbarmak+kazachstan+baranina+makaron+zdjecia&tbm=isch",
          "text": {
            "pl": "🥩 Beszbarmak — baranina na płaskim makaronie",
            "en": "🥩 Beshbarmak — mutton on flat noodles",
            "de": "🥩 Beshbarmak — Hammel auf flachen Nudeln"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=baursaki+kazakh+fried+dough+honey+photos&tbm=isch",
          "text": {
            "pl": "🫓 Baursakty — smażone chlebki z miodem",
            "en": "🫓 Baursak — fried dough with honey",
            "de": "🫓 Baursak — frittierter Teig mit Honig"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kumys+fermented+mare+milk+bowl+photos&tbm=isch",
          "text": {
            "pl": "🥛 Kumys — fermentowane mleko klaczy",
            "en": "🥛 Kumys — fermented mare's milk",
            "de": "🥛 Kumys — fermentierte Stutenmilch"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kazakh+manti+dumplings+steamed+photos&tbm=isch",
          "text": {
            "pl": "🥟 Manty — gotowane pierogi z jagnięciną",
            "en": "🥟 Manti — steamed lamb dumplings",
            "de": "🥟 Manti — gedämpfte Lammteigtaschen"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=almaty+green+bazaar+zeleny+bazar+photos&tbm=isch",
          "text": {
            "pl": "🛒 Zielony Bazar Ałmaty",
            "en": "🛒 Almaty Green Bazaar",
            "de": "🛒 Grüner Basar Almaty"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=almaty+panfilov+park+zenkov+cathedral+photos&tbm=isch",
          "text": {
            "pl": "⛪ Katedra Zenkov",
            "en": "⛪ Zenkov Cathedral",
            "de": "⛪ Zenkov-Kathedrale"
          }
        },
        {
          "kind": "sleep",
          "url": "https://www.booking.com/Share-DUZYAY",
          "text": {
            "pl": "🛏️ Hotel w Ałmaty",
            "en": "🛏️ Hotel in Almaty",
            "de": "🛏️ Hotel in Almaty"
          }
        }
      ],
      "fact": {
        "type": "wow",
        "icon": "🍎",
        "title": {
          "pl": "Ałmaty = Ojciec Jabłek",
          "en": "Almaty = Father of Apples",
          "de": "Almaty = Vater der Äpfel"
        },
        "text": {
          "pl": "Nazwa miasta znaczy dosłownie „Ojciec Jabłek\". W górach Tien-Szanu rosnące dziko przez tysiące lat Malus sieversii są bezpośrednim przodkiem wszystkich jabłek na świecie. Jedyne takie miejsce na Ziemi.",
          "en": "The city's name literally means \"Father of Apples\". Malus sieversii, growing wild in the Tian Shan mountains for thousands of years, is the direct ancestor of all apples in the world. The only such place on Earth.",
          "de": "Der Stadtname bedeutet wörtlich „Vater der Äpfel\". Malus sieversii, seit Jahrtausenden wild in den Tian-Shan-Bergen wachsend, ist der direkte Vorfahre aller Äpfel der Welt. Der einzige solche Ort auf der Erde."
        }
      }
    },
    {
      "num": 2,
      "date": {
        "pl": "2 sie",
        "en": "2 Aug",
        "de": "2. Aug"
      },
      "type": "c",
      "title": {
        "pl": "Ałmaty — Spacer po mieście",
        "en": "Almaty — City walk",
        "de": "Almaty — Stadtspaziergang"
      },
      "loc": {
        "pl": "Zielony Bazar · Kok-Tobe · Park Panfiłow",
        "en": "Green Bazaar · Kok-Tobe · Panfilov Park",
        "de": "Grüner Basar · Kok-Tobe · Panfilow-Park"
      },
      "cost": "~40 €",
      "costNote": {
        "pl": "z kolejką linową",
        "en": "incl. cable car",
        "de": "inkl. Seilbahn"
      },
      "body": {
        "pl": "Zielony Bazar, kolejka linowa Kok-Tobe (~5 €) z panoramą miasta i gór, wieczór w restauracji.",
        "en": "Green Bazaar, Kok-Tobe cable car (~€5) with panoramic city and mountain views, evening at a restaurant.",
        "de": "Grüner Basar, Seilbahn Kok-Tobe (~5 €) mit Panoramablick auf Stadt und Berge, Abend im Restaurant."
      },
      "chips": [
        {
          "kind": "city",
          "text": {
            "pl": "Miasto",
            "en": "Miasto",
            "de": "Miasto"
          }
        },
        {
          "kind": "culture",
          "text": {
            "pl": "Kultura",
            "en": "Kultura",
            "de": "Kultura"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=lagman+noodles+kazakhstan+photos&tbm=isch",
          "text": {
            "pl": "🍜 Lagman — ręcznie ciągnięty makaron w bulionie",
            "en": "🍜 Lagman — hand-pulled noodles in broth",
            "de": "🍜 Lagman — handgezogene Nudeln in Brühe"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kazy+horse+meat+sausage+kazakhstan+photos&tbm=isch",
          "text": {
            "pl": "🌭 Kazy — wędzona kiełbasa z koniny",
            "en": "🌭 Kazy — smoked horse sausage",
            "de": "🌭 Kazy — geräucherte Pferdefleischwurst"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=ashlan+fu+dungan+cold+noodles+almaty+photos&tbm=isch",
          "text": {
            "pl": "🥗 Ashlan-fu — zimny makaron w occie (kuchnia dungan)",
            "en": "🥗 Ashlan-fu — cold noodles in vinegar (Dungan cuisine)",
            "de": "🥗 Ashlan-fu — kalte Nudeln in Essig (Dunganen-Küche)"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kazakh+shorpo+lamb+broth+soup+photos&tbm=isch",
          "text": {
            "pl": "🍲 Szorpa — rosół jagnięcy nomadów",
            "en": "🍲 Shorpo — nomad lamb broth",
            "de": "🍲 Shorpo — nomadische Lammbrühe"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kurt+dried+cheese+balls+kazakhstan+photos&tbm=isch",
          "text": {
            "pl": "🧀 Kurt — suszone kulki twarogu (prowiant na drogę)",
            "en": "🧀 Kurt — dried cheese balls (travel provisions)",
            "de": "🧀 Kurt — getrocknete Käsekugeln (Reiseproviant)"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=almaty+kok-tobe+cable+car+city+view+photos&tbm=isch",
          "text": {
            "pl": "🚡 Kok-Tobe — panorama miasta i Tien-Szanu",
            "en": "🚡 Kok-Tobe — city and Tian Shan panorama",
            "de": "🚡 Kok-Tobe — Panorama auf Stadt und Tian Shan"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=almaty+medeo+skating+rink+photos&tbm=isch",
          "text": {
            "pl": "⛸️ Medeo — najwyższe lodowisko świata (1691 m)",
            "en": "⛸️ Medeo — world's highest ice rink (1,691 m)",
            "de": "⛸️ Medeo — höchste Eisbahn der Welt (1.691 m)"
          }
        }
      ],
      "fact": {
        "type": "wow",
        "icon": "⛸️",
        "title": {
          "pl": "Medeo — rekordowe lodowisko",
          "en": "Medeo — rekordowe lodowisko",
          "de": "Medeo — rekordowe lodowisko"
        },
        "text": {
          "pl": "1691 m n.p.m., przez dekady arena bicia rekordów prędkościowych w łyżwiarstwie szybkim — suche, rzadkie powietrze górskie tworzy wyjątkowo twardy lód. W latach 70. padło tu ponad 120 rekordów świata. Latem: baza wypadowa w góry i gondola na Shymbulak.",
          "en": "1,691 m a.s.l., for decades the arena for speed skating world records — dry, thin mountain air creates exceptionally hard ice. In the 1970s, over 120 world records were set here. In summer: base camp for the mountains and gondola to Shymbulak.",
          "de": "1.691 m ü.M., jahrzehntelang Schauplatz von Eisschnelllauf-Weltrekorden — trockene, dünne Höhenluft erzeugt außergewöhnlich hartes Eis. In den 1970ern wurden hier über 120 Weltrekorde aufgestellt. Im Sommer: Ausgangspunkt für Berge und Gondel zum Shymbulak."
        }
      }
    },
    {
      "num": 3,
      "date": {
        "pl": "3 sie",
        "en": "3 Aug",
        "de": "3. Aug"
      },
      "type": "transit",
      "title": {
        "pl": "Bus Ałmaty → Horgos → Jezioro Sajram",
        "en": "Bus Almaty → Khorgos → Sayram Lake",
        "de": "Bus Almaty → Khorgos → Sayram-See"
      },
      "loc": {
        "pl": "Dworzec Sajran → Horgos (6,5h) → Granica → Sajram Lake",
        "en": "Dworzec Sajran → Horgos (6,5h) → Granica → Sajram Lake",
        "de": "Dworzec Sajran → Horgos (6,5h) → Granica → Sajram Lake"
      },
      "cost": "~35 €",
      "costNote": {
        "pl": "Bus + transfer",
        "en": "Bus + transfer",
        "de": "Bus + Transfer"
      },
      "body": {
        "pl": "Bus z Ałmaty wczesnym rankiem — długi ale spektakularny dzień: step, góry, granica i pierwsze jurty.",
        "en": "Bus from Almaty in the early morning — a long but spectacular day: steppe, mountains, the border, and your first yurts.",
        "de": "Bus ab Almaty am frühen Morgen — ein langer, aber spektakulärer Tag: Steppe, Berge, Grenze und die ersten Jurten."
      },
      "chips": [
        {
          "kind": "transit",
          "text": {
            "pl": "Długi dzień podróży",
            "en": "Long travel day",
            "de": "Langer Reisetag"
          }
        },
        {
          "kind": "border",
          "text": {
            "pl": "Przejście graniczne",
            "en": "Border crossing",
            "de": "Grenzübergang"
          }
        }
      ],
      "links": [],
      "transit": {
        "route": {
          "pl": "🚌 Ałmaty → Horgos → Jezioro Sajram",
          "en": "🚌 Ałmaty → Horgos → Jezioro Sajram",
          "de": "🚌 Ałmaty → Horgos → Jezioro Sajram"
        },
        "total": {
          "pl": "~9–10 h łącznie",
          "en": "~9–10 h total",
          "de": "~9–10 Std. gesamt"
        },
        "rows": [
          {
            "label": {
              "pl": "Odjazd",
              "en": "Odjazd",
              "de": "Odjazd"
            },
            "val": {
              "pl": "07:00 · <a href=\"https://maps.app.goo.gl/4V6M1q9mPxDGbCEn7\" target=\"_blank\">Dw. autobusowy Sayran</a>",
              "en": "07:00 · <a href=\"https://maps.app.goo.gl/4V6M1q9mPxDGbCEn7\" target=\"_blank\">Sayran Bus Station</a>",
              "de": "07:00 · <a href=\"https://maps.app.goo.gl/4V6M1q9mPxDGbCEn7\" target=\"_blank\">Busbahnhof Sayran</a>"
            }
          },
          {
            "label": {
              "pl": "Przyjazd Horgos",
              "en": "Przyjazd Horgos",
              "de": "Przyjazd Horgos"
            },
            "val": {
              "pl": "~13:30 · <a href=\"https://maps.app.goo.gl/jVRo5Gi2hDuALtzo7\" target=\"_blank\">Przejście graniczne</a>",
              "en": "~13:30 · <a href=\"https://maps.app.goo.gl/jVRo5Gi2hDuALtzo7\" target=\"_blank\">Border crossing</a>",
              "de": "~13:30 · <a href=\"https://maps.app.goo.gl/jVRo5Gi2hDuALtzo7\" target=\"_blank\">Grenzübergang</a>"
            }
          },
          {
            "label": {
              "pl": "Środek",
              "en": "Środek",
              "de": "Środek"
            },
            "val": {
              "pl": "Bus bezpośredni (~25 $, ~6,5 h)",
              "en": "Direct bus (~$25, ~6.5 h)",
              "de": "Direktbus (~25 $, ~6,5 Std.)"
            }
          },
          {
            "label": {
              "pl": "Po odprawie",
              "en": "Po odprawie",
              "de": "Po odprawie"
            },
            "val": {
              "pl": "Taxi/bus Horgos → Sajram (~1 h, ~110 km)",
              "en": "Taxi/bus Horgos → Sajram (~1 h, ~110 km)",
              "de": "Taxi/bus Horgos → Sajram (~1 h, ~110 km)"
            }
          }
        ],
        "change": null
      },
      "naadam": {
        "title": {
          "pl": "Festiwal Nadam nad Jeziorem Sajram",
          "en": "Naadam Festival at Sayram Lake",
          "de": "Naadam-Festival am Sayram-See"
        },
        "textRaw": "<span data-t=\"tb_sayram_before\">Pobyt nad Jeziorem Sajram na początku sierpnia przypada na</span> <strong><span data-t=\"t185\">sezon Nadam Kazachów w Xinjangu</span></strong> — <span data-t=\"tb_naadam_desc\">wyścigi konne, zapasy, łucznictwo, ogniska, śpiew. Bez stałej daty, według kalendarza koczowniczego. Lokalne, autentyczne święto niemal bez zachodnich turystów. Jurty nad brzegiem jeziora ~15–25 € z posiłkami.</span>"
      }
    },
    {
      "num": 4,
      "date": {
        "pl": "4 sie",
        "en": "4 Aug",
        "de": "4. Aug"
      },
      "type": "china",
      "title": {
        "pl": "Jezioro Sajram — Alpejskie jezioro i Nadam",
        "en": "Sayram Lake — Alpine lake & Naadam",
        "de": "Sayram-See — Alpensee & Naadam"
      },
      "loc": {
        "pl": "Jezioro Sajram · 2073 m n.p.m. · Xinjiang",
        "en": "Sayram Lake · 2073 m a.s.l. · Xinjiang",
        "de": "Sayram-See · 2073 m ü. NN · Xinjiang"
      },
      "cost": "~45 €",
      "costNote": {
        "pl": "Jurta + wstęp",
        "en": "Yurt + entry",
        "de": "Jurte + Eintritt"
      },
      "body": {
        "pl": "„Ostatnia łza Atlantyku\" — turkusowe jezioro otoczone ośnieżonymi górami. Autobus wahadłowy (130 CNY) wokół jeziora. Obserwowanie wyścigów konnych i festiwalu nomadów. Posiłki w jurtach.",
        "en": "\"The Last Tear of the Atlantic\" — a turquoise lake ringed by snowy peaks. Shuttle bus (130 CNY) around the lake. Watch horse races and the nomad festival. Meals in yurts.",
        "de": "„Die letzte Träne des Atlantiks\" — ein türkisfarbener See umgeben von schneebedeckten Bergen. Pendelbus (130 CNY) um den See. Pferderennen und Nomadenfestival. Mahlzeiten in Jurten."
      },
      "chips": [
        {
          "kind": "nature",
          "text": {
            "pl": "Jezioro alpejskie",
            "en": "Alpine lake",
            "de": "Alpensee"
          }
        },
        {
          "kind": "silk",
          "text": {
            "pl": "Festiwal Nadam",
            "en": "Naadam Festival",
            "de": "Naadam-Festival"
          }
        },
        {
          "kind": "culture",
          "text": {
            "pl": "Jurty",
            "en": "Yurts",
            "de": "Jurten"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kazakh+nomad+yurt+food+boiled+lamb+bread+photos&tbm=isch",
          "text": {
            "pl": "🥩 Gotowana baranina z chlebem — klasyczny posiłek jurty",
            "en": "🥩 Boiled mutton with bread — classic yurt meal",
            "de": "🥩 Gekochtes Hammelfleisch mit Brot — klassische Jurtenmahlzeit"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kumys+mare+milk+fermented+nomad+bowl+xinjiang+photos&tbm=isch",
          "text": {
            "pl": "🥛 Kumys — obowiązkowy napój nomadów",
            "en": "🥛 Kumys — the essential nomad drink",
            "de": "🥛 Kumys — das unverzichtbare Nomadengetränk"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kazakh+nan+flatbread+tandoor+stone+oven+photos&tbm=isch",
          "text": {
            "pl": "🫓 Naan tandyrowy — pieczony w glinianych piecach",
            "en": "🫓 Tandoor naan — baked in clay ovens",
            "de": "🫓 Tandoor-Naan — in Lehmöfen gebacken"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=kazakh+beshbarmak+yurt+nomad+xinjiang+sayram+photos&tbm=isch",
          "text": {
            "pl": "🍽️ Beszbarmak nomadyczny — prosto z kotła nad ogniem",
            "en": "🍽️ Nomadic beshbarmak — straight from the pot over the fire",
            "de": "🍽️ Nomadisches Beshbarmak — direkt aus dem Kessel über dem Feuer"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=dried+apricots+xinjiang+ili+valley+market+photos&tbm=isch",
          "text": {
            "pl": "🍑 Suszone morele z doliny Ili — od nomadów przy drodze",
            "en": "🍑 Dried apricots from the Ili valley — from roadside nomads",
            "de": "🍑 Getrocknete Aprikosen aus dem Ili-Tal — von Nomaden am Wegrand"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=sayram+lake+xinjiang+turquoise+mountains+photos&tbm=isch",
          "text": {
            "pl": "💙 Jezioro Sajram — turkus na 2073 m n.p.m.",
            "en": "💙 Sayram Lake — turquoise at 2,073 m a.s.l.",
            "de": "💙 Sayram-See — Türkis auf 2.073 m ü.M."
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=kazakh+nadam+horse+racing+xinjiang+festival+photos&tbm=isch",
          "text": {
            "pl": "🐎 Nadam — wyścigi konne nomadów Xinjangu",
            "en": "🐎 Nadam — Xinjiang nomad horse racing",
            "de": "🐎 Nadam — Pferderennen der Nomaden Xinjiangs"
          }
        },
        {
          "kind": "sleep",
          "url": "https://www.trip.com/w/3EWyLNGG2V2",
          "text": {
            "pl": "🛏️ Jurta nad Jeziorem Sajram",
            "en": "🛏️ Yurt at Sayram Lake",
            "de": "🛏️ Jurte am Sayram-See"
          }
        }
      ],
      "fact": {
        "type": "history",
        "icon": "🐎",
        "title": {
          "pl": "Nadam — najstarszy festiwal nomadów",
          "en": "Nadam — the oldest nomad festival",
          "de": "Nadam — das älteste Nomadenfest"
        },
        "text": {
          "pl": "Nadam (Нaaдам) po mongolsku i kazachsku znaczy „zabawa, igrzyska\". Obejmuje trzy gry mężczyzn: zapasy, łucznictwo i wyścigi konne. Najstarsze zapisy sięgają XIII w. Wersja przy Sajram — bez agencji turystycznych, bez scen — jest jedną z najbardziej autentycznych w Chinach.",
          "en": "Nadam (Нaaдам) means \"fun, games\" in Mongolian and Kazakh. It encompasses three men's events: wrestling, archery and horse racing. The oldest records date back to the 13th century. The Sayram version — without tourist agencies, without stages — is one of the most authentic in China.",
          "de": "Nadam (Нaaдам) bedeutet auf Mongolisch und Kasachisch „Spiel, Vergnügen\". Es umfasst drei Männerdisziplinen: Ringen, Bogenschießen und Pferderennen. Die ältesten Aufzeichnungen stammen aus dem 13. Jh. Die Sayram-Version — ohne Touristenagenturen, ohne Bühnen — ist eine der authentischsten in China."
        }
      }
    },
    {
      "num": 5,
      "date": {
        "pl": "5 sie",
        "en": "5 Aug",
        "de": "5. Aug"
      },
      "type": "transit",
      "title": {
        "pl": "Sajram → Yining — Dolina Ili",
        "en": "Sayram → Yining — Ili Valley",
        "de": "Sayram → Yining — Ili-Tal"
      },
      "loc": {
        "pl": "Jezioro Sajram → Kanion Guozigou → Yining · ~2,5h",
        "en": "Sayram Lake → Guozigou Canyon → Yining · ~2.5h",
        "de": "Sayram Lake → Guozigou Canyon → Yining · ~2.5h"
      },
      "cost": "~38 €",
      "costNote": {
        "pl": "Transfer + hotel",
        "en": "Transfer + hotel",
        "de": "Transfer + Hotel"
      },
      "body": {
        "pl": "Przejazd przez spektakularny kanion Guozigou z najwyższym mostem wiszącym Xinjiangu. Wieczór w Yining — nocny targ, ujgurski szaszłyk, naan.",
        "en": "Drive through the spectacular Guozigou Canyon with Xinjiang's highest suspension bridge. Evening in Yining — night market, Uyghur kebabs, naan.",
        "de": "Fahrt durch den spektakulären Guozigou-Canyon mit der höchsten Hängebrücke Xinjiangs. Abend in Yining — Nachtmarkt, uigurische Spieße, Naan."
      },
      "chips": [
        {
          "kind": "transit",
          "text": {
            "pl": "Przejazd",
            "en": "Transfer",
            "de": "Transit"
          }
        },
        {
          "kind": "nature",
          "text": {
            "pl": "Kanion Guozigou",
            "en": "Guozigou Canyon",
            "de": "Guozigou Canyon"
          }
        },
        {
          "kind": "culture",
          "text": {
            "pl": "Yining nocleg",
            "en": "Yining overnight",
            "de": "Yining overnight"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=yining+uyghur+kebab+cumin+lamb+skewers+photos&tbm=isch",
          "text": {
            "pl": "🍢 Kebab ujgurski z kminkiem — nocny targ Yining",
            "en": "🍢 Uyghur cumin kebab — Yining night market",
            "de": "🍢 Uigurischer Kreuzkümmel-Kebab — Nachtmarkt Yining"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=uyghur+naan+bread+sesame+tandoor+photos&tbm=isch",
          "text": {
            "pl": "🫓 Naan sezamowy — prosto z pieca tandoor",
            "en": "🫓 Sesame naan — straight from the tandoor oven",
            "de": "🫓 Sesam-Naan — direkt aus dem Tandoor-Ofen"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=uyghur+polo+polu+pilaf+rice+lamb+yining+photos&tbm=isch",
          "text": {
            "pl": "🍚 Polu — ujgurski pilaw z jagnięciną i marchewką",
            "en": "🍚 Polu — Uyghur pilaf with lamb and carrots",
            "de": "🍚 Polu — uigurischer Pilaw mit Lamm und Möhren"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xinjiang+yogurt+ayran+milk+drink+yining+photos&tbm=isch",
          "text": {
            "pl": "🥛 Kazachski jogurt — świeży przy nocnym targu",
            "en": "🥛 Kazakh yoghurt — fresh at the night market",
            "de": "🥛 Kasachischer Joghurt — frisch beim Nachtmarkt"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=guozigou+bridge+canyon+xinjiang+suspension+photos&tbm=isch",
          "text": {
            "pl": "🌉 Most wiszący Guozigou — najwyższy w Xinjangu",
            "en": "🌉 Guozigou Suspension Bridge — highest in Xinjiang",
            "de": "🌉 Guozigou-Hängebrücke — höchste in Xinjiang"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=yining+night+market+xinjiang+uyghur+photos&tbm=isch",
          "text": {
            "pl": "🌙 Nocny targ Yining — uliczne życie",
            "en": "🌙 Yining Night Market — street life",
            "de": "🌙 Nachtmarkt Yining — Straßenleben"
          }
        },
        {
          "kind": "sleep",
          "url": "https://www.trip.com/w/0kKFeBFX2V2",
          "text": {
            "pl": "🛏️ Hotel w Yining (Ili)",
            "en": "🛏️ Hotel in Yining (Ili)",
            "de": "🛏️ Hotel in Yining (Ili)"
          }
        }
      ],
      "transit": {
        "route": {
          "pl": "🚐 Sajram → Yining przez Guozigou",
          "en": "🚐 Sajram → Yining przez Guozigou",
          "de": "🚐 Sajram → Yining przez Guozigou"
        },
        "total": {
          "pl": "~2,5 h",
          "en": "~2,5 h",
          "de": "~2,5 h"
        },
        "rows": [
          {
            "label": {
              "pl": "Odjazd",
              "en": "Odjazd",
              "de": "Odjazd"
            },
            "val": {
              "pl": "Rano · <a href=\"https://maps.app.goo.gl/QW1NuAHNPodYhiCW6\" target=\"_blank\">Jezioro Sajram</a>",
              "en": "Rano · <a href=\"https://maps.app.goo.gl/QW1NuAHNPodYhiCW6\" target=\"_blank\">Jezioro Sajram</a>",
              "de": "Rano · <a href=\"https://maps.app.goo.gl/QW1NuAHNPodYhiCW6\" target=\"_blank\">Jezioro Sajram</a>"
            }
          },
          {
            "label": {
              "pl": "Przyjazd",
              "en": "Przyjazd",
              "de": "Przyjazd"
            },
            "val": {
              "pl": "~Południe · <a href=\"https://maps.app.goo.gl/Kk3hHpY4nHpZyMBx9\" target=\"_blank\">Yining centrum</a>",
              "en": "~Noon · <a href=\"https://maps.app.goo.gl/Kk3hHpY4nHpZyMBx9\" target=\"_blank\">Yining city centre</a>",
              "de": "~Mittag · <a href=\"https://maps.app.goo.gl/Kk3hHpY4nHpZyMBx9\" target=\"_blank\">Stadtzentrum Yining</a>"
            }
          },
          {
            "label": {
              "pl": "Środek",
              "en": "Środek",
              "de": "Środek"
            },
            "val": {
              "pl": "Taxi zbiorowe lub bus (~20–30 CNY)",
              "en": "Taxi zbiorowe lub bus (~20–30 CNY)",
              "de": "Taxi zbiorowe lub bus (~20–30 CNY)"
            }
          },
          {
            "label": {
              "pl": "Trasa",
              "en": "Trasa",
              "de": "Trasa"
            },
            "val": {
              "pl": "Przez Kanion Guozigou + most wiszący",
              "en": "Via Guozigou Canyon + suspension bridge",
              "de": "Durch Guozigou-Canyon + Hängebrücke"
            }
          }
        ],
        "change": null
      },
      "fact": {
        "type": "wow",
        "icon": "🌉",
        "title": {
          "pl": "Przełęcz Guozigou — dawna droga śmierci",
          "en": "Guozigou Pass — the old road of death",
          "de": "Guozigou-Pass — die alte Todesstraße"
        },
        "text": {
          "pl": "Przez wieki Guozigou (果子沟) była jedną z najtrudniejszych przepraw w Xinjangu — lawinowa, oblodzona, podmywana. Nowoczesna autostrada i most wiszący z 2011 roku skróciły przejazd z kilku godzin do 20 minut. Po starej drodze możesz wciąż przejść pieszo.",
          "en": "For centuries, Guozigou (果子沟) was one of the most treacherous crossings in Xinjiang — prone to avalanches, ice and flooding. The modern motorway and suspension bridge built in 2011 cut the crossing from several hours to 20 minutes. You can still walk the old road.",
          "de": "Jahrhundertelang war Guozigou (果子沟) einer der gefährlichsten Übergänge Xinjiangs — lawinengefährdet, vereist, überschwemmt. Die moderne Autobahn und die Hängebrücke von 2011 verkürzten die Fahrt von mehreren Stunden auf 20 Minuten. Man kann noch immer die alte Straße zu Fuß gehen."
        }
      }
    },
    {
      "num": 6,
      "date": {
        "pl": "6 sie",
        "en": "6 Aug",
        "de": "6. Aug"
      },
      "type": "transit",
      "title": {
        "pl": "Pociąg Yining → Ürümqi → Turpan",
        "en": "Train Yining → Ürümqi → Turpan",
        "de": "Zug Yining → Ürümqi → Turpan"
      },
      "loc": {
        "pl": "Yining → Ürümqi (~8h) → szybki pociąg → Turpan (1h)",
        "en": "Yining → Ürümqi (~8h) → fast train → Turpan (1h)",
        "de": "Yining → Ürümqi (~8h) → fast train → Turpan (1h)"
      },
      "cost": "~28 €",
      "costNote": {
        "pl": "2 bilety pociąg",
        "en": "2 train tickets",
        "de": "2 Zugtickets"
      },
      "body": {
        "pl": "Dzień w pociągu przez pustynię Taklamakan — krajobraz zmienia się z zielonych dolin w ergi i skalne masywy.",
        "en": "A day on the train through the Taklamakan Desert — landscape shifting from green valleys to sand seas and rocky massifs.",
        "de": "Ein Tag im Zug durch die Taklamakan-Wüste — Landschaft wechselt von grünen Tälern zu Sandmeeren und Felsmassiven."
      },
      "chips": [
        {
          "kind": "transit",
          "text": {
            "pl": "Dzień pociągiem",
            "en": "Train day",
            "de": "Train day"
          }
        },
        {
          "kind": "culture",
          "text": {
            "pl": "Przyjazd Turpan wieczór",
            "en": "Arrive Turpan evening",
            "de": "Arrive Turpan evening"
          }
        }
      ],
      "links": [],
      "transit": {
        "route": {
          "pl": "🚄 Yining → Ürümqi → Turpan",
          "en": "🚄 Yining → Ürümqi → Turpan",
          "de": "🚄 Yining → Ürümqi → Turpan"
        },
        "total": {
          "pl": "~9 h łącznie",
          "en": "~9 h total",
          "de": "~9 Std. gesamt"
        },
        "rows": [
          {
            "label": {
              "pl": "Odjazd",
              "en": "Odjazd",
              "de": "Odjazd"
            },
            "val": {
              "pl": "<strong>14:22</strong> · <a href=\"https://maps.app.goo.gl/8fCyFAMxpQkGVtHr5\" target=\"_blank\">Yining Railway Station</a> <span class=\"booked-badge\">✓ zarezerwowane</span>",
              "en": "<strong>14:22</strong> · <a href=\"https://maps.app.goo.gl/8fCyFAMxpQkGVtHr5\" target=\"_blank\">Yining Railway Station</a> <span class=\"booked-badge\">✓ booked</span>",
              "de": "<strong>14:22</strong> · <a href=\"https://maps.app.goo.gl/8fCyFAMxpQkGVtHr5\" target=\"_blank\">Yining Railway Station</a> <span class=\"booked-badge\">✓ gebucht</span>"
            }
          },
          {
            "label": {
              "pl": "Przyjazd Ürümqi",
              "en": "Przyjazd Ürümqi",
              "de": "Przyjazd Ürümqi"
            },
            "val": {
              "pl": "Przyjazd ~19:00 · przesiadka",
              "en": "Arrival ~19:00 · transfer",
              "de": "Ankunft ~19:00 · Umstieg"
            }
          },
          {
            "label": {
              "pl": "1. odcinek",
              "en": "1. odcinek",
              "de": "1. odcinek"
            },
            "val": {
              "pl": "Yining → Ürümqi (~11 €, ~8 h, pociąg K/T)",
              "en": "Yining → Ürümqi (~€11, ~8 h, K/T train)",
              "de": "Yining → Ürümqi (~11 €, ~8 Std., K/T-Zug)"
            }
          },
          {
            "label": {
              "pl": "2. odcinek",
              "en": "2. odcinek",
              "de": "2. odcinek"
            },
            "val": {
              "pl": "Ürümqi → Turpan North (~7 €, ~1 h, szybki D)",
              "en": "Ürümqi → Turpan North (~7 €, ~1 h, szybki D)",
              "de": "Ürümqi → Turpan North (~7 €, ~1 h, szybki D)"
            }
          }
        ],
        "change": {
          "pl": "💡 Kup oba bilety razem na <a href=\"https://www.trip.com\" target=\"_blank\">Trip.com</a> lub 12306 · Przy przesiadce w Ürümqi masz ok. 1 h — bagaż zostaje przy Tobie, nie trzeba odprawy · <a href=\"https://maps.app.goo.gl/4tRQmZN9nwdqcX517\" target=\"_blank\">📍 Ürümqi Railway Station</a>",
          "en": "💡 Buy both tickets together on <a href=\"https://www.trip.com\" target=\"_blank\">Trip.com</a> or 12306 · Layover in Ürümqi is ~1 h — luggage stays with you, no check-in needed · <a href=\"https://maps.app.goo.gl/4tRQmZN9nwdqcX517\" target=\"_blank\">📍 Ürümqi Railway Station</a>",
          "de": "💡 Beide Tickets zusammen auf <a href=\"https://www.trip.com\" target=\"_blank\">Trip.com</a> oder 12306 kaufen · Umstieg Ürümqi ~1 h — Gepäck bleibt bei dir, kein Check-in nötig · <a href=\"https://maps.app.goo.gl/4tRQmZN9nwdqcX517\" target=\"_blank\">📍 Ürümqi Railway Station</a>"
        }
      }
    },
    {
      "num": 7,
      "date": {
        "pl": "7 sie",
        "en": "7 Aug",
        "de": "7. Aug"
      },
      "type": "china",
      "title": {
        "pl": "Turpan — Jiaohe i Jaskinie Bezeklik",
        "en": "Turpan — Jiaohe and Bezeklik Caves",
        "de": "Turpan — Jiaohe und Bezeklik-Höhlen"
      },
      "loc": {
        "pl": "Jiaohe (Orientalne Pompeje) · Jaskinie Bezeklik · Minaret Emina",
        "en": "Jiaohe (Orientalne Pompeje) · Jaskinie Bezeklik · Minaret Emina",
        "de": "Jiaohe (Orientalne Pompeje) · Jaskinie Bezeklik · Minaret Emina"
      },
      "cost": "~45 €",
      "costNote": {
        "pl": "Wstępy ~25 €",
        "en": "Entries ~€25",
        "de": "Eintritt ~25 €"
      },
      "body": {
        "pl": "Jiaohe: 2300-letnie miasto z cegły mułowej na plateau. Bezeklik: jaskinie buddyjskie z freskami VI–XIV w. Minaret Emina — najwyższy minaret w Chinach (44 m, 1777 r.). Wieczór: targ winogronowy.",
        "en": "Jiaohe: a 2,300-year-old mud-brick city on a plateau. Bezeklik: Buddhist cave temples with 6th–14th-century frescoes. Emin Minaret — tallest in China (44 m, 1777). Evening: the grape market.",
        "de": "Jiaohe: eine 2.300 Jahre alte Lehmziegelstadt auf einem Plateau. Bezeklik: buddhistische Höhlentempel mit Fresken aus dem 6.–14. Jh. Emin-Minarett — das höchste Chinas (44 m, 1777). Abends: Weintraubenmarkt."
      },
      "chips": [
        {
          "kind": "silk",
          "text": {
            "pl": "Jedwabny Szlak",
            "en": "Jedwabny Szlak",
            "de": "Jedwabny Szlak"
          }
        },
        {
          "kind": "culture",
          "text": {
            "pl": "Ruiny",
            "en": "Ruiny",
            "de": "Ruiny"
          }
        },
        {
          "kind": "culture",
          "text": {
            "pl": "Buddyzm",
            "en": "Buddhism",
            "de": "Buddhismus"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=turpan+grape+valley+fresh+grapes+hundred+varieties+photos&tbm=isch",
          "text": {
            "pl": "🍇 Winogrona turpańskie — setki odmian, słodsze niż gdziekolwiek",
            "en": "🍇 Turpan grapes — hundreds of varieties, sweeter than anywhere",
            "de": "🍇 Turpaner Weintrauben — hunderte Sorten, süßer als überall"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=turpan+laghman+noodles+raisins+dried+fruit+xinjiang+photos&tbm=isch",
          "text": {
            "pl": "🍜 Laghman turpański — z rodzynkami i suszonymi owocami",
            "en": "🍜 Turpan laghman — with raisins and dried fruit",
            "de": "🍜 Turpaner Laghman — mit Rosinen und Trockenfrüchten"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xinjiang+samsa+lamb+baked+dumplings+tandoor+photos&tbm=isch",
          "text": {
            "pl": "🥐 Samsa — pieczone paszteciki z baraniną z tandooru",
            "en": "🥐 Samsa — baked lamb pastries from the tandoor",
            "de": "🥐 Samsa — gebackene Lammtaschen aus dem Tandoor"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=hami+melon+xinjiang+sweet+yellow+photos&tbm=isch",
          "text": {
            "pl": "🍈 Melon Hami — najsłodszy melon świata",
            "en": "🍈 Hami melon — the sweetest melon in the world",
            "de": "🍈 Hami-Melone — die süßeste Melone der Welt"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=turpan+uyghur+grape+wine+local+photos&tbm=isch",
          "text": {
            "pl": "🍷 Wino turpańskie — produkowane od czasów Jedwabnego Szlaku",
            "en": "🍷 Turpan wine — produced since Silk Road times",
            "de": "🍷 Turpaner Wein — seit der Seidenstraße produziert"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=jiaohe+ancient+ruins+turpan+plateau+aerial+photos&tbm=isch",
          "text": {
            "pl": "🏛️ Ruiny Jiaohe — „Orientalne Pompeje\"",
            "en": "🏛️ Ruiny Jiaohe — „Orientalne Pompeje\"",
            "de": "🏛️ Ruiny Jiaohe — „Orientalne Pompeje\""
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=bezeklik+thousand+buddha+caves+murals+turpan+photos&tbm=isch",
          "text": {
            "pl": "🙏 Jaskinie Bezeklik — freski buddyjskie",
            "en": "🙏 Jaskinie Bezeklik — freski buddyjskie",
            "de": "🙏 Jaskinie Bezeklik — freski buddyjskie"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=turpan+emin+minaret+mosque+1777+photos&tbm=isch",
          "text": {
            "pl": "🕌 Minaret Emina — najwyższy minaret Chin",
            "en": "🕌 Emin Minaret — tallest minaret in China",
            "de": "🕌 Emin-Minarett — höchstes Minarett Chinas"
          }
        },
        {
          "kind": "sleep",
          "url": "https://www.trip.com/w/ieU7kzjF2V2",
          "text": {
            "pl": "🛏️ Hotel w Turpanie",
            "en": "🛏️ Hotel in Turpan",
            "de": "🛏️ Hotel in Turpan"
          }
        }
      ],
      "fact": {
        "type": "history",
        "icon": "🖼️",
        "title": {
          "pl": "Freski Bezeklik w Berlinie",
          "en": "Freski Bezeklik w Berlinie",
          "de": "Freski Bezeklik w Berlinie"
        },
        "text": {
          "pl": "Na początku XX w. niemieccy archeolodzy von Le Coq i Grünwedel wycięli ze ścian jaskiń tysiące fragmentów fresków i wywieźli do Berlina. Dzisiaj większość zbiorów bezeklikańskich jest poza Chinami — w berlińskim Museum für Asiatische Kunst i Metropolitan Museum w Nowym Jorku.",
          "en": "In the early 20th century, German archaeologists cut thousands of fresco fragments from the cave walls and took them to Berlin. Today most of the Bezeklik collection is outside China — at the Museum für Asiatische Kunst in Berlin and the Metropolitan Museum in New York.",
          "de": "Anfang des 20. Jh. schnitten deutsche Archäologen Tausende Fresken aus den Höhlen und brachten sie nach Berlin. Der Großteil der Bezeklik-Sammlung ist heute außerhalb Chinas — im Museum für Asiatische Kunst Berlin und im Metropolitan Museum New York."
        }
      }
    },
    {
      "num": 8,
      "date": {
        "pl": "8 sie",
        "en": "8 Aug",
        "de": "8. Aug"
      },
      "type": "china",
      "title": {
        "pl": "Turpan — Gaochang, Ogniste Góry, Karez → pociąg",
        "en": "Turpan — Gaochang, Flaming Mountains, Karez → train",
        "de": "Turpan — Gaochang, Flaming Mountains, Karez → Zug"
      },
      "loc": {
        "pl": "Gaochang · Flaming Mountains · Karez → Turpan North → Jiayuguan",
        "en": "Gaochang · Flaming Mountains · Karez → Turpan North → Jiayuguan",
        "de": "Gaochang · Flaming Mountains · Karez → Turpan North → Jiayuguan"
      },
      "cost": "~80 €",
      "costNote": {
        "pl": "Wstępy + bilet pociąg",
        "en": "Entries + train ticket",
        "de": "Eintritt + Zugticket"
      },
      "body": {
        "pl": "Rano: Gaochang (stolica Kaganatu Ujgurów VII–XIII w.), Ogniste Góry (do 70°C na skałach!), system Karez. Po południu pociąg do Jiayuguan (~5h). Wyruszyć wcześnie!",
        "en": "Morning: Gaochang (Uyghur Khanate capital, 7th–13th c.), Flaming Mountains (rocks reach 70°C!), Karez irrigation system. Afternoon train to Jiayuguan (~5 hrs). Start early!",
        "de": "Morgens: Gaochang (Hauptstadt des Uigurischen Khanats, 7.–13. Jh.), Flammende Berge (Felsen bis 70°C!), Karez-Bewässerungssystem. Nachmittags Zug nach Jiayuguan (~5 Std.). Früh aufbrechen!"
      },
      "chips": [
        {
          "kind": "silk",
          "text": {
            "pl": "Karawanowe miasta",
            "en": "Karawanowe miasta",
            "de": "Karawanowe miasta"
          }
        },
        {
          "kind": "nature",
          "text": {
            "pl": "Pustynia",
            "en": "Desert",
            "de": "Wüste"
          }
        },
        {
          "kind": "transit",
          "text": {
            "pl": "Wieczór: pociąg",
            "en": "Evening: train",
            "de": "Abend: Zug"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xinjiang+dapanji+big+plate+chicken+spicy+noodles+photos&tbm=isch",
          "text": {
            "pl": "🍗 Dapanji — kurczak na wielkim talerzu z makaronem",
            "en": "🍗 Dapanji — big-plate chicken with noodles",
            "de": "🍗 Dapanji — Großteller-Hähnchen mit Nudeln"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=turpan+roasted+mutton+leg+jiazi+rou+photos&tbm=isch",
          "text": {
            "pl": "🦵 Pieczony udziec jagnięcy — tradycja Czyngis-chana",
            "en": "🦵 Roast leg of lamb — Genghis Khan tradition",
            "de": "🦵 Gebratene Lammkeule — Dschingis-Khan-Tradition"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=turpan+grape+raisin+dried+market+variety+photos&tbm=isch",
          "text": {
            "pl": "🍇 Rodzynki turpańskie — kupowane wiadrami (do domu!)",
            "en": "🍇 Turpan raisins — bought by the bucket (bring home!)",
            "de": "🍇 Turpaner Rosinen — eimer­weise gekauft (als Mitbringsel!)"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xinjiang+cold+beer+wusu+summer+heat+photos&tbm=isch",
          "text": {
            "pl": "🍺 Piwo Wusu — lokalne xinjiańskie (po 40°C upale)",
            "en": "🍺 Wusu Beer — local Xinjiang beer (after 40°C heat)",
            "de": "🍺 Wusu-Bier — lokales Xinjiang-Bier (nach 40°C Hitze)"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=gaochang+ruins+ancient+uyghur+city+photos&tbm=isch",
          "text": {
            "pl": "🏛️ Ruiny Gaochang — stolica Kaganatu Ujgurów",
            "en": "🏛️ Gaochang Ruins — capital of the Uyghur Khaganate",
            "de": "🏛️ Ruinen Gaochang — Hauptstadt des uigurischen Khaganats"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=flaming+mountains+turpan+red+rock+heat+photos&tbm=isch",
          "text": {
            "pl": "🔥 Ogniste Góry — do 70°C na powierzchni skał",
            "en": "🔥 Flaming Mountains — up to 70°C on the rock surface",
            "de": "🔥 Flaming Mountains — bis 70°C auf der Felsoberfläche"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=karez+underground+irrigation+system+turpan+photos&tbm=isch",
          "text": {
            "pl": "💧 System Karez — 1600 km podziemnych kanałów bez prądu",
            "en": "💧 Karez System — 1,600 km of underground canals without electricity",
            "de": "💧 Karez-System — 1.600 km unterirdische Kanäle ohne Strom"
          }
        }
      ],
      "transit": {
        "route": {
          "pl": "🚄 Turpan North → Jiayuguan South",
          "en": "🚄 Turpan North → Jiayuguan South",
          "de": "🚄 Turpan North → Jiayuguan South"
        },
        "total": {
          "pl": "~3,5 h",
          "en": "~3,5 h",
          "de": "~3,5 h"
        },
        "rows": [
          {
            "label": {
              "pl": "Odjazd",
              "en": "Odjazd",
              "de": "Odjazd"
            },
            "val": {
              "pl": "<strong>Sa 8.8 · 12:26</strong> · Tulufanbei (Turpan Północny) <span class=\"booked-badge\">✓ zarezerwowane</span>",
              "en": "<strong>Sa 8.8 · 12:26</strong> · Tulufanbei (Turpan North) <span class=\"booked-badge\">✓ booked</span>",
              "de": "<strong>Sa 8.8 · 12:26</strong> · Tulufanbei (Turpan Nord) <span class=\"booked-badge\">✓ gebucht</span>"
            }
          },
          {
            "label": {
              "pl": "Przyjazd",
              "en": "Przyjazd",
              "de": "Przyjazd"
            },
            "val": {
              "pl": "~16:00 · Jiayuguannan (Jiayuguan Południe)",
              "en": "~16:00 · Jiayuguannan (Jiayuguan South)",
              "de": "~16:00 · Jiayuguannan (Jiayuguan Süd)"
            }
          },
          {
            "label": {
              "pl": "Środek",
              "en": "Środek",
              "de": "Środek"
            },
            "val": {
              "pl": "Pociąg D (2. klasa)",
              "en": "D-train (2nd class)",
              "de": "D-Zug (2. Klasse)"
            }
          },
          {
            "label": {
              "pl": "Koszt",
              "en": "Koszt",
              "de": "Koszt"
            },
            "val": {
              "pl": "~25 €",
              "en": "~25 €",
              "de": "~25 €"
            }
          }
        ],
        "change": null
      },
      "fact": {
        "type": "wow",
        "icon": "💧",
        "title": {
          "pl": "Karez — 2000-letnia inżynieria bez elektryczności",
          "en": "Karez — 2,000-year-old engineering without electricity",
          "de": "Karez — 2.000 Jahre alte Ingenieurskunst ohne Strom"
        },
        "text": {
          "pl": "System Karez to ponad 1600 km podziemnych kanałów wykutych ręcznie, prowadzących wodę z lodowców gór do pustyni wyłącznie siłą grawitacji. Działa do dziś bez ani jednej pompy. UNESCO uznaje go za jeden z największych osiągnięć inżynierskich starożytności.",
          "en": "The Karez system is over 1,600 km of hand-carved underground channels carrying water from glaciers to the desert by gravity alone. It operates to this day.",
          "de": "Das Karez-System umfasst über 1.600 km handgemeißelte unterirdische Kanäle, die Wasser von Gletschern zur Wüste allein durch Schwerkraft leiten. Es funktioniert bis heute."
        }
      }
    },
    {
      "num": 9,
      "date": {
        "pl": "9 sie",
        "en": "9 Aug",
        "de": "9. Aug"
      },
      "type": "gansu",
      "title": {
        "pl": "Jiayuguan — Twierdza i Wisząca Ściana",
        "en": "Jiayuguan — Fortress and Overhanging Wall",
        "de": "Jiayuguan — Festung und Überhängende Mauer"
      },
      "loc": {
        "pl": "Twierdza Jiayuguan · Overhanging Great Wall · Groby Wei-Jin",
        "en": "Twierdza Jiayuguan · Overhanging Great Wall · Groby Wei-Jin",
        "de": "Twierdza Jiayuguan · Overhanging Great Wall · Groby Wei-Jin"
      },
      "cost": "~55 €",
      "costNote": {
        "pl": "Wstępy + hotel",
        "en": "Entries + hotel",
        "de": "Eintritt + Hotel"
      },
      "body": {
        "pl": "Twierdza Jiayuguan (XIV w.) — zachodnia brama Chin i Jedwabnego Szlaku, przez 600 lat tu kończyła się cywilizacja. Wisząca Ściana wspina się stromym grzbietem pod kątem 45°. Podziemna galeria malowideł grobowych Wei–Jin (3–4 w.). Wieczór: kolacja i nocleg.",
        "en": "Jiayuguan Fortress (14th c.) — the western gate of China and the Silk Road; for 600 years, civilisation ended here. The Overhanging Wall climbs a 45° ridge. Underground gallery of Wei–Jin tomb murals (3rd–4th c.). Evening: dinner and overnight.",
        "de": "Festung Jiayuguan (14. Jh.) — das westliche Tor Chinas und der Seidenstraße; 600 Jahre lang endete hier die Zivilisation. Die Hängende Mauer erklimmt einen 45°-Grat. Unterirdische Galerie der Wei-Jin-Grabmalereien (3.–4. Jh.). Abends: Abendessen und Übernachtung."
      },
      "chips": [
        {
          "kind": "culture",
          "text": {
            "pl": "Wielki Mur UNESCO",
            "en": "Wielki Mur UNESCO",
            "de": "Wielki Mur UNESCO"
          }
        },
        {
          "kind": "history",
          "text": {
            "pl": "Forteca",
            "en": "Forteca",
            "de": "Forteca"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=jiayuguan+gansu+lamb+noodles+local+food+photos&tbm=isch",
          "text": {
            "pl": "🍜 Makaron jagnięcy Gansu — kluski ręcznie ciągnięte",
            "en": "🍜 Gansu lamb noodles — hand-pulled noodles",
            "de": "🍜 Gansu-Lammgericht — handgezogene Nudeln"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=gansu+beef+noodles+lanzhou+style+photos&tbm=isch",
          "text": {
            "pl": "🥩 Wołowina z makaronem — styl Lanzhou (najsłynniejsza zupa Chin)",
            "en": "🥩 Beef noodles — Lanzhou style (China's most famous soup)",
            "de": "🥩 Rindfleischnudeln — Lanzhou-Stil (Chinas berühmteste Suppe)"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=jiayuguan+street+food+bbq+skewers+night+photos&tbm=isch",
          "text": {
            "pl": "🍢 Szaszłyki Jiayuguan — wieczorna ulica grillowa",
            "en": "🍢 Jiayuguan skewers — evening grill street",
            "de": "🍢 Jiayuguan-Spieße — abendliche Grillstraße"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=gansu+flatbread+shaobing+sesame+photos&tbm=isch",
          "text": {
            "pl": "🫓 Shaobing — prażony chleb sezamowy Gansu",
            "en": "🫓 Shaobing — toasted sesame bread from Gansu",
            "de": "🫓 Shaobing — geröstetes Sesamgebäck aus Gansu"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=jiayuguan+pass+fortress+great+wall+western+end+photos&tbm=isch",
          "text": {
            "pl": "🏯 Twierdza Jiayuguan — zachodni kraniec Muru Chińskiego",
            "en": "🏯 Jiayuguan Fortress — western end of the Great Wall",
            "de": "🏯 Festung Jiayuguan — westliches Ende der Großen Mauer"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=jiayuguan+overhanging+great+wall+cliff+photos&tbm=isch",
          "text": {
            "pl": "⛰️ Wisząca Ściana — Mur wspinający się pionowym urwiskiem",
            "en": "⛰️ Overhanging Wall — the Wall climbing a vertical cliff",
            "de": "⛰️ Überhängende Mauer — die Mauer an einem senkrechten Fels"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=jiayuguan+wei+jin+underground+tombs+murals+photos&tbm=isch",
          "text": {
            "pl": "🎨 Groby Wei-Jin — podziemna galeria malowideł (III–V w.)",
            "en": "🎨 Wei-Jin Tombs — underground fresco gallery (3rd–5th century)",
            "de": "🎨 Wei-Jin-Gräber — unterirdische Freskengalerie (3.–5. Jh.)"
          }
        },
        {
          "kind": "sleep",
          "url": "https://www.trip.com/w/MdfLn5tF2V2",
          "text": {
            "pl": "🛏️ Hotel w Jiayuguan",
            "en": "🛏️ Hotel in Jiayuguan",
            "de": "🛏️ Hotel in Jiayuguan"
          }
        }
      ],
      "fact": {
        "type": "history",
        "icon": "🏯",
        "title": {
          "pl": "Jiayuguan — „Pierwsze Przejście pod Niebem&quot;",
          "en": "Jiayuguan — 'First Pass Under Heaven'",
          "de": "Jiayuguan — „Erster Pass unter dem Himmel&quot;"
        },
        "text": {
          "pl": "Przez ponad 600 lat ta twierdza z dynastii Ming (XIV w.) była dosłownym końcem Chin i cywilizacji dla każdego, kto ją przekraczał. Żołnierze skazani na służbę poza murem wiedzieli, że mogą już nigdy nie wrócić. Stąd pochodzi chiński idiom „przejść przez bramę\" — oznaczający pożegnanie na zawsze.",
          "en": "For over 600 years, this Ming dynasty fortress (14th century) was the literal end of China and civilisation for all who crossed it. Soldiers sentenced to guard it knew they would never return.",
          "de": "Über 600 Jahre lang war diese Ming-Festung (14. Jh.) das buchstäbliche Ende Chinas und der Zivilisation für jeden, der sie überquerte. Soldaten, die zur Bewachung verurteilt wurden, wussten, dass sie nie zurückkehren würden."
        }
      }
    },
    {
      "num": 10,
      "date": {
        "pl": "10 sie",
        "en": "10 Aug",
        "de": "10. Aug"
      },
      "type": "gansu",
      "title": {
        "pl": "Zhangye — Góry Tęczowe i Leżący Budda",
        "en": "Zhangye — Rainbow Mountains & Reclining Buddha",
        "de": "Zhangye — Regenbogenberge & Liegender Buddha"
      },
      "loc": {
        "pl": "Zhangye Danxia Geopark · Świątynia Dafo (34,5 m Budda)",
        "en": "Zhangye Danxia Geopark · Dafo Temple (34.5 m Buddha)",
        "de": "Zhangye Danxia Geopark · Dafo Temple (34.5 m Buddha)"
      },
      "cost": "~55 €",
      "costNote": {
        "pl": "Wstępy + hotel",
        "en": "Entries + hotel",
        "de": "Eintritt + Hotel"
      },
      "body": {
        "pl": "Zhangye Danxia — multikolorowe skały piaskowcowe wyglądające jak namalowane akwarelą (film Mulan, Wielki Mur z Mattem Damonem). Najlepsze o wschodzie lub zachodzie słońca. Świątynia Dafo: 34,5-metrowy leżący Budda z dynastii Western Xia (1098 r.).",
        "en": "Zhangye Danxia — multicoloured sandstone formations that look painted in watercolour (used in Mulan, The Great Wall with Matt Damon). Best at sunrise or sunset. Dafo Temple: 34.5 m reclining Buddha from the Western Xia dynasty (1098).",
        "de": "Zhangye Danxia — bunte Sandsteinformationen wie mit Aquarell bemalt (Mulan, The Great Wall mit Matt Damon). Schönste bei Sonnenauf- oder -untergang. Dafo-Tempel: 34,5 m liegender Buddha aus der Western-Xia-Dynastie (1098)."
      },
      "chips": [
        {
          "kind": "nature",
          "text": {
            "pl": "Danxia UNESCO",
            "en": "Danxia UNESCO",
            "de": "Danxia UNESCO"
          }
        },
        {
          "kind": "culture",
          "text": {
            "pl": "Buddyzm",
            "en": "Buddhism",
            "de": "Buddhismus"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=zhangye+gansu+beef+noodles+local+restaurant+photos&tbm=isch",
          "text": {
            "pl": "🍜 Wołowina z makaronem — specjalność Zhangye",
            "en": "🍜 Beef noodles — Zhangye speciality",
            "de": "🍜 Rindfleischnudeln — Spezialität Zhangyes"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=gansu+lamb+stew+braised+local+food+photos&tbm=isch",
          "text": {
            "pl": "🥘 Duszona jagnięcina Gansu — sycące danie stepowe",
            "en": "🥘 Gansu braised lamb — hearty steppe dish",
            "de": "🥘 Geschmortes Gansu-Lamm — herzhaftes Steppengericht"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=zhangye+street+food+dumplings+local+market+photos&tbm=isch",
          "text": {
            "pl": "🥟 Pierogi z ulicznego straganu Zhangye",
            "en": "🥟 Pierogi z ulicznego straganu Zhangye",
            "de": "🥟 Pierogi z ulicznego straganu Zhangye"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=gansu+sesame+flatbread+shaobing+street+photos&tbm=isch",
          "text": {
            "pl": "🫓 Shaobing z sezamem — pieczywo stepowe Gansu",
            "en": "🫓 Shaobing z sezamem — pieczywo stepowe Gansu",
            "de": "🫓 Shaobing z sezamem — pieczywo stepowe Gansu"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=zhangye+night+market+local+food+evening+photos&tbm=isch",
          "text": {
            "pl": "🌙 Nocny targ Zhangye — ostatni wieczór przed Xi'anem",
            "en": "🌙 Zhangye Night Market — last evening before Xi'an",
            "de": "🌙 Nachtmarkt Zhangye — letzter Abend vor Xi'an"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=zhangye+danxia+rainbow+mountains+colorful+rock+photos&tbm=isch",
          "text": {
            "pl": "🌈 Góry Tęczowe — multikolorowe skały Danxia",
            "en": "🌈 Rainbow Mountains — multicoloured Danxia rocks",
            "de": "🌈 Regenbogenberge — bunt gefärbte Danxia-Felsen"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=zhangye+danxia+sunrise+sunset+golden+hour+photos&tbm=isch",
          "text": {
            "pl": "🌅 Złota godzina w Danxia — o świcie lub zachodzie",
            "en": "🌅 Golden hour at Danxia — at sunrise or sunset",
            "de": "🌅 Goldene Stunde in Danxia — bei Sonnenauf- oder -untergang"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=zhangye+dafo+temple+giant+reclining+buddha+photos&tbm=isch",
          "text": {
            "pl": "🙏 Świątynia Dafo — 34,5 m leżący Budda (1098 r.)",
            "en": "🙏 Dafo Temple — 34.5 m reclining Buddha (1098 AD)",
            "de": "🙏 Dafo-Tempel — 34,5 m liegender Buddha (1098 n. Chr.)"
          }
        },
        {
          "kind": "sleep",
          "url": "https://www.trip.com/w/fL06GMvF2V2",
          "text": {
            "pl": "🛏️ Hotel w Zhangye",
            "en": "🛏️ Hotel in Zhangye",
            "de": "🛏️ Hotel in Zhangye"
          }
        }
      ],
      "fact": {
        "type": "wow",
        "icon": "🌈",
        "title": {
          "pl": "Góry Tęczowe — kinowe arcydzieło",
          "en": "Rainbow Mountains — a cinematic masterpiece",
          "de": "Regenbogenberge — ein kinematografisches Meisterwerk"
        },
        "text": {
          "pl": "Zhangye Danxia (张掖丹霞) — wielokolorowe formacje piaskowcowe przez miliony lat wyrzeźbione przez wiatr i deszcz. Wyróżnienie na 74. Festiwalu Filmowym w Wenecji jako jedno z najpiękniejszych miejsc zdjęciowych świata. Tu kręcono animację Mulan (Disney) i film „Wielki Mur\" z Mattem Damonem.",
          "en": "Zhangye Danxia (张掖丹霞) — multicoloured sandstone formations carved by wind and rain over millions of years. Recognised at the 74th Venice Film Festival.",
          "de": "Zhangye Danxia (张掖丹霞) — bunte Sandsteinformationen, über Millionen Jahre durch Wind und Regen gemeißelt. Ausgezeichnet auf den 74. Filmfestspielen von Venedig."
        }
      }
    },
    {
      "num": 11,
      "date": {
        "pl": "11 sie",
        "en": "11 Aug",
        "de": "11. Aug"
      },
      "type": "transit",
      "title": {
        "pl": "Pociąg Zhangye → Xi'an",
        "en": "Train Zhangye → Xi'an",
        "de": "Zug Zhangye → Xi'an"
      },
      "loc": {
        "pl": "Zhangye West → Xi'an North · ~6,5 godz.",
        "en": "Zhangye West → Xi'an North · ~6.5 hrs",
        "de": "Zhangye West → Xi'an North · ~6.5 hrs"
      },
      "cost": "~35 €",
      "costNote": {
        "pl": "Bilet D-train 2kl",
        "en": "D-train ticket 2nd cl.",
        "de": "D-Zug Ticket 2. Kl."
      },
      "body": {
        "pl": "Ostatni odcinek Jedwabnego Szlaku — przez Korytarz Hexi prosto do dawnej stolicy Chin.",
        "en": "The final leg of the Silk Road — through the Hexi Corridor straight to the ancient capital of China.",
        "de": "Das letzte Stück der Seidenstraße — durch den Hexi-Korridor direkt in die alte Hauptstadt Chinas."
      },
      "chips": [
        {
          "kind": "transit",
          "text": {
            "pl": "Dzień pociągiem",
            "en": "Train day",
            "de": "Train day"
          }
        },
        {
          "kind": "city",
          "text": {
            "pl": "Przyjazd Xi'an wieczór",
            "en": "Arrive Xi'an evening",
            "de": "Ankunft Xi'an abends"
          }
        }
      ],
      "links": [],
      "transit": {
        "route": {
          "pl": "🚄 Zhangye → Xi'an",
          "en": "🚄 Zhangye → Xi'an",
          "de": "🚄 Zhangye → Xi'an"
        },
        "total": {
          "pl": "~6,5 h · bez przesiadki",
          "en": "~6,5 h · bez przesiadki",
          "de": "~6,5 h · bez przesiadki"
        },
        "rows": [
          {
            "label": {
              "pl": "Odjazd",
              "en": "Odjazd",
              "de": "Odjazd"
            },
            "val": {
              "pl": "<strong>Di 11.8 · 15:50</strong> · <a href=\"https://maps.app.goo.gl/3e6J6nFt7Nxbmdpw9\" target=\"_blank\">Zhangye West</a> <span class=\"booked-badge\">✓ zarezerwowane</span>",
              "en": "<strong>Di 11.8 · 15:50</strong> · <a href=\"https://maps.app.goo.gl/3e6J6nFt7Nxbmdpw9\" target=\"_blank\">Zhangye West</a> <span class=\"booked-badge\">✓ booked</span>",
              "de": "<strong>Di 11.8 · 15:50</strong> · <a href=\"https://maps.app.goo.gl/3e6J6nFt7Nxbmdpw9\" target=\"_blank\">Zhangye West</a> <span class=\"booked-badge\">✓ gebucht</span>"
            }
          },
          {
            "label": {
              "pl": "Przyjazd",
              "en": "Przyjazd",
              "de": "Przyjazd"
            },
            "val": {
              "pl": "~22:30 · <a href=\"https://maps.app.goo.gl/8xDtSJkbLHr5Aeq6A\" target=\"_blank\">Xi'an North</a>",
              "en": "~22:30 · <a href=\"https://maps.app.goo.gl/8xDtSJkbLHr5Aeq6A\" target=\"_blank\">Xi'an North</a>",
              "de": "~22:30 · <a href=\"https://maps.app.goo.gl/8xDtSJkbLHr5Aeq6A\" target=\"_blank\">Xi'an North</a>"
            }
          },
          {
            "label": {
              "pl": "Pociąg",
              "en": "Train",
              "de": "Zug"
            },
            "val": {
              "pl": "D-train (动车) 2. klasa · bez przesiadki",
              "en": "D-train (动车) 2. klasa · bez przesiadki",
              "de": "D-train (动车) 2. klasa · bez przesiadki"
            }
          },
          {
            "label": {
              "pl": "Koszt",
              "en": "Koszt",
              "de": "Koszt"
            },
            "val": {
              "pl": "~35 € (2. klasa) · rezerwuj z wyprzedzeniem",
              "en": "~35 € (2. klasa) · rezerwuj z wyprzedzeniem",
              "de": "~35 € (2. klasa) · rezerwuj z wyprzedzeniem"
            }
          }
        ],
        "change": {
          "pl": "💡 Kup bilet przez <a href=\"https://www.trip.com\" target=\"_blank\">Trip.com</a> · Z Xi'an North do centrum metro linia 2 (20 min, ~5 CNY) · <a href=\"https://maps.app.goo.gl/tz7rLg9bFxHsGyvS8\" target=\"_blank\">📍 Xi'an North Station na mapie</a>",
          "en": "💡 Book on <a href=\"https://www.trip.com\" target=\"_blank\">Trip.com</a> · Xi'an North → city centre: Metro Line 2 (20 min, ~5 CNY) · <a href=\"https://maps.app.goo.gl/tz7rLg9bFxHsGyvS8\" target=\"_blank\">📍 Xi'an North Station map</a>",
          "de": "💡 Ticket auf <a href=\"https://www.trip.com\" target=\"_blank\">Trip.com</a> buchen · Xi'an North → Zentrum: U-Bahn Linie 2 (20 Min., ~5 CNY) · <a href=\"https://maps.app.goo.gl/tz7rLg9bFxHsGyvS8\" target=\"_blank\">📍 Xi'an North Station Karte</a>"
        }
      }
    },
    {
      "num": 12,
      "date": {
        "pl": "12 sie",
        "en": "12 Aug",
        "de": "12. Aug"
      },
      "type": "xian",
      "title": {
        "pl": "Xi'an — Terakotowa Armia",
        "en": "Xi'an — Terracotta Army",
        "de": "Xi'an — Terrakottaarmee"
      },
      "loc": {
        "pl": "Muzeum Armii Terakotowej · Mauzoleum Qin Shi Huang",
        "en": "Terracotta Army Museum · Qin Shi Huang Mausoleum",
        "de": "Terracotta Army Museum · Qin Shi Huang Mausoleum"
      },
      "cost": "~55 €",
      "costNote": {
        "pl": "Wstęp + transport",
        "en": "Entry + transport",
        "de": "Eintritt + Transport"
      },
      "body": {
        "pl": "Odkryta w 1974 r. przez rolnika kopiącego studnię. Ponad 8000 żołnierzy, 670 koni i 130 rydwanów — każdy z unikalną twarzą. Prace wykopaliskowe trwają do dziś. Powrót do centrum, wieczór w dzielnicy muzułmańskiej.",
        "en": "Discovered in 1974 by a farmer digging a well. Over 8,000 warriors, 670 horses and 130 chariots — every face unique. Excavations continue to this day. Return to the city centre, evening in the Muslim Quarter.",
        "de": "1974 von einem Brunnen grabenden Bauern entdeckt. Über 8.000 Krieger, 670 Pferde und 130 Streitwagen — jedes Gesicht einzigartig. Ausgrabungen laufen bis heute. Rückkehr ins Stadtzentrum, Abend im Muslimviertel."
      },
      "chips": [
        {
          "kind": "culture",
          "text": {
            "pl": "UNESCO",
            "en": "UNESCO",
            "de": "UNESCO"
          }
        },
        {
          "kind": "history",
          "text": {
            "pl": "Dynastia Qin",
            "en": "Qin Dynasty",
            "de": "Qin Dynasty"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+roujiamo+pork+burger+street+food+photos&tbm=isch",
          "text": {
            "pl": "🥙 Roujiamo — „chiński hamburger&quot; z wieprzowiną (Xi'an street food)",
            "en": "🥙 Roujiamo — Chinese burger with pork (Xi'an street food)",
            "de": "🥙 Roujiamo — chinesischer Burger mit Schweinefleisch (Streetfood)"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+biang+biang+noodles+wide+belt+photos&tbm=isch",
          "text": {
            "pl": "🍜 Biang Biang Mian — szerokie pasy makaronu z chili i octem",
            "en": "🍜 Biang Biang Mian — szerokie pasy makaronu z chili i octem",
            "de": "🍜 Biang Biang Mian — szerokie pasy makaronu z chili i octem"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+muslim+quarter+food+street+night+photos&tbm=isch",
          "text": {
            "pl": "🌙 Nocny targ Huimin Jie — dzielnica muzułmańska",
            "en": "🌙 Huimin Jie Night Market — Muslim Quarter",
            "de": "🌙 Nachtmarkt Huimin Jie — Muslimisches Viertel"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+yangrou+paomo+lamb+flatbread+soup+photos&tbm=isch",
          "text": {
            "pl": "🍲 Yangrou Paomo — zupa jagnięca z rozdrobnionym chlebem",
            "en": "🍲 Yangrou Paomo — lamb soup with crumbled bread",
            "de": "🍲 Yangrou Paomo — Lammsuppe mit zerkrümeltem Brot"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+liangpi+cold+noodles+chili+photos&tbm=isch",
          "text": {
            "pl": "🥗 Liangpi — zimne kluski ryżowe z pastą chili",
            "en": "🥗 Liangpi — cold rice noodles with chilli paste",
            "de": "🥗 Liangpi — kalte Reisnudeln mit Chili-Paste"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=xian+terracotta+army+warriors+pit+1+photos&tbm=isch",
          "text": {
            "pl": "⚔️ Terakotowa Armia — Hala 1 z 6000 wojowników",
            "en": "⚔️ Terracotta Army — Hall 1 with 6,000 warriors",
            "de": "⚔️ Terrakottaarmee — Halle 1 mit 6.000 Kriegern"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=xian+terracotta+warriors+pit+2+horse+chariot+photos&tbm=isch",
          "text": {
            "pl": "🐎 Hala 2 — kawaleria i rydwany",
            "en": "🐎 Hala 2 — kawaleria i rydwany",
            "de": "🐎 Hala 2 — kawaleria i rydwany"
          }
        },
        {
          "kind": "sleep",
          "url": "https://www.booking.com/Share-ms3vL3U",
          "text": {
            "pl": "🛏️ Hotel w Xi'an",
            "en": "🛏️ Hotel in Xi'an",
            "de": "🛏️ Hotel in Xi'an"
          }
        }
      ],
      "fact": {
        "type": "history",
        "icon": "⚔️",
        "title": {
          "pl": "Terakotowa Armia — odkryta przez przypadek",
          "en": "Terakotowa Armia — odkryta przez przypadek",
          "de": "Terakotowa Armia — odkryta przez przypadek"
        },
        "text": {
          "pl": "W 1974 roku rolnik Yang Zhifa kopał studnię i trafił na głowę terakotowego wojownika. Przez 2200 lat nikt nie wiedział, że pod ziemią leży cała armia cesarza Qin Shi Huanga. Szacuje się, że odkopano mniej niż 30% kompleksu — prace trwają. Yang Zhifa dożył 86 lat jako lokalny bohater i podpisywał książki o odkryciu.",
          "en": "In 1974, farmer Yang Zhifa was digging a well and struck the head of a terracotta warrior. For 2,200 years no one knew that an entire army lay buried underground — 8,000 figures, each with a unique face.",
          "de": "1974 grub Bauer Yang Zhifa einen Brunnen und stieß auf den Kopf eines Terrakottakriegers. 2.200 Jahre lang wusste niemand, dass eine ganze Armee unter der Erde lag — 8.000 Figuren, jede mit einem einzigartigen Gesicht."
        }
      }
    },
    {
      "num": 13,
      "date": {
        "pl": "13 sie",
        "en": "13 Aug",
        "de": "13. Aug"
      },
      "type": "xian",
      "title": {
        "pl": "Xi'an — Stare Miasto, Mur i Wielki Meczet",
        "en": "Xi'an — Old Town, City Wall & Great Mosque",
        "de": "Xi'an — Altstadt, Stadtmauer & Große Moschee"
      },
      "loc": {
        "pl": "Mur miejski · Wielka Meczet · Dzielnica muzułmańska · Muzeum Shaanxi",
        "en": "City walls · Great Mosque · Muslim Quarter · Shaanxi Museum",
        "de": "Stadtmauer · Große Moschee · Muslimisches Viertel · Shaanxi-Museum"
      },
      "cost": "~45 €",
      "costNote": {
        "pl": "Wstępy + rowery",
        "en": "Entries + bikes",
        "de": "Eintritt + Fahrräder"
      },
      "body": {
        "pl": "Rower na murze miejskim (14 km, kompletny obwód) — widok na stare miasto. Wielka Meczet (742 r.) — architektura chińsko-islamska, działa do dziś. Muzeum Shaanxi: ponad 370 tys. eksponatów, w tym „Złoty Czajnik\".",
        "en": "Cycling the city wall (14 km, full circuit) — views over the old city. Great Mosque (742 AD) — Chinese–Islamic architecture, still active. Shaanxi History Museum: over 370,000 artefacts including the Golden Pot.",
        "de": "Fahrrad auf der Stadtmauer (14 km, voller Rundkurs) — Blick über die Altstadt. Große Moschee (742 n. Chr.) — chinesisch-islamische Architektur, noch heute aktiv. Shaanxi-Geschichtsmuseum: über 370.000 Exponate, darunter der Goldene Topf."
      },
      "chips": [
        {
          "kind": "culture",
          "text": {
            "pl": "Historia",
            "en": "History",
            "de": "Geschichte"
          }
        },
        {
          "kind": "city",
          "text": {
            "pl": "Stare Miasto",
            "en": "Stare Miasto",
            "de": "Stare Miasto"
          }
        },
        {
          "kind": "silk",
          "text": {
            "pl": "Jedwabny Szlak",
            "en": "Jedwabny Szlak",
            "de": "Jedwabny Szlak"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+dumpling+banquet+tang+dynasty+photos&tbm=isch",
          "text": {
            "pl": "🥟 Bankiet Pierogów — 20 odmian pierogów z dynastii Tang",
            "en": "🥟 Dumpling Banquet — 20 varieties of Tang dynasty dumplings",
            "de": "🥟 Teigtaschen-Bankett — 20 Sorten Teigtaschen aus der Tang-Dynastie"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+muslim+quarter+skewers+lamb+persimmon+cake+photos&tbm=isch",
          "text": {
            "pl": "🫐 Persimmon Cake — placki z kaki, specjalność Xi'anu",
            "en": "🫐 Persimmon Cake — persimmon flatbread, Xi'an speciality",
            "de": "🫐 Persimmon Cake — Kakiplätzchen, Spezialität Xi'ans"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+roujiamo+different+fillings+street+photos&tbm=isch",
          "text": {
            "pl": "🥙 Roujiamo z różnymi nadzieniami — wieprzowina, jagnięcina",
            "en": "🥙 Roujiamo with various fillings — pork, lamb",
            "de": "🥙 Roujiamo mit verschiedenen Füllungen — Schwein, Lamm"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+sweet+rice+cake+chinese+dessert+photos&tbm=isch",
          "text": {
            "pl": "🍡 Słodkie placki ryżowe Xi'an — uliczna przekąska dynastii Tang",
            "en": "🍡 Xi'an sweet rice cakes — Tang dynasty street snack",
            "de": "🍡 Süße Reiskuchen Xi'an — Straßensnack der Tang-Dynastie"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=xian+ancient+city+wall+bike+aerial+photos&tbm=isch",
          "text": {
            "pl": "🚴 Mur miejski na rowerze — 14 km kompletnego obwodu",
            "en": "🚴 Mur miejski na rowerze — 14 km kompletnego obwodu",
            "de": "🚴 Mur miejski na rowerze — 14 km kompletnego obwodu"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=xian+great+mosque+huajue+lane+photos&tbm=isch",
          "text": {
            "pl": "🕌 Wielka Meczet Xi'an (742 r.) — chińsko-islamska architektura",
            "en": "🕌 Great Mosque of Xi'an (742 AD) — Sino-Islamic architecture",
            "de": "🕌 Große Moschee Xi'an (742 n. Chr.) — chinesisch-islamische Architektur"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=xian+shaanxi+history+museum+tang+dynasty+photos&tbm=isch",
          "text": {
            "pl": "🏛️ Muzeum Shaanxi — 370 tys. eksponatów, skarby dynastii Tang",
            "en": "🏛️ Shaanxi Museum — 370,000 exhibits, Tang dynasty treasures",
            "de": "🏛️ Shaanxi-Museum — 370.000 Exponate, Schätze der Tang-Dynastie"
          }
        }
      ],
      "fact": {
        "type": "wow",
        "icon": "🏯",
        "title": {
          "pl": "Xi'an — miasto pod 13 dynastiami",
          "en": "Xi'an — miasto pod 13 dynastiami",
          "de": "Xi'an — miasto pod 13 dynastiami"
        },
        "text": {
          "pl": "Xi'an (dawniej Chang'an) było stolicą Chin przez ponad 1100 lat i 13 dynastii, w tym dynastię Han i Tang — złoty wiek Jedwabnego Szlaku. W szczytowym okresie dynastii Tang (VII–X w.) Chang'an miało ok. 1 miliona mieszkańców i było największym miastem świata. Stąd wychodziły karawany z jedwabiem w kierunku Persji i Rzymu.",
          "en": "Xi'an (formerly Chang'an) was China's capital for over 1,100 years under 13 dynasties, including Han and Tang — the golden age of the Silk Road. At its peak it was the largest city in the world with about 1 million inhabitants.",
          "de": "Xi'an (früher Chang'an) war über 1.100 Jahre lang die Hauptstadt Chinas unter 13 Dynastien, darunter Han und Tang — das goldene Zeitalter der Seidenstraße. Auf dem Höhepunkt war es mit ca. 1 Million Einwohnern die größte Stadt der Welt."
        }
      }
    },
    {
      "num": 14,
      "date": {
        "pl": "14 sie",
        "en": "14 Aug",
        "de": "14. Aug"
      },
      "type": "rest",
      "title": {
        "pl": "Xi'an — Wolny poranek · Odlot wieczorem",
        "en": "Xi'an — Free morning · Evening departure",
        "de": "Xi'an — Freier Vormittag · Abflug am Abend"
      },
      "loc": {
        "pl": "Xi'an · Lotnisko Xianyang → Wiedeń",
        "en": "Xi'an · Xianyang Airport → Vienna",
        "de": "Xi'an · Flughafen Xianyang → Wien"
      },
      "cost": "~15 €",
      "costNote": {
        "pl": "Transfer na lotnisko",
        "en": "Airport transfer",
        "de": "Flughafentransfer"
      },
      "body": {
        "pl": "Wolny poranek — ostatnie zakupy, kawiarnia, spacer. Lot MU5064 wylatuje o 13:30 z Xi'an Xianyang Airport — przyjazd do Wiednia 06:10 następnego dnia rano (15 sie).",
        "en": "Free morning — last shopping, coffee, stroll. Flight MU5064 departs 13:30 from Xi'an Xianyang Airport — arriving Vienna 06:10 the following morning (15 Aug).",
        "de": "Freier Morgen — letzter Einkauf, Kaffee, Spaziergang. Flug MU5064 ab 13:30 Uhr vom Flughafen Xi'an Xianyang — Ankunft Wien 06:10 Uhr am nächsten Morgen (15. Aug)."
      },
      "chips": [
        {
          "kind": "rest",
          "text": {
            "pl": "Dzień wylotu",
            "en": "Departure day",
            "de": "Abreisetag"
          }
        }
      ],
      "links": [
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+airport+breakfast+local+noodles+photos&tbm=isch",
          "text": {
            "pl": "🍜 Biang Biang na śniadanie — ostatnia miska przed lotem",
            "en": "🍜 Biang Biang for breakfast — last bowl before the flight",
            "de": "🍜 Biang Biang zum Frühstück — letzte Schüssel vor dem Flug"
          }
        },
        {
          "kind": "food",
          "url": "https://www.google.com/search?q=xian+souvenir+food+dates+walnuts+dried+fruit+photos&tbm=isch",
          "text": {
            "pl": "🎁 Pamiątkowe jedzenie — daktyle, orzechy, herbata Xi'an",
            "en": "🎁 Souvenir food — dates, nuts, Xi'an tea",
            "de": "🎁 Mitbringsel-Essen — Datteln, Nüsse, Xi'an-Tee"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=xian+small+wild+goose+pagoda+morning+photos&tbm=isch",
          "text": {
            "pl": "🛕 Pagoda Małej Dzikiej Gęsi — spokojny poranek",
            "en": "🛕 Small Wild Goose Pagoda — peaceful morning",
            "de": "🛕 Kleine Wildganspagode — ruhiger Morgen"
          }
        },
        {
          "kind": "sights",
          "url": "https://www.google.com/search?q=xian+tang+paradise+silk+road+souvenirs+shop+photos&tbm=isch",
          "text": {
            "pl": "🛍️ Sklepy z pamiątkami Jedwabnego Szlaku w centrum",
            "en": "🛍️ Silk Road souvenir shops in the centre",
            "de": "🛍️ Seidenstraßen-Souvenirläden im Stadtzentrum"
          }
        }
      ]
    }
  ]
};


// ── Übersetzungen für die statischen Sektionen ──────────────────
window.TRIP_STRINGS = {
  "t40": {
    "pl": "Plecak główny (35–45L)",
    "en": "Main backpack (35–45L)",
    "de": "Hauptrucksack (35–45 L)"
  },
  "em_kz_emb": {
    "pl": "Ambasada Austrii — Astana",
    "en": "Austrian Embassy — Astana",
    "de": "Österreichische Botschaft — Astana"
  },
  "t42": {
    "pl": "Kłódka do plecaka",
    "en": "Padlock for backpack",
    "de": "Vorhängeschloss für Rucksack"
  },
  "t67": {
    "pl": "Nasłonecznienie",
    "en": "Sunshine",
    "de": "Sonnenscheindauer"
  },
  "t_w_zhangye": {
    "pl": "Góry Tęczowe najpiękniejsze po deszczu — kolory intensywniejsze. Świt i zachód słońca obowiązkowe — złota godzina zmienia skały. Sierpień: szczyt sezonu.",
    "en": "Rainbow Mountains most beautiful after rain — colours more vivid. Sunrise and sunset are essential — the golden hour transforms the rocks. August: peak season.",
    "de": "Regenbogenberge am schönsten nach dem Regen — Farben intensiver. Sonnenauf- und -untergang sind Pflicht — die goldene Stunde verwandelt die Felsen. August: Hochsaison."
  },
  "t37": {
    "pl": "Leki na alergie (kurz stepowy)",
    "en": "Allergy medication (steppe dust)",
    "de": "Allergiemedikamente (Steppenstaub)"
  },
  "t94": {
    "pl": "Xinjiang",
    "en": "Xinjiang",
    "de": "Xinjiang"
  },
  "t_xinj_body": {
    "pl": "Kontrole policji i skanowanie dokumentów przy wejściu do atrakcji są normą. Okazuj paszport spokojnie na żądanie. Nie fotografuj policji, posterunków ani infrastruktury wojskowej. Meczety mogą wymagać rejestracji. Turystyka zagraniczna jest oficjalnie dozwolona.",
    "en": "Police checks and document scanning at attraction entrances are normal. Show your passport calmly when asked. Do not photograph police, checkpoints or military infrastructure. Mosques may require registration. Foreign tourism is officially permitted.",
    "de": "Polizeikontrollen und Dokumentenscans an Attraktionseingängen sind normal. Zeigen Sie Ihren Pass ruhig auf Anfrage. Fotografieren Sie keine Polizei, Kontrollpunkte oder Militärinfrastruktur. Moscheen können Registrierung erfordern. Auslandstourismus ist offiziell erlaubt."
  },
  "t47": {
    "pl": "Zatyczki do uszu (pociągi nocne)",
    "en": "Earplugs (night trains)",
    "de": "Ohrstopsel (Nachtzüge)"
  },
  "em_cn_title": {
    "pl": "🇨🇳 Chiny",
    "en": "🇨🇳 China",
    "de": "🇨🇳 China"
  },
  "t38": {
    "pl": "Recepty / leki stałe (z angielskim opisem)",
    "en": "Prescriptions / regular meds (with English description)",
    "de": "Rezepte / Dauermedikamente (mit englischer Beschreibung)"
  },
  "t103": {
    "pl": "Główna płatność w Chinach — zarejestruj i powiąż zagraniczną kartę przed wyjazdem. Sklepy, transport, jedzenie.",
    "en": "Main payment method in China — register and link your foreign card before departure. Shops, transport, food.",
    "de": "Wichtigste Zahlungsmethode in China — registrieren und ausländische Karte vor der Abreise verknüpfen. Shops, Transport, Essen."
  },
  "cur_note": {
    "pl": "💡 Kursy się zmieniają — sprawdź aktualne przed wyjazdem. W Chinach płać przez Alipay/WeChat (kurs lepszy niż w kantorze).",
    "en": "💡 Rates change — check before you go. In China pay via Alipay/WeChat (better rate than exchange booths).",
    "de": "💡 Kurse ändern sich — vor der Reise prüfen. In China per Alipay/WeChat zahlen (besser als Wechselstuben)."
  },
  "t43": {
    "pl": "Worek wodoodporny na elektronikę",
    "en": "Waterproof bag for electronics",
    "de": "Wasserdichter Beutel für Elektronik"
  },
  "t44": {
    "pl": "Opaska na paszport / nerka",
    "en": "Passport holder / money belt",
    "de": "Reisepasshülle / Bauchtasche"
  },
  "t78": {
    "pl": "Wypełniasz na przejściu granicznym Horgos przy wyjeździe do CN — zachowaj do powrotu do KZ (jeśli dotyczy)",
    "en": "Complete at the Khorgos border crossing when leaving for China — keep it until your return to Kazakhstan (if applicable)",
    "de": "Am Grenzübergang Khorgos beim Ausreisen nach China ausfüllen — bis zur Rückkehr nach Kasachstan aufbewahren (falls zutreffend)"
  },
  "t62": {
    "pl": "Charakter",
    "en": "Character",
    "de": "Charakter"
  },
  "t105": {
    "pl": "Alternatywa dla WeChat Pay — od 2023 r. akceptuje karty zagraniczne bez chińskiego numeru.",
    "en": "Alternative to WeChat Pay — since 2023 accepts foreign cards without a Chinese number.",
    "de": "Alternative zu WeChat Pay — seit 2023 akzeptiert ausländische Karten ohne chinesische Nummer."
  },
  "tr_col_when": {
    "pl": "Odjazd",
    "en": "Departure",
    "de": "Abfahrt"
  },
  "ph_help": {
    "pl": "Pomocy!",
    "en": "Help!",
    "de": "Hilfe!"
  },
  "ph_howmuch": {
    "pl": "Ile to kosztuje?",
    "en": "How much?",
    "de": "Wie viel kostet das?"
  },
  "tr_tip": {
    "pl": "💡 Paszport = bilet. Pokaż go przy wejściu i kontroli. Zachowaj potwierdzenia offline (screenshot) — w Chinach numer paszportu jest powiązany z biletem elektronicznym.",
    "en": "💡 Passport = ticket. Show it at the gate and checks. Keep confirmations offline (screenshot) — in China your passport number is linked to the e-ticket.",
    "de": "💡 Pass = Ticket. Am Gate und bei Kontrollen zeigen. Bestätigungen offline speichern (Screenshot) — in China ist die Passnummer mit dem E-Ticket verknüpft."
  },
  "t117": {
    "pl": "Yandex Go (KZ)",
    "en": "Yandex Go (KZ)",
    "de": "Yandex Go (KZ)"
  },
  "t49": {
    "pl": "Śpiwór do +5°C (Sajram: 8°C w nocy)",
    "en": "Sleeping bag to +5°C (Sayram: 8°C at night)",
    "de": "Schlafsack bis +5°C (Sayram: 8°C nachts)"
  },
  "t57": {
    "pl": "Norma opadów",
    "en": "Avg. rainfall",
    "de": "Ø Niederschlag"
  },
  "ph_thanks": {
    "pl": "Dziękuję",
    "en": "Thank you",
    "de": "Danke"
  },
  "t10": {
    "pl": "Bilety lotnicze (wydruk lub offline)",
    "en": "Flight tickets (print or offline)",
    "de": "Flugtickets (Ausdruck oder offline)"
  },
  "ph_train": {
    "pl": "Dworzec kolejowy",
    "en": "Train station",
    "de": "Bahnhof"
  },
  "t_acc_title_weather": {
    "pl": "🌤️ Klimat sierpień — trasa Jedwabnego Szlaku",
    "en": "🌤️ August climate — Silk Road route",
    "de": "🌤️ Klima August — Seidenstraße-Route"
  },
  "t68": {
    "pl": "Sierpień",
    "en": "August",
    "de": "August"
  },
  "t_w_jiayuguan": {
    "pl": "Sucho i słonecznie, rzadkie deszcze. Rano i wieczór chłodniej — idealne na zwiedzanie twierdzy. Wiatr typowy dla Korytarza Hexi.",
    "en": "Dry and sunny, rare rain. Cooler mornings and evenings — ideal for visiting the Fortress. Wind is typical for the Hexi Corridor.",
    "de": "Trocken und sonnig, kaum Regen. Kühler morgens und abends — ideal für die Festung. Wind ist typisch für den Hexi-Korridor."
  },
  "t87": {
    "pl": "Ważny co najmniej 6 miesięcy od daty planowanego wyjazdu z Chin, min. 6 wolnych stron",
    "en": "Valid for at least 6 months from the planned departure date from China, min. 6 blank pages",
    "de": "Mindestens 6 Monate ab geplantem Abreisedatum aus China gültig, min. 6 freie Seiten"
  },
  "t100": {
    "pl": "Yuan CNY · 1 € ≈ 7,8 CNY — bankomaty Bank of China/ICBC akceptują Visa/MC, cash backup ~500 CNY",
    "en": "Yuan CNY · €1 ≈ 7.8 CNY — Bank of China/ICBC ATMs accept Visa/MC, cash backup ~500 CNY",
    "de": "Yuan CNY · 1 € ≈ 7,8 CNY — Bank of China/ICBC-Geldautomaten akzeptieren Visa/MC, Bargeld-Backup ~500 CNY"
  },
  "t51": {
    "pl": "Ciepłe skarpety (jurta)",
    "en": "Warm socks (yurt)",
    "de": "Warme Socken (Jurte)"
  },
  "t124": {
    "pl": "WeChat (komunikacja)",
    "en": "WeChat (communication)",
    "de": "WeChat (Kommunikation)"
  },
  "t8": {
    "pl": "Ubezpieczenie podróżne (polisa)",
    "en": "Travel insurance (policy)",
    "de": "Reiseversicherung (Police)"
  },
  "tr_col_status": {
    "pl": "Status",
    "en": "Status",
    "de": "Status"
  },
  "t82": {
    "pl": "Kcell lub Beeline — zakup z paszportem w oficjalnym sklepie sieci (lotnisko lub galeria). Kcell: lepszy zasięg w górach",
    "en": "Kcell or Beeline — purchase with passport at an official network store (airport or mall). Kcell: better coverage in the mountains",
    "de": "Kcell oder Beeline — mit Pass im offiziellen Netzwerkladen (Flughafen oder Mall) kaufen. Kcell: besseres Signal in den Bergen"
  },
  "t70": {
    "pl": "możliwe burze",
    "en": "possible storms",
    "de": "mögliche Gewitter"
  },
  "t84": {
    "pl": "Zalecane — Kazachstan nie ma umowy o bezpłatnej opiece medycznej z Polską",
    "en": "Recommended — Kazakhstan has no agreement on free medical care with Poland",
    "de": "Empfohlen — Kasachstan hat kein Abkommen über kostenlose medizinische Versorgung mit Polen"
  },
  "t_xinj_links": {
    "pl": "💡 Aktualne informacje MSZ RP: <strong>gov.pl/web/chiny</strong> · Oficjalne FAQ ambasady ChRL w Warszawie: <strong>pl.china-embassy.gov.cn</strong>",
    "en": "💡 Current info from the Austrian MFA: <strong>bmeia.gv.at</strong> · Official FAQ from the Chinese Embassy: <strong>china-embassy.gov.cn</strong>",
    "de": "💡 Aktuelle Infos des österreichischen BMEIA: <strong>bmeia.gv.at</strong> · Offizielles FAQ der chinesischen Botschaft: <strong>china-embassy.gov.cn</strong>"
  },
  "t110": {
    "pl": "🗺️ Nawigacja &amp; Transport",
    "en": "🗺️ Navigation &amp; Transport",
    "de": "🗺️ Navigation &amp; Transport"
  },
  "t32": {
    "pl": "Środek na owady",
    "en": "Insect repellent",
    "de": "Insektenschutzmittel"
  },
  "t97": {
    "pl": "Zarejestruj i powiąż kartę zagraniczną PRZED wjazdem do Chin — w samych Chinach może być trudniej",
    "en": "Register and link your foreign card BEFORE entering China — it may be harder once inside",
    "de": "Ausländische Karte VOR der Einreise verknüpfen — in China selbst kann es schwieriger sein"
  },
  "t_visa_kz_reg": {
    "pl": "Obowiązkowa jeśli pobyt &gt;5 dni roboczych — hotel rejestruje automatycznie. Przy Airbnb lub prywatnym noclegu — rejestracja ręczna przez gov.kz lub na komisariacie",
    "en": "Mandatory if stay &gt;5 working days — hotel registers automatically. Via Airbnb or private accommodation — register manually via gov.kz or ",
    "de": "Pflicht bei Aufenthalt &gt;5 Werktage — Hotel registriert automatisch. Bei Airbnb oder Privatunterkunft — manuell über gov.kz oder "
  },
  "t66": {
    "pl": "Roczne nasłonecznienie",
    "en": "Annual sunshine",
    "de": "Jährliche Sonnenscheindauer"
  },
  "t86": {
    "pl": "Formularz wjazdowy",
    "en": "Entry form",
    "de": "Entry form"
  },
  "t12": {
    "pl": "Telefon + ładowarka",
    "en": "Phone + charger",
    "de": "Handy + Ladekabel"
  },
  "t18": {
    "pl": "Aparat / dodatkowa karta SD",
    "en": "Camera / extra SD card",
    "de": "Kamera / extra SD-Karte"
  },
  "t112": {
    "pl": "Pobierz mapy offline KZ i CN przed wyjazdem — działa bez internetu nawet w stepie.",
    "en": "Download KZ and CN offline maps before departure — works without internet even in the steppe.",
    "de": "KZ- und CN-Offline-Karten vor der Abreise herunterladen — funktioniert ohne Internet auch in der Steppe."
  },
  "em_fire": {
    "pl": "Straż pożarna",
    "en": "Fire",
    "de": "Feuerwehr"
  },
  "t31": {
    "pl": "Krem SPF 50+ (Turpan: 40°C!)",
    "en": "Sunscreen SPF 50+ (Turpan: 40°C!)",
    "de": "Sonnencreme SPF 50+ (Turpan: 40°C!)"
  },
  "t_w_xian": {
    "pl": "Gorąco i dość wilgotno — odczuwalne jak +38°C. Zwiedzanie Terakotowej Armii rano lub po 16:00. Wieczory przyjemne — idealne na spacer po dzielnicy muzułmańskiej.",
    "en": "Hot and quite humid — feels like +38°C. Visit the Terracotta Army early morning or after 16:00. Evenings pleasant — ideal for the Muslim Quarter.",
    "de": "Heiß und ziemlich feucht — gefühlt +38°C. Terrakotta-Armee morgens früh oder nach 16:00. Abende angenehm — ideal fürs Muslimviertel."
  },
  "t46": {
    "pl": "Poduszka podróżna",
    "en": "Travel pillow",
    "de": "Reisekissen"
  },
  "t76": {
    "pl": "Rejestracja",
    "en": "Registration",
    "de": "Registration"
  },
  "em_at_title": {
    "pl": "🇦🇹 Pomoc konsularna (Austria)",
    "en": "🇦🇹 Consular help (Austria)",
    "de": "🇦🇹 Konsularische Hilfe (Österreich)"
  },
  "t5": {
    "pl": "Karta kredytowa Visa/Mastercard",
    "en": "Credit card Visa/Mastercard",
    "de": "Kreditkarte Visa/Mastercard"
  },
  "t_visa_kz_pass": {
    "pl": "Ważność min. 6 miesięcy od planowanej daty powrotu do Polski (wymóg touroperatorów i wytyczne MSZ)",
    "en": "Valid min. 6 months from planned return date to Poland (airline and Foreign Ministry guideline requirement)",
    "de": "Min. 6 Monate gültig ab geplantem Rückreisedatum nach Polen (Anforderung der Airlines und des Außenministeriums)"
  },
  "t71": {
    "pl": "Opady sierpień",
    "en": "August rainfall",
    "de": "Niederschlag August"
  },
  "ph_water": {
    "pl": "Woda",
    "en": "Water",
    "de": "Wasser"
  },
  "t64": {
    "pl": "Nocleg w jurcie: spakuj polar i ciepłe skarpety. Lipiec–sierpień: szczyt sezonu koczowniczego Kazachów. Za dnia przyjemnie.",
    "en": "Yurt overnight: pack fleece and warm socks. July–August: peak of Kazakh nomadic season. Pleasant during the day.",
    "de": "Jurtenübernachtung: Fleece und warme Socken einpacken. Juli–August: Höhepunkt der Nomadensaison. Tagsüber angenehm."
  },
  "t34": {
    "pl": "Leki na biegunkę podróżną",
    "en": "Traveller's diarrhoea medication",
    "de": "Medikamente gegen Reisedurchfall"
  },
  "t16": {
    "pl": "WeChat zainstalowany (rejestracja przed wyjazdem)",
    "en": "WeChat installed (register before departure)",
    "de": "WeChat installiert (Registrierung vor Abreise)"
  },
  "t89": {
    "pl": "Funkcjonariusz może zapytać o plan podróży, adres noclegu i bilet powrotny — miej potwierdzenia hoteli dostępne offline",
    "en": "The officer may ask about your travel plan, accommodation address and return ticket — keep hotel confirmations available offline",
    "de": "Der Beamte kann nach Reiseplan, Unterkunftsadresse und Rückflugticket fragen — Hotelbestätigungen offline verfügbar halten"
  },
  "t48": {
    "pl": "Mała latarka / headlamp",
    "en": "Small torch / headlamp",
    "de": "Kleine Taschenlampe / Stirnlampe"
  },
  "em_police": {
    "pl": "Policja",
    "en": "Police",
    "de": "Polizei"
  },
  "t_visa_cn_form": {
    "pl": "Obowiązkowy elektroniczny formularz przed wjazdem: <strong>s.nia.gov.cn</strong>",
    "en": "Mandatory electronic entry form before arrival: <strong>s.nia.gov.cn</strong>",
    "de": "Pflichtformular vor der Einreise: <strong>s.nia.gov.cn</strong>"
  },
  "tr_col_route": {
    "pl": "Trasa",
    "en": "Route",
    "de": "Strecke"
  },
  "t56": {
    "pl": "Kazachstan · Stacja 36870 · 848 m n.p.m.",
    "en": "Kazakhstan · Station 36870 · 848 m a.s.l.",
    "de": "Kasachstan · Station 36870 · 848 m ü.M."
  },
  "t118": {
    "pl": "Taxi w Ałmaty i Kazachstanie — tanio i wygodnie. Płatność kartą lub gotówką.",
    "en": "Taxi in Almaty and Kazakhstan — cheap and convenient. Payment by card or cash.",
    "de": "Taxi in Almaty und Kasachstan — günstig und bequem. Zahlung per Karte oder Bargeld."
  },
  "tr3_route": {
    "pl": "Turpan Nord → Jiayuguan Süd",
    "en": "Turpan North → Jiayuguan South",
    "de": "Turpan Nord → Jiayuguan Süd"
  },
  "ph_hospital": {
    "pl": "Szpital",
    "en": "Hospital",
    "de": "Krankenhaus"
  },
  "t88": {
    "pl": "Na granicy",
    "en": "At the border",
    "de": "At the border"
  },
  "t59": {
    "pl": "Najsuchszy miesiąc roku — wilgotność tylko 45%. Absolutne maksimum: 40,5°C (1944). Sierpień 2024 był rekordowy: średnio 25,6°C.",
    "en": "Driest month of the year — humidity only 45%. Absolute max: 40.5°C (1944). August 2024 was record-breaking: avg. 25.6°C.",
    "de": "Trockenster Monat des Jahres — Luftfeuchtigkeit nur 45 %. Absolutes Maximum: 40,5 °C (1944). August 2024 war Rekord: Ø 25,6 °C."
  },
  "t113": {
    "pl": "12306 (CN koleje)",
    "en": "12306 (CN railways)",
    "de": "12306 (CN Bahn)"
  },
  "t9": {
    "pl": "Potwierdzenia rezerwacji hoteli",
    "en": "Hotel booking confirmations",
    "de": "Hotelbuchungsbestätigungen"
  },
  "t41": {
    "pl": "Mały plecak dzienny",
    "en": "Small day pack",
    "de": "Kleiner Tagesrucksack"
  },
  "t106": {
    "pl": "Gotówka CNY",
    "en": "Cash CNY",
    "de": "Bargeld CNY"
  },
  "t54": {
    "pl": "Papier toaletowy (zapas!)",
    "en": "Toilet paper (backup!)",
    "de": "Toilettenpapier (Reserve!)"
  },
  "tr3_when": {
    "pl": "Sob. 8 sie · 12:26",
    "en": "Sat 8 Aug · 12:26",
    "de": "Sa. 8. Aug · 12:26"
  },
  "t128": {
    "pl": "Google Translate",
    "en": "Google Translate",
    "de": "Google Translate"
  },
  "t61": {
    "pl": "Xinjiang (CN) · 2.073 m n.p.m.",
    "en": "Xinjiang (CN) · 2,073 m a.s.l.",
    "de": "Xinjiang (CN) · 2.073 m ü.M."
  },
  "t21": {
    "pl": "T-shirty oddychające (4–5 szt.)",
    "en": "Breathable t-shirts (4–5 pcs)",
    "de": "Atmungsaktive T-Shirts (4–5 Stk.)"
  },
  "t115": {
    "pl": "Trip.com",
    "en": "Trip.com",
    "de": "Trip.com"
  },
  "t14": {
    "pl": "Adapter do gniazdek (CN: typ A/I)",
    "en": "Plug adapter (CN: type A/I)",
    "de": "Steckeradapter (CN: Typ A/I)"
  },
  "t111": {
    "pl": "Maps.me / OsmAnd",
    "en": "Maps.me / OsmAnd",
    "de": "Maps.me / OsmAnd"
  },
  "t74": {
    "pl": "Wiza",
    "en": "Visa",
    "de": "Visa"
  },
  "ph_col_cn": {
    "pl": "中文 (CN)",
    "en": "中文 (CN)",
    "de": "中文 (CN)"
  },
  "t36": {
    "pl": "Plastry, bandaż, środek do dezynfekcji",
    "en": "Plasters, bandage, disinfectant",
    "de": "Pflaster, Bandage, Desinfektionsmittel"
  },
  "trains_intro": {
    "pl": "Wszystkie 4 pociągi zarezerwowane. Bądź na dworcu 30–45 min wcześniej — kontrola paszportowa i bezpieczeństwa.",
    "en": "All 4 trains booked. Be at the station 30–45 min early — passport and security checks.",
    "de": "Alle 4 Züge gebucht. Sei 30–45 Min. früher am Bahnhof — Pass- und Sicherheitskontrolle."
  },
  "t_w_turpan2": {
    "pl": "Zwiedzanie najlepiej przed godz. 10:00 lub po 17:00.",
    "en": "Best visited before 10:00 or after 17:00.",
    "de": "Am besten vor 10:00 Uhr oder nach 17:00 Uhr besuchen."
  },
  "t72": {
    "pl": "Wilgotność",
    "en": "Humidity",
    "de": "Luftfeuchtigkeit"
  },
  "t85": {
    "pl": "🇨🇳 Chiny (Xinjiang, Gansu, Shaanxi)",
    "en": "🇨🇳 China (Xinjiang, Gansu, Shaanxi)",
    "de": "🇨🇳 China (Xinjiang, Gansu, Shaanxi)"
  },
  "t52": {
    "pl": "Ręcznik z mikrofibry",
    "en": "Microfibre towel",
    "de": "Mikrofaser-Handtuch"
  },
  "t90": {
    "pl": "Liczenie dni",
    "en": "Counting days",
    "de": "Counting days"
  },
  "t28": {
    "pl": "Klapki (hotel, plaża)",
    "en": "Flip-flops (hotel, beach)",
    "de": "Flip-Flops (Hotel, Strand)"
  },
  "t25": {
    "pl": "Bielizna (5–6 szt.)",
    "en": "Underwear (5–6 pcs)",
    "de": "Unterwäsche (5–6 Stk.)"
  },
  "t98": {
    "pl": "VPN",
    "en": "VPN",
    "de": "VPN"
  },
  "t80": {
    "pl": "Tenge (KZT) · 1 € ≈ 530 KZT (2025) — wymiana w kantorach w centrum Ałmaty, bankomaty Kaspi/Halyk powszechne",
    "en": "Tenge (KZT) · €1 ≈ 530 KZT (2025) — exchange at bureaux de change in central Almaty, Kaspi/Halyk ATMs widespread",
    "de": "Tenge (KZT) · 1 € ≈ 530 KZT (2025) — Wechsel in Wechselstuben im Stadtzentrum Almaty, Kaspi/Halyk-Geldautomaten weit verbreitet"
  },
  "t30": {
    "pl": "Chusta / buff (kurz, słońce)",
    "en": "Scarf / buff (dust, sun)",
    "de": "Halstuch / Buff (Staub, Sonne)"
  },
  "tr4_route": {
    "pl": "Zhangye West → Xi'an Nord",
    "en": "Zhangye West → Xi'an North",
    "de": "Zhangye West → Xi'an Nord"
  },
  "t_sources": {
    "pl": "<div class=\"weather-source\">\n    🇰🇿 <strong>Kazachstan:</strong> pogodaiklimat.ru — stacja hydrometeorologiczna Ałmaty (nr 36870, dane od 1879)\n    &nbsp;·&nbsp;\n    <br>\n    🇨🇳 <strong>Xinjiang:</strong> weather.com.cn (CMA) — Turpan, Yining, Jezioro Sajram · Urząd klimatyczny Ili (xjyl.gov.cn)\n    &nbsp;·&nbsp;\n    🇨🇳 <strong>Gansu / Shaanxi:</strong> weather.com.cn — Jiayuguan, Zhangye, Xi'an · Wszystkie wartości: wieloletnie normy sierpniowe\n  </div>",
    "en": "<div class=\"weather-source\">\n    🇰🇿 <strong>Kazakhstan:</strong> pogodaiklimat.ru — Almaty hydrometeorological station (no. 36870, data since 1879)\n    &nbsp;·&nbsp;\n    <br>\n    🇨🇳 <strong>Xinjiang:</strong> weather.com.cn (CMA) — Turpan, Yining, Sayram Lake · Ili Climate Authority (xjyl.gov.cn)\n    &nbsp;·&nbsp;\n    🇨🇳 <strong>Gansu / Shaanxi:</strong> weather.com.cn — Jiayuguan, Zhangye, Xi'an · All values: multi-year August averages (WMO 1991–2020)\n  </div>",
    "de": "<div class=\"weather-source\">\n    🇰🇿 <strong>Kasachstan:</strong> pogodaiklimat.ru — Meteorologische Station Almaty (Nr. 36870, Daten seit 1879)\n    &nbsp;·&nbsp;\n    <br>\n    🇨🇳 <strong>Xinjiang:</strong> weather.com.cn (CMA) — Turpan, Yining, Sayram-See · Ili-Klimabehörde (xjyl.gov.cn)\n    &nbsp;·&nbsp;\n    🇨🇳 <strong>Gansu / Shaanxi:</strong> weather.com.cn — Jiayuguan, Zhangye, Xi'an · Alle Werte: langjährige August-Mittelwerte (WMO 1991–2020)\n  </div>"
  },
  "t15": {
    "pl": "VPN zainstalowany i aktywny przed wjazdem do CN",
    "en": "VPN installed and active before entering China",
    "de": "VPN installiert und aktiv vor Einreise nach China"
  },
  "t79": {
    "pl": "Waluta",
    "en": "Currency",
    "de": "Currency"
  },
  "t53": {
    "pl": "Płyn do dezynfekcji rąk",
    "en": "Hand sanitiser",
    "de": "Händedesinfektionsmittel"
  },
  "t69": {
    "pl": "Opady",
    "en": "Rainfall",
    "de": "Niederschlag"
  },
  "t83": {
    "pl": "Ubezpieczenie",
    "en": "Insurance",
    "de": "Insurance"
  },
  "t58": {
    "pl": "Dni deszczowe",
    "en": "Rainy days",
    "de": "Regentage"
  },
  "t121": {
    "pl": "🌐 Internet &amp; Komunikacja",
    "en": "🌐 Internet &amp; Communication",
    "de": "🌐 Internet &amp; Communication"
  },
  "tr1_when": {
    "pl": "Czw. 6 sie · 14:22",
    "en": "Thu 6 Aug · 14:22",
    "de": "Do. 6. Aug · 14:22"
  },
  "t20": {
    "pl": "SIM karta lub eSIM (KZ + CN)",
    "en": "SIM card or eSIM (KZ + CN)",
    "de": "SIM-Karte oder eSIM (KZ + CN)"
  },
  "t92": {
    "pl": "Jeśli pobyt &gt;30 dni",
    "en": "If stay &gt;30 days",
    "de": "If stay &gt;30 days"
  },
  "t125": {
    "pl": "Działa bez VPN w Chinach. Zainstaluj przed wyjazdem — lokalni przewodnicy i hotele przez WeChat.",
    "en": "Works without VPN in China. Install before departure — local guides and hotels communicate via WeChat.",
    "de": "Funktioniert ohne VPN in China. Vor der Abreise installieren — Guides und Hotels kommunizieren per WeChat."
  },
  "t101": {
    "pl": "Xinjiang — ważne wskazówki:",
    "en": "Xinjiang — important notes:",
    "de": "Xinjiang — wichtige Hinweise:"
  },
  "t6": {
    "pl": "Gotówka USD/EUR (wymiana na miejscu)",
    "en": "Cash USD/EUR (exchange on site)",
    "de": "Bargeld USD/EUR (Wechsel vor Ort)"
  },
  "t26": {
    "pl": "Skarpety (5–6 par)",
    "en": "Socks (5–6 pairs)",
    "de": "Socken (5–6 Paar)"
  },
  "t27": {
    "pl": "Buty trekkingowe / solidne sandały",
    "en": "Trekking shoes / sturdy sandals",
    "de": "Wanderschuhe / solide Sandalen"
  },
  "t96": {
    "pl": "WeChat Pay",
    "en": "WeChat Pay",
    "de": "WeChat Pay"
  },
  "tr4_when": {
    "pl": "Wt. 11 sie · 15:50",
    "en": "Tue 11 Aug · 15:50",
    "de": "Di. 11. Aug · 15:50"
  },
  "t19": {
    "pl": "Słuchawki",
    "en": "Headphones",
    "de": "Kopfhörer"
  },
  "t50": {
    "pl": "Polar / cienka kurtka puchowa",
    "en": "Fleece / thin down jacket",
    "de": "Fleece / dünne Daunenjacke"
  },
  "t73": {
    "pl": "🇰🇿 Kazachstan",
    "en": "🇰🇿 Kazakhstan",
    "de": "🇰🇿 Kazakhstan"
  },
  "t114": {
    "pl": "Oficjalna aplikacja kolei chińskich — bilety pociągami D/G. Kup przez Trip.com jeśli masz problem z rejestracją.",
    "en": "Official Chinese railway app — D/G train tickets. Buy via Trip.com if you have registration issues.",
    "de": "Offizielle chinesische Bahn-App — D/G-Zugtickets. Bei Registrierungsproblemen über Trip.com kaufen."
  },
  "em_cn_emb": {
    "pl": "Ambasada Austrii — Pekin",
    "en": "Austrian Embassy — Beijing",
    "de": "Österreichische Botschaft — Peking"
  },
  "t_app_tip_body": {
    "pl": "1) Wypełnij formularz wjazdowy CN na s.nia.gov.cn (max 5 dni przed) → 2) Zarejestruj WeChat i powiąż kartę → 3) Zainstaluj VPN w Polsce (nie w Chinach!) → 4) Pobierz mapy offline w Maps.me",
    "en": "1) Fill in the CN entry form at s.nia.gov.cn (max 5 days before) → 2) Register WeChat and link a card → 3) Install VPN in Poland (not in China!) → 4) Download offline maps in Maps.me",
    "de": "1) CN-Einreiseformular auf s.nia.gov.cn ausfüllen (max. 5 Tage vorher) → 2) WeChat registrieren und Karte verknüpfen → 3) VPN in Polen installieren (nicht in China!) → 4) Offline-Karten in Maps.me herunterladen"
  },
  "em_universal": {
    "pl": "Numer alarmowy (z telefonu komórkowego)",
    "en": "Emergency number (from mobile)",
    "de": "Notrufnummer (vom Handy)"
  },
  "t2": {
    "pl": "Paszport (ważny min. 6 mies.)",
    "en": "Passport (valid min. 6 months)",
    "de": "Reisepass (min. 6 Monate gültig)"
  },
  "t95": {
    "pl": "⚠️ Kontrole policji i skanowanie dokumentów przy wejściu do atrakcji — normalne procedury. Zawsze miej paszport przy sobie.",
    "en": "⚠️ Police checks and document scanning at attraction entrances — normal procedures. Always carry your passport.",
    "de": "⚠️ Polizeikontrollen und Dokumentenscans bei Attraktionen — normale Verfahren. Pass immer dabei haben."
  },
  "t99": {
    "pl": "Zainstaluj i przetestuj przed wjazdem — Google, WhatsApp, Instagram, Gmail zablokowane w CN",
    "en": "Install and test before entry — Google, WhatsApp, Instagram, Gmail blocked in China",
    "de": "Vor der Einreise installieren und testen — Google, WhatsApp, Instagram, Gmail in China gesperrt"
  },
  "ph_col_ru": {
    "pl": "Rosyjski (KZ)",
    "en": "Russian (KZ)",
    "de": "Russisch (KZ)"
  },
  "cur_intro": {
    "pl": "Kursy orientacyjne (sierpień 2026). Wpisz kwotę, by przeliczyć między EUR, tenge (KZT) i juanem (CNY).",
    "en": "Indicative rates (Aug 2026). Enter an amount to convert between EUR, tenge (KZT) and yuan (CNY).",
    "de": "Richtkurse (Aug. 2026). Betrag eingeben zum Umrechnen zwischen EUR, Tenge (KZT) und Yuan (CNY)."
  },
  "t127": {
    "pl": "KZ: Kcell lub Beeline z paszportem na miejscu. CN: China Unicom SIM na lotnisku lub eSIM (Airalo, Holafly).",
    "en": "KZ: Kcell or Beeline with passport on site. CN: China Unicom SIM at the airport or eSIM (Airalo, Holafly).",
    "de": "KZ: Kcell oder Beeline mit Pass vor Ort. CN: China Unicom SIM am Flughafen oder eSIM (Airalo, Holafly)."
  },
  "ph_noproblem": {
    "pl": "Gdzie jest toaleta?",
    "en": "Where is the toilet?",
    "de": "Wo ist die Toilette?"
  },
  "em_ambulance": {
    "pl": "Pogotowie",
    "en": "Ambulance",
    "de": "Rettung"
  },
  "t81": {
    "pl": "SIM karta",
    "en": "SIM card",
    "de": "SIM card"
  },
  "t17": {
    "pl": "Mapy offline (Maps.me lub OsmAnd)",
    "en": "Offline maps (Maps.me or OsmAnd)",
    "de": "Offline-Karten (Maps.me oder OsmAnd)"
  },
  "t35": {
    "pl": "Elektrolity / tabletki na odwodnienie",
    "en": "Electrolytes / rehydration tablets",
    "de": "Elektrolyte / Rehydrationstabletten"
  },
  "t120": {
    "pl": "Odpowiednik Ubera w Chinach — działa w Ürümqi, Turpan i Xi'anie.",
    "en": "China's Uber equivalent — works in Ürümqi, Turpan and Xi'an.",
    "de": "Chinas Uber-Äquivalent — funktioniert in Ürümqi, Turpan und Xi'an."
  },
  "t_visa_cn_visum": {
    "pl": "🟢 <strong>Bezwizowo do 30 dni</strong> — Polska objęta programem od 1 lipca 2024 r., przedłużonym do 31 grudnia 2026 r.",
    "en": "🟢 <strong>Visa-free up to 30 days</strong> — Poland covered by the programme from 1 July 2024, extended to 31 December 2026.",
    "de": "🟢 <strong>Visumfrei bis 30 Tage</strong> — Polen im Programm ab 1. Juli 2024, verlängert bis 31. Dezember 2026."
  },
  "ph_hello": {
    "pl": "Dzień dobry",
    "en": "Hello",
    "de": "Hallo / Guten Tag"
  },
  "t7": {
    "pl": "Gotówka CNY ~500 yuan (Chiny)",
    "en": "Cash CNY ~500 yuan (China)",
    "de": "Bargeld CNY ~500 Yuan (China)"
  },
  "t123": {
    "pl": "Zainstaluj i przetestuj PRZED wjazdem do Chin. Polecane: ExpressVPN, NordVPN, Astrill. W Chinach pobieranie nie działa.",
    "en": "Install and test BEFORE entering China. Recommended: ExpressVPN, NordVPN, Astrill. Downloading in China does not work.",
    "de": "Vor der Einreise installieren und testen. Empfohlen: ExpressVPN, NordVPN, Astrill. Download in China funktioniert nicht."
  },
  "t29": {
    "pl": "Czapka / kapelusz (UV Turpan!)",
    "en": "Cap / hat (UV in Turpan!)",
    "de": "Mütze / Hut (UV Turpan!)"
  },
  "t4": {
    "pl": "Kopie dokumentów (zdjęcia w chmurze)",
    "en": "Document copies (photos in cloud)",
    "de": "Dokumentenkopien (Fotos in der Cloud)"
  },
  "t122": {
    "pl": "VPN — obowiązek!",
    "en": "VPN — mandatory!",
    "de": "VPN — Pflicht!"
  },
  "tr2_route": {
    "pl": "Ürümqi → Turpan Nord",
    "en": "Ürümqi → Turpan North",
    "de": "Ürümqi → Turpan Nord"
  },
  "t131": {
    "pl": "Chińska aplikacja pogodowa — dokładniejsza niż zachodnie serwisy dla Xinjiangu i Gansu.",
    "en": "Chinese weather app — more accurate than Western services for Xinjiang and Gansu.",
    "de": "Chinesische Wetter-App — genauer als westliche Dienste für Xinjiang und Gansu."
  },
  "em_cn_consul": {
    "pl": "Konsulat Austrii — Szanghaj (najbliższy regionowi)",
    "en": "Austrian Consulate — Shanghai",
    "de": "Österreichisches Konsulat — Shanghai"
  },
  "t33": {
    "pl": "Ibuprofen / Paracetamol",
    "en": "Ibuprofen / Paracetamol",
    "de": "Ibuprofen / Paracetamol"
  },
  "t109": {
    "pl": "Wymiana KZT i CNY bez prowizji. Wyślij sobie pieniądze na miejscu przez aplikację.",
    "en": "Exchange KZT and CNY with no fees. Send money to yourself on the go via the app.",
    "de": "KZT und CNY ohne Gebühren tauschen. Geld per App unterwegs an sich selbst senden."
  },
  "t126": {
    "pl": "SIM / eSIM",
    "en": "SIM / eSIM",
    "de": "SIM / eSIM"
  },
  "t60": {
    "pl": "Jezioro Sajram",
    "en": "Sayram Lake",
    "de": "Sayram-See"
  },
  "t_w_yining": {
    "pl": "„Wilgotna wyspa\" Xinjiangu — znacznie bardziej zielona niż Turpan. Lato: ciepłe, prawie bez deszczu. Nocny bazar przyjemnie chłodny.",
    "en": "\"Wet island\" of Xinjiang — far greener than Turpan. Summer: warm, almost no rain. The night market stays pleasantly cool.",
    "de": "„Feuchte Insel\" Xinjiangs — viel grüner als Turpan. Sommer: warm, kaum Regen. Der Nachtmarkt angenehm kühl."
  },
  "t13": {
    "pl": "Powerbank (min. 10 000 mAh)",
    "en": "Powerbank (min. 10,000 mAh)",
    "de": "Powerbank (min. 10.000 mAh)"
  },
  "ph_col_de": {
    "pl": "Polski",
    "en": "English",
    "de": "Deutsch"
  },
  "t63": {
    "pl": "Noc",
    "en": "Night",
    "de": "Nacht"
  },
  "t45": {
    "pl": "Butelka na wodę (min. 1 L)",
    "en": "Water bottle (min. 1 L)",
    "de": "Trinkflasche (min. 1 L)"
  },
  "t129": {
    "pl": "Pobierz pakiety językowe offline: kazachski, rosyjski, chiński (uproszczony). Skan menu działa offline!",
    "en": "Download offline language packs: Kazakh, Russian, Chinese (simplified). Menu scan works offline!",
    "de": "Offline-Sprachpakete herunterladen: Kasachisch, Russisch, Chinesisch (vereinfacht). Menü-Scan funktioniert offline!"
  },
  "t23": {
    "pl": "Spodnie długie (meczet, świątynie)",
    "en": "Long trousers (mosques, temples)",
    "de": "Lange Hose (Moscheen, Tempel)"
  },
  "tr1_route": {
    "pl": "Yining → Ürümqi",
    "en": "Yining → Ürümqi",
    "de": "Yining → Ürümqi"
  },
  "t77": {
    "pl": "Karta migracyjna",
    "en": "Migration card",
    "de": "Migration card"
  },
  "t116": {
    "pl": "Hotele, pociągi i loty w Chinach. Interfejs po angielsku, płatność kartą zagraniczną.",
    "en": "Hotels, trains and flights in China. English interface, payment by foreign card.",
    "de": "Hotels, Züge und Flüge in China. Englische Oberfläche, Zahlung mit ausländischer Karte."
  },
  "t130": {
    "pl": "墨迹天气 (CN pogoda)",
    "en": "墨迹天气 (CN weather)",
    "de": "墨迹天气 (CN Wetter)"
  },
  "ph_intro": {
    "pl": "W Kazachstanie pomaga rosyjski, w Xinjiangu i reszcie Chin mandaryński. Pokaż ekran lub użyj wymowy.",
    "en": "Russian helps in Kazakhstan; Mandarin in Xinjiang and the rest of China. Show the screen or use the pronunciation.",
    "de": "In Kasachstan hilft Russisch, in Xinjiang und China Mandarin. Zeige den Bildschirm oder nutze die Aussprache."
  },
  "t65": {
    "pl": "Yining / Dolina Ili",
    "en": "Yining / Ili Valley",
    "de": "Yining / Ili-Tal"
  },
  "em_note": {
    "pl": "⚠️ Zapisz te numery offline. W Chinach Google/WhatsApp wymaga VPN — ale numery telefonów działają normalnie. Karta SIM z roamingiem lub lokalna (China Mobile) zalecana.",
    "en": "⚠️ Save these offline. In China Google/WhatsApp need a VPN — but phone numbers work normally. A roaming or local SIM (China Mobile) is recommended.",
    "de": "⚠️ Offline speichern. In China brauchen Google/WhatsApp ein VPN — Telefonnummern funktionieren aber normal. Roaming- oder lokale SIM (China Mobile) empfohlen."
  },
  "t75": {
    "pl": "Paszport",
    "en": "Passport",
    "de": "Passport"
  },
  "t24": {
    "pl": "Cienka kurtka / bluza na wieczory",
    "en": "Light jacket / hoodie for evenings",
    "de": "Leichte Jacke / Hoodie für Abende"
  },
  "t107": {
    "pl": "Miej ~500 CNY cash jako backup — małe sklepy i taksówki w Xinjiangu mogą nie przyjmować WeChat.",
    "en": "Keep ~500 CNY cash as backup — small shops and taxis in Xinjiang may not accept WeChat.",
    "de": "~500 CNY Bargeld als Backup — kleine Läden und Taxis in Xinjiang akzeptieren möglicherweise kein WeChat."
  },
  "t_visa_cn_visum2": {
    "pl": "Dotyczy zwykłego paszportu, celów turystycznych, biznesowych, rodzinnych i tranzytowych. Wjazd możliwy przez wszystkie lądowe, lotnicze i morskie przejścia graniczne otwarte dla cudzoziemców — w tym Horgos.",
    "en": " Applies to ordinary passports, for tourism, business, family visits and transit. Entry possible at all land, air and sea border crossings open to foreigners — including Khorgos.",
    "de": " Gilt für gewöhnliche Reisepässe, zu touristischen, geschäftlichen, familiären und Transitgründen. Einreise an allen für Ausländer geöffneten Land-, Luft- und Seegrenzübergängen möglich — auch Khorgos."
  },
  "tb_visa_fill": {
    "pl": "wypełnij nie wcześniej niż 5 dni przed przekroczeniem granicy. Można też wypełnić na miejscu na urządzeniach w punkcie kontrolnym.",
    "en": "fill in no earlier than 5 days before crossing the border. Can also be completed on-site on devices at the checkpoint.",
    "de": "frühestens 5 Tage vor der Grenzüberquerung ausfüllen. Kann auch vor Ort an Geräten am Kontrollpunkt ausgefüllt werden."
  },
  "t22": {
    "pl": "Lekkie spodnie / spodenki (2 szt.)",
    "en": "Light trousers / shorts (2 pcs)",
    "de": "Leichte Hosen / Shorts (2 Stk.)"
  },
  "em_kz_title": {
    "pl": "🇰🇿 Kazachstan",
    "en": "🇰🇿 Kazakhstan",
    "de": "🇰🇿 Kasachstan"
  },
  "t93": {
    "pl": "Wymagana wiza L (turystyczna) — Konsulat Generalny ChRL w Warszawie (ul. Bonifraterska 1) lub CVASC · czas oczekiwania 4–7 dni roboczych",
    "en": "Visa L (tourist) required — Chinese Consulate General in Warsaw (ul. Bonifraterska 1) or CVASC · processing time 4–7 working days",
    "de": "Visum L (Tourismus) erforderlich — Chinesisches Generalkonsulat Warschau (ul. Bonifraterska 1) oder CVASC · Bearbeitungszeit 4–7 Werktage"
  },
  "t102": {
    "pl": "💳 Płatności",
    "en": "💳 Payments",
    "de": "💳 Payments"
  },
  "booked": {
    "pl": "✓ zarezerwowane",
    "en": "✓ booked",
    "de": "✓ gebucht"
  },
  "t91": {
    "pl": "30 dni liczone od następnego dnia po wjeździe (nie od dnia przylotu). Przy wieczornym przylocie masz pełne 30 dni od następnego dnia.",
    "en": "30 days counted from the day after entry (not from the arrival day). With an evening arrival you have a full 30 days from the next day.",
    "de": "30 Tage ab dem Tag nach der Einreise (nicht ab dem Ankunftstag). Bei Abendankunft hat man volle 30 Tage ab dem nächsten Tag."
  },
  "ph_yes": {
    "pl": "Tak / Nie",
    "en": "Yes / No",
    "de": "Ja / Nein"
  },
  "t132": {
    "pl": "Ważna kolejność przed wyjazdem:",
    "en": "Important pre-departure order:",
    "de": "Wichtige Reihenfolge vor der Abreise:"
  },
  "t119": {
    "pl": "DiDi (CN)",
    "en": "DiDi (CN)",
    "de": "DiDi (CN)"
  },
  "t3": {
    "pl": "Wiza chińska (naklejona!)",
    "en": "Chinese visa (affixed!)",
    "de": "Chinesisches Visum (eingeklebt!)"
  },
  "ph_novpn": {
    "pl": "Nie rozumiem",
    "en": "I don't understand",
    "de": "Ich verstehe nicht"
  },
  "t55": {
    "pl": "Pastylki do uzdatniania wody",
    "en": "Water purification tablets",
    "de": "Wasserreinigungstabletten"
  },
  "t108": {
    "pl": "Wise / Revolut",
    "en": "Wise / Revolut",
    "de": "Wise / Revolut"
  },
  "em_mfa": {
    "pl": "Całodobowa pomoc MSZ Austrii",
    "en": "Austria MFA 24h help",
    "de": "BMEIA 24h-Bürgerservice"
  },
  "t104": {
    "pl": "Alipay (opcja)",
    "en": "Alipay (option)",
    "de": "Alipay (Option)"
  },
  "tr2_when": {
    "pl": "Czw. 6 sie · 20:33",
    "en": "Thu 6 Aug · 20:33",
    "de": "Do. 6. Aug · 20:33"
  },
  "acc_currency": {
    "pl": "💱 Przelicznik walut",
    "en": "💱 Currency converter",
    "de": "💱 Währungsrechner"
  },
  "acc_emergency": {
    "pl": "🆘 Kontakty awaryjne & Ambasady",
    "en": "🆘 Emergency contacts & Embassies",
    "de": "🆘 Notfallkontakte & Botschaften"
  },
  "acc_phrases": {
    "pl": "💬 Zwroty offline — KZ / RU / 中文",
    "en": "💬 Offline phrases — KZ / RU / 中文",
    "de": "💬 Offline-Sätze — KZ / RU / 中文"
  },
  "acc_trains": {
    "pl": "🚄 Bilety kolejowe — rezerwacje",
    "en": "🚄 Train tickets — bookings",
    "de": "🚄 Zugtickets — Buchungen"
  },
  "acc_pack": {
    "pl": "🎒 Packliste — Jedwabny Szlak",
    "en": "🎒 Packing list — Silk Road",
    "de": "🎒 Packliste — Seidenstraße"
  },
  "acc_weather": {
    "pl": "🌤️ Klimat sierpień — trasa",
    "en": "🌤️ August climate — route",
    "de": "🌤️ Klima August — Route"
  },
  "acc_visa": {
    "pl": "🛂 Wiza & Wjazd",
    "en": "🛂 Visa & Entry",
    "de": "🛂 Visum & Einreise"
  },
  "acc_apps": {
    "pl": "📱 Aplikacje & Praktyczne wskazówki",
    "en": "📱 Apps & Practical tips",
    "de": "📱 Apps & Praktische Tipps"
  },
  "acc_map": {
    "pl": "🗺️ Trasa — Ałmaty → Xi'an",
    "en": "🗺️ Route — Almaty → Xi'an",
    "de": "🗺️ Route — Almaty → Xi'an"
  },
  "pack_cat_docs": {
    "pl": "📄 Dokumenty & Finanse",
    "en": "📄 Documents & Finance",
    "de": "📄 Dokumente & Finanzen"
  },
  "pack_cat_tech": {
    "pl": "📱 Technika & Łączność",
    "en": "📱 Tech & Connectivity",
    "de": "📱 Technik & Kommunikation"
  },
  "pack_cat_clothes": {
    "pl": "👕 Ubrania",
    "en": "👕 Clothing",
    "de": "👕 Kleidung"
  },
  "pack_cat_health": {
    "pl": "💊 Zdrowie & Apteczka",
    "en": "💊 Health & First aid",
    "de": "💊 Gesundheit & Reiseapotheke"
  },
  "pack_cat_bag": {
    "pl": "🎒 Bagaż & Codzienny",
    "en": "🎒 Luggage & Daily carry",
    "de": "🎒 Gepäck & Alltägliches"
  },
  "pack_cat_yurt": {
    "pl": "🏕️ Jurta & Nocleg polowy",
    "en": "🏕️ Yurt & Camping",
    "de": "🏕️ Jurte & Camping"
  },
  "weather_title": {
    "pl": "Dane klimatyczne sierpień",
    "en": "August climate data",
    "de": "Klimadaten August"
  },
  "map_caption": {
    "pl": "Kliknij marker — szczegóły",
    "en": "Click a marker for details",
    "de": "Marker anklicken für Details"
  },
  "reset_btn": {
    "pl": "↺ Reset",
    "en": "↺ Reset",
    "de": "↺ Zurücksetzen"
  }
};
