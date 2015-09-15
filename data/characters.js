var personajes = {
"aliados": {
	 "Sanji" : {
		"id": "sanji",
		"name": "Sanji",
		"longName": "Sanji Pierna Negra",
		"HP": 500,
		"maxHP": 500,
		"MP": 320,
		"maxMP": 320,
		"estado": 0,
		"grados": ["Pierna Negra", "Haki de Armadura", "Diable Jamble"],
		"ataques": ["Patada Pierna Negra", "Disparo de Venado", "Patada Escalope", "Espectro del Pan Frito", "Pierna del Diablo"],
		"ataquesValores": [4, 7, 9, 15, 22],
		"ataquesCoste": [0, 2, 6, 11, 100]
	},

	 "Luffy" : {
		"id": "luffy",
		"name": "Luffy",
		"longName": "Monkey D. Luffy",
		"HP": 600,
		"maxHP": 600,
		"MP": 270,
		"maxMP": 270,
		"estado": 0,
		"grados": ["Hombre de Goma", "Grado 2", "Grado 3"],
		"ataques": ["Estira el brazo, puñetazo", "Galleta galleta, metralleta", "Retuérce el tornillo, Molinillo", "Estira el cuello mazo, cabezazo", "Haki del Rey"],
		"ataquesValores": [5, 11, 13, 17, 27],
		"ataquesCoste": [0, 1, 7, 11, 115]
	},

	 "Zoro" : {
		"id": "zoro",
		"name": "Zoro",
		"longName": "Zoro Ronoa",
		"HP": 710,
		"maxHP": 710,
		"MP": 210,
		"maxMP": 210,
		"estado": 0,
		"grados": ["Casual", "Concentrado", "Mente en Blanco"],
		"ataques": ["Sablazo", "Cañon de 180 libras", "Corte del Demonio", "Espiral del Dragón", "Tatsumaki"],
		"ataquesValores": [6, 8, 12, 15, 22],
		"ataquesCoste": [0, 3, 5, 14, 95]
	},
	 "Nami" : {
		"id": "nami",
		"name": "Nami",
		"longName": "Nami la Ladrona",
		"HP": 290,
		"maxHP": 290,
		"MP": 70,
		"maxMP": 70,
		"estado": 0,
		"grados": ["Ladrona", "Maestra del Tiempo", "Post-Timeskip"],
		"ataques": ["Patada", "Robo", "Rain Tempo", "Mirage Tact", "Thunderbolt Tempo"],
		"ataquesValores": [1, 1, 5, 8, 11],
		"ataquesCoste": [0, 1, 3, 3, 9]
	},

	 "Ussop" : {
		"id": "usuf",
		"name": "Ussop",
		"longName": "Ussop el Tirador",
		"HP": 275,
		"maxHP": 275,
		"MP": 120,
		"maxMP": 120,
		"estado": 0,
		"grados": ["Cobardía", "Valentía", "Sogeking"],
		"ataques": ["Tiro", "Canica Explosiva", "Canica de Fuego", "Canica de Kaya", "Taifa de Ussop"],
		"ataquesValores": [1, 3, 8, 9, 13],
		"ataquesCoste": [0, 2, 5, 9, 13]
	},

	 "Chopper" : {
		"id": "chopper",
		"name": "Chopper",
		"longName": "Tony Tony Chopper",
		"HP": 300,
		"maxHP": 300,
		"MP": 240,
		"maxMP": 240,
		"estado": 0,
		"grados": ["Brain Point", "Heavy Point", "Monster Point"],
		"ataques": ["Scope"],
		"ataquesValores": [],
		"ataquesCoste": []
	},

	 "Robin" : {
		"id": "robin",
		"name": "Robin",
		"longName": "Nico Robin",
		"HP": 250,
		"maxHP": 250,
		"MP": 300,
		"maxMP": 300,
		"estado": 0,
		"grados": ["Doña Domingo", "No Quiero Vivir", "Quiero vivir"],
		"ataques": ["Brotad en 3", "Brotad en 5", "10 Flores", "Infinitas Flores", "Brotad en Millones"],
		"ataquesValores": [3, 6, 8, 14, 20],
		"ataquesCoste": [0, 3, 4, 7, 16]
	},

	 "Franky" : {
		"id": "franky",
		"name": "Franky",
		"longName": "Cutty Flam",
		"HP": 480,
		"maxHP": 480,
		"MP": 200,
		"maxMP": 200,
		"estado": 0,
		"grados": ["Agotado", "Normal", "SUUUUUUUUUUUPER"],
		"ataques": ["Weapons Left", "Strong Hammer", "Lanzallamas", "Coup de Vent", "SUUUUUUUUUUPER"],
		"ataquesValores": [1, 3, 6, 5 , 18],
		"ataquesCoste": [0, 2, 4, 5, 10]
	}
},


"enemigos": {
	"alvida": {
		"name": "Alvida",
		"longName": "Alvida la gorada",
		"HP": 20,
		"maxHP": 20,
		"MP": 18,
		"maxMP": 18,
		"ataques": ["Puñetazo", "Mazazo"],
		"ataquesCoste": [0, 3],
		"ataquesValores": [1, 4]
	},
	"buggy": {
		"name": "Buggy",
		"longName": "Buggy El Payaso",
		"HP": 100,
		"maxHP": 100,
		"MP": 78,
		"maxMP": 78,
		"ataques": ["", "", ""],
		"ataquesCoste": [],
		"ataquesValores": []
	},
	"krieg": {
		"name": "Kireg",
		"longNmae": "krieg",
		"HP": 180,
		"maxHP": 180,
		"MP": 120,
		"maxMP": 120,
		"ataques": [],
		"ataquesCoste": [],
		"ataquesValores": []
	},
	"arlongPark": {
		"arlong": {
			"name": "Arlong",
			"longName": "Arlong Squalo",
			"HP": 300,
			"maxHP": 300,
			"MP": 210,
			"maxMP": 210,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"octi": {
			"name": "Octi",
			"longName": "Octi",
			"HP": 180,
			"maxHP": 180,
			"MP": 70,
			"maxMP": 70,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"kurobi": {
			"name": "Kurobi",
			"longName": "Kurobi",
			"HP": 180,
			"maxHP": 180,
			"MP": 70,
			"maxMP": 70,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"chew": {
			"name": "Chew",
			"longName": "Chew",
			"HP": 170,
			"maxHP": 170,
			"MP": 60,
			"maxMP": 60,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		}
	},
	"logueTown": {
		"smoker": {
			"name": "Smoker",
			"longName": "El Cazador Blanco",
			"HP": 700,
			"maxHP": 700,
			"MP": 350,
			"maxMP": 350,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"tashigi": {
			"name": "Tashigi",
			"longName": "Tashigi",
			"name":
			"HP": 390,
			"maxHP": 390,
			"MP": 100,
			"maxMP": 100,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		}
	},
	"arabasta": {
		"whiskeyPeak": {
			"name": "WhiskeyPeak",
			"longName": "WhiskeyPeak",
			"multitud": {
				"HP": 20,
				"maxHP": 20,
				"MP": 10,
				"maxMP": 10,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"igarapoi": {
				"name": "Igarapoi",
				"longName": "Igarapoi",
				"HP": 40,
				"maxHP": 40,
				"MP": 10,
				"maxMP": 10,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr5": {
				"name": "Mr5",
				"longName": "Don 5",
				"HP": 190,
				"maxHP": 190,
				"MP": 90,
				"maxMP": 90,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missValentine": {
				"name": "MissValentine",
				"longName": "MissValentine",
				"HP": 100,
				"maxHP": 100,
				"MP": 120,
				"maxMP": 120,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			}
		},
		"littleGarden": {
			"mr5": {
				"name": "Mr5",
				"longName": "Don 5",
				"HP": 190,
				"maxHP": 190,
				"MP": 90,
				"maxMP": 90,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missValentine": {
				"name": "MissValentine",
				"longName": "MissValentine",
				"HP": 100,
				"maxHP": 100,
				"MP": 120,
				"maxMP": 120,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []

			},
			"missGoldenWeek": {
				"name": "MissGoldenWeek",
				"longNmae": "MissGoldenWeek",
				"HP": 50,
				"maxHP": 50,
				"MP": 60,
				"maxMP": 60,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr3": {
				"name": "Mr3",
				"longNmae": "Don 3",
				"HP": 260,
				"maxHP": 260,
				"MP": 250,
				"maxMP": 250,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr13": {
				"name": "Mr13",
				"longName": "Don 13",
				"HP": 40,
				"maxHP":40 ,
				"MP": 20,
				"maxMP": 20,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missFriday": {
				"name": "MissFriday",
				"longName": "MissFriday",
				"HP": 40,
				"maxHP": 40,
				"MP": 20,
				"maxMP": 20,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			}
		},
		"drum": {
			"chess": {
				"name": "Chess",
				"longName": "Chess",
				"HP": 120,
				"maxHP": 120,
				"MP": 60,
				"maxMP": 60,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"kuromanimo": {
				"name": "kuromanimo",
				"longName": "kuromanimo" ,
				"HP": 100,
				"maxHP": 100,
				"MP": 70,
				"maxMP": 70,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"wapol": {
				"name": "Wapol",
				"longName": "Wapol",
				"HP": 290,
				"maxHP": 290,
				"MP": 130,
				"maxMP": 130,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			}
		},
		"arabasta": {
			"smoker": {
				"name": "Smoker",
				"longName": "Smoker",
				"HP": 700,
				"maxHP": 700,
				"MP": 350,
				"maxMP": 350,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"crocodile": {
				"name": "Don 0",
				"longNAme": "Crocodile",
				"HP": 1000,
				"maxHP": 100,
				"MP": 500,
				"maxMP": 500,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr4": {
				"name": "Mr4",
				"longNAme": "Don 4",
				"HP": 160,
				"maxHP": 160,
				"MP": 100,
				"maxMP": 100,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missXmas": {
				"name": "MissXmas",
				"longNAme": "MisXmas",
,
				"HP": 100,
				"maxHP": 100,
				"MP": 30,
				"maxMP": 30,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"bentham": {
				"name": "Bentham",
				"longNAme": "Bentham",
				"HP": 200,
				"maxHP": 200,
				"MP": 180,
				"maxMP": 180,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"paula": {
				"name": "Paula",
				"longNAme": "Paula",
				"HP": 240,
				"maxHP": 240,
				"MP": 300,
				"maxMP": 300,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"dazBones": {
				"name": "DazBones",
				"longNAme": "DazBones",
				"HP": 400,
				"maxHP": 400,
				"MP": 260,
				"maxMP": 260,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"crocodilePalace": {
				"name": "CrocodilePalece",
				"longNAme": "CrocodilePalece",
				"HP": 700,
				"maxHP": 700,
				"MP": 500,
				"maxMP": 500,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"crocodilePantheon": {
				"name": "CrocodilePantheon",
				"longNAme": "CrocodilePantheon",
				"HP": 650,
				"maxHP": 650,
				"MP": 400,
				"maxMP": 400,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			}
		},
		"skypea": {
			"jaya": {
				"bellamy": {
				"name": "Belamy",
				"longNAme": "Belamy",
					"HP": 120,
					"maxHP": 120,
					"MP": 60,
					"maxMP": 60,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				}
			},
			"islaDelCielo": {
				"satori": {
					"name": "Satori",
					"longNAme": "Satori",
					"HP": 300,
					"maxHP": 300,
					"MP": 600,
					"maxMP": 600,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"shuraFuza": {
					"name": "ShuraFuza",
					"longNAme": "ShuraFuza",
					"HP": 300,
					"maxHP": 300,
					"MP": 400,
					"maxMP": 400,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"braham": {
					"name": "Braham",
					"longNAme": "Braham",
					"HP": 320,
					"maxHP": 320,
					"MP": 200,
					"maxMP": 200,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"yama": {
					"name": "Yama",
					"longNAme": "Yama",
					"HP": 300,
					"maxHP": 300,
					"MP": 210,
					"maxMP": 210,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"gedatsu": {
					"name": "Gedatsu",
					"longNAme": "Gedatsu",
					"HP": 200,
					"maxHP": 200,
					"MP": 175,
					"maxMP": 175,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"enel": {
					"name": "Enel",
					"longNAme": "Enel El Dios",
					"HP": 700,
					"maxHP": 700,
					"MP": 600,
					"maxMP": 600,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				}
			}
		},
		"water7": {
			"davyBackFight": {
				"foxy": {
					"name": "Foxy",
					"longNAme": "Foxy El Zorro",
					"HP": 200,
					"maxHP": 200,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				}
			},
			"water7": {
				"frankyFamily": {
					"name": "FrankyFamily",
					"longNAme": "FrankyFamily",
					"HP": 50,
					"maxHP": 50,
					"MP": 80,
					"maxMP": 80,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"ussop": {
					"HP": 350,
					"maxHP": 350,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"franky": {
					"name": "Franky",
					"longNAme": "CiborgFranky",
					"HP": 500,
					"maxHP": 500,
					"MP": 320,
					"maxMP": 320,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"jerry": {
					"name": "Jerry",
					"longNAme": "Jerry",
					"HP": 260,
					"maxHP": 260,
					"MP": 100,
					"maxMP": 100,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"wanze": {
					"name": "Wanze",
					"longNAme": "Wanze",
					"HP": 240,
					"maxHP": 240,
					"MP": 200,
					"maxMP": 200,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"nero": {
					"name": "Nero",
					"longNAme": "Nero",
					"HP": 120,
					"maxHP": 120,
					"MP": 600,
					"maxMP": 600,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"blueno": {
					"name": "Blueno",
					"longNAme": "Blueno",
					"HP": 600,
					"maxHP": 600,
					"MP": 500,
					"maxMP": 500,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				}
			},
			"enniesLobby": {
				"blueno": {
					"name": "Blueno",
					"longNAme": "Blueno",
					"HP": 550,
					"maxHP": 550,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"kalifa": {
					"name": "Kalifa",
					"longNAme": "Kalifa",
					"HP": 400,
					"maxHP": 400,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"chapapa": {
					"name": "Chapa",
					"longNAme": "Chapa",
					"HP": 350,
					"maxHP": 350,
					"MP": 250,
					"maxMP": 250,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"kumadori": {
					"name": "Kumadori",
					"longNAme": "Kumadori",
					"HP": 350,
					"maxHP": 350,
					"MP": 250,
					"maxMP": 250,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"monsterChopper": {
					"name": "MonsterChopper",
					"longNAme": "MonsterChopper",
					"HP": 400,
					"maxHP": 400,
					"MP": 100,
					"maxMP": 100,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"jabra": {
					"name": "Jabra",
					"longNAme": "Jabra",
					"HP": 450,
					"maxHP": 450,
					"MP": 260,
					"maxMP": 260,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"kaku": {
					"name": "Kaku",
					"longNAme": "Kaku",
					"HP": 525,
					"maxHP": 525,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"robLucci": {
					"name": "RobLucci",
					"longNAme": "",
					"HP": 750,
					"maxHP": 750,
					"MP": 600,
					"maxMP": 600,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"spandam": {
					"name": "Spanadam",
					"longNAme": "Spandam",
					"HP": 80,
					"maxHP": 80,
					"MP": 10,
					"maxMP": 10,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				}
			},
			"postEnniesLobby": {
				"coby": {
					"name": "Coby",
					"longNAme": "Coby",
					"HP": 250,
					"maxHP": 250,
					"MP": 200,
					"maxMP": 200,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"helmeppo": {
					"name": "Helmeppo",
					"longNAme": "Helmeppo",
					"HP": 175,
					"maxHP": 175,
					"MP": 100,
					"maxMP": 100,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"shanksVSwhitebeard": {
					"shanks": {
						"name": "shanks",
					"longNAme": "shanks",
						"HP": 900,
						"maxHP": 900,
						"MP": 500,
						"maxMP": 500,
						"ataques": [],
						"ataquesCoste": [],
						"ataquesValores": []
					},
					"barbaBlanca": {
						"name": "BarabaBlanca",
					"longNAme": "Barbablanca",
						"HP": 1200,
						"maxHP": 1200,
						"MP": 500,
						"maxMP": 500,
						"ataques": [],
						"ataquesCoste": [],
						"ataquesValores": []
					}
				},
				"monkeyDGarp": {
					MonkeyDGarp
					"HP": 600,
					"maxHP": 600,
					"MP": 500,
					"maxMP": 500,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"aceVSblackbeard": {
					"name": "Ace",
					"longNAme": "Ace",
					"HP": 700,
					"maxHP": 700,
					"MP": 560,
					"maxMP": 560,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				}
			}
		}
	}
}
}
