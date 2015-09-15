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
		"longName": "Alvida la gorada"
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
		"longName": "Buggy El Payaso"
		"HP": 100,
		"maxHP": 100,
		"MP": 78,
		"maxMP": 78,
		"ataques": ["", "", ""],
		"ataquesCoste": [],
		"ataquesValores": []
	},
	"krieg": {
		"name": "Kireg"
		"longNmae": "krieg"
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
			"name": "Arlong"
			"longName": "Arlong Squalo"
			"HP": 300,
			"maxHP": 300,
			"MP": 210,
			"maxMP": 210,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"octi": {
			"name": "Octi"
			"longName": "Octi"
			"HP": 180,
			"maxHP": 180,
			"MP": 70,
			"maxMP": 70,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"kurobi": {
			"name": "Kurobi"
			"longName": "Kurobi"
			"HP": 180,
			"maxHP": 180,
			"MP": 70,
			"maxMP": 70,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"chew": {
			"name": "Chew"
			"longName": "Chew"
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
			"name": "Smoker"
			"longName": "El Cazador Blanco"
			"HP": 700,
			"maxHP": 700,
			"MP": 350,
			"maxMP": 350,
			"ataques": [],
			"ataquesCoste": [],
			"ataquesValores": []
		},
		"tashigi": {
			"name": "Tashigi"
			"longName": "Tashigi"
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
			"name": "WhiskeyPeak"
			"longName": "WhiskeyPeak"
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
				"name": "Igarapoi"
				"longName": "Igarapoi"
				"HP": 40,
				"maxHP": 40,
				"MP": 10,
				"maxMP": 10,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr5": {
				"name": "Mr5"
				"longName": "Don 5"
				"HP": 190,
				"maxHP": 190,
				"MP": 90,
				"maxMP": 90,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missValentine": {
				"name": "MissValentine"
				"longName": "MissValentine"
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
				"name": "Mr5"
				"longName": "Don 5"
				"HP": 190,
				"maxHP": 190,
				"MP": 90,
				"maxMP": 90,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missValentine": {
				"name": "MissValentine"
				"longName": "MissValentine"
				"HP": 100,
				"maxHP": 100,
				"MP": 120,
				"maxMP": 120,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []

			},
			"missGoldenWeek": {
				"name": "MissGoldenWeek"
				"longNmae": "MissGoldenWeek"
				"HP": 50,
				"maxHP": 50,
				"MP": 60,
				"maxMP": 60,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr3": {
				"name": "Mr3"
				"longNmae": "Don 3"
				"HP": 260,
				"maxHP": 260,
				"MP": 250,
				"maxMP": 250,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr13": {
				"name": "Mr13"
				"longName": "Don 13"
				"HP": 40,
				"maxHP":40 ,
				"MP": 20,
				"maxMP": 20,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missFriday": {
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
				"HP": 120,
				"maxHP": 120,
				"MP": 60,
				"maxMP": 60,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"kuromanimo": {
				"HP": 100,
				"maxHP": 100,
				"MP": 70,
				"maxMP": 70,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"wapol": {
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
				"HP": 700,
				"maxHP": 700,
				"MP": 350,
				"maxMP": 350,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"crocodile": {
				"HP": 1000,
				"maxHP": 100,
				"MP": 500,
				"maxMP": 500,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"mr4": {
				"HP": 160,
				"maxHP": 160,
				"MP": 100,
				"maxMP": 100,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"missXmas": {
				"HP": 100,
				"maxHP": 100,
				"MP": 30,
				"maxMP": 30,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"bentham": {
				"HP": 200,
				"maxHP": 200,
				"MP": 180,
				"maxMP": 180,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"paula": {
				"HP": 240,
				"maxHP": 240,
				"MP": 300,
				"maxMP": 300,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"dazBones": {
				"HP": 400,
				"maxHP": 400,
				"MP": 260,
				"maxMP": 260,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"crocodilePalace": {
				"HP": 700,
				"maxHP": 700,
				"MP": 500,
				"maxMP": 500,
				"ataques": [],
				"ataquesCoste": [],
				"ataquesValores": []
			},
			"crocodilePantheon": {
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
					"HP": 300,
					"maxHP": 300,
					"MP": 600,
					"maxMP": 600,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"shuraFuza": {
					"HP": 300,
					"maxHP": 300,
					"MP": 400,
					"maxMP": 400,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"braham": {
					"HP": 320,
					"maxHP": 320,
					"MP": 200,
					"maxMP": 200,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"yama": {
					"HP": 300,
					"maxHP": 300,
					"MP": 210,
					"maxMP": 210,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"gedatsu": {
					"HP": 200,
					"maxHP": 200,
					"MP": 175,
					"maxMP": 175,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"enel": {
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
					"HP": 500,
					"maxHP": 500,
					"MP": 320,
					"maxMP": 320,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"jerry": {
					"HP": 260,
					"maxHP": 260,
					"MP": 100,
					"maxMP": 100,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"wanze": {
					"HP": 240,
					"maxHP": 240,
					"MP": 200,
					"maxMP": 200,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"nero": {
					"HP": 120,
					"maxHP": 120,
					"MP": 600,
					"maxMP": 600,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"blueno": {
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
					"HP": 550,
					"maxHP": 550,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"kalifa": {
					"HP": 400,
					"maxHP": 400,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"chapapa": {
					"HP": 350,
					"maxHP": 350,
					"MP": 250,
					"maxMP": 250,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"kumadori": {
					"HP": 350,
					"maxHP": 350,
					"MP": 250,
					"maxMP": 250,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"monsterChopper": {
					"HP": 400,
					"maxHP": 400,
					"MP": 100,
					"maxMP": 100,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"jabra": {
					"HP": 450,
					"maxHP": 450,
					"MP": 260,
					"maxMP": 260,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"kaku": {
					"HP": 525,
					"maxHP": 525,
					"MP": 300,
					"maxMP": 300,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"robLucci": {
					"HP": 750,
					"maxHP": 750,
					"MP": 600,
					"maxMP": 600,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"spandam": {
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
					"HP": 250,
					"maxHP": 250,
					"MP": 200,
					"maxMP": 200,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"helmeppo": {
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
						"HP": 900,
						"maxHP": 900,
						"MP": 500,
						"maxMP": 500,
						"ataques": [],
						"ataquesCoste": [],
						"ataquesValores": []
					},
					"barbaBlanca": {
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
					"HP": 600,
					"maxHP": 600,
					"MP": 500,
					"maxMP": 500,
					"ataques": [],
					"ataquesCoste": [],
					"ataquesValores": []
				},
				"aceVSblackbeard": {
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
