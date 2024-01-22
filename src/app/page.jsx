"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const data =[
    {
      "id": 16,
      "name": "WORD FIGHT ENG",
      "type": "SINGLE",
      "programCode": "TX7",
      "category": {
        "name": "Thanawiyya"
      },
      "candidateProgramme": [
        {
          "id": 387,
          "zonalpoint": 7,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "NAFIYA KK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705148676/bvp5vavvlcq1h8eimymz.jpg",
            "chestNO": "CMS227589",
            "team": {
              "name": "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              "id": 322,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 580,
          "zonalpoint": 5,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "SHAMEEMA NASRIN.KK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705139892/btbbnq4rxl6znpdkec0t.jpg",
            "chestNO": "CMS227129",
            "team": {
              "name": "ALWARDA WOMEN'S COLLEGE, MOONNIYUR",
              "id": 312,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 1008,
          "zonalpoint": 8,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA HADIYA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705220169/ilxha9iuzy1uzo9tw8rf.jpg",
            "chestNO": "CMS227351",
            "team": {
              "name": "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              "id": 317,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 1029,
          "zonalpoint": 8,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "RAJA THAHIR",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705156750/ovymicrh2tiqnedmwdny.jpg",
            "chestNO": "CMS238830",
            "team": {
              "name": "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              "id": 275,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 1183,
          "zonalpoint": 8,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SHAMMA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705122600/kjdpcvdswl9knl0h9rgj.jpg",
            "chestNO": "CMS227364",
            "team": {
              "name": "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              "id": 310,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 1397,
          "zonalpoint": 8,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "SHAHANA KHADEEJA KT",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705224115/olpumdh8bfhzvksumudo.jpg",
            "chestNO": "CMS227477",
            "team": {
              "name": "MIC WOMENS ACADEMY - KOTTOPPADAM",
              "id": 327,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1778,
          "zonalpoint": 8,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SIRAJUDHEEN",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705290511/k43cyugurxtimpkhsiap.jpg",
            "chestNO": "CMS228081",
            "team": {
              "name": "EXCELLENCE WOMEN'S COLLEGE, CHERUVANCHERY",
              "id": 294,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 2216,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "LIYANA FATHIMA C",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705219062/f0rselrqbh5nbavnsrd4.jpg",
            "chestNO": "CMS238924",
            "team": {
              "name": "AL AZHAR GIRLS ACADEMY , ANANGADI",
              "id": 300,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 2691,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "NAFEESATH MISRIYA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705224746/pj2hypyjfoaexlar3jum.jpg",
            "chestNO": "CMS238668",
            "team": {
              "name": "BEEVI KHADEEJA WOMEN'S COLLEGE , ULIYATHADUKA",
              "id": 282,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        }
      ]
    },
    {
      "id": 17,
      "name": "WORD FIGHT ARB",
      "type": "SINGLE",
      "programCode": "TX8",
      "category": {
        "name": "Thanawiyya"
      },
      "candidateProgramme": [
        {
          "id": 388,
          "zonalpoint": 7,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "HIBA SHERIN A",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705148656/arw9zfbubrkce1mpd2gt.jpg",
            "chestNO": "CMS227585",
            "team": {
              "name": "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              "id": 322,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1032,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "NAFEESATHUL MUFLIHA CM",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705156766/hbzyoqhfg7yp9lekqfe4.jpg",
            "chestNO": "CMS238829",
            "team": {
              "name": "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              "id": 275,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 1398,
          "zonalpoint": 8,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "AFEEFA SHERIN MK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705242112/ib0vgudgyik5xdzkuyo2.jpg",
            "chestNO": "CMS227456",
            "team": {
              "name": "MIC WOMENS ACADEMY - KOTTOPPADAM",
              "id": 327,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 2227,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "FATHIMA SANA VK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705219136/arjhvjdkxhunppc6s5yl.jpg",
            "chestNO": "CMS228017",
            "team": {
              "name": "AL AZHAR GIRLS ACADEMY , ANANGADI",
              "id": 300,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 2269,
          "zonalpoint": 8,
          "finalpoint": 4,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMATH SHIBILA KP",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705148585/han18vkpm1xlxa8t1dut.jpg",
            "chestNO": "CMS238433",
            "team": {
              "name": "MOUNT SINA WOMEN'S COLLEGE, PADAPPARAMBA",
              "id": 316,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        }
      ]
    },
    {
      "id": 19,
      "name": "ESSAY MLM",
      "type": "SINGLE",
      "programCode": "TY10",
      "category": {
        "name": "Thanawiyya"
      },
      "candidateProgramme": [
        {
          "id": 1138,
          "zonalpoint": 6,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "SAJINATH K",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705202231/mrgb9upgf8zlsaahnwb4.jpg",
            "chestNO": "CMS227991",
            "team": {
              "name": "SYED MUHAMMED ALI SHIHAB THANGAL WOMEN'S COLLEGE, CHUNDAMPATTA",
              "id": 330,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1554,
          "zonalpoint": 8,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "AYISHA HUSNA PP",
            "avatar": null,
            "chestNO": "CMS226977",
            "team": {
              "name": "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              "id": 293,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 1874,
          "zonalpoint": 6,
          "finalpoint": 4,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "THAMANNA SHERIN M",
            "avatar": null,
            "chestNO": "CMS227442",
            "team": {
              "name": "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              "id": 313,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 2205,
          "zonalpoint": 8,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "JUVAIRIYA",
            "avatar": null,
            "chestNO": "CMS228031",
            "team": {
              "name": "POSOAT JAMA-ATH MAHDIYYA WOMENS COLLEGE, POSOAT",
              "id": 285,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        }
      ]
    },
    {
      "id": 20,
      "name": "SHORT STORY MLM",
      "type": "SINGLE",
      "programCode": "TY11",
      "category": {
        "name": "Thanawiyya"
      },
      "candidateProgramme": [
        {
          "id": 218,
          "zonalpoint": 3,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "SURAYYA RASHEED.M.M",
            "avatar": null,
            "chestNO": "CMS238452",
            "team": {
              "name": "NAJAH ACADEMY FOR GIRLS, NELLIKKUTH",
              "id": 319,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 545,
          "zonalpoint": 3,
          "finalpoint": 4,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "MUNSHIDHA P",
            "avatar": null,
            "chestNO": "CMS228052",
            "team": {
              "name": "SHEiN GIRLS CAMPUS, PULLARA",
              "id": 304,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 1040,
          "zonalpoint": 8,
          "finalpoint": 5,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMATHU NUHBA TK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705038040/oudzzyebqzitl9eiu6rn.jpg",
            "chestNO": "CMS238823",
            "team": {
              "name": "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              "id": 275,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        }
      ]
    },
    {
      "id": 21,
      "name": "SHORT STORY ENG",
      "type": "SINGLE",
      "programCode": "TY12",
      "category": {
        "name": "Thanawiyya"
      },
      "candidateProgramme": [
        {
          "id": 337,
          "zonalpoint": 6,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "ISMATH.KC",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705130810/fcxljc7vomqd9f9uu1gr.jpg",
            "chestNO": "CMS227019",
            "team": {
              "name": "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              "id": 279,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 1190,
          "zonalpoint": 3,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "HASHEEDA IBRAHIM",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705122439/ydge2ah3xemkjpnicz12.jpg",
            "chestNO": "CMS238977",
            "team": {
              "name": "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              "id": 310,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 1890,
          "zonalpoint": 6,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "SHAHANA K.V",
            "avatar": null,
            "chestNO": "CMS238534",
            "team": {
              "name": "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              "id": 313,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 2739,
          "zonalpoint": 8,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "LUBNA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705072373/dqu07z8sfbbdrcxtxfpr.jpg",
            "chestNO": "CMS227791",
            "team": {
              "name": "BUSTHANIYYA WOMENS' COLLEGE, VADAKARA",
              "id": 289,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        }
      ]
    },
    {
      "id": 22,
      "name": "SHORT STORY ARB",
      "type": "SINGLE",
      "programCode": "TY13",
      "category": {
        "name": "Thanawiyya"
      },
      "candidateProgramme": [
        {
          "id": 1149,
          "zonalpoint": 8,
          "finalpoint": 5,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "NAJMA ASHIKHA MK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705202250/fplxqsipryt3vtsvf6mv.jpg",
            "chestNO": "CMS227995",
            "team": {
              "name": "SYED MUHAMMED ALI SHIHAB THANGAL WOMEN'S COLLEGE, CHUNDAMPATTA",
              "id": 330,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1193,
          "zonalpoint": 8,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SAHLA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705122807/yukjjwsmfyiijyhkkgl2.jpg",
            "chestNO": "CMS227376",
            "team": {
              "name": "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              "id": 310,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 1403,
          "zonalpoint": 3,
          "finalpoint": 4,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "NAJIYA THASSNEEM",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705143160/fcylrdnaf5stykwvcav8.jpg",
            "chestNO": "CMS227153",
            "team": {
              "name": "ALWARDA WOMEN'S COLLEGE, MOONNIYUR",
              "id": 312,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        }
      ]
    },
    {
      "id": 23,
      "name": "POEM WRITING MLM",
      "type": "SINGLE",
      "programCode": "TY14",
      "category": {
        "name": "Thanawiyya"
      },
      "candidateProgramme": [
        {
          "id": 342,
          "zonalpoint": 6,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "AYISHABI MTP",
            "avatar": null,
            "chestNO": "CMS227027",
            "team": {
              "name": "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              "id": 279,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 1479,
          "zonalpoint": 6,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SHIFA K",
            "avatar": null,
            "chestNO": "CMS227479",
            "team": {
              "name": "MIC WOMENS ACADEMY - KOTTOPPADAM",
              "id": 327,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 2344,
          "zonalpoint": 3,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "NAJIYA FARSHANA KP",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705219084/ibobcvnphqpku3b98tim.jpg",
            "chestNO": "CMS227998",
            "team": {
              "name": "AL AZHAR GIRLS ACADEMY , ANANGADI",
              "id": 300,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 2672,
          "zonalpoint": 8,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA FARHANA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705151217/uyhvip7kpohq3ntnw504.jpg",
            "chestNO": "CMS238755",
            "team": {
              "name": "SHIHAB THANGAL MEMMORIAL WOMEN'S COLLEGE, KALPATTA",
              "id": 297,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        }
      ]
    },
    {
      "id": 34,
      "name": "SONG ARB",
      "type": "SINGLE",
      "programCode": "AX6",
      "category": {
        "name": "Aliya"
      },
      "candidateProgramme": [
        {
          "id": 418,
          "zonalpoint": 8,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMATHU RISHANA T.K",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705174113/w9amnlxxq9zuc5h1k82m.jpg",
            "chestNO": "CMS204725",
            "team": {
              "name": "IMAM FAQRUDHEEN RAZI ACADEMY (IFRA), KOROME",
              "id": 295,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 496,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "ASMINA YASMIN.EK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705153979/frrdyxfxgik29sdwfzh5.jpg",
            "chestNO": "CMS193976",
            "team": {
              "name": "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              "id": 322,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 678,
          "zonalpoint": 8,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "HIBA.P",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705130880/ae4drg8nsowrxmztvnm0.jpg",
            "chestNO": "CMS204491",
            "team": {
              "name": "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              "id": 279,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 835,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "MIRSHANA SHERIN P",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705210198/t2wlao99hevlxqya6rgv.jpg",
            "chestNO": "DMS215740",
            "team": {
              "name": "SHAMSUL ULAMA WOMENS COLLEGE, SULTHAN BATHERI",
              "id": 296,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 1056,
          "zonalpoint": 8,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "SAYYIDATH FATHIMA KPM",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705220385/axfcrejfyytalxzryein.jpg",
            "chestNO": "DMS225800",
            "team": {
              "name": "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              "id": 317,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 1077,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "BASHEERA. KP",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705156458/uukmovkfn4dtgvcw4y1y.jpg",
            "chestNO": "CMS216783",
            "team": {
              "name": "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              "id": 275,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 1211,
          "zonalpoint": 8,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SHAMLA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705123016/p3mwhxdj9zrufkawev1u.jpg",
            "chestNO": "DMSA239188",
            "team": {
              "name": "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              "id": 310,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        }
      ]
    },
    {
      "id": 36,
      "name": "WORD FIGHT ENG",
      "type": "SINGLE",
      "programCode": "AX8",
      "category": {
        "name": "Aliya"
      },
      "candidateProgramme": [
        {
          "id": 424,
          "zonalpoint": 7,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "NIDHA FATHIMA. KC",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705173941/q2vmsc5bo5y1fhbtryul.jpg",
            "chestNO": "DMSA239193",
            "team": {
              "name": "IMAM FAQRUDHEEN RAZI ACADEMY (IFRA), KOROME",
              "id": 295,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 498,
          "zonalpoint": 7,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "FATHIMA NASNA.A",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705137894/yl1f7t7e1flvti3mvqkl.jpg",
            "chestNO": "CMS193978",
            "team": {
              "name": "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              "id": 322,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1060,
          "zonalpoint": 8,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA MUHSINA B V T",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705220458/okslirgbmelle9uazuap.jpg",
            "chestNO": "CMS216175",
            "team": {
              "name": "SHERAZ GIRLS CAMPUS, PUTHOOR, KOTTAKKAL",
              "id": 317,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 1213,
          "zonalpoint": 8,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "ASMIYA A M",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705122905/gzlzywq0wl5adgijayhf.jpg",
            "chestNO": "CMS216185",
            "team": {
              "name": "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              "id": 310,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 1513,
          "zonalpoint": 8,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SHAFNA K",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705225027/j9cizbmynhhwyaigpohh.jpg",
            "chestNO": "CMS216286",
            "team": {
              "name": "MIC WOMENS ACADEMY - KOTTOPPADAM",
              "id": 327,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1775,
          "zonalpoint": 8,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "NAJA FATHIMA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705219365/ff5sb2bowogqub5cpre0.jpg",
            "chestNO": "DMSA239099",
            "team": {
              "name": "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              "id": 293,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 1898,
          "zonalpoint": 8,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMATH FAHIZA.M",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705128261/sg7nciybp1vh0tnhapsd.jpg",
            "chestNO": "CMS205170",
            "team": {
              "name": "AFSAL-UL-ULAMA WOMEN'S COLLEGE, A K ROAD, BEKAL",
              "id": 281,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        }
      ]
    },
    {
      "id": 37,
      "name": "MOTIVATIONAL TALK",
      "type": "SINGLE",
      "programCode": "AX9",
      "category": {
        "name": "Aliya"
      },
      "candidateProgramme": [
        {
          "id": 427,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "RIFANA FATHIMA K",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705174098/pdbxf7sexsvth5idifq8.jpg",
            "chestNO": "CMS204723",
            "team": {
              "name": "IMAM FAQRUDHEEN RAZI ACADEMY (IFRA), KOROME",
              "id": 295,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 686,
          "zonalpoint": 8,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "BUSHRA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705130953/uv341x0iyys4wrwgtzeo.jpg",
            "chestNO": "CMS204495",
            "team": {
              "name": "ALWARDA WOMEN'S COLLEGE, KAITHAKKAD",
              "id": 279,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 850,
          "zonalpoint": 8,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "RASHIDA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705210246/a7pbywjajmxdelzf5v9z.jpg",
            "chestNO": "DMS215745",
            "team": {
              "name": "SHAMSUL ULAMA WOMENS COLLEGE, SULTHAN BATHERI",
              "id": 296,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 1214,
          "zonalpoint": 8,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "JUMANA JEBIN C",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705122975/vuogd0fzeehz0efelcel.jpg",
            "chestNO": "CMS216750",
            "team": {
              "name": "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              "id": 310,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 1282,
          "zonalpoint": 8,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SHADIYA M",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705214927/orchhyx2mgbxt8umfhpd.jpg",
            "chestNO": "DMSA239181",
            "team": {
              "name": "VELIYANCODE ISLAMIC CENTER WOMEN'S ACADEMY",
              "id": 323,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1515,
          "zonalpoint": 7,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "ASNA S.K",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705225262/crtgwuaudaosmyb8v85v.jpg",
            "chestNO": "CMS193664",
            "team": {
              "name": "MIC WOMENS ACADEMY - KOTTOPPADAM",
              "id": 327,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1990,
          "zonalpoint": 8,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "ANSHITHA THANSI. MK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705154967/a94l0720ksrctn4dgvwy.jpg",
            "chestNO": "CMS194071",
            "team": {
              "name": "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              "id": 313,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 2127,
          "zonalpoint": 7,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 2,
            "name": "Second"
          },
          "candidate": {
            "name": "FATHIMATH NOORA K",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705294060/tzozh43fihqqrsb1xbjc.jpg",
            "chestNO": "CMS193294",
            "team": {
              "name": "AL MAWADDA WOMEN'S COLLEGE, AYYAYA ROAD, KORAD",
              "id": 306,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        }
      ]
    },
    {
      "id": 39,
      "name": "ESSAY MLM",
      "type": "SINGLE",
      "programCode": "AY11",
      "category": {
        "name": "Aliya"
      },
      "candidateProgramme": [
        {
          "id": 1086,
          "zonalpoint": 3,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "SAFIYATH. KV",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705156417/iwyvoztbvoz47nfwj4jw.jpg",
            "chestNO": "CMS216787",
            "team": {
              "name": "AL FARABI GIRLS ACADEMY, VALAPATTANAM",
              "id": 275,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 1799,
          "zonalpoint": 6,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SHABEEBA C.",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705395474/afazpkujyaxxmigwwut7.jpg",
            "chestNO": "DMS215656",
            "team": {
              "name": "AL WAFA WOMEN'S COLLEGE, PATTAMBI",
              "id": 326,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 2004,
          "zonalpoint": 3,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "AMEENA SALMA SP",
            "avatar": null,
            "chestNO": "CMS194044",
            "team": {
              "name": "ZAHRA WOMEN'S COLLEGE, TIRUR, EZHUR",
              "id": 313,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        },
        {
          "id": 2528,
          "zonalpoint": 8,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "RAFNA SHERIN NK",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705258537/kvrdjypuhg6n28igld0e.jpg",
            "chestNO": "CMS181642",
            "team": {
              "name": "IDN JUNIOR COLLEGE FOR WOMEN,CHIRAMANGALAM SOUTH",
              "id": 299,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        }
      ]
    },
    {
      "id": 40,
      "name": "ESSAY ARB",
      "type": "SINGLE",
      "programCode": "AY12",
      "category": {
        "name": "Aliya"
      },
      "candidateProgramme": [
        {
          "id": 1218,
          "zonalpoint": 8,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA SHAMLA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705123016/p3mwhxdj9zrufkawev1u.jpg",
            "chestNO": "DMSA239188",
            "team": {
              "name": "SHERAZ RESIDENTIAL CAMPUS FOR GIRLS, PARAPPUR ALACHULLY",
              "id": 310,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 1520,
          "zonalpoint": 6,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA LUBABA. KT",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705224209/ohmwat9tdb89bavpdj71.jpg",
            "chestNO": "DMSB239215",
            "team": {
              "name": "MIC WOMENS ACADEMY - KOTTOPPADAM",
              "id": 327,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1971,
          "zonalpoint": 8,
          "finalpoint": 4,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "KHADEEJA BEEVI",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705159812/uajxktlxpwngxkagmyzh.jpg",
            "chestNO": "DMS225830",
            "team": {
              "name": "AFSAL-UL-ULAMA WOMEN'S COLLEGE, A K ROAD, BEKAL",
              "id": 281,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        }
      ]
    },
    {
      "id": 41,
      "name": "ESSAY ENG",
      "type": "SINGLE",
      "programCode": "AY13",
      "category": {
        "name": "Aliya"
      },
      "candidateProgramme": [
        {
          "id": 499,
          "zonalpoint": 8,
          "finalpoint": 7,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 2,
            "name": "Second"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMA NASNA.A",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705137894/yl1f7t7e1flvti3mvqkl.jpg",
            "chestNO": "CMS193978",
            "team": {
              "name": "KMIC WOMEN'S COLLEGE, THEYYOTTUCHIRA",
              "id": 322,
              "zone": {
                "name": "E",
                "id": 9
              }
            }
          }
        },
        {
          "id": 1808,
          "zonalpoint": 3,
          "finalpoint": 5,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": null,
          "zonalgrade": null,
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "AYISHA SWAFA PC",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705166516/weghapyqpxwr6lo0jgwr.jpg",
            "chestNO": "CMS204385",
            "team": {
              "name": "DARUL AZHAR ISLAMIC WOMEN'S COLLEGE, KODUVALLY",
              "id": 293,
              "zone": {
                "name": "B",
                "id": 6
              }
            }
          }
        },
        {
          "id": 1977,
          "zonalpoint": 8,
          "finalpoint": 6,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 3,
            "name": "Third"
          },
          "zonalgrade": {
            "id": 1,
            "name": "A"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FATHIMATH FAHIZA.M",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705128261/sg7nciybp1vh0tnhapsd.jpg",
            "chestNO": "CMS205170",
            "team": {
              "name": "AFSAL-UL-ULAMA WOMEN'S COLLEGE, A K ROAD, BEKAL",
              "id": 281,
              "zone": {
                "name": "A",
                "id": 2
              }
            }
          }
        },
        {
          "id": 2408,
          "zonalpoint": 6,
          "finalpoint": 8,
          "finalgrade": {
            "id": 1,
            "name": "A"
          },
          "finalposition": {
            "id": 1,
            "name": "First"
          },
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "SUHAILA TP",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705141146/enmhzubsmbzuqifymtcl.jpg",
            "chestNO": "CMS204299",
            "team": {
              "name": "ALWARDA WOMEN'S COLLEGE,VENGARA",
              "id": 298,
              "zone": {
                "name": "C",
                "id": 7
              }
            }
          }
        },
        {
          "id": 2804,
          "zonalpoint": 6,
          "finalpoint": 3,
          "finalgrade": {
            "id": 2,
            "name": "B"
          },
          "finalposition": null,
          "zonalgrade": {
            "id": 2,
            "name": "B"
          },
          "zonalposition": {
            "id": 1,
            "name": "First"
          },
          "candidate": {
            "name": "FAHMIDA SHAHMA",
            "avatar": "https://res.cloudinary.com/defrflfmj/image/upload/v1705074464/skbm5s9olwfv5yfnrck2.jpg",
            "chestNO": "CMS192860",
            "team": {
              "name": "USWA WOMEN'S COLLEGE, PANANGANGARA",
              "id": 311,
              "zone": {
                "name": "D",
                "id": 8
              }
            }
          }
        }
      ]
    }
  ]

  const [prg , setPrg] = useState({})

  // in every 5 seconds set object of data to prg state order by index of data array

  useEffect(() => {
    const interval = setInterval(() => {
      setPrg(data[Math.floor(Math.random() * data.length)])
    }, 7000);
    return () => clearInterval(interval);
  }
  , [])

  return (
    <div className="bg-white flex h-screen w-screen overflow-hidden">
      <div className="w-80 h-screen flex justify-center items-center ml-10">
        <img src="/vertical-lines.png" alt="" className="w-80 h-screen absolute" />
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
                  src={`${ prg?.candidateProgramme?.find((item) => item.finalposition?.id === 1)?.candidate.avatar || '/avatar.jpg'}`}
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    {
                      prg?.candidateProgramme?.find((item) => item.finalposition?.id === 1)?.finalgrade?.name
                    } Grade
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  {prg?.candidateProgramme?.find((item) => item.finalposition?.id === 1)?.candidate.chestNO}
                </p>
                <p className="font-bold mt-1">
                {prg.candidateProgramme?.find((item) => item.finalposition?.id === 1)?.candidate.name}

                </p>
                <p className="text-sm mb-1 text-gray-800">
                {prg.candidateProgramme?.find((item) => item.finalposition?.id === 1)?.candidate.team.name}

                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
               Zone {prg.candidateProgramme?.find((item) => item.finalposition?.id === 1)?.candidate.team.zone?.name}

                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="font-black bg-slate-500 w-12 h-12 flex justify-center rounded-full text-white items-center">
                2nd
              </div>
              <div className="relative">
                <img
                  src={`${ prg?.candidateProgramme?.find((item) => item.finalposition?.id === 2)?.candidate.avatar || '/avatar.jpg'}`}
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 2)?.finalgrade?.name}
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 2)?.candidate?.chestNO}
                </p>
                <p className="font-bold mt-1">{ prg?.candidateProgramme?.find((item) => item.finalposition?.id === 2)?.candidate?.name}</p>
                <p className="text-sm mb-1 text-gray-800">
                  { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 2)?.candidate?.team?.name }
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                Zone  { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 2)?.candidate?.team?.zone.name}
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
                  src={`${ prg?.candidateProgramme?.find((item) => item.finalposition?.id === 3)?.candidate.avatar || '/avatar.jpg'}`}
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 3)?.finalgrade?.name}
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 3)?.candidate?.chestNO}
                </p>
                <p className="font-bold mt-1">{ prg?.candidateProgramme?.find((item) => item.finalposition?.id === 3)?.candidate?.name}</p>
                <p className="text-sm mb-1 text-gray-800">
                  { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 3)?.candidate?.team?.name }
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                Zone  { prg?.candidateProgramme?.find((item) => item.finalposition?.id === 3)?.candidate?.team?.zone.name}
                </p>
              </div>
            </div>
          </div>

            {/* map all balanced candidateProgramme */}

          <div className="flex flex-col gap-2 ">

            {
              prg?.candidateProgramme?.filter((item) => item.finalposition === null).map((item, index) => (

                <div className="flex gap-3 items-center">
                
                  <div className="relative">
                    <img
                      src={`${ item?.candidate.avatar || '/avatar.jpg'}`}
                      alt="image"
                      className="rounded-xl h-20 w-20 object-cover"
                    />
                    <p className="flex justify-center absolute bottom-0 w-28">

                      <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                        { item?.finalgrade?.name}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                      { item?.candidate?.chestNO}
                    </p>
                    <p className="font-bold mt-1">{ item?.candidate?.name}</p>
                    <p className="text-sm mb-1 text-gray-800">
                      { item?.candidate?.team?.name }
                    </p>
                    <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                    Zone  { item?.candidate?.team?.zone.name}
                    </p>
                  </div>
                </div>
              ))
            }

</div>

          
        </div>
      </div>
    </div>
  );
}
