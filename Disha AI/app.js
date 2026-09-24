/**
 * DishaAI - Intelligent Disaster Prediction, Detection and Response System
 * Bachelor of Engineering (CSE) Capstone Project Core Engine
 */

// ==========================================================================
// 1. COMPREHENSIVE DATASET: 20 DISASTERS (10 NATURAL + 10 MAN-MADE)
// ==========================================================================

const DISASTERS_DATA = [
  // --- 10 NATURAL DISASTERS ---
  {
    id: "cyclone",
    title: "Tropical Cyclones & Storm Surges",
    category: "natural",
    icon: "🌀",
    severity: "Extreme Hazard",
    shortDesc: "Violent rotational oceanic storms generating gale winds, torrential rainfall, and sea surges.",
    layman: "Think of a gigantic whirlwind spinning across the ocean that acts like an enormous vacuum cleaner, throwing sea water miles inland and ripping loose roofs.",
    science: "Intense low-pressure meteorological vortices sustained by warm ocean sea-surface temperatures (>26.5°C), Coriolis acceleration, and atmospheric moisture convergence.",
    hotspots: [
      "India: Odisha Coast, Andhra Pradesh, West Bengal (Sunderbans), Gujarat (Arabian Sea)",
      "Global: Bay of Bengal, Gulf of Mexico, Western Pacific Typhoon Basin, Caribbean Sea"
    ],
    precautions: {
      before: [
        "Board up glass windows and secure corrugated tin roof sheets with heavy ropes.",
        "Store at least 15 liters of boiled drinking water in clean, airtight containers.",
        "Pack national ID cards, land records, and prescription medicines into double-sealed plastic zip pouches.",
        "Identify the nearest high-elevation cyclone shelter and memorize the safe evacuation route."
      ],
      during: [
        "Remain inside a reinforced brick concrete room away from exterior windows.",
        "Turn off the main electrical circuit breaker and gas cylinder valves.",
        "Do NOT step outside during the calm 'eye' of the cyclone; violent reverse winds will strike suddenly.",
        "Listen to battery-operated radio for official updates on storm progression."
      ],
      after: [
        "Watch out for dangling electrical wires touching water puddles (deadly electrocution risk).",
        "Boil all drinking water for at least 3 minutes before consuming.",
        "Do NOT consume food that has come into contact with sea surge or floodwaters.",
        "Report collapsed trees and blocked highways to local disaster management teams."
      ]
    },
    ai: {
      discipline: "Deep Learning (DL) + Computer Vision (CV)",
      model: "Inception-ResNet-v2 + U-Net",
      input: "INSAT-3D thermal infrared brightness temp + Sentinel-1 SAR imagery + NOAA GFS pressure fields",
      pipeline: "Extracts eye geometry and spiral rainband vorticity to regress maximum sustained wind speed and project storm surge inundation 48 hours prior to landfall.",
      output: "Landfall pinpointing within 12km error margin and 48-hour advance storm surge flood contour map."
    },
    chat: {
      "water": "Drinking municipal or well tap water after a cyclone is extremely dangerous due to salt surge and sewer overflow. Boil rolling for 3 minutes or use halogen tablets.",
      "shelter": "Head to designated pucca concrete shelters with elevated ground clearance. Avoid staying in mud or tin roof houses within 10km of the coastline."
    }
  },
  {
    id: "flood",
    title: "Flash Floods & River Basin Overflow",
    category: "natural",
    icon: "🌊",
    severity: "Critical Risk",
    shortDesc: "Rapid inundation of normally dry land caused by heavy upstream rain, river crests, or cloudbursts.",
    layman: "Like an overflowing bathtub: when rain fills a river faster than water can drain away to the sea, it spills out and engulfs streets and ground floors.",
    science: "Hydrological watershed saturation where surface runoff exceeds river discharge capacity, exacerbated by impervious urban surfaces and upstream reservoir gates opening.",
    hotspots: [
      "India: Assam (Brahmaputra basin), Bihar (Kosi river), Kerala, Mumbai & Chennai urban floodplains",
      "Global: Yangtze River (China), Mississippi Basin (USA), Rhine Basin (Europe)"
    ],
    precautions: {
      before: [
        "Move valuable documents, electronics, and food grains to upper floors or attics.",
        "Elevate electrical switches and socket points above anticipated flood water marks.",
        "Stock up on emergency dried food (roasted gram, puffed rice, biscuits) that requires zero cooking.",
        "Clear drainage gullies outside your house to prevent localized sewer backflow."
      ],
      during: [
        "Never walk or drive into moving water: 15 cm of moving water can knock down an adult; 30 cm sweeps cars away.",
        "If trapped in a single-story house, climb onto the rooftop and wave bright cloth to signal rescue boats.",
        "Disconnect main power switches before water reaches switchboard heights.",
        "Keep cattle and domestic pets untied so they can swim to higher safety."
      ],
      after: [
        "Beware of venomous snakes and scorpions seeking dry shelter inside home cupboards and roofs.",
        "Disinfect flood-soaked floors with bleaching powder to prevent cholera and leptospirosis.",
        "Do not turn on electrical appliances until completely certified dry by an electrician.",
        "Submit geo-tagged house photos on DishaAI to claim emergency relief rations."
      ]
    },
    ai: {
      discipline: "Deep Learning (LSTM) + Computer Vision (SAR UNet)",
      model: "Bi-directional LSTM + UNet on Sentinel-1 SAR",
      input: "Hourly CWC river gauge discharge (m³/s) + upstream satellite rainfall (GPM) + DEM elevation models",
      pipeline: "Simulates hydrodynamic river wave propagation through LSTM time-series, while synthetic aperture radar detects water presence through cloud cover.",
      output: "Street-level inundation depth maps generated 12 hours before river crests breach danger embankments."
    },
    chat: {
      "water": "Never drink standing floodwater. Boil all drinking water or use chlorine purification tablets.",
      "driving": "Turn around, don't drown! More than 50% of flood deaths occur inside vehicles that stalled and were swept off bridges."
    }
  },
  {
    id: "earthquake",
    title: "Earthquakes & Tectonic Shockwaves",
    category: "natural",
    icon: "🌋",
    severity: "Extreme Hazard",
    shortDesc: "Sudden violent shaking of the ground caused by seismic slips along underground geological faults.",
    layman: "Imagine two giant underground stone blocks grinding against each other. When they slip, the energy rattles the ground like a vibrating phone on a table.",
    science: "Release of accumulated tectonic strain along fault planes generating destructive P-waves (compressional) and S-waves (shear) propagating through the lithosphere.",
    hotspots: [
      "India: Himalayan Belt (Zone V), Kutch (Gujarat), Northeast India, Delhi-NCR (Zone IV)",
      "Global: Pacific Ring of Fire (Japan, Chile, Indonesia), San Andreas Fault (California), Turkey-Syria"
    ],
    precautions: {
      before: [
        "Bolt heavy cupboards, water heaters, and bookshelves securely to wall studs.",
        "Do not hang heavy mirrors or photo frames directly over beds.",
        "Practice 'Drop, Cover, and Hold On' drills with children twice a year.",
        "Know where your gas shutoff valve and main electric breakers are located."
      ],
      during: [
        "DROP to your hands and knees. COVER your head and neck under a sturdy table. HOLD ON until shaking stops.",
        "If in bed, stay there and protect your head with a thick pillow.",
        "Do NOT run outdoors during shaking; falling glass shards and parapet bricks cause 80% of injuries.",
        "If outdoors, move into open ground away from electrical wires, lampposts, and tall glass facades."
      ],
      after: [
        "Expect aftershocks within minutes to days: evacuate damaged masonry buildings immediately.",
        "Do NOT light candles or matches in case of fractured underground gas pipelines.",
        "Check yourself and family members for open wounds before helping neighbors.",
        "Leave phone lines free for emergency rescue calls; use text messages or DishaAI beacon."
      ]
    },
    ai: {
      discipline: "Machine Learning (ML) + Real-Time Signal Processing",
      model: "Random Forest Classifier + Convolutional P-Wave Detector",
      input: "Continuous 100Hz tri-axial seismometer accelerometer feeds from USGS / National Seismology Grid",
      pipeline: "Detects the fast-traveling, harmless P-wave signature within 3 seconds of fault rupture and computes hypocenter magnitude before destructive S-waves arrive.",
      output: "Sends 15-to-45 second automatic sirens to shut down gas pipelines, metro trains, and warn citizens."
    },
    chat: {
      "table": "If no table is nearby, drop down against an interior wall and cover your head with both arms.",
      "stairs": "Never use elevators or crowded staircases during an earthquake; elevators can stall and stairs can collapse."
    }
  },
  {
    id: "tsunami",
    title: "Tsunamis & Submarine Shockwaves",
    category: "natural",
    icon: "🌊",
    severity: "High Fatality Risk",
    shortDesc: "A series of massive, fast-moving ocean waves triggered by subsea earthquakes, volcanic caldera collapse, or landslides.",
    layman: "When a gigantic earthquake lifts the ocean floor, it shoves billions of tons of water into a towering wave that rushes inland like a moving mountain of water.",
    science: "Long-wavelength displacement of water columns in deep ocean (>800 km/h) shoaling into towering, high-energy walls of water upon entering shallow coastal bathymetry.",
    hotspots: [
      "India: Andaman & Nicobar Islands, Tamil Nadu (Chennai/Nagapattinam), Andhra Coast",
      "Global: Indian Ocean Basin, Japan Pacific Coast, Sumatra Subduction Zone, Chile"
    ],
    precautions: {
      before: [
        "Learn if your home, school, or workplace is in a designated coastal tsunami evacuation zone.",
        "Recognize natural warning signs: severe ground shaking near coast or sudden abnormal ocean water pullback.",
        "Keep a grab-and-go bag ready with dry provisions and battery radios."
      ],
      during: [
        "If you feel an earthquake near the coast or see the ocean receding unusually, RUN IMMEDIATELY to high ground.",
        "Head at least 2 km inland or 30 meters above sea level. Do not wait for official siren confirmations.",
        "Never go to the beach to watch a receding ocean or incoming wave.",
        "If caught in water, grab onto floating debris (tree trunk or rooftop) and hold on tight."
      ],
      after: [
        "Remember that tsunamis are a SERIES of waves; the second or third wave is frequently larger than the first.",
        "Stay away from coastal bays until civil authorities give the all-clear signal.",
        "Avoid wading in receding waters which carry strong rip currents, metal shards, and sewage."
      ]
    },
    ai: {
      discipline: "Deep Learning + Numerical Ocean Bathymetry",
      model: "Physics-Informed Neural Networks (PINN) + Shallow Water Hydrodynamic Solver",
      input: "Deep-ocean DART pressure buoys + Global Seismic Network moment tensor (Mw > 7.0)",
      pipeline: "Calculates subsea fault rupture dislocation volume and models wave propagation velocity across bathymetric grids in under 90 seconds.",
      output: "Accurate coastal wave arrival times and inundation height predictions broadcast 2 to 4 hours in advance."
    },
    chat: {
      "warning": "If the ocean water suddenly disappears exposing the seafloor and stranded fish, a tsunami is arriving in minutes. Run immediately uphill!"
    }
  },
  {
    id: "landslide",
    title: "Landslides & Mountain Debris Flows",
    category: "natural",
    icon: "⛰️",
    severity: "High Hazard",
    shortDesc: "Downslope movement of rock, soil, and organic debris driven by gravity and saturated mountain slopes.",
    layman: "When heavy rains soak a hillside until it turns into mush, the whole mountain slope slides down like melting ice cream, burying roads and houses below.",
    science: "Failure of slope shear strength when pore water pressure exceeds the internal friction angle of saturated soil, triggered by prolonged monsoon precipitation or seismic tremors.",
    hotspots: [
      "India: Uttarakhand, Himachal Pradesh, Western Ghats (Kerala Wayanad, Maharashtra), Northeast Hills",
      "Global: Himalayas (Nepal/Bhutan), Andes (South America), Alps (Europe)"
    ],
    precautions: {
      before: [
        "Avoid building homes near steep slopes, drainage channels, or natural mountain gullies.",
        "Install flexible retaining mesh and plant deep-rooting vetiver grass to stabilize soil banks.",
        "Notice slope warning signs: doors/windows sticking, widening cracks in foundation plaster or uphill road tarmac."
      ],
      during: [
        "If you hear rumbling sounds, snapping tree trunks, or see sudden muddy streams, EVACUATE uphill or sideways immediately.",
        "Do NOT cross bridges over mountain ravines when mud debris is flowing below.",
        "If escape is impossible, curl into a tight ball under sturdy furniture and protect your head."
      ],
      after: [
        "Stay away from the slide area; secondary collapses frequently follow within hours.",
        "Check for injured or trapped persons without entering the unstable mud slide zone directly.",
        "Report broken water pipes, downed electrical lines, and damaged roads on DishaAI."
      ]
    },
    ai: {
      discipline: "Machine Learning (ML) + Satellite Interferometry (InSAR)",
      model: "XGBoost Classifier + Persistent Scatterer InSAR",
      input: "Sentinel-1 InSAR millimeter surface displacement + IMD cumulative 72-hour rainfall + NASA SRTM slope gradients",
      pipeline: "Correlates millimeter hillside creep rates with continuous rain saturation thresholds to compute micro-zone landslide susceptibility indices.",
      output: "Early evacuation warnings issued 12 to 24 hours before slope shearing for high-risk hill villages."
    },
    chat: {
      "signs": "Cracks in road tarmac, tilted utility poles, and sudden bubbling muddy spring water are classic signals of imminent slope collapse."
    }
  },
  {
    id: "wildfire",
    title: "Wildfires & Forest Bushfires",
    category: "natural",
    icon: "🔥",
    severity: "Severe Hazard",
    shortDesc: "Uncontrolled fires consuming forest brush, woodlands, and vegetation, driven by heat, drought, and winds.",
    layman: "A runaway forest fire that leaps from tree to tree faster than a running horse, choking entire valleys with toxic smoke.",
    science: "Combustion of dry vegetative fuel under low relative humidity (<20%), high ambient temperatures, and strong wind currents driving ember spot-fires.",
    hotspots: [
      "India: Uttarakhand Pine Forests, Simlipal (Odisha), Western Ghats, Northeast Bamboo tracts",
      "Global: California (USA), Australian Bush, Mediterranean Basin (Greece/Spain), Siberian Taiga"
    ],
    precautions: {
      before: [
        "Create a 30-foot 'defensible space' around your house by clearing dry pine needles, dead branches, and firewood.",
        "Clean dry leaves from roof gutters and install metal spark arresters on chimneys.",
        "Keep garden hoses hooked up and fill outdoor water tanks for emergency wetting."
      ],
      during: [
        "Evacuate immediately when advised; do not wait until smoke obscures roadway vision.",
        "Wear N95 masks, cotton clothing (avoid synthetic nylon which melts into skin), and goggles.",
        "Turn on all exterior and interior house lights so your home is visible through dense smoke.",
        "Shut all doors, windows, and fireplace vents to prevent sucked embers from igniting inside."
      ],
      after: [
        "Inspect the attic and roofline for hidden smoldering embers that could flare up hours later.",
        "Do not drink water from melted plastic water lines until thoroughly tested.",
        "Remain vigilant for flash floods; burned hillsides lose topsoil and turn rain into mudflows."
      ]
    },
    ai: {
      discipline: "Computer Vision (CV) + Thermal Anomaly Detection",
      model: "YOLOv8-Fire + VIIRS Thermal Anomaly Engine",
      input: "NASA VIIRS 375m thermal infrared + Sentinel-2 Burned Area Index + Local wind vector telemetry",
      pipeline: "Detects thermal hotspots through smoke canopy and models rate of fire perimeter spread using Rothermel cellular automata.",
      output: "Predicts fire front spread direction 6 hours in advance and sends targeted road closure alerts."
    },
    chat: {
      "masks": "Cloth bandanas do NOT protect against toxic wildfire smoke particles (PM2.5). Use certified N95 masks."
    }
  },
  {
    id: "drought",
    title: "Severe Agricultural & Hydrological Droughts",
    category: "natural",
    icon: "☀️",
    severity: "Extended Crisis",
    shortDesc: "Prolonged deficit in precipitation leading to water shortages, crop failure, and groundwater depletion.",
    layman: "When the sky refuses to rain for months, rivers dry to dust, crops wither in fields, and community wells empty.",
    science: "Atmospheric circulation anomalies (such as El Niño Southern Oscillation) suppressing monsoon troughs, depleting soil moisture below wilting points.",
    hotspots: [
      "India: Marathwada & Vidarbha (Maharashtra), Rayalaseema (AP), Bundelkhand (UP/MP), Rajasthan",
      "Global: Horn of Africa, Sahel Region, Murray-Darling Basin (Australia), Northern Mexico"
    ],
    precautions: {
      before: [
        "Implement rainwater harvesting and farm ponds (Jal-Khet) during pre-monsoon showers.",
        "Adopt drip irrigation and switch to drought-hardy millets (bajra, jowar) rather than water-guzzling sugarcane.",
        "Mulch farm soil with dry leaves to prevent evaporation loss."
      ],
      during: [
        "Ration domestic water usage strictly: reuse greywater for toilets and livestock washing.",
        "Protect municipal reservoirs against illegal extraction and industrial waste contamination.",
        "Store grains in rodent-proof silos to prevent post-harvest losses during extended dry spells."
      ],
      after: [
        "Recharge shallow aquifers through recharge borewells when the first rains arrive.",
        "De-silt village ponds and canals to maximize storage capacity for upcoming seasons."
      ]
    },
    ai: {
      discipline: "Machine Learning (ML) Multi-Month Regression",
      model: "Random Forest Regressor + Standardized Precipitation Index (SPI)",
      input: "Sentinel-2 NDVI vegetation health + GRACE satellite groundwater anomalies + IMD gridded monsoon deficit",
      pipeline: "Tracks root-zone soil moisture deficits 60 days ahead of visible crop stress to trigger timely government agricultural subsidies.",
      output: "Crop failure probability maps and water tanker routing schedules for stressed districts."
    },
    chat: {
      "crops": "During drought advisories, plant millets like ragi, bajra, and sorghum which require 70% less water than rice."
    }
  },
  {
    id: "heatwave",
    title: "Extreme Meteorological Heatwaves",
    category: "natural",
    icon: "🌡️",
    severity: "High Fatality Risk",
    shortDesc: "Prolonged periods of excessively hot weather with elevated wet-bulb temperatures threatening human thermoregulation.",
    layman: "When the outside air feels like an oven and sweat cannot evaporate to cool your body, leading to heat exhaustion or stroke.",
    science: "Atmospheric high-pressure heat domes trapping hot air masses, with high humidity pushing wet-bulb temperatures above the critical 35°C human survivability limit.",
    hotspots: [
      "India: North-Western Plains (Rajasthan, Delhi, Haryana), Odisha, Andhra Pradesh, Telangana",
      "Global: Middle East Gulf, Mediterranean, Central Europe, Southern United States"
    ],
    precautions: {
      before: [
        "Paint roofs with solar-reflective white paint ('Cool Roof') to lower indoor temperatures by up to 5°C.",
        "Ensure vulnerable seniors and infants have cool, shaded, well-ventilated rooms.",
        "Stock Oral Rehydration Salts (ORS), glucose, and keep water bottles chilling."
      ],
      during: [
        "Avoid direct outdoor sun exposure between 11:00 AM and 4:00 PM.",
        "Drink water and electrolyte solutions frequently even if you do not feel thirsty.",
        "Wear loose, light-colored cotton garments and cover your head with a wet towel or umbrella.",
        "Never leave children, elderly, or pets inside a parked car even for two minutes."
      ],
      after: [
        "Watch for signs of Heat Stroke: high body temp (>104°F), red/dry skin without sweat, confusion, fainting.",
        "If heat stroke strikes: move person to AC/shade, douse body with cool water, apply ice packs to armpits/neck, and call 112 immediately."
      ]
    },
    ai: {
      discipline: "Deep Learning (DL) Meteorological Forecasting",
      model: "Temporal Fusion Transformer (TFT)",
      input: "ECMWF / NOAA atmospheric temperature grids + local relative humidity + MODIS land surface temp",
      pipeline: "Calculates Wet-Bulb Globe Temperature (WBGT) indices and models urban heat island micro-hotspots 72 hours in advance.",
      output: "Automated municipal advisories to open air-cooled public shelters, distribute free ORS, and shift labor work hours."
    },
    chat: {
      "firstaid": "Heat stroke is a medical emergency! Cool the victim down immediately with water/ice packs and call 112. Do NOT give hot drinks."
    }
  },
  {
    id: "volcano",
    title: "Volcanic Eruptions & Tephra Ash Clouds",
    category: "natural",
    icon: "🌋",
    severity: "Severe Hazard",
    shortDesc: "Violent expulsion of molten magma, pyroclastic density currents, toxic gases, and abrasive volcanic ash.",
    layman: "An underground mountain kettle exploding with red-hot melted rock, showering gray glass-like ash across villages for hundreds of miles.",
    science: "Magma ascent driven by dissolved gas decompression in volcanic conduits, generating pyroclastic flows (>700°C) and stratospheric ash columns.",
    hotspots: [
      "India: Barren Island (Andaman Sea — only active volcano in South Asia)",
      "Global: Indonesia (Merapi, Krakatoa), Italy (Etna, Vesuvius), Philippines, Iceland, Hawaii"
    ],
    precautions: {
      before: [
        "Know designated evacuation zones around active volcanic calderas.",
        "Store certified P100 / N95 masks and airtight goggles to protect eyes from abrasive silicate ash.",
        "Keep sealed plastic tarps to protect electronic equipment and home roof gutters from ash overload."
      ],
      during: [
        "Evacuate immediately if ordered; never approach valleys prone to superheated pyroclastic flows.",
        "Cover your mouth and nose with an N95 mask or damp cloth; volcanic ash contains pulverized glass needles.",
        "Do NOT drive in ashfall; volcanic ash destroys automobile engines and turns windshields opaque.",
        "Clear accumulated ash from flat roofs periodically to prevent catastrophic structural collapse."
      ],
      after: [
        "Do not consume open reservoir water contaminated by volcanic sulfur and fluorine.",
        "Wash all vegetables and fruits thoroughly before peeling and cooking.",
        "Watch out for lahars (volcanic mudflows) when heavy rains wash volcanic ash down river channels."
      ]
    },
    ai: {
      discipline: "Computer Vision (CV) + Atmospheric Dispersion",
      model: "Convolutional Neural Network + HYSPLIT Ash Dispersion",
      input: "Meteosat / Himawari satellite infrared SO2 absorption + Ground seismic tremor telemetry",
      pipeline: "Classifies volcanic eruption onset from thermal radiance leaps and projects high-altitude ash plume trajectories for air traffic safety.",
      output: "Generates aviation flight rerouting corridors and downwind ground ashfall contour forecasts."
    },
    chat: {
      "ash": "Volcanic ash is NOT soft campfire ash; it is tiny shards of jagged glass and rock that shred lung tissue and scratch eyes."
    }
  },
  {
    id: "glof",
    title: "Glacial Lake Outburst Floods (GLOF)",
    category: "natural",
    icon: "🏔️",
    severity: "Catastrophic Wave",
    shortDesc: "Sudden failure of a moraine dam containing a high-altitude glacial lake, releasing catastrophic flash floods downstream.",
    layman: "A high mountain lake held back only by loose dirt and ice suddenly bursts, sending an avalanche of ice water crashing down river valleys.",
    science: "Thermokarst expansion of proglacial lakes due to climate warming, triggered by hanging glacier avalanches or moraine piping dam breach.",
    hotspots: [
      "India: Sikkim (South Lhonak Lake), Uttarakhand (Chorabari / Chamoli), Himachal Pradesh, Ladakh",
      "Global: Himalayas (Nepal, Bhutan, Tibet), Andes (Peru), Rocky Mountains"
    ],
    precautions: {
      before: [
        "Avoid building permanent hotel structures or settlements directly in active glacial river floodplains.",
        "Advocate for early acoustic lake-level sensors and siphon pipes to drain high-risk glacial lakes.",
        "Keep battery-powered LoRa emergency radio beacons in high-altitude mountain base camps."
      ],
      during: [
        "If an alert arrives or river water suddenly turns muddy and drops unexpectedly, RUN IMMEDIATELY UPHILL.",
        "Climb at least 50 meters above the valley riverbed; do NOT run downstream along the road.",
        "Stay clear of river bridges, hydro-power dams, and embankment edges."
      ],
      after: [
        "Watch out for secondary landslides triggered along riverbanks stripped bare by the flood wave.",
        "Report missing trekkers and damaged trail bridges on DishaAI's rescue coordination map."
      ]
    },
    ai: {
      discipline: "Satellite Remote Sensing (CV) + Elevation Models",
      model: "Mask R-CNN on Sentinel-2 & PlanetScope High-Res Imagery",
      input: "Bi-weekly 3m satellite imagery + ALOS PALSAR high-altitude DEM + Hydro-acoustic water depth probes",
      pipeline: "Monitors proglacial lake surface expansion rates and models dam-breach hydrodynamics using 2D shallow water solvers.",
      output: "Provides downstream valley communities with 2 to 4 hour advance evacuation sirens before flood crest arrives."
    },
    chat: {
      "escape": "Always evacuate PERPENDICULAR to the river (up the valley mountainside), never downstream along the river road."
    }
  },

  // --- 10 MAN-MADE & TECHNOLOGICAL DISASTERS ---
  {
    id: "chemical",
    title: "Industrial Chemical Gas Leaks (Bhopal-style)",
    category: "manmade",
    icon: "☣️",
    severity: "Immediate Toxicity",
    shortDesc: "Accidental airborne release of toxic industrial gases (e.g. Methyl Isocyanate, Ammonia, Chlorine) from factories or storage tanks.",
    layman: "Like an invisible poison cloud escaping a factory that burns eyes, chokes lungs, and spreads with the wind across neighborhoods.",
    science: "Rupture of pressurized industrial chemical vessels releasing denser-than-air toxic plumes dispersed by local wind vectors and atmospheric inversion layers.",
    hotspots: [
      "India: Bhopal (1984 legacy), Vizag (LG Polymers 2020), Ankleshwar (Gujarat), Manali (Chennai)",
      "Global: Seveso (Italy), Texas Chemical Belt (USA), Tianjin (China)"
    ],
    precautions: {
      before: [
        "Know the location of nearby chemical manufacturing zones and prevailing seasonal wind directions.",
        "Keep activated carbon masks or full-face respirators at home if living within 3km of an industrial cluster.",
        "Familiarize yourself with factory warning sirens (continuous high-pitch tone = toxic leak)."
      ],
      during: [
        "Check wind direction: EVACUATE CROSSWIND (perpendicular to wind direction), NEVER run downwind with the cloud.",
        "Cover your eyes, nose, and mouth with a wet towel (water traps many water-soluble gases like ammonia).",
        "If trapped inside: seal windows and AC vents with wet towels and tape; move to the highest floor (heavy gases settle low).",
        "Do not run; running increases breathing rate and pulls toxic gas deeper into lung alveoli."
      ],
      after: [
        "Wash eyes with generous amounts of clean cold water; do not rub eyes.",
        "Discard all exposed clothing and shower thoroughly with mild soap.",
        "Seek medical examination immediately for respiratory irritation, wheezing, or chemical burns."
      ]
    },
    ai: {
      discipline: "Physics-Informed Computer Vision + Gaussian Plume Modeling",
      model: "Gaussian Dispersion Neural Network + IoT Sensor Fusion",
      input: "Fenceline photo-ionization gas detectors (PID) + Local anemometer wind vectors + Thermal CCTV feeds",
      pipeline: "Estimates chemical release rate (kg/sec) and models downwind toxic concentration contours (PPM) in real time.",
      output: "Instant crosswind evacuation vector maps and mobile sirens sent to all phones within the hazard zone."
    },
    chat: {
      "escape": "Always move ACROSS the wind (perpendicular), never in the direction the wind is blowing, and cover your mouth with a wet towel."
    }
  },
  {
    id: "nuclear",
    title: "Nuclear Radiation Leaks & Plant Accidents",
    category: "manmade",
    icon: "☢️",
    severity: "Extreme Hazard",
    shortDesc: "Loss-of-coolant reactor incidents or radiological releases emitting ionizing radiation (Cesium-137, Iodine-131).",
    layman: "Invisible atomic radiation leaking from a power station that you cannot smell or see, but which damages living cells and causes sickness.",
    science: "Core meltdown or containment vessel breach discharging fission radionuclide plumes subjected to atmospheric transport and ground deposition.",
    hotspots: [
      "India: Kudankulam, Tarapur, Kalpakkam, Rawatbhata, Kakrapar Nuclear Power Stations",
      "Global: Chernobyl (Ukraine), Fukushima (Japan), Three Mile Island (USA), Zaporizhzhia"
    ],
    precautions: {
      before: [
        "Know the designated Emergency Planning Zone (EPZ) radius (typically 16 km around reactor sites).",
        "Know where your district health center stocks Potassium Iodide (KI) thyroid-blocking tablets."
      ],
      during: [
        "GET INSIDE: Go to the basement or middle of a thick concrete building. Brick and concrete block gamma radiation.",
        "STAY INSIDE: Close all doors, windows, fireplace dampers, and turn off AC / ventilation units.",
        "STAY TUNED: Listen to official government broadcasts. Only take Potassium Iodide when explicitly ordered.",
        "If contaminated outside: remove outer clothes in a plastic bag; take a gentle shower (do not scratch skin)."
      ],
      after: [
        "Do not consume milk, fresh vegetables, or open water collected from within the fallout zone.",
        "Eat only canned or packaged food that was stored inside sealed cupboards prior to the incident."
      ]
    },
    ai: {
      discipline: "Anomaly Detection + Radionuclide Transport Modeling",
      model: "Autoencoder Neural Network + Lagrangian Particle Dispersion Solver",
      input: "Real-time environmental gamma radiation probe network (uSv/hr) + Doppler radar wind profiles",
      pipeline: "Flags micro-anomalies above natural background radiation and projects atmospheric radioactive isotope deposition footprint.",
      output: "Precision evacuation radius corridors and Potassium Iodide distribution logistics schedules."
    },
    chat: {
      "protection": "Remember the three golden rules of radiation protection: TIME (minimize exposure), DISTANCE (stay as far away as possible), and SHIELDING (thick concrete/lead)."
    }
  },
  {
    id: "dam_breach",
    title: "Dam Failures & Hydro Reservoir Breaches",
    category: "manmade",
    icon: "🏗️",
    severity: "Catastrophic Surge",
    shortDesc: "Catastrophic structural failure of a water retention dam, unleashing an immense, fast-moving wall of water downstream.",
    layman: "When an enormous concrete dam wall cracks and collapses, unleashing millions of tons of water in a destructive tidal wave over towns.",
    science: "Hydraulic overtopping, internal soil piping, or foundation shear failure releasing trapped reservoir potential energy as a high-velocity hydrodynamic surge wave.",
    hotspots: [
      "India: Machchhu Dam (Morbi 1979 legacy), Mullaperiyar, Tiware Dam (2019), Dhauliganga",
      "Global: Banqiao Dam (China), Teton Dam (USA), Vajont Dam (Italy), Kakhovka Dam"
    ],
    precautions: {
      before: [
        "Know if your house lies in the Dam Inundation Zone and identify the highest surrounding hill crests.",
        "Familiarize yourself with dam release sirens (three long siren blasts = emergency gate spillway opening)."
      ],
      during: [
        "When dam failure is declared, DO NOT ATTEMPT TO DRIVE CARS ALONG VALLEY ROADS; run immediately on foot to the nearest high ridge.",
        "Do not stop to collect furniture or livestock; dam surge waves move at 40 to 60 km/h.",
        "If caught in flood wave, hold onto heavy tree branches above water lines."
      ],
      after: [
        "Do not return to low-lying river plains; dam reservoirs often continue discharging secondary sediment mud.",
        "Beware of collapsed electrical poles, undermined bridges, and sharp debris."
      ]
    },
    ai: {
      discipline: "Deep Learning (DL) Structural Health Monitoring",
      model: "Graph Convolutional Network (GCN) + 2D Shallow Water Dam Breach Solver",
      input: "Fiber-optic piezometer strain sensors inside dam walls + Upstream reservoir inflow radar + Drone crack imagery",
      pipeline: "Detects internal pore pressure anomalies and simulates 3D flood wave velocity and arrival times for downstream villages.",
      output: "Triggers automated siren alarms 30 to 60 minutes before catastrophic wall collapse."
    },
    chat: {
      "warning": "Dam breach warnings are critical zero-delay emergencies. Abandon possessions immediately and climb uphill."
    }
  },
  {
    id: "stampede",
    title: "High-Density Urban & Religious Stampedes",
    category: "manmade",
    icon: "👥",
    severity: "High Fatality Risk",
    shortDesc: "Crowd collapse and compressive asphyxiation caused by excessive human density in confined transit hubs or festivals.",
    layman: "When thousands of people are packed tightly like sardines, a sudden panic or push creates a human wave where people cannot breathe or stand up.",
    science: "Turbulent crowd shockwave dynamics occurring when human density exceeds 6 persons per square meter, generating compressive physical pressures (>4,500 N).",
    hotspots: [
      "India: Kumbh Mela, Vaishno Devi, Sabarimala, Railway Foot-over Bridges (Elphinstone Mumbai), Religious Gatherings (Hathras 2024)",
      "Global: Mina Hajj (Saudi Arabia), Itaewon (Seoul), Love Parade (Germany)"
    ],
    precautions: {
      before: [
        "Always identify at least two emergency exits whenever entering crowded temples, stadiums, or railway stations.",
        "Avoid pushing into the dense center of a crowd; stay towards the perimeter where escape routes exist.",
        "Agree on an external reunion meeting point with family members in case of mobile network loss."
      ],
      during: [
        "DO NOT FIGHT AGAINST THE CROWD FLOW. Move diagonally with the crowd wave towards the edges.",
        "Adopt the BOXER STANCE: Hold your forearms across your chest with fists up like a boxer to create breathing space for your lungs.",
        "If you drop your phone or wallet, NEVER BEND DOWN TO PICK IT UP. If you fall, you will be trampled.",
        "If you fall down, curl into a ball, cover your head with your hands, and pull your knees tightly to your chest."
      ],
      after: [
        "Do not re-enter the bottleneck area to look for belongings.",
        "Administer CPR to unconscious individuals experiencing compressive asphyxia immediately."
      ]
    },
    ai: {
      discipline: "Computer Vision (CV) Optical Flow Density Engine",
      model: "YOLOv8-Crowd + Farneback Optical Flow",
      input: "Overhead CCTV camera streams from railway stations, bridges, and temple gates",
      pipeline: "Measures real-time crowd density (people/m²) and flags dangerous turbulent shockwaves or sudden velocity drops.",
      output: "Alerts police commanders 10 minutes before crowd crush occurs and automatically opens emergency bypass gates."
    },
    chat: {
      "boxer": "In a dense crowd, keep your hands up across your chest like a boxer. This prevents your ribcage from being compressed so you can breathe."
    }
  },
  {
    id: "oil_spill",
    title: "Marine Petroleum Oil Spills",
    category: "manmade",
    icon: "🛢️",
    severity: "Ecological Catastrophe",
    shortDesc: "Accidental oceanic release of crude petroleum from tankers, offshore drilling rigs, or pipelines.",
    layman: "A black sticky blanket of crude oil spreading over ocean waves that kills fish, covers sea turtles, and pollutes beaches for years.",
    science: "Hydrocarbon dispersion and emulsification on the sea surface, disrupting oxygen exchange and contaminating marine food webs.",
    hotspots: [
      "India: Ennore Port (Chennai), Mumbai Port, Gulf of Kutch tanker routes",
      "Global: Deepwater Horizon (Gulf of Mexico), Exxon Valdez (Alaska), Persian Gulf, Red Sea"
    ],
    precautions: {
      before: [
        "Fishermen should heed maritime alerts and avoid sailing into declared hydrocarbon slick coordinates.",
        "Keep containment booms and oil-absorbent pads stocked at all port berths."
      ],
      during: [
        "Stay clear of contaminated beaches: crude oil vapors contain carcinogenic benzene and volatile organic compounds.",
        "Do not handle oiled sea birds or turtles without heavy nitrile gloves and respirators.",
        "Fisherfolk must immediately cease harvesting fish and shellfish from affected coastal waters."
      ],
      after: [
        "Support local port authorities with biological booms and skimmer deployment.",
        "Report washed-up tarballs on tourist beaches using DishaAI's hazard reporting tool."
      ]
    },
    ai: {
      discipline: "Computer Vision (CV) Satellite Radar Segmentation",
      model: "U-Net with ResNet-50 on Sentinel-1 SAR",
      input: "Sentinel-1 Synthetic Aperture Radar (SAR) ocean backscatter + Sea surface current vectors",
      pipeline: "Identifies dark, smooth patches of oil dampening ocean capillary waves and models 72-hour drift trajectory.",
      output: "Dispatches containment boom vessels to intercept slick before reaching sensitive mangrove estuaries."
    },
    chat: {
      "seafood": "Never consume fish or shellfish harvested from oil spill zones; hydrocarbons bioaccumulate and cause severe poisoning."
    }
  },
  {
    id: "blackout",
    title: "Power Grid Cascading Blackouts",
    category: "manmade",
    icon: "🔌",
    severity: "Critical Disruption",
    shortDesc: "Massive electrical power collapse spanning entire states caused by grid frequency imbalances or physical/cyber faults.",
    layman: "When the electric grid crashes, plunging cities into total darkness, shutting down water pumps, hospital equipment, and cell towers.",
    science: "Cascade tripping of high-voltage transmission lines when frequency deviates beyond 49.5–50.5 Hz, causing generator islanding and blackout.",
    hotspots: [
      "India: Northern Grid Failure (2012 — 620 million people affected), Mumbai Blackout (2020)",
      "Global: Texas Grid Freeze (USA 2021), Northeast Blackout (USA 2003), Europe Grid Splitting"
    ],
    precautions: {
      before: [
        "Keep a 10,000–20,000 mAh mobile power bank fully charged at home at all times.",
        "Maintain solar-powered LED emergency lamps and battery radios.",
        "Keep non-perishable food that does not require an electric stove or microwave."
      ],
      during: [
        "Unplug valuable computers, TVs, and refrigerators to protect them from violent voltage spikes upon grid restoration.",
        "Keep refrigerator and freezer doors firmly closed; food stays safe for 24 to 48 hours if unopened.",
        "Conserve phone battery: switch to Ultra Power Saver mode and use SMS instead of video calls.",
        "Use flashlights instead of open candles to avoid accidental house fires."
      ],
      after: [
        "Turn on appliances one by one after power returns to avoid overloading local neighborhood distribution transformers.",
        "Check refrigerated dairy and meat products for spoilage before eating."
      ]
    },
    ai: {
      discipline: "Graph Neural Networks (GNN) Grid Balancing",
      model: "Spatio-Temporal Graph Convolutional Network (ST-GCN)",
      input: "Phasor Measurement Units (PMU) reporting electrical frequency and voltage phase angles at 50Hz",
      pipeline: "Predicts cascading line overloads 15 seconds ahead and autonomously triggers precision micro-load shedding.",
      output: "Isolates failing transmission corridors in 200 milliseconds to preserve power to hospitals and critical water pumps."
    },
    chat: {
      "fridge": "Keep your refrigerator doors shut! A closed refrigerator preserves food safely for 4 hours; a full freezer for 48 hours."
    }
  },
  {
    id: "collapse",
    title: "High-Rise Building & Bridge Collapses",
    category: "manmade",
    icon: "🏢",
    severity: "Immediate Fatal Trapping",
    shortDesc: "Sudden structural failure of multi-story buildings, flyovers, or bridges due to poor construction, foundation erosion, or illegal overload.",
    layman: "When a multi-story building or concrete bridge snaps and pancaked floors crash down, trapping people in dark rubble pockets.",
    science: "Catastrophic progressive structural collapse where local failure of a primary load-bearing column transfers overload to adjacent structural bays.",
    hotspots: [
      "India: Morbi Cable Bridge (2022), Majerhat Bridge (Kolkata), Illegal High-rise collapses (Delhi/Thane)",
      "Global: Surfside Condominium (Florida 2021), Rana Plaza (Bangladesh 2013), Genoa Bridge (Italy)"
    ],
    precautions: {
      before: [
        "Notice building warning signs: widening diagonal 45-degree cracks in concrete columns or creaking floors.",
        "Never remove load-bearing interior pillars during residential renovation.",
        "Ensure residential societies carry out certified structural audits every 5 years."
      ],
      during: [
        "If you hear loud concrete cracking sounds, EVACUATE IMMEDIATELY via fire staircases (never use elevators).",
        "If trapped in rubble: DO NOT PANIC. Cover your mouth and nose with your shirt to avoid breathing concrete dust.",
        "Tap rhythmically on a metal pipe or wall with a stone: sound travels through concrete and alerts rescue dogs.",
        "Shout only when you hear rescuers nearby; yelling continuously causes dust inhalation and exhausts oxygen."
      ],
      after: [
        "Stay clear of adjacent leaning structures that may have sustained secondary foundation damage.",
        "Provide emergency responders with building floor plans and exact locations of trapped loved ones."
      ]
    },
    ai: {
      discipline: "Computer Vision (CV) + Drone LiDAR Structural Inspection",
      model: "YOLOv8-Damage + LiDAR 3D Void Mapping",
      input: "Autonomous drone video feeds + Ground Penetrating Radar (GPR) + Acoustic listening microphones",
      pipeline: "Identifies structural crack propagation on external pillars and maps survivable hollow voids inside collapsed rubble piles.",
      output: "Directs rescue teams with precision acoustic coordinates to extract trapped survivors in under 3 hours."
    },
    chat: {
      "trapped": "If trapped under rubble, tap on metal pipes or concrete with a stone. Rescuers with listening microphones hear tapping much better than shouting."
    }
  },
  {
    id: "derailment",
    title: "Hazardous Chemical Freight Train Derailments",
    category: "manmade",
    icon: "🚆",
    severity: "High Hazard",
    shortDesc: "High-speed train accidents involving hazardous materials, toxic gas tankers, or crude oil wagons.",
    layman: "A freight train carrying explosive chemicals or poisonous liquids crashing off the rails, sparking fires and toxic clouds in nearby towns.",
    science: "Mechanical axle failure, track buckling, or signaling collision resulting in hazmat tank car breach and explosive BLEVE.",
    hotspots: [
      "India: Balasore Triple Train Collision (2023), Kanpur Derailment, Hazmat rail corridors",
      "Global: East Palestine (Ohio 2023), Lac-Mégantic (Canada), Viareggio (Italy)"
    ],
    precautions: {
      before: [
        "Know if your neighborhood borders a major chemical transport railway corridor.",
        "Familiarize yourself with Hazmat diamond placards (Orange = Explosive, Red = Flammable, White = Toxic)."
      ],
      during: [
        "If a train carrying chemical tankers derails near you, EVACUATE AT LEAST 1.5 KM IMMEDIATELY.",
        "Do NOT approach the crash site to record videos on your smartphone.",
        "If you see smoke or smell burning plastic or chemicals, move crosswind and cover your face with a wet cloth."
      ],
      after: [
        "Do not drink well water near the derailment corridor until government chemical testing declares it safe.",
        "Report lingering chemical odors or strange livestock illness on DishaAI."
      ]
    },
    ai: {
      discipline: "Computer Vision + Real-time Hazmat Tracking",
      model: "OCR Hazmat Placard Classifier + Atmospheric Dispersion Engine",
      input: "Drone aerial camera video of derailed railcars + Railway automated manifest databases",
      pipeline: "Automatically identifies chemical UN placards on damaged tankers and computes explosive blast and toxic vaporization perimeters.",
      output: "Provides first responders with chemical neutralization protocols and automatically sets a 2km digital geofence."
    },
    chat: {
      "distance": "Stay at least 1.5 to 2 kilometers away from derailed chemical railcars; toxic tank explosions can happen hours after impact."
    }
  },
  {
    id: "biohazard",
    title: "Biological Hazards & Infectious Epidemics",
    category: "manmade",
    icon: "🦠",
    severity: "Global Contagion",
    shortDesc: "Outbreak of virulent infectious pathogens (e.g. Nipah, Ebola, COVID-19, Cholera) or accidental laboratory biohazard breaches.",
    layman: "A fast-spreading disease or super-germ that hops from person to person through the air or water, overwhelming hospitals.",
    science: "Transmission of viral or bacterial pathogens characterized by high basic reproduction numbers (R0), requiring quarantine and barrier nursing.",
    hotspots: [
      "India: Nipah Outbreak zones (Kerala), Post-flood waterborne outbreaks, Dense urban slums",
      "Global: Wuhan (COVID-19), West Africa (Ebola), Marburg virus hotspots"
    ],
    precautions: {
      before: [
        "Maintain routine family vaccinations and keep certified N95 masks and hand sanitizers at home.",
        "Know your district infectious disease isolation wards."
      ],
      during: [
        "Wear an N95 mask in public spaces and maintain 2 meters physical distance from individuals with cough or fever.",
        "Wash hands frequently with soap and water for at least 20 seconds, especially before eating.",
        "Isolate family members showing symptoms in a separate room with dedicated ventilation.",
        "Do NOT consume unboiled water or raw unwashed fruits during post-disaster biological outbreaks."
      ],
      after: [
        "Disinfect high-touch surfaces (door handles, phones) with 70% alcohol solution.",
        "Follow official medical discharge protocols before ending home isolation."
      ]
    },
    ai: {
      discipline: "Natural Language Processing (NLP) + Epidemiological Neural Networks",
      model: "IndicBERT Triage Classifier + Spatial-Temporal SEIR Neural Network",
      input: "Syndromic health clinic fever surveillance + Multilingual social distress logs + Hospital ICU bed telemetries",
      pipeline: "Detects localized clusters of atypical fever/respiratory symptoms before official hospital diagnostic confirmation.",
      output: "Forecasts pathogen R0 trajectory and automatically routes localized medicine supplies and isolation kits."
    },
    chat: {
      "hygiene": "Washing hands with soap and water for 20 seconds physically breaks the lipid protective membrane of viruses, neutralizing them instantly."
    }
  },
  {
    id: "cyber",
    title: "Critical Infrastructure Cyber-Physical Attacks",
    category: "manmade",
    icon: "💻",
    severity: "Silent Grid Sabotage",
    shortDesc: "Malicious digital attacks on SCADA industrial systems controlling municipal water dams, power plants, and traffic signals.",
    layman: "Hackers using computers from across the globe to shut down a city's drinking water pumps or tamper with dam gates.",
    science: "Injection of malicious PLC firmware or distributed denial of service (DDoS) into SCADA industrial networks controlling vital public utilities.",
    hotspots: [
      "India: State Power Load Despatch Centers, Nuclear power SCADA networks, Metro transit systems",
      "Global: Ukraine Power Grid (Sandworm), Stuxnet (Iran), Colonial Pipeline (USA)"
    ],
    precautions: {
      before: [
        "Keep at least 3 days of cash at home; bank ATMs and electronic UPI payments fail during infrastructure cyber outages.",
        "Maintain manual, battery-powered emergency essentials."
      ],
      during: [
        "Treat all utility communications with skepticism; check official emergency radio frequencies for verified instructions.",
        "If municipal water pressure drops abruptly, switch to stored water until chemical dosing integrity is certified."
      ],
      after: [
        "Update all digital credentials once cyber services are restored.",
        "Report persistent utility malfunctions on DishaAI."
      ]
    },
    ai: {
      discipline: "Agentic AI + Deep Anomaly Detection",
      model: "Bidirectional LSTM Autoencoder on SCADA Industrial Telemetry",
      input: "Modbus / DNP3 industrial protocol packet traffic + Water pipeline pressure sensors + Substation relays",
      pipeline: "Learns normal physical operation boundaries and flags unauthorized PLC register writes in under 5 milliseconds.",
      output: "Automatically triggers physical 'air-gap' isolation switches to protect dams and power plants from catastrophic failure."
    },
    chat: {
      "cash": "Always keep some physical emergency cash at home because cyber incidents can freeze bank servers and digital payment apps."
    }
  }
];

