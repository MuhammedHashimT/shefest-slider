"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const data = [
    {
      id: 16,
      name: "WORD FIGHT ENG",
      type: "SINGLE",
      programCode: "TX7",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 387,
          zonalpoint: 7,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "NAFIYA KK",
            chestNO: "CMS227589",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705148676/bvp5vavvlcq1h8eimymz.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 580,
          zonalpoint: 5,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "SHAMEEMA NASRIN.KK",
            chestNO: "CMS227129",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705139892/btbbnq4rxl6znpdkec0t.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, MOONNIYUR",
              id: 312,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 1008,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA HADIYA",
            chestNO: "CMS227351",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705220169/ilxha9iuzy1uzo9tw8rf.jpg",
            team: {
              name: "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              id: 317,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 1029,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "RAJA THAHIR",
            chestNO: "CMS238830",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705156750/ovymicrh2tiqnedmwdny.jpg",
            team: {
              name: "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              id: 275,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1183,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHAMMA",
            chestNO: "CMS227364",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705122600/kjdpcvdswl9knl0h9rgj.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1397,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SHAHANA KHADEEJA KT",
            chestNO: "CMS227477",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705224115/olpumdh8bfhzvksumudo.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1778,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SIRAJUDHEEN",
            chestNO: "CMS228081",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705290511/k43cyugurxtimpkhsiap.jpg",
            team: {
              name: "EXCELLENCE WOMEN'S COLLEGE, CHERUVANCHERY",
              id: 294,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 2216,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "LIYANA FATHIMA C",
            chestNO: "CMS238924",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705219062/f0rselrqbh5nbavnsrd4.jpg",
            team: {
              name: "AL AZHAR GIRLS ACADEMY , ANANGADI",
              id: 300,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 2691,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "NAFEESATH MISRIYA",
            chestNO: "CMS238668",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705224746/pj2hypyjfoaexlar3jum.jpg",
            team: {
              name: "BEEVI KHADEEJA WOMEN'S COLLEGE , ULIYATHADUKA",
              id: 282,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
      ],
    },
    {
      id: 17,
      name: "WORD FIGHT ARB",
      type: "SINGLE",
      programCode: "TX8",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 388,
          zonalpoint: 7,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "HIBA SHERIN A",
            chestNO: "CMS227585",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705148656/arw9zfbubrkce1mpd2gt.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1032,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "NAFEESATHUL MUFLIHA CM",
            chestNO: "CMS238829",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705156766/hbzyoqhfg7yp9lekqfe4.jpg",
            team: {
              name: "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              id: 275,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1398,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "AFEEFA SHERIN MK",
            chestNO: "CMS227456",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705242112/ib0vgudgyik5xdzkuyo2.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 2227,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "FATHIMA SANA VK",
            chestNO: "CMS228017",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705219136/arjhvjdkxhunppc6s5yl.jpg",
            team: {
              name: "AL AZHAR GIRLS ACADEMY , ANANGADI",
              id: 300,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 2269,
          zonalpoint: 8,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMATH SHIBILA KP",
            chestNO: "CMS238433",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705148585/han18vkpm1xlxa8t1dut.jpg",
            team: {
              name: "MOUNT SINA WOMEN'S COLLEGE, PADAPPARAMBA",
              id: 316,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
      ],
    },
    {
      id: 19,
      name: "ESSAY MLM",
      type: "SINGLE",
      programCode: "TY10",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 1138,
          zonalpoint: 6,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SAJINATH K",
            chestNO: "CMS227991",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705202231/mrgb9upgf8zlsaahnwb4.jpg",
            team: {
              name: "SYED MUHAMMED ALI SHIHAB THANGAL WOMEN'S COLLEGE, CHUNDAMPATTA",
              id: 330,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1554,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "AYISHA HUSNA PP",
            chestNO: "CMS226977",
            avatar: null,
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 1874,
          zonalpoint: 6,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "THAMANNA SHERIN M",
            chestNO: "CMS227442",
            avatar: null,
            team: {
              name: "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              id: 313,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 2205,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "JUVAIRIYA",
            chestNO: "CMS228031",
            avatar: null,
            team: {
              name: "POSOAT JAMA-ATH MAHDIYYA WOMENS COLLEGE, POSOAT",
              id: 285,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
      ],
    },
    {
      id: 20,
      name: "SHORT STORY MLM",
      type: "SINGLE",
      programCode: "TY11",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 218,
          zonalpoint: 3,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SURAYYA RASHEED.M.M",
            chestNO: "CMS238452",
            avatar: null,
            team: {
              name: "NAJAH ACADEMY FOR GIRLS, NELLIKKUTH",
              id: 319,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 545,
          zonalpoint: 3,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "MUNSHIDHA P",
            chestNO: "CMS228052",
            avatar: null,
            team: {
              name: "SHEiN GIRLS CAMPUS, PULLARA",
              id: 304,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1040,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMATHU NUHBA TK",
            chestNO: "CMS238823",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705038040/oudzzyebqzitl9eiu6rn.jpg",
            team: {
              name: "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              id: 275,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
      ],
    },
    {
      id: 21,
      name: "SHORT STORY ENG",
      type: "SINGLE",
      programCode: "TY12",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 337,
          zonalpoint: 6,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "ISMATH.KC",
            chestNO: "CMS227019",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705130810/fcxljc7vomqd9f9uu1gr.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              id: 279,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1190,
          zonalpoint: 3,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HASHEEDA IBRAHIM",
            chestNO: "CMS238977",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705122439/ydge2ah3xemkjpnicz12.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1890,
          zonalpoint: 6,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SHAHANA K.V",
            chestNO: "CMS238534",
            avatar: null,
            team: {
              name: "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              id: 313,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 2739,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "LUBNA",
            chestNO: "CMS227791",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705072373/dqu07z8sfbbdrcxtxfpr.jpg",
            team: {
              name: "BUSTHANIYYA WOMENS' COLLEGE, VADAKARA",
              id: 289,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
      ],
    },
    {
      id: 22,
      name: "SHORT STORY ARB",
      type: "SINGLE",
      programCode: "TY13",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 1149,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NAJMA ASHIKHA MK",
            chestNO: "CMS227995",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705202250/fplxqsipryt3vtsvf6mv.jpg",
            team: {
              name: "SYED MUHAMMED ALI SHIHAB THANGAL WOMEN'S COLLEGE, CHUNDAMPATTA",
              id: 330,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1193,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SAHLA",
            chestNO: "CMS227376",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705122807/yukjjwsmfyiijyhkkgl2.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1403,
          zonalpoint: 3,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NAJIYA THASSNEEM",
            chestNO: "CMS227153",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705143160/fcylrdnaf5stykwvcav8.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, MOONNIYUR",
              id: 312,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
      ],
    },
    {
      id: 23,
      name: "POEM WRITING MLM",
      type: "SINGLE",
      programCode: "TY14",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 342,
          zonalpoint: 6,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "AYISHABI MTP",
            chestNO: "CMS227027",
            avatar: null,
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              id: 279,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1479,
          zonalpoint: 6,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHIFA K",
            chestNO: "CMS227479",
            avatar: null,
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 2344,
          zonalpoint: 3,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NAJIYA FARSHANA KP",
            chestNO: "CMS227998",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705219084/ibobcvnphqpku3b98tim.jpg",
            team: {
              name: "AL AZHAR GIRLS ACADEMY , ANANGADI",
              id: 300,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 2672,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA FARHANA",
            chestNO: "CMS238755",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705151217/uyhvip7kpohq3ntnw504.jpg",
            team: {
              name: "SHIHAB THANGAL MEMMORIAL WOMEN'S COLLEGE, KALPATTA",
              id: 297,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
      ],
    },
    {
      id: 24,
      name: "TRANSLATION ARB TO MLM",
      type: "SINGLE",
      programCode: "TY15",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 1482,
          zonalpoint: 6,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "MUHSINA FARVIN T",
            chestNO: "CMS227475",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705225015/ksvcyqgjms4cmtirlocx.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1602,
          zonalpoint: 3,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "MEHRUNNISA J.P",
            chestNO: "CMS227650",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705223569/eo6cfljvpz9zyy94ccy2.jpg",
            team: {
              name: "BEEVI KHADEEJA WOMEN'S COLLEGE , ULIYATHADUKA",
              id: 282,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 2366,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "AYSHA THASNEEM M",
            chestNO: "CMS228006",
            avatar: null,
            team: {
              name: "AL AZHAR GIRLS ACADEMY , ANANGADI",
              id: 300,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 2753,
          zonalpoint: 3,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA JUMANA",
            chestNO: "CMS227784",
            avatar: null,
            team: {
              name: "BUSTHANIYYA WOMENS' COLLEGE, VADAKARA",
              id: 289,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
      ],
    },
    {
      id: 25,
      name: "TRANSLATION ENG TO MLM",
      type: "SINGLE",
      programCode: "TY16",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 739,
          zonalpoint: 3,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "INA THAMANNA",
            chestNO: "CMS238233",
            avatar: null,
            team: {
              name: "USWA WOMEN'S COLLEGE, PANANGANGARA",
              id: 311,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 1483,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA FASMIYA P",
            chestNO: "CMS227494",
            avatar: null,
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1805,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NAFEESATH MISIRIYA",
            chestNO: "CMS227649",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705223508/d9kefu9uhai8icqeshew.jpg",
            team: {
              name: "BEEVI KHADEEJA WOMEN'S COLLEGE , ULIYATHADUKA",
              id: 282,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 2676,
          zonalpoint: 8,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "JASMIN T",
            chestNO: "CMS227755",
            avatar: null,
            team: {
              name: "SHIHAB THANGAL MEMMORIAL WOMEN'S COLLEGE, KALPATTA",
              id: 297,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
      ],
    },
    {
      id: 26,
      name: "PENCIL DRAWING",
      type: "SINGLE",
      programCode: "TY17",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 367,
          zonalpoint: 6,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NAJIDHA. M",
            chestNO: "CMS227176",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705173823/y8smewizxwl0msiord7y.jpg",
            team: {
              name: "IMAM FAQRUDHEEN RAZI ACADEMY (IFRA), KOROME",
              id: 295,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 411,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHAFNA KP",
            chestNO: "CMS227576",
            avatar: null,
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1310,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "RINSHIDA P",
            chestNO: "CMS238711",
            avatar: null,
            team: {
              name: "FAZFARI WOMEN'S ACADEMY, PADINHATTUMURI",
              id: 315,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 2257,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "MARIYAM SHIBLA",
            chestNO: "CMS228039",
            avatar: null,
            team: {
              name: "POSOAT JAMA-ATH MAHDIYYA WOMENS COLLEGE, POSOAT",
              id: 285,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 2296,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HIBA SHERIN P",
            chestNO: "CMS238141",
            avatar: null,
            team: {
              name: "ALWARDA WOMEN'S COLLEGE,VENGARA",
              id: 298,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
      ],
    },
    {
      id: 28,
      name: "PAINTING",
      type: "SINGLE",
      programCode: "TY19",
      category: {
        name: "Thanawiyya",
      },
      candidateProgramme: [
        {
          id: 1065,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HIBA. EK",
            chestNO: "CMS227842",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705156561/qxk7kznazggjdcamg2pc.jpg",
            team: {
              name: "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              id: 275,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 2367,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA JUGUNU VTS",
            chestNO: "CMS238817",
            avatar: null,
            team: {
              name: "BAITHUL HUDA WOMENS COLLEGE, VAILATHUR",
              id: 318,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 3062,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SHAHLA FATHIMA",
            chestNO: "CMS227253",
            avatar: null,
            team: {
              name: "MISBAHUL HUDA WOMEN'S COLLEGE, KUTTIYADI",
              id: 287,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
      ],
    },
    {
      id: 29,
      name: "QUR’AN TALENT SHOW",
      type: "SINGLE",
      programCode: "AX1",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 441,
          zonalpoint: 2,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: null,
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "SUHAILA KK",
            chestNO: "CMS216393",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705148896/eamqvptnhht4narkwbod.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1499,
          zonalpoint: 3,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA LUBABA. KT",
            chestNO: "DMSB239215",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705224209/ohmwat9tdb89bavpdj71.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1658,
          zonalpoint: 5,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "NAFEESATH MISIRIYA",
            chestNO: "CMS205405",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705225145/hbeqsaheqpzrph6bkgan.jpg",
            team: {
              name: "BEEVI KHADEEJA WOMEN'S COLLEGE , ULIYATHADUKA",
              id: 282,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1963,
          zonalpoint: 6,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FEMINA C",
            chestNO: "DMS225820",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705154950/ecem29nhhqdqqhfeinqk.jpg",
            team: {
              name: "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              id: 313,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
      ],
    },
    {
      id: 32,
      name: "EXTEMPORE SPEECH MLM",
      type: "SINGLE",
      programCode: "AX4",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 675,
          zonalpoint: 8,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NIDA",
            chestNO: "CMS204492",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705131268/wumbvmex80ei7wbrbvyp.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              id: 279,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1209,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "ARSHIDA TP",
            chestNO: "DMS225811",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705123088/e1bluptntgdmblzvbhjr.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1733,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "RAHILA T",
            chestNO: "DMS215654",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705166674/f13qlu47ovihsn5urrcm.jpg",
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 1936,
          zonalpoint: 5,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "SIHANA P",
            chestNO: "CMS194002",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705158632/xmso48lqapmehfrcahqb.jpg",
            team: {
              name: "ZAKIYA WOMEN'S ACADEMY, OTTAPALAM",
              id: 329,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1974,
          zonalpoint: 5,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "UMMU HABEEBA",
            chestNO: "CMS194214",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705154982/cpzahvbxtaau9gsrdczs.jpg",
            team: {
              name: "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              id: 313,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
      ],
    },
    {
      id: 33,
      name: "SONG MLM",
      type: "SINGLE",
      programCode: "AX5",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 308,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "FATHIMA RINSHA A C",
            chestNO: "CMS204513",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705157873/nbiezu4kklqdvoklwotb.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, VENNIYOOR",
              id: 308,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 492,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HUSNA SHERIN N",
            chestNO: "CMS216384",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705154007/v7fuc7f5pel0pfhrtash.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 832,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "RASHIDA",
            chestNO: "DMS215745",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705210246/a7pbywjajmxdelzf5v9z.jpg",
            team: {
              name: "SHAMSUL ULAMA WOMENS COLLEGE, SULTHAN BATHERI",
              id: 296,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 1055,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SHIFANA JASMIN K",
            chestNO: "CMS216183",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705221116/nwaz2gl8kjhfiqn9h8sj.jpg",
            team: {
              name: "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              id: 317,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 1773,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "FATHIMA SAFNA M",
            chestNO: "CMS216045",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705395451/sx5vui07ocwcy1qwfykd.jpg",
            team: {
              name: "AL WAFA WOMEN'S COLLEGE, PATTAMBI",
              id: 326,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 2456,
          zonalpoint: 7,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "SHAHANA SHERIN .MT",
            chestNO: "CMS204848",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705148263/s4hbw28w3btbh9caviap.jpg",
            team: {
              name: "MOUNT SINA WOMEN'S COLLEGE, PADAPPARAMBA",
              id: 316,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 2910,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "FIDHA FATHIMA. M",
            chestNO: "CMS216144",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705150895/cyqclpye9zc7gf0ozekt.jpg",
            team: {
              name: "RAHMANIYA WOMEN'S COLLEGE, AZHIYOOR",
              id: 288,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
      ],
    },
    {
      id: 34,
      name: "SONG ARB",
      type: "SINGLE",
      programCode: "AX6",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 418,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMATHU RISHANA T.K",
            chestNO: "CMS204725",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705174113/w9amnlxxq9zuc5h1k82m.jpg",
            team: {
              name: "IMAM FAQRUDHEEN RAZI ACADEMY (IFRA), KOROME",
              id: 295,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 496,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "ASMINA YASMIN.EK",
            chestNO: "CMS193976",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705153979/frrdyxfxgik29sdwfzh5.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 678,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HIBA.P",
            chestNO: "CMS204491",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705130880/ae4drg8nsowrxmztvnm0.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              id: 279,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 835,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "MIRSHANA SHERIN P",
            chestNO: "DMS215740",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705210198/t2wlao99hevlxqya6rgv.jpg",
            team: {
              name: "SHAMSUL ULAMA WOMENS COLLEGE, SULTHAN BATHERI",
              id: 296,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 1056,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SAYYIDATH FATHIMA KPM",
            chestNO: "DMS225800",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705220385/axfcrejfyytalxzryein.jpg",
            team: {
              name: "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              id: 317,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 1077,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "BASHEERA. KP",
            chestNO: "CMS216783",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705156458/uukmovkfn4dtgvcw4y1y.jpg",
            team: {
              name: "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              id: 275,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1211,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHAMLA",
            chestNO: "DMSA239188",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705123016/p3mwhxdj9zrufkawev1u.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
      ],
    },
    {
      id: 35,
      name: "WORD FIGHT ARB",
      type: "SINGLE",
      programCode: "AX7",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 682,
          zonalpoint: 7,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "MARIYAM ABDULLA",
            chestNO: "CMS215843",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705131423/tx7ju28bq17c7q6ubor5.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              id: 279,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1512,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA HABEEBA AP",
            chestNO: "CMS216303",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705224191/v0ycldksvxu38dvt8m6d.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1771,
          zonalpoint: 6,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HIBA MARIYAM",
            chestNO: "CMS204418",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705199744/dqidfynozo6nnkjeoyn7.jpg",
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 2386,
          zonalpoint: 7,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "JUMANA FIDHA EP",
            chestNO: "CMS215696",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705141123/ul4ypkreuqymzsgnxvru.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE,VENGARA",
              id: 298,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 2471,
          zonalpoint: 7,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "ARIFA P",
            chestNO: "CMS193443",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705139918/ew785xxnlazhipegaic6.jpg",
            team: {
              name: "MOUNT SINA WOMEN'S COLLEGE, PADAPPARAMBA",
              id: 316,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
      ],
    },
    {
      id: 36,
      name: "WORD FIGHT ENG",
      type: "SINGLE",
      programCode: "AX8",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 424,
          zonalpoint: 7,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "NIDHA FATHIMA. KC",
            chestNO: "DMSA239193",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705173941/q2vmsc5bo5y1fhbtryul.jpg",
            team: {
              name: "IMAM FAQRUDHEEN RAZI ACADEMY (IFRA), KOROME",
              id: 295,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 498,
          zonalpoint: 7,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "FATHIMA NASNA.A",
            chestNO: "CMS193978",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705137894/yl1f7t7e1flvti3mvqkl.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1060,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA MUHSINA B V T",
            chestNO: "CMS216175",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705220458/okslirgbmelle9uazuap.jpg",
            team: {
              name: "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              id: 317,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 1213,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "ASMIYA A M",
            chestNO: "CMS216185",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705122905/gzlzywq0wl5adgijayhf.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1513,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHAFNA K",
            chestNO: "CMS216286",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705225027/j9cizbmynhhwyaigpohh.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1775,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NAJA FATHIMA",
            chestNO: "DMSA239099",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705219365/ff5sb2bowogqub5cpre0.jpg",
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 1898,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMATH FAHIZA.M",
            chestNO: "CMS205170",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705128261/sg7nciybp1vh0tnhapsd.jpg",
            team: {
              name: "AFSAL-UL-ULAMA WOMEN'S COLLEGE, A K ROAD, BEKAL",
              id: 281,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
      ],
    },
    {
      id: 37,
      name: "MOTIVATIONAL TALK",
      type: "SINGLE",
      programCode: "AX9",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 427,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "RIFANA FATHIMA K",
            chestNO: "CMS204723",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705174098/pdbxf7sexsvth5idifq8.jpg",
            team: {
              name: "IMAM FAQRUDHEEN RAZI ACADEMY (IFRA), KOROME",
              id: 295,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 686,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "BUSHRA",
            chestNO: "CMS204495",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705130953/uv341x0iyys4wrwgtzeo.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              id: 279,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 850,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "RASHIDA",
            chestNO: "DMS215745",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705210246/a7pbywjajmxdelzf5v9z.jpg",
            team: {
              name: "SHAMSUL ULAMA WOMENS COLLEGE, SULTHAN BATHERI",
              id: 296,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 1214,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "JUMANA JEBIN C",
            chestNO: "CMS216750",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705122975/vuogd0fzeehz0efelcel.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1282,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHADIYA M",
            chestNO: "DMSA239181",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705214927/orchhyx2mgbxt8umfhpd.jpg",
            team: {
              name: "VELIYANCODE ISLAMIC CENTER WOMEN'S ACADEMY",
              id: 323,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1515,
          zonalpoint: 7,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "ASNA S.K",
            chestNO: "CMS193664",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705225262/crtgwuaudaosmyb8v85v.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1990,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "ANSHITHA THANSI. MK",
            chestNO: "CMS194071",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705154967/a94l0720ksrctn4dgvwy.jpg",
            team: {
              name: "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              id: 313,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 2127,
          zonalpoint: 7,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "FATHIMATH NOORA K",
            chestNO: "CMS193294",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705294060/tzozh43fihqqrsb1xbjc.jpg",
            team: {
              name: "AL MAWADDA WOMEN'S COLLEGE, AYYAYA ROAD, KORAD",
              id: 306,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
      ],
    },
    {
      id: 38,
      name: "FACE THE BOOK",
      type: "SINGLE",
      programCode: "AX10",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 504,
          zonalpoint: 8,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FAHMITHA .A",
            chestNO: "CMS205308",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705138098/mv4fhjkubg7jx26f0pe3.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 689,
          zonalpoint: 5,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 2,
            name: "Second",
          },
          candidate: {
            name: "MARIYAM ABDULLA",
            chestNO: "CMS215843",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705131423/tx7ju28bq17c7q6ubor5.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              id: 279,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1064,
          zonalpoint: 6,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SAYIDATH AYISHA MAHSHOOKA KMS",
            chestNO: "CMS216172",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705220678/kwt7eyjps5pvmp6pzpwm.jpg",
            team: {
              name: "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              id: 317,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 2392,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SUHAILA TP",
            chestNO: "CMS204299",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705141146/enmhzubsmbzuqifymtcl.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE,VENGARA",
              id: 298,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
      ],
    },
    {
      id: 39,
      name: "ESSAY MLM",
      type: "SINGLE",
      programCode: "AY11",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 1086,
          zonalpoint: 3,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SAFIYATH. KV",
            chestNO: "CMS216787",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705156417/iwyvoztbvoz47nfwj4jw.jpg",
            team: {
              name: "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              id: 275,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1799,
          zonalpoint: 6,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHABEEBA C.",
            chestNO: "DMS215656",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705395474/afazpkujyaxxmigwwut7.jpg",
            team: {
              name: "AL WAFA WOMEN'S COLLEGE, PATTAMBI",
              id: 326,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 2004,
          zonalpoint: 3,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "AMEENA SALMA SP",
            chestNO: "CMS194044",
            avatar: null,
            team: {
              name: "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              id: 313,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 2528,
          zonalpoint: 8,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "RAFNA SHERIN NK",
            chestNO: "CMS181642",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705258537/kvrdjypuhg6n28igld0e.jpg",
            team: {
              name: "IDN JUNIOR COLLEGE FOR WOMEN,CHIRAMANGALAM SOUTH",
              id: 299,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
      ],
    },
    {
      id: 40,
      name: "ESSAY ARB",
      type: "SINGLE",
      programCode: "AY12",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 1218,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHAMLA",
            chestNO: "DMSA239188",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705123016/p3mwhxdj9zrufkawev1u.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1520,
          zonalpoint: 6,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA LUBABA. KT",
            chestNO: "DMSB239215",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705224209/ohmwat9tdb89bavpdj71.jpg",
            team: {
              name: "MIC WOMENS ACADEMY - KOTTOPPADAM",
              id: 327,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1971,
          zonalpoint: 8,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "KHADEEJA BEEVI",
            chestNO: "DMS225830",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705159812/uajxktlxpwngxkagmyzh.jpg",
            team: {
              name: "AFSAL-UL-ULAMA WOMEN'S COLLEGE, A K ROAD, BEKAL",
              id: 281,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
      ],
    },
    {
      id: 41,
      name: "ESSAY ENG",
      type: "SINGLE",
      programCode: "AY13",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 499,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA NASNA.A",
            chestNO: "CMS193978",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705137894/yl1f7t7e1flvti3mvqkl.jpg",
            team: {
              name: "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              id: 322,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 1808,
          zonalpoint: 3,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "AYISHA SWAFA PC",
            chestNO: "CMS204385",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705166516/weghapyqpxwr6lo0jgwr.jpg",
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 1977,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMATH FAHIZA.M",
            chestNO: "CMS205170",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705128261/sg7nciybp1vh0tnhapsd.jpg",
            team: {
              name: "AFSAL-UL-ULAMA WOMEN'S COLLEGE, A K ROAD, BEKAL",
              id: 281,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 2408,
          zonalpoint: 6,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "SUHAILA TP",
            chestNO: "CMS204299",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705141146/enmhzubsmbzuqifymtcl.jpg",
            team: {
              name: "ALWARDA WOMEN'S COLLEGE,VENGARA",
              id: 298,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 2804,
          zonalpoint: 6,
          finalpoint: 3,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: null,
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FAHMIDA SHAHMA",
            chestNO: "CMS192860",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705074464/skbm5s9olwfv5yfnrck2.jpg",
            team: {
              name: "USWA WOMEN'S COLLEGE, PANANGANGARA",
              id: 311,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
      ],
    },
    {
      id: 42,
      name: "SHORT STORY MLM",
      type: "SINGLE",
      programCode: "AY14",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 972,
          zonalpoint: 3,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "MURSHIDA",
            chestNO: "CMS205571",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705141957/dfrwvvxcy6atjbrcyozx.jpg",
            team: {
              name: "AL BATHOOL WOMEN'S COLLEGE, PENGAD, AIKARAPPADI",
              id: 302,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1816,
          zonalpoint: 3,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA AJMILA KK",
            chestNO: "CMS204388",
            avatar: null,
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 2522,
          zonalpoint: 3,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HABEEBA NASRIN. P V",
            chestNO: "CMS216532",
            avatar: null,
            team: {
              name: "KNK MEMORIAL WOMENS COLLEGE, KOKKOOR",
              id: 314,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
      ],
    },
    {
      id: 43,
      name: "SHORT STORY ARB",
      type: "SINGLE",
      programCode: "AY15",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 1828,
          zonalpoint: 3,
          finalpoint: 4,
          finalgrade: {
            id: 2,
            name: "B",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "RAHILA T",
            chestNO: "DMS215654",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705166674/f13qlu47ovihsn5urrcm.jpg",
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 2000,
          zonalpoint: 6,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 2,
            name: "B",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "RAHAMATH A",
            chestNO: "CMS194006",
            avatar: null,
            team: {
              name: "ZAKIYA WOMEN'S ACADEMY, OTTAPALAM",
              id: 329,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
        {
          id: 2432,
          zonalpoint: 8,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "NASEEMA UV",
            chestNO: "CMS192632",
            avatar: null,
            team: {
              name: "ALWARDA WOMEN'S COLLEGE,VENGARA",
              id: 298,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
      ],
    },
    {
      id: 44,
      name: "SHORT STORY ENG",
      type: "SINGLE",
      programCode: "AY16",
      category: {
        name: "Aliya",
      },
      candidateProgramme: [
        {
          id: 1089,
          zonalpoint: 3,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "BAHJATHUL RILA",
            chestNO: "DMSA239150",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705220307/lgexntd0qd6nltd1002b.jpg",
            team: {
              name: "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              id: 317,
              zone: {
                name: "D",
                id: 8,
              },
            },
          },
        },
        {
          id: 1108,
          zonalpoint: 8,
          finalpoint: 6,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 3,
            name: "Third",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "HIBA SAMEER",
            chestNO: "CMS216794",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705156278/s6h27s1udipxrbyu0a6n.jpg",
            team: {
              name: "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              id: 275,
              zone: {
                name: "A",
                id: 2,
              },
            },
          },
        },
        {
          id: 1226,
          zonalpoint: 3,
          finalpoint: 7,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 2,
            name: "Second",
          },
          zonalgrade: null,
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "FATHIMA SHAMLA",
            chestNO: "DMSA239188",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705123016/p3mwhxdj9zrufkawev1u.jpg",
            team: {
              name: "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              id: 310,
              zone: {
                name: "C",
                id: 7,
              },
            },
          },
        },
        {
          id: 1845,
          zonalpoint: 8,
          finalpoint: 5,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: null,
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "AYISHA SWAFA PC",
            chestNO: "CMS204385",
            avatar:
              "https://res.cloudinary.com/defrflfmj/image/upload/v1705166516/weghapyqpxwr6lo0jgwr.jpg",
            team: {
              name: "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              id: 293,
              zone: {
                name: "B",
                id: 6,
              },
            },
          },
        },
        {
          id: 2010,
          zonalpoint: 8,
          finalpoint: 8,
          finalgrade: {
            id: 1,
            name: "A",
          },
          finalposition: {
            id: 1,
            name: "First",
          },
          zonalgrade: {
            id: 1,
            name: "A",
          },
          zonalposition: {
            id: 1,
            name: "First",
          },
          candidate: {
            name: "JUMANA KAUZAR P M",
            chestNO: "CMS194028",
            avatar: null,
            team: {
              name: "ZAKIYA WOMEN'S ACADEMY, OTTAPALAM",
              id: 329,
              zone: {
                name: "E",
                id: 9,
              },
            },
          },
        },
      ],
    },
  ];
  const [prg, setPrg] = useState({});

  // in every 5 seconds set object of data to prg state order by index of data array

  useEffect(() => {
    const interval = setInterval(() => {
      setPrg(data[Math.floor(Math.random() * data.length)]);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white flex h-screen w-screen overflow-hidden">
      <div className="w-80 h-screen flex justify-center items-center ml-10">
        <img
          src="/vertical-lines.png"
          alt=""
          className="w-80 h-screen absolute"
        />
        <div className="w-52 h-52 rounded-full bg-white z-10 flex items-center justify-center">
          <img src="/logo.svg" alt=" " className="w-40" />
        </div>
      </div>

      <div className="flex-col justify-center items-center ml-10 w-full p-10 z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="font-bold bg-yellower px-3 min-w-12 h-8  flex justify-center rounded-full text-white items-center">
              {prg.programCode}
            </span>
          </div>
          <p className="font-black text-black text-3xl"> {prg.name}</p>
          <p className="text-black">{prg.category?.name}</p>
        </div>
        <div className="flex space-between justify-between mt-10 items-center ">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-3 items-center">
              <div className="font-black bg-yellower w-12 h-12 flex justify-center rounded-full text-white items-center">
                1st
              </div>
              <div className="relative">
                <img
                  src={`${
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 1
                    )?.candidate.avatar || "/avatar.jpg"
                  }`}
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    {
                      prg?.candidateProgramme?.find(
                        (item) => item.finalposition?.id === 1
                      )?.finalgrade?.name
                    }{" "}
                    Grade
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 1
                    )?.candidate.chestNO
                  }
                </p>
                <p className="font-bold mt-1">
                  {
                    prg.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 1
                    )?.candidate.name
                  }
                </p>
                <p className="text-sm mb-1 text-gray-800">
                  {
                    prg.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 1
                    )?.candidate.team.name
                  }
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                  Zone{" "}
                  {
                    prg.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 1
                    )?.candidate.team.zone?.name
                  }
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="font-black bg-slate-500 w-12 h-12 flex justify-center rounded-full text-white items-center">
                2nd
              </div>
              <div className="relative">
                <img
                  src={`${
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 2
                    )?.candidate.avatar || "/avatar.jpg"
                  }`}
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    {
                      prg?.candidateProgramme?.find(
                        (item) => item.finalposition?.id === 2
                      )?.finalgrade?.name
                    }
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 2
                    )?.candidate?.chestNO
                  }
                </p>
                <p className="font-bold mt-1">
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 2
                    )?.candidate?.name
                  }
                </p>
                <p className="text-sm mb-1 text-gray-800">
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 2
                    )?.candidate?.team?.name
                  }
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                  Zone{" "}
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 2
                    )?.candidate?.team?.zone.name
                  }
                </p>
              </div>
            </div>
            {/* <div className="flex gap-3 items-center">
              <div className="font-black bg-orange w-12 h-12 flex justify-center rounded-full text-white items-center">
                3rd
              </div>
              <div className="relative">
                <img
                  src="/avatar.jpg"
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    A Grade
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  CMS903246
                </p>
                <p className="font-bold mt-1">Muhameed Taheed</p>
                <p className="text-sm mb-1 text-gray-800">
                  dfjhsdf ds fdk fjldsk flds jflds flds flds fjd fd
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                  Zone E
                </p>
              </div>
            </div> */}
            <div className="flex gap-3 items-center">
              <div className="font-black bg-orange w-12 h-12 flex justify-center rounded-full text-white items-center">
                3rd
              </div>
              <div className="relative">
                <img
                  src={`${
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 3
                    )?.candidate.avatar || "/avatar.jpg"
                  }`}
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    {
                      prg?.candidateProgramme?.find(
                        (item) => item.finalposition?.id === 3
                      )?.finalgrade?.name
                    }
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 3
                    )?.candidate?.chestNO
                  }
                </p>
                <p className="font-bold mt-1">
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 3
                    )?.candidate?.name
                  }
                </p>
                <p className="text-sm mb-1 text-gray-800">
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 3
                    )?.candidate?.team?.name
                  }
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                  Zone{" "}
                  {
                    prg?.candidateProgramme?.find(
                      (item) => item.finalposition?.id === 3
                    )?.candidate?.team?.zone.name
                  }
                </p>
              </div>
            </div>
          </div>

          {/* map all balanced candidateProgramme */}

          <div className="flex flex-col gap-2 ">
            {prg?.candidateProgramme
              ?.filter((item) => item.finalposition === null)
              .map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="relative">
                    <img
                      src={`${item?.candidate.avatar || "/avatar.jpg"}`}
                      alt="image"
                      className="rounded-xl h-20 w-20 object-cover"
                    />
                    <p className="flex justify-center absolute bottom-0 w-28">
                      <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                        {item?.finalgrade?.name}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                      {item?.candidate?.chestNO}
                    </p>
                    <p className="font-bold mt-1">{item?.candidate?.name}</p>
                    <p className="text-sm mb-1 text-gray-800">
                      {item?.candidate?.team?.name}
                    </p>
                    <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                      Zone {item?.candidate?.team?.zone.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
