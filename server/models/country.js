const mongoose = require("mongoose");

module.exports = mongoose.model("country", {
    "name": {
      "common": {
        "type": "String"
      },
      "official": {
        "type": "String"
      },
      "native": {
        "nld": {
          "official": {
            "type": "String"
          },
          "common": {
            "type": "String"
          }
        },
        "pap": {
          "official": {
            "type": "String"
          },
          "common": {
            "type": "String"
          }
        }
      }
    },
    "tld": {
      "type": [
        "String"
      ]
    },
    "cca2": {
      "type": "String"
    },
    "ccn3": {
      "type": "Date"
    },
    "cca3": {
      "type": "String"
    },
    "cioc": {
      "type": "String"
    },
    "independent": {
      "type": "Boolean"
    },
    "status": {
      "type": "String"
    },
    "currency": {
      "type": [
        "String"
      ]
    },
    "callingCode": {
      "type": [
        "String"
      ]
    },
    "capital": {
      "type": [
        "String"
      ]
    },
    "altSpellings": {
      "type": [
        "String"
      ]
    },
    "region": {
      "type": "String"
    },
    "subregion": {
      "type": "String"
    },
    "languages": {
      "nld": {
        "type": "String"
      },
      "pap": {
        "type": "String"
      }
    },
    "translations": {
      "ces": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "deu": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "fra": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "hrv": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "ita": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "jpn": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "nld": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "por": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "rus": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "slk": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "spa": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "fin": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "est": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "zho": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      },
      "pol": {
        "official": {
          "type": "String"
        },
        "common": {
          "type": "String"
        }
      }
    },
    "latlng": {
      "type": [
        "Number"
      ]
    },
    "demonym": {
      "type": "String"
    },
    "landlocked": {
      "type": "Boolean"
    },
    "borders": {
      "type": "Array"
    },
    "area": {
      "type": "Number"
    },
    "flag": {
      "type": "String"
    }
  })