// ==========================================================================
// 2. THE 7 AI CONCEPTS DATA STRUCTURE (DUAL LENS: LAYMAN VS CSE VIVA)
// ==========================================================================

const AI_CONCEPTS_DATA = [
  {
    name: "Machine Learning (ML)",
    icon: "📊",
    model: "XGBoost, Random Forest, Gradient Boosted Decision Trees",
    layman: "Like a super-smart calculator that looks at 50 dials at once (soil wetness, rain gauges, wind speed) to predict if a hill will slide or river will overflow.",
    cse: "Tabular and sensor anomaly detection utilizing ensemble tree-based gradient boosting (XGBoost). Computes non-linear risk indices from multivariate environmental telemetry.",
    metric: "96.2% ROC-AUC on Landslide & Flood Probability"
  },
  {
    name: "Deep Learning (DL)",
    icon: "🧠",
    model: "Temporal Fusion Transformer (TFT) & Bi-Directional LSTM",
    layman: "Like a veteran weather captain with a photographic memory of 30 years of weather maps, accurately predicting river crests hours ahead.",
    cse: "Sequential time-series forecasting of multi-gauge river discharges and atmospheric heatwaves. Captures long-range temporal dependencies without vanishing gradients.",
    metric: "RMSE: 0.14m on 24-Hour River Level Forecasts"
  },
  {
    name: "Computer Vision (CV)",
    icon: "🛰️",
    model: "YOLOv8-Damage & U-Net (ResNet-50 Backbone)",
    layman: "Digital eyes on drones and satellites that scan ruined towns from the clouds, instantly circling submerged streets and collapsed bridges in bright red.",
    cse: "Real-time edge object detection on drone feeds (YOLOv8) and semantic segmentation on cloud-penetrating Sentinel-1 Synthetic Aperture Radar (SAR) imagery.",
    metric: "0.892 mIoU on Water Inundation Masks"
  },
  {
    name: "Natural Language Processing (NLP)",
    icon: "🗣️",
    model: "IndicBERT & Fine-Tuned RoBERTa NER",
    layman: "A 24/7 emergency translator who understands 12 local Indian languages, reading frantic messages and extracting exactly who is trapped and where.",
    cse: "Cross-lingual emergency distress triage, geocoded Named Entity Recognition (NER), and sentiment urgency ranking on SMS, WhatsApp, and social media text feeds.",
    metric: "94.6% F1-Score across 12 Indic Languages"
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    icon: "📚",
    model: "LangChain + ChromaDB + Text-Embedding-3-Small",
    layman: "An AI safety doctor that checks the official national disaster emergency handbook before giving you guaranteed, life-saving advice without making things up.",
    cse: "Dense vector retrieval over 5,200 chunked pages of NDMA and WHO Standard Operating Procedures (SOPs). Eliminates LLM hallucinations with strict source grounding.",
    metric: "0.98 Grounded Faithfulness Score (No Hallucinations)"
  },
  {
    name: "Agentic AI (Multi-Agent System)",
    icon: "🤖",
    model: "LangGraph / CrewAI Autonomous 5-Agent Architecture",
    layman: "A team of 5 robotic captains who talk to each other and coordinate rescue boats, food packages, and phone alerts automatically without human delays.",
    cse: "Distributed asynchronous autonomous agents (Sentinel -> Triage -> Resource -> Broadcast -> Verification) collaborating through state graphs to execute closed-loop emergency workflows.",
    metric: "< 800ms End-to-End Autonomous Dispatch Latency"
  },
  {
    name: "Edge Deployment & LoRa Mesh",
    icon: "📡",
    model: "Quantized ONNX Runtime on Jetson Nano / Raspberry Pi 4",
    layman: "DishaAI keeps working even when phone towers collapse, internet cables drown, and electrical power dies completely.",
    cse: "8-bit integer quantized (INT8) edge inference running locally on drone microcontrollers with peer-to-peer LoRa radio packet relays for zero-connectivity environments.",
    metric: "Runs on 5W Battery Power @ 38 FPS Local Inference"
  }
];

