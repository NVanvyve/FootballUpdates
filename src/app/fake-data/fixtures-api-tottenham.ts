import {FixturesApiResponse} from "../model/fixtures.model";

export const tottenham2023: FixturesApiResponse = {
  "get": "fixtures",
  "parameters": {"league": "39", "season": "2023", "team": "47", "last": "10", "timezone": "Europe/Brussels"},
  "errors": [],
  "results": 10,
  "paging": {"current": 1, "total": 1},
  "response": [{
    "fixture": {
      "id": 1_035_132,
      "referee": "A. Madley",
      "timezone": "Europe/Brussels",
      "date": "2023-10-27T21:00:00+02:00",
      "timestamp": 1_698_433_200,
      "periods": {"first": 1_698_433_200, "second": 1_698_436_800},
      "venue": {"id": 525, "name": "Selhurst Park", "city": "London"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 10"
    },
    "teams": {
      "home": {
        "id": 52,
        "name": "Crystal Palace",
        "logo": "https://media-4.api-sports.io/football/teams/52.png",
        "winner": false
      },
      "away": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      }
    },
    "goals": {"home": 1, "away": 2},
    "score": {
      "halftime": {"home": 0, "away": 0},
      "fulltime": {"home": 1, "away": 2},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_126,
      "referee": "A. Taylor",
      "timezone": "Europe/Brussels",
      "date": "2023-10-23T21:00:00+02:00",
      "timestamp": 1_698_087_600,
      "periods": {"first": 1_698_087_600, "second": 1_698_091_200},
      "venue": {"id": 593, "name": "Tottenham Hotspur Stadium", "city": "London"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 9"
    },
    "teams": {
      "home": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      },
      "away": {
        "id": 36,
        "name": "Fulham",
        "logo": "https://media-4.api-sports.io/football/teams/36.png",
        "winner": false
      }
    },
    "goals": {"home": 2, "away": 0},
    "score": {
      "halftime": {"home": 1, "away": 0},
      "fulltime": {"home": 2, "away": 0},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_113,
      "referee": "J. Brooks",
      "timezone": "Europe/Brussels",
      "date": "2023-10-07T13:30:00+02:00",
      "timestamp": 1_696_678_200,
      "periods": {"first": 1_696_678_200, "second": 1_696_681_800},
      "venue": {"id": 551, "name": "Kenilworth Road", "city": "Luton, Bedfordshire"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 8"
    },
    "teams": {
      "home": {
        "id": 1359,
        "name": "Luton",
        "logo": "https://media-4.api-sports.io/football/teams/1359.png",
        "winner": false
      },
      "away": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      }
    },
    "goals": {"home": 0, "away": 1},
    "score": {
      "halftime": {"home": 0, "away": 0},
      "fulltime": {"home": 0, "away": 1},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_104,
      "referee": "S. Hooper",
      "timezone": "Europe/Brussels",
      "date": "2023-09-30T18:30:00+02:00",
      "timestamp": 1_696_091_400,
      "periods": {"first": 1_696_091_400, "second": 1_696_095_000},
      "venue": {"id": 593, "name": "Tottenham Hotspur Stadium", "city": "London"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 7"
    },
    "teams": {
      "home": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      },
      "away": {
        "id": 40,
        "name": "Liverpool",
        "logo": "https://media-4.api-sports.io/football/teams/40.png",
        "winner": false
      }
    },
    "goals": {"home": 2, "away": 1},
    "score": {
      "halftime": {"home": 1, "away": 1},
      "fulltime": {"home": 2, "away": 1},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_087,
      "referee": "R. Jones",
      "timezone": "Europe/Brussels",
      "date": "2023-09-24T15:00:00+02:00",
      "timestamp": 1_695_560_400,
      "periods": {"first": 1_695_560_400, "second": 1_695_564_000},
      "venue": {"id": 494, "name": "Emirates Stadium", "city": "London"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 6"
    },
    "teams": {
      "home": {
        "id": 42,
        "name": "Arsenal",
        "logo": "https://media-4.api-sports.io/football/teams/42.png",
        "winner": null
      },
      "away": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": null
      }
    },
    "goals": {"home": 2, "away": 2},
    "score": {
      "halftime": {"home": 1, "away": 1},
      "fulltime": {"home": 2, "away": 2},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_084,
      "referee": "P. Bankes",
      "timezone": "Europe/Brussels",
      "date": "2023-09-16T16:00:00+02:00",
      "timestamp": 1_694_872_800,
      "periods": {"first": 1_694_872_800, "second": 1_694_876_400},
      "venue": {"id": 593, "name": "Tottenham Hotspur Stadium", "city": "London"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 5"
    },
    "teams": {
      "home": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      },
      "away": {
        "id": 62,
        "name": "Sheffield Utd",
        "logo": "https://media-4.api-sports.io/football/teams/62.png",
        "winner": false
      }
    },
    "goals": {"home": 2, "away": 1},
    "score": {
      "halftime": {"home": 0, "away": 0},
      "fulltime": {"home": 2, "away": 1},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_070,
      "referee": "D. England",
      "timezone": "Europe/Brussels",
      "date": "2023-09-02T16:00:00+02:00",
      "timestamp": 1_693_663_200,
      "periods": {"first": 1_693_663_200, "second": 1_693_666_800},
      "venue": {"id": 512, "name": "Turf Moor", "city": "Burnley"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 4"
    },
    "teams": {
      "home": {
        "id": 44,
        "name": "Burnley",
        "logo": "https://media-4.api-sports.io/football/teams/44.png",
        "winner": false
      },
      "away": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      }
    },
    "goals": {"home": 2, "away": 5},
    "score": {
      "halftime": {"home": 1, "away": 2},
      "fulltime": {"home": 2, "away": 5},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_057,
      "referee": "T. Robinson",
      "timezone": "Europe/Brussels",
      "date": "2023-08-26T13:30:00+02:00",
      "timestamp": 1_693_049_400,
      "periods": {"first": 1_693_049_400, "second": 1_693_053_000},
      "venue": {"id": 504, "name": "Vitality Stadium", "city": "Bournemouth, Dorset"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 3"
    },
    "teams": {
      "home": {
        "id": 35,
        "name": "Bournemouth",
        "logo": "https://media-4.api-sports.io/football/teams/35.png",
        "winner": false
      },
      "away": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      }
    },
    "goals": {"home": 0, "away": 2},
    "score": {
      "halftime": {"home": 0, "away": 1},
      "fulltime": {"home": 0, "away": 2},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_054,
      "referee": "M. Oliver",
      "timezone": "Europe/Brussels",
      "date": "2023-08-19T18:30:00+02:00",
      "timestamp": 1_692_462_600,
      "periods": {"first": 1_692_462_600, "second": 1_692_466_200},
      "venue": {"id": 593, "name": "Tottenham Hotspur Stadium", "city": "London"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 2"
    },
    "teams": {
      "home": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": true
      },
      "away": {
        "id": 33,
        "name": "Manchester United",
        "logo": "https://media-4.api-sports.io/football/teams/33.png",
        "winner": false
      }
    },
    "goals": {"home": 2, "away": 0},
    "score": {
      "halftime": {"home": 0, "away": 0},
      "fulltime": {"home": 2, "away": 0},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }, {
    "fixture": {
      "id": 1_035_044,
      "referee": "R. Jones",
      "timezone": "Europe/Brussels",
      "date": "2023-08-13T15:00:00+02:00",
      "timestamp": 1_691_931_600,
      "periods": {"first": 1_691_931_600, "second": 1_691_935_200},
      "venue": {"id": 10_503, "name": "Gtech Community Stadium", "city": "Brentford, Middlesex"},
      "status": {"long": "Match Finished", "short": "FT", "elapsed": 90}
    },
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-4.api-sports.io/football/leagues/39.png",
      "flag": "https://media-4.api-sports.io/flags/gb.svg",
      "season": 2023,
      "round": "Regular Season - 1"
    },
    "teams": {
      "home": {
        "id": 55,
        "name": "Brentford",
        "logo": "https://media-4.api-sports.io/football/teams/55.png",
        "winner": null
      },
      "away": {
        "id": 47,
        "name": "Tottenham",
        "logo": "https://media-4.api-sports.io/football/teams/47.png",
        "winner": null
      }
    },
    "goals": {"home": 2, "away": 2},
    "score": {
      "halftime": {"home": 2, "away": 2},
      "fulltime": {"home": 2, "away": 2},
      "extratime": {"home": null, "away": null},
      "penalty": {"home": null, "away": null}
    }
  }]
}