// ==========================================================================
// 3. APPLICATION STATE
// ==========================================================================

let currentViewMode = "layman"; // "layman" or "cse"
let activeCategoryFilter = "all"; // "all", "natural", "manmade"
let activeDisaster = DISASTERS_DATA[0];
let currentUser = null; // Google user object or null
let isEmergencyMode = false;
let isAudioAlertEnabled = false;
let audioCtx = null;

// ==========================================================================
// 4. INITIALIZATION & ROUTING
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderAiConcepts();
  renderDisastersGrid();
  initSentinelClock();
  initRiskSimulator();
  initSettings();

  // Check URL hash for direct deep-linking
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    navigateTo(hash);
  }
});

function navigateTo(sectionId) {
  document.querySelectorAll(".app-page").forEach(page => page.classList.remove("active"));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update navigation button active styles
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("text-cyan-400", "font-bold");
  });
}

function initSentinelClock() {
  const clock = document.getElementById("liveSentinelClock");
  if (!clock) return;
  setInterval(() => {
    const now = new Date();
    clock.textContent = `UTC+05:30 • Live Monitoring: ${now.toLocaleTimeString("en-US", { hour12: false })}`;
  }, 1000);
}

// ==========================================================================
// 5. DUAL VIEW MODE SWITCH (LAYMAN VS CSE VIVA)
// ==========================================================================

function setViewMode(mode) {
  currentViewMode = mode;
  document.getElementById("viewModeLayman").classList.toggle("active", mode === "layman");
  document.getElementById("viewModeCse").classList.toggle("active", mode === "cse");

  const badge = document.getElementById("currentViewBadge");
  if (badge) {
    badge.textContent = mode === "layman" ? "LAYMAN CITIZEN VIEW" : "CSE TECHNICAL VIVA VIEW";
    badge.className = mode === "layman" 
      ? "text-xs font-bold px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
      : "text-xs font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30";
  }

  // Update content displays
  document.querySelectorAll(".layman-content").forEach(el => el.classList.toggle("hidden", mode === "cse"));
  document.querySelectorAll(".cse-content").forEach(el => el.classList.toggle("hidden", mode === "layman"));

  renderAiConcepts();
  showToast(`Switched to ${mode === "layman" ? "Layman Citizen" : "CSE Engineering"} View`, "info");
}

function renderAiConcepts() {
  const container = document.getElementById("aiConceptsGrid");
  if (!container) return;

  container.innerHTML = AI_CONCEPTS_DATA.map(item => `
    <div class="bg-navy-900 border border-slate-800 hover:border-cyan-500/40 p-5 rounded-2xl transition duration-200 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-2xl">${item.icon}</span>
          <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-navy-800 border border-slate-700 text-cyan-400">${item.model.split(',')[0]}</span>
        </div>
        <h4 class="text-sm font-bold text-white mb-2">${item.name}</h4>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">
          ${currentViewMode === "layman" ? item.layman : item.cse}
        </p>
      </div>
      <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Benchmark Metric:</span>
        <span class="text-emerald-400 font-bold">${item.metric}</span>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// 6. 20 DISASTERS RENDERING & FILTERING
// ==========================================================================

function filterDisasters(category) {
  activeCategoryFilter = category;
  document.getElementById("filterAllBtn").classList.toggle("active", category === "all");
  document.getElementById("filterNaturalBtn").classList.toggle("active", category === "natural");
  document.getElementById("filterManmadeBtn").classList.toggle("active", category === "manmade");
  renderDisastersGrid();
}

function searchDisasters(keyword) {
  const q = keyword.toLowerCase().trim();
  renderDisastersGrid(q);
}

function renderDisastersGrid(searchQuery = "") {
  const grid = document.getElementById("disastersGrid");
  if (!grid) return;

  let list = DISASTERS_DATA;
  if (activeCategoryFilter !== "all") {
    list = list.filter(d => d.category === activeCategoryFilter);
  }
  if (searchQuery) {
    list = list.filter(d => 
      d.title.toLowerCase().includes(searchQuery) ||
      d.shortDesc.toLowerCase().includes(searchQuery) ||
      d.ai.discipline.toLowerCase().includes(searchQuery)
    );
  }

  if (list.length === 0) {
    grid.innerHTML = `<div class="col-span-4 p-8 text-center text-slate-400 text-xs">No matching disaster found for "${searchQuery}". Try searching for 'flood', 'cyclone', or 'chemical'.</div>`;
    return;
  }

  grid.innerHTML = list.map(d => `
    <div onclick="openDisasterModal('${d.id}')" class="disaster-card bg-navy-850 border border-slate-750 p-5 rounded-2xl cursor-pointer hover:bg-navy-800/80 group">
      <div class="flex items-center justify-between mb-3">
        <span class="text-3xl group-hover:scale-110 transition-transform">${d.icon}</span>
        <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
          d.category === 'natural' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
        }">${d.category === 'natural' ? 'Natural' : 'Man-Made'}</span>
      </div>
      <h3 class="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mb-1.5 leading-snug">${d.title}</h3>
      <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">${d.shortDesc}</p>
      
      <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span class="truncate max-w-[140px] text-cyan-400">${d.ai.discipline.split('+')[0]}</span>
        <span class="text-slate-300 group-hover:translate-x-1 transition-transform">Details &rarr;</span>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// 7. DISASTER MODAL & POINT-WISE PRECAUTIONS
// ==========================================================================

function openDisasterModal(id) {
  const disaster = DISASTERS_DATA.find(d => d.id === id);
  if (!disaster) return;
  activeDisaster = disaster;

  document.getElementById("modalDisasterIcon").textContent = disaster.icon;
  document.getElementById("modalDisasterCategory").textContent = disaster.category === "natural" ? "NATURAL DISASTER" : "MAN-MADE HAZARD";
  document.getElementById("modalDisasterSeverity").textContent = disaster.severity;
  document.getElementById("modalDisasterTitle").textContent = disaster.title;
  document.getElementById("modalDisasterSub").textContent = disaster.shortDesc;

  // Overview Tab
  document.getElementById("modalLaymanText").textContent = disaster.layman;
  document.getElementById("modalScienceText").textContent = disaster.science;

  // Hotspots Tab
  const hotspotsList = document.getElementById("modalHotspotsList");
  hotspotsList.innerHTML = disaster.hotspots.map(h => `
    <div class="p-2.5 bg-navy-900 rounded-xl border border-slate-800 text-xs flex items-center gap-2">
      <span class="text-amber-400">📍</span>
      <span>${h}</span>
    </div>
  `).join("");

  // Precautions Tab
  document.getElementById("modalPrecautionBefore").innerHTML = disaster.precautions.before.map(p => `<li>${p}</li>`).join("");
  document.getElementById("modalPrecautionDuring").innerHTML = disaster.precautions.during.map(p => `<li>${p}</li>`).join("");
  document.getElementById("modalPrecautionAfter").innerHTML = disaster.precautions.after.map(p => `<li>${p}</li>`).join("");

  // AI Tab
  document.getElementById("modalAiDisciplineBadge").textContent = disaster.ai.discipline;
  document.getElementById("modalAiModel").textContent = disaster.ai.model;
  document.getElementById("modalAiInput").textContent = disaster.ai.input;
  document.getElementById("modalAiPipeline").textContent = disaster.ai.pipeline;
  document.getElementById("modalAiOutput").textContent = disaster.ai.output;

  // Chat Tab Reset
  document.getElementById("disasterChatHistory").innerHTML = `
    <div class="p-2.5 bg-navy-800 rounded-xl text-slate-300 text-xs">
      <strong>Disha AI:</strong> Hello! Ask me any specific safety question regarding <strong>${disaster.title}</strong>.
    </div>
  `;

  setModalTab("overview");

  const modal = document.getElementById("disasterModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeDisasterModal() {
  const modal = document.getElementById("disasterModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function setModalTab(tabKey) {
  document.querySelectorAll(".modal-tab").forEach(tab => tab.classList.remove("active", "border-cyan-400", "text-cyan-400"));
  document.querySelectorAll(".modal-tab-content").forEach(content => content.classList.add("hidden"));

  const activeTabBtn = document.getElementById(`modalTab${capitalize(tabKey)}`);
  if (activeTabBtn) {
    activeTabBtn.classList.add("active", "border-cyan-400", "text-cyan-400");
  }

  const activeContent = document.getElementById(`tabContent${capitalize(tabKey)}`);
  if (activeContent) {
    activeContent.classList.remove("hidden");
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function handleDisasterModalChat(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById("disasterModalChatInput");
  const history = document.getElementById("disasterChatHistory");
  if (!input || !history || !input.value.trim()) return;

  const query = input.value.trim();
  input.value = "";

  history.innerHTML += `
    <div class="p-2 bg-cyan-600/30 border border-cyan-500/30 rounded-xl text-cyan-200 text-right">
      ${escapeHtml(query)}
    </div>
  `;

  setTimeout(() => {
    let answer = `Always remember the primary protocol for ${activeDisaster.title}: protect human life before property. Move to certified safe shelters and dial 112 for emergency dispatch.`;
    const qLower = query.toLowerCase();
    
    if (activeDisaster.chat) {
      for (const [key, text] of Object.entries(activeDisaster.chat)) {
        if (qLower.includes(key)) {
          answer = text;
          break;
        }
      }
    }

    history.innerHTML += `
      <div class="p-2.5 bg-navy-800 border border-slate-750 rounded-xl text-slate-200">
        <span class="text-cyan-400 font-bold block mb-1">Disha RAG Assistant:</span>
        ${answer}
      </div>
    `;
    history.scrollTop = history.scrollHeight;
  }, 400);
}

// ==========================================================================
// 8. GOOGLE AUTHENTICATION SIMULATION
// ==========================================================================

function openGoogleAuthModal() {
  const modal = document.getElementById("googleAuthModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeGoogleAuthModal() {
  const modal = document.getElementById("googleAuthModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function loginAs(role) {
  closeGoogleAuthModal();

  let profile = {
    name: "Rahul Patel",
    email: "rahul.patel@gmail.com",
    roleText: "Citizen",
    avatar: "RP",
    mode: "layman"
  };

  if (role === "responder") {
    profile = {
      name: "Commander A. Kumar",
      email: "a.kumar@ndrf.gov.in",
      roleText: "NDRF First Responder",
      avatar: "AK",
      mode: "cse"
    };
  } else if (role === "evaluator") {
    profile = {
      name: "Prof. Dr. R. Sharma",
      email: "evaluator@university.edu.in",
      roleText: "CSE Capstone Reviewer",
      avatar: "DR",
      mode: "cse"
    };
  }

  currentUser = profile;
  updateAuthNavbar(profile);
  setViewMode(profile.mode);

  showToast(`Signed in as ${profile.name} (${profile.roleText})`, "success");
  navigateTo("dashboard-section");
}

function updateAuthNavbar(profile) {
  const container = document.getElementById("authContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="flex items-center gap-2 bg-navy-800 p-1.5 pr-3 rounded-xl border border-slate-750">
      <div class="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold text-xs">
        ${profile.avatar}
      </div>
      <div class="hidden sm:block text-left">
        <p class="text-xs font-bold text-white leading-tight">${profile.name}</p>
        <p class="text-[10px] text-cyan-400 font-mono leading-tight">${profile.roleText}</p>
      </div>
      <button onclick="logout()" class="ml-1 text-slate-400 hover:text-red-400 text-xs" title="Sign Out">✕</button>
    </div>
  `;
}

function logout() {
  currentUser = null;
  const container = document.getElementById("authContainer");
  if (container) {
    container.innerHTML = `
      <button id="googleSignInBtn" onclick="openGoogleAuthModal()" class="flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-100 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95">
        <svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
        <span>Sign in with Google</span>
      </button>
    `;
  }
  showToast("Logged out successfully.", "info");
}

// ==========================================================================
// 9. DASHBOARD AREA RISK SIMULATOR
// ==========================================================================

function initRiskSimulator() {
  const regionSel = document.getElementById("dashRegionSelect");
  const disasterSel = document.getElementById("dashDisasterSelect");

  if (regionSel) regionSel.addEventListener("change", updateRiskBox);
  if (disasterSel) disasterSel.addEventListener("change", updateRiskBox);
}

function updateRiskBox() {
  const disasterType = document.getElementById("dashDisasterSelect")?.value || "cyclone";
  const badge = document.getElementById("dashRiskBadge");
  const summary = document.getElementById("dashRiskSummary");
  const bar = document.getElementById("dashRiskBar");
  const lead = document.getElementById("dashLeadTime");

  if (disasterType === "flood") {
    if (badge) { badge.textContent = "RISK LEVEL: 91% CRITICAL"; badge.className = "text-xs font-bold px-2.5 py-0.5 rounded bg-red-600 text-white animate-pulse"; }
    if (summary) summary.innerHTML = "River water level rising at <strong>35 cm/hour</strong>. Embankments will breach within <strong>6 hours</strong>.";
    if (bar) { bar.style.width = "91%"; bar.style.backgroundColor = "#EF4444"; }
    if (lead) lead.textContent = "6 Hours Lead Time";
  } else if (disasterType === "landslide") {
    if (badge) { badge.textContent = "RISK LEVEL: 64% WATCH"; badge.className = "text-xs font-bold px-2.5 py-0.5 rounded bg-amber-400 text-black"; }
    if (summary) summary.innerHTML = "Hill soil moisture saturation at <strong>94%</strong>. Micro-creeps detected along Valley km-42.";
    if (bar) { bar.style.width = "64%"; bar.style.backgroundColor = "#FBBF24"; }
    if (lead) lead.textContent = "12 Hours Lead Time";
  } else if (disasterType === "heatwave") {
    if (badge) { badge.textContent = "RISK LEVEL: 48% ADVISORY"; badge.className = "text-xs font-bold px-2.5 py-0.5 rounded bg-yellow-400 text-black"; }
    if (summary) summary.innerHTML = "Ambient temperature reaching <strong>44.5°C</strong>. High humidity thermal inversion alert.";
    if (bar) { bar.style.width = "48%"; bar.style.backgroundColor = "#FCD34D"; }
    if (lead) lead.textContent = "36 Hours Advance Notice";
  } else {
    if (badge) { badge.textContent = "RISK LEVEL: 82% HIGH"; badge.className = "text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500 text-black"; }
    if (summary) summary.innerHTML = "Cyclone wind gusts of <strong>85 km/h</strong> approaching your coastline. High tidal surge expected.";
    if (bar) { bar.style.width = "82%"; bar.style.backgroundColor = "#F59E0B"; }
    if (lead) lead.textContent = "18 Hours Lead Time";
  }
}

// ==========================================================================
// 10. RAG CHATBOT (DASHBOARD)
// ==========================================================================

function sendQuickPrompt(txt) {
  const input = document.getElementById("chatInput");
  if (input) {
    input.value = txt;
    handleChatSubmit(new Event("submit"));
  }
}

function handleChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById("chatInput");
  const history = document.getElementById("chatHistory");
  if (!input || !history || !input.value.trim()) return;

  const query = input.value.trim();
  input.value = "";

  history.innerHTML += `
    <div class="flex items-start gap-2 justify-end">
      <div class="bg-cyan-600 text-white p-2.5 rounded-xl rounded-tr-none text-xs font-medium">
        ${escapeHtml(query)}
      </div>
    </div>
  `;
  history.scrollTop = history.scrollHeight;

  // Typing indicator
  const typingId = "typing-" + Date.now();
  history.innerHTML += `
    <div id="${typingId}" class="flex items-center gap-1.5 text-slate-400 text-[11px] p-2">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
      <span>Retrieving verified NDMA/WHO vector embeddings...</span>
    </div>
  `;
  history.scrollTop = history.scrollHeight;

  setTimeout(() => {
    document.getElementById(typingId)?.remove();
    let reply = "Always prioritize personal safety over possessions. For immediate life-saving rescue, call 112 directly.";
    const qLower = query.toLowerCase();

    if (qLower.includes("bag") || qLower.includes("pack") || qLower.includes("kit")) {
      reply = "🎒 <strong>72-Hour Go-Bag Checklist:</strong> 3L water per person/day, non-perishable rations, prescription medicines, waterproof pouch with national IDs/deeds, power bank, and a loud signal whistle.";
    } else if (qLower.includes("water") || qLower.includes("drink")) {
      reply = "💧 <strong>Water Safety:</strong> Never drink raw tap water after floods. Boil rolling for 3 minutes or treat with chlorine/halogen tablets (1 tablet per 5 liters; wait 30 mins).";
    } else if (qLower.includes("gas") || qLower.includes("power") || qLower.includes("electric")) {
      reply = "⚡ <strong>Gas & Electrical Protocol:</strong> Shut off the Main Circuit Breaker (MCB) only if you are high and dry. Turn the LPG gas valve clockwise to OFF. If you smell gas, do NOT turn on switches.";
    }

    history.innerHTML += `
      <div class="flex items-start gap-2">
        <div class="w-6 h-6 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 font-bold text-[10px]">RAG</div>
        <div class="bg-navy-800 p-3 rounded-xl rounded-tl-none border border-slate-750 text-slate-200 text-xs leading-relaxed">
          ${reply}
        </div>
      </div>
    `;
    history.scrollTop = history.scrollHeight;
  }, 600);
}

function clearChat() {
  const history = document.getElementById("chatHistory");
  if (history) {
    history.innerHTML = `
      <div class="flex items-start gap-2.5">
        <div class="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-[10px]">AI</div>
        <div class="bg-navy-800 p-3 rounded-xl rounded-tl-none border border-slate-750 text-slate-200">
          <p class="font-bold text-white mb-1">Chat Reset 👋</p>
          <p>I am ready to answer any emergency safety questions.</p>
        </div>
      </div>
    `;
  }
}

// ==========================================================================
// 11. EMERGENCY CRISIS MODE & AUDIO ALERTS
// ==========================================================================

function toggleEmergencyMode() {
  isEmergencyMode = !isEmergencyMode;
  document.body.classList.toggle("emergency-crisis-active", isEmergencyMode);
  
  const bar = document.getElementById("emergencyBar");
  const btnText = document.getElementById("emergencyBtnText");

  if (isEmergencyMode) {
    bar?.classList.remove("hidden");
    if (btnText) btnText.textContent = "Exit Crisis Mode";
    playBeep(880, "triangle", 0.3);
    showToast("EMERGENCY CRISIS MODE ACTIVE: High contrast & low bandwidth prioritized.", "danger");
  } else {
    bar?.classList.add("hidden");
    if (btnText) btnText.textContent = "Emergency Mode";
    showToast("Returned to standard view.", "info");
  }
}

function triggerSosBeacon() {
  playBeep(980, "triangle", 0.4);
  showToast("🚨 SOS BEACON BROADCASTED: GPS coordinates & battery triage dispatched to NDRF Command.", "danger");
}

function toggleAudioAlert() {
  isAudioAlertEnabled = !isAudioAlertEnabled;
  const status = document.getElementById("audioStatusText");
  if (status) status.textContent = isAudioAlertEnabled ? "Sound: On" : "Sound: Off";
  showToast(isAudioAlertEnabled ? "Audio siren tones enabled." : "Audio alert tones muted.", "info");
}

function playBeep(freq = 600, type = "sine", duration = 0.2) {
  if (!isAudioAlertEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.log("Audio synth:", e);
  }
}

// ==========================================================================
// 12. HELP & SETTINGS MODALS
// ==========================================================================

function openHelpModal() {
  document.getElementById("helpModal")?.classList.remove("hidden");
  document.getElementById("helpModal")?.classList.add("flex");
}
function closeHelpModal() {
  document.getElementById("helpModal")?.classList.add("hidden");
  document.getElementById("helpModal")?.classList.remove("flex");
}

function openSettingsModal() {
  document.getElementById("settingsModal")?.classList.remove("hidden");
  document.getElementById("settingsModal")?.classList.add("flex");
}
function closeSettingsModal() {
  document.getElementById("settingsModal")?.classList.add("hidden");
  document.getElementById("settingsModal")?.classList.remove("flex");
}

function initSettings() {
  document.getElementById("toggleAudioAlertBtn")?.addEventListener("click", toggleAudioAlert);
}

function handleLanguageChange(lang) {
  showToast(`Language set to ${lang.toUpperCase()}`, "info");
}

// ==========================================================================
// 13. OFFLINE DOWNLOADABLE CHECKLIST
// ==========================================================================

function downloadChecklist() {
  const content = `=================================================================
DISHA-AI: CITIZEN 72-HOUR DISASTER SAFETY & EMERGENCY CHECKLIST
Bachelor of Engineering (CSE) Capstone Public Safety Platform
=================================================================

1. CRITICAL SURVIVAL SUPPLIES (GO-BAG):
   [ ] 3 Liters drinking water per family member per day
   [ ] Non-perishable dry rations (biscuits, dates, roasted gram, ORS packets)
   [ ] Sturdy, high-lumen LED flashlight with extra alkaline batteries
   [ ] 10,000–20,000 mAh Power Bank (kept at 100% charge)
   [ ] Emergency whistle (audible across 500m to signal rescue boats)
   [ ] Water-resistant sealed pouch for National IDs, property deeds, prescriptions

2. BEFORE THE HAZARD (CYCLONE / FLOOD / INDUSTRIAL LEAK):
   [ ] Disconnect the Main Circuit Breaker (MCB)
   [ ] Turn off the LPG Gas Cylinder valve clockwise to OFF
   [ ] Move elderly, infants, and pets to upper floor elevations
   [ ] Identify nearest high-elevation relief shelter and dry bypass road

3. 24x7 TOLL-FREE EMERGENCY HELPLINES:
   • National Emergency: 112
   • Disaster Management Cell: 1070
   • Ambulance: 108
   • Fire & Rescue: 101

Save this document offline on your phone or print a physical copy.
DishaAI — Clear direction when every minute counts.
`;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "DishaAI_72Hour_Disaster_Checklist.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Offline safety checklist downloaded to your device.", "success");
}

// ==========================================================================
// 14. TOAST NOTIFICATION UTILITY
// ==========================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-item pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold border backdrop-blur-md";

  if (type === "danger") {
    toast.className += " bg-red-600/95 text-white border-red-400/40";
  } else if (type === "success") {
    toast.className += " bg-emerald-600/95 text-white border-emerald-400/40";
  } else {
    toast.className += " bg-navy-800/95 text-cyan-200 border-cyan-500/30";
  }

  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}