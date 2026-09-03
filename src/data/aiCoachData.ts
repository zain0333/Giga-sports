export interface CoachPersona {
  id: string;
  name: string;
  title: string;
  avatar: string;
  badge: string;
  specialty: string;
  voiceStyle: string;
  greeting: string;
  quote: string;
}

export interface DrillItem {
  id: string;
  sport: string;
  title: string;
  category: "batting" | "bowling" | "footwork" | "shooting" | "passing" | "strength" | "stamina" | "agility" | "recovery";
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Pro";
  duration: string;
  intensity: "Low" | "Medium" | "High" | "Max Effort";
  summary: string;
  keySteps: string[];
  coachingCues: string[];
  commonMistakes: string[];
  equipmentNeeded: string[];
  relatedCategory: string;
}

export interface TrainingDay {
  dayName: string;
  focus: string;
  estimatedTime: string;
  intensity: "Low" | "Moderate" | "High" | "Extreme";
  warmup: string[];
  mainDrills: {
    name: string;
    sets: string;
    repsOrDuration: string;
    rest: string;
    coachingNote: string;
  }[];
  cooldown: string[];
  gearRecommended: {
    name: string;
    category: string;
    benefit: string;
  }[];
}

export interface SportTrainingPlan {
  sport: string;
  goal: string;
  level: string;
  scheduleDays: number;
  overview: string;
  nutritionTip: string;
  schedule: TrainingDay[];
}

export const COACH_PERSONAS: CoachPersona[] = [
  {
    id: "vance",
    name: "Coach Vance",
    title: "High-Intensity Performance Coach",
    avatar: "⚡",
    badge: "DRILLMASTER",
    specialty: "Explosive Power, Speed & Mental Toughness",
    voiceStyle: "High energy, direct, no excuses, relentless motivation",
    greeting: "Let's work! Champions aren't made on game day—they're forged in the reps no one sees. What are we dominating today?",
    quote: "Push past your perceived limits. Your body can handle almost anything—it’s your mind you have to convince.",
  },
  {
    id: "sterling",
    name: "Dr. Sterling",
    title: "Chief Sports Scientist & Biomechanist",
    avatar: "🧠",
    badge: "SPORTS SCIENCE",
    specialty: "Kinematics, Load Management & Injury Prevention",
    voiceStyle: "Analytical, data-backed, precise, physiological breakdown",
    greeting: "Welcome to the Lab. Optimization begins with biomechanical efficiency and calculated recovery. What movement pattern or metric are we refining?",
    quote: "Work smart first, then work hard. Perfect mechanics yield sustainable power and longevity.",
  },
  {
    id: "maya",
    name: "Coach Maya",
    title: "Elite Athlete Mindset & Recovery Specialist",
    avatar: "🧘",
    badge: "MIND & RECOVERY",
    specialty: "Clutch Focus, Breathwork, Sleep & Mobility",
    voiceStyle: "Calm, encouraging, focused on breath, mindfulness and joint longevity",
    greeting: "Breathe in focus, exhale hesitation. Peak athletic performance is 90% nervous system mastery and recovery. How is your body feeling right now?",
    quote: "You don't rise to the occasion under pressure; you sink to the level of your mental discipline and recovery.",
  },
  {
    id: "tariq",
    name: "Captain Tariq",
    title: "Pro Match Tactician & Strategy Lead",
    avatar: "🏏",
    badge: "GAME STRATEGY",
    specialty: "Match IQ, Field Placements, Pacing & Game Tactics",
    voiceStyle: "Strategic, battle-tested, scenario-focused",
    greeting: "Match day mindset active! In high-stakes competition, the player who reads the pitch and the opponent first wins. What tactical problem are we solving?",
    quote: "Master the fundamentals under pressure, and the big moments will take care of themselves.",
  },
];

export const PRO_DRILLS: DrillItem[] = [
  // Cricket
  {
    id: "cricket-bat-1",
    sport: "Cricket",
    title: "Front Foot Cover Drive Precision",
    category: "batting",
    difficulty: "Intermediate",
    duration: "25 Mins",
    intensity: "Medium",
    summary: "Master the high elbow, head over ball, and full face follow-through against overpitched swing deliveries.",
    keySteps: [
      "Stance: Balanced weight on the balls of both feet, knees slightly flexed.",
      "Trigger Move: Small back-and-across press as bowler enters delivery stride.",
      "Stride: Lead with head and front shoulder towards pitch of the ball, planting front foot close to ball line.",
      "Swing: Bring bat straight down from high backlift, presenting the full face with top hand firm.",
      "Follow-through: Finish with top elbow pointed towards extra cover, maintaining still head."
    ],
    coachingCues: [
      "Top hand steers the ship, bottom hand is just a passenger.",
      "Head leads the stroke—if your head falls over, your bat will slice.",
      "Hit under your eyes, never reach ahead of your front knee."
    ],
    commonMistakes: [
      "Hard bottom hand causing aerial slices to cover fielders.",
      "Planting front foot too far across, closing off hip rotation.",
      "Looking up early before ball makes impact with the willow."
    ],
    equipmentNeeded: ["English Willow Cricket Bat", "Leather Cricket Ball", "Batting Gloves"],
    relatedCategory: "Cricket",
  },
  {
    id: "cricket-bowl-1",
    sport: "Cricket",
    title: "Fast Bowling Seam Release & Action Snap",
    category: "bowling",
    difficulty: "Advanced",
    duration: "35 Mins",
    intensity: "High",
    summary: "Develop upright seam presentation, explosive front leg brace, and aggressive wrist snap for maximum late swing.",
    keySteps: [
      "Run-up: Smooth, rhythmic acceleration building to peak speed at gather.",
      "Bound & Gather: High knee lift, compact front arm pulling down towards hip.",
      "Front Foot Contact: Hard, straight front knee lockout (brace) to act as a catapult.",
      "Release: Wrist cocked and snapped behind the seam with index and middle fingers slightly apart.",
      "Follow-through: Drive bowling shoulder down towards batsman's off stump."
    ],
    coachingCues: [
      "Brace the front leg like an unyielding wall—any knee flex leaks 5-10 km/h of pace.",
      "Pull down hard with non-bowling arm to create rotational torque.",
      "Lock wrist upright—seam upright cuts the air with aerodynamic stability."
    ],
    commonMistakes: [
      "Collapsing front knee at landing absorbing kinetic energy.",
      "Floating non-bowling arm wide causing erratic line outside off.",
      "Floppy wrist releasing wobbly seam that fails to grip the pitch."
    ],
    equipmentNeeded: ["Tournament Leather Cricket Ball", "Cricket Spike Shoes", "Resistance Band"],
    relatedCategory: "Cricket",
  },
  // Football
  {
    id: "football-shoot-1",
    sport: "Football",
    title: "Power Knuckleball & Instep Finishing",
    category: "shooting",
    difficulty: "Advanced",
    duration: "30 Mins",
    intensity: "High",
    summary: "Deliver erratic, dip-inducing shots from 20-25 yards using solid bone strike of the instep.",
    keySteps: [
      "Approach: 45-degree angle, 4-5 paces back with explosive final stride.",
      "Plant Foot: 6-8 inches beside the ball, pointing directly toward the target with slight knee bend.",
      "Strike Point: Hit exact center-dead ball using the hard bone of the navicular (laces/instep).",
      "Body Position: Chest and shoulders leaned directly over the ball to keep trajectory down.",
      "Follow-through: Short, abrupt punch follow-through with ankle locked 100% rigid."
    ],
    coachingCues: [
      "Locked ankle is the secret—if your ankle wobbles, ball spins instead of knuckling.",
      "Lean over the ball. If your shoulders point to the sky, the ball will end up in the stands.",
      "Strike dead center; no slice, no spin."
    ],
    commonMistakes: [
      "Swinging through too wide causing uncontrolled side curl.",
      "Leaning backward during impact making the strike balloon over the crossbar.",
      "Loose ankle on impact causing painful toe stubs."
    ],
    equipmentNeeded: ["Professional Match Football", "Firm Ground Football Cleats", "Agility Cones"],
    relatedCategory: "Football",
  },
  {
    id: "football-dribble-1",
    sport: "Football",
    title: "1v1 Tight Space Body Feint & Acceleration",
    category: "agility",
    difficulty: "Intermediate",
    duration: "25 Mins",
    intensity: "High",
    summary: "Drop shoulder shift to freeze defenders and burst into space with rapid change of direction.",
    keySteps: [
      "Approach defender with small, rapid touches using outside and inside of dominant foot.",
      "Step aggressively with non-striking foot 1 foot wide, dropping shoulder to fake direction.",
      "Explode off the planted foot in the opposite direction using outside laces of the ball foot.",
      "First touch after feint must be 2-3 yards ahead to separate from recovering defender."
    ],
    coachingCues: [
      "Sell the fake with your entire upper body, not just your feet.",
      "Low center of gravity allows 30% faster directional cuts.",
      "Burst speed on step 2 is what creates the separation."
    ],
    commonMistakes: [
      "Feinting too far away from defender giving them time to recover.",
      "Touching ball too far on initial approach losing control."
    ],
    equipmentNeeded: ["Match Football", "Agility Ladder & Cones"],
    relatedCategory: "Football",
  },
  // Badminton
  {
    id: "badminton-smash-1",
    sport: "Badminton",
    title: "Jump Smash & Pronation Power Strike",
    category: "shooting",
    difficulty: "Advanced",
    duration: "30 Mins",
    intensity: "Max Effort",
    summary: "Generate lightning steep smashes exceeding 300 km/h with full forearm internal pronation and scissor kick jump.",
    keySteps: [
      "Preparation: Scissor footwork backwards, non-racket hand pointing high at shuttle.",
      "Jump: Explosive two-foot takeoff jumping up and slightly forward, arching back.",
      "Swing Kinetic Chain: Hip rotation -> Shoulder rotation -> Elbow lead -> Explosive forearm pronation.",
      "Impact: Contact shuttle at highest possible apex ahead of dominant shoulder.",
      "Landing: Land cleanly on non-racket foot first, transitioning immediately to central ready stance."
    ],
    coachingCues: [
      "Loose relaxed grip until 0.05 seconds before impact—squeeze on contact like catching a fly.",
      "Forearm pronation (inward rotation) provides 60% of the smash whip.",
      "Strike at peak height to maximize steep downward angle."
    ],
    commonMistakes: [
      "Death-gripping the racket handle early, killing forearm whip.",
      "Hitting behind the head leading to flat, easily returned floaters.",
      "Landing heavily on heels risking ankle rolled sprains."
    ],
    equipmentNeeded: ["Carbon Fiber Badminton Racket", "Feather Shuttlecocks", "Non-Marking Court Shoes"],
    relatedCategory: "Badminton",
  },
  // Gym & Fitness
  {
    id: "gym-compound-1",
    sport: "Gym Equipment",
    title: "Explosive Hex Dumbbell Clean & Press",
    category: "strength",
    difficulty: "Intermediate",
    duration: "30 Mins",
    intensity: "High",
    summary: "Full-body athletic compound movement building triple extension power, shoulders, and core bracing.",
    keySteps: [
      "Start: Stand with feet shoulder-width, dumbbells held at mid-shin with neutral flat spine.",
      "First Pull: Drive through heels extending knees and hips simultaneously.",
      "Triple Extension: Explode upward onto balls of feet with violent hip snap and shoulder shrug.",
      "Catch: Drop quickly into 1/4 squat, rotating elbows under dumbbells to rack at shoulder level.",
      "Press: Drive overhead in one smooth push without excessive lumbar arching."
    ],
    coachingCues: [
      "Power originates in the glutes and hips—arms are simply cables transferring energy.",
      "Keep dumbbells close to body line like zipping up a jacket.",
      "Brace core like expecting a punch during the overhead lockout."
    ],
    commonMistakes: [
      "Rounding lower back during initial floor pickup.",
      "Bicep curling the dumbbells instead of using explosive hip drive.",
      "Hyper-extending lower back during overhead press."
    ],
    equipmentNeeded: ["Hex Gym Dumbbells", "Lifting Straps", "Weightlifting Belt"],
    relatedCategory: "Gym Equipment",
  },
  // Running
  {
    id: "running-cadence-1",
    sport: "Running",
    title: "180 SPM Cadence & Midfoot Stride Drills",
    category: "stamina",
    difficulty: "Beginner",
    duration: "20 Mins",
    intensity: "Medium",
    summary: "Eliminate overstriding, reduce ground impact forces by 40%, and boost running economy.",
    keySteps: [
      "Cadence Metronome: Match foot strikes to 175-185 beats per minute rhythm.",
      "Foot Strike: Land lightly beneath center of mass with midfoot flat strike.",
      "Forward Lean: Hinge slightly forward from the ankles (not the hips).",
      "Arm Drive: Compact 90-degree elbows pumping straight forward and back without crossing centerline.",
      "High Cadence Strides: 6 x 60-meter accelerations focusing purely on light, quiet ground contact."
    ],
    coachingCues: [
      "Run like you are stepping across hot coals—quick, light, quiet.",
      "If you hear loud slaps on the pavement, you are braking on every single stride.",
      "Drive elbows back; hands relax like holding delicate potato chips."
    ],
    commonMistakes: [
      "Heel striking far ahead of body line creating heavy braking shock to knees.",
      "Bending forward at waist restricting diaphragm lung expansion.",
      "Tense clenched shoulders causing premature upper body fatigue."
    ],
    equipmentNeeded: ["Cushioned Running Shoes", "Hydration Bottle", "Running Cap"],
    relatedCategory: "Running",
  },
];

export const TRAINING_PLANS_BY_SPORT: Record<string, SportTrainingPlan> = {
  Cricket: {
    sport: "Cricket",
    goal: "Match Readiness & Power-Hitting / Fast Bowling Conditioning",
    level: "Intermediate / Club Athlete",
    scheduleDays: 4,
    overview: "A high-performance cricket conditioning and skill protocol engineered to boost bowling velocity, rotational bat speed, match endurance, and agility between the wickets.",
    nutritionTip: "Carb load with slow-release whole grains 24 hours prior to match days. Consume 500ml electrolyte water every 45 minutes in the field.",
    schedule: [
      {
        dayName: "Day 1: Power & Rotational Core (Bat Speed & Bowling Torque)",
        focus: "Rotational power, posterior chain, and anti-rotational core stability",
        estimatedTime: "55 Mins",
        intensity: "High",
        warmup: [
          "5 mins light jog + high knees + butt kicks",
          "Rotational dynamic lunges with thoracic twist (10 per side)",
          "Band pull-aparts and arm circles (15 reps)"
        ],
        mainDrills: [
          {
            name: "Dumbbell Rotational Squat Jumps",
            sets: "4 sets",
            repsOrDuration: "8 reps",
            rest: "75s",
            coachingNote: "Explode up with violent hip extension imitating backfoot pull shot drive."
          },
          {
            name: "Single-Arm Dumbbell Row (Bowling Lat Strength)",
            sets: "4 sets",
            repsOrDuration: "10 reps/side",
            rest: "60s",
            coachingNote: "Full scapular retraction at top. Critical for non-bowling arm pull down."
          },
          {
            name: "Russian Twists with Weight Plate/Dumbbell",
            sets: "3 sets",
            repsOrDuration: "20 total reps",
            rest: "45s",
            coachingNote: "Keep chest tall, heels 2 inches elevated off turf."
          },
          {
            name: "Front Foot Drive Shadow Batting with Heavy Bat",
            sets: "5 sets",
            repsOrDuration: "20 repetitions",
            rest: "60s",
            coachingNote: "Hold finish for 2 seconds per shot to engrain balance."
          }
        ],
        cooldown: [
          "Hamstring and groin static stretch (45s each)",
          "Shoulder sleeper stretch for rotator cuff recovery",
          "5 mins deep diaphragmatic box breathing (4s in, 4s hold, 4s out, 4s hold)"
        ],
        gearRecommended: [
          { name: "Professional Cricket Bat", category: "Cricket", benefit: "Grade-1 English willow balance for effortless swing acceleration" },
          { name: "Hex Gym Dumbbells", category: "Gym Equipment", benefit: "Essential for rotational core and upper body pulling power" }
        ]
      },
      {
        dayName: "Day 2: Match Speed & Agility Between Wickets",
        focus: "First-step acceleration, 22-yard shuttle turns, diving agility",
        estimatedTime: "45 Mins",
        intensity: "Extreme",
        warmup: [
          "Agility ladder icky shuffle & lateral hops (4 rounds)",
          "Ankle mobility rotations & calf stretch"
        ],
        mainDrills: [
          {
            name: "22-Yard Cricket Pitch Shuttle Sprints (Running Between Wickets)",
            sets: "8 reps",
            repsOrDuration: "Full 22 yards with bat slide turn",
            rest: "45s between runs",
            coachingNote: "Turn sharp on balls of feet, slide bat tip across crease line at full extension."
          },
          {
            name: "Lateral Cone Reaction Drills (Infield Fielding)",
            sets: "5 sets",
            repsOrDuration: "30 seconds continuous",
            rest: "60s",
            coachingNote: "Stay in low athletic fielding crouch with chest up and hands ready."
          },
          {
            name: "Direct Hit Target Throwing from 30 Yards",
            sets: "4 sets",
            repsOrDuration: "10 throws",
            rest: "45s",
            coachingNote: "Pick up on the move with one hand, step across, and release with full shoulder rotation."
          }
        ],
        cooldown: [
          "Calf and quad foam roll / stretch",
          "Upper trap and neck mobility stretches"
        ],
        gearRecommended: [
          { name: "Cushioned Running Shoes", category: "Running", benefit: "Absorbs joint shock during repetitive hard deceleration turns" },
          { name: "Tournament Leather Cricket Ball", category: "Cricket", benefit: "Match-weight authentic ball for high-precision throw drills" }
        ]
      },
      {
        dayName: "Day 3: Technical Precision & Skill Specifics",
        focus: "Net session: Pace bowling spot-bowling or Batting against swinging deliveries",
        estimatedTime: "60 Mins",
        intensity: "Moderate",
        warmup: ["Band shoulder warmups", "Wrist flicks", "Underarm toss catches"],
        mainDrills: [
          {
            name: "Good Length Target Bowling (Cone Drill)",
            sets: "6 overs (36 balls)",
            repsOrDuration: "Focus on 6m to 8m length zone",
            rest: "2 mins between overs",
            coachingNote: "Aim to hit target handkerchief placed on top of off stump line."
          },
          {
            name: "Short Ball Duck/Weave/Pull Mastery",
            sets: "4 sets",
            repsOrDuration: "15 deliveries",
            rest: "90s",
            coachingNote: "Get eyes level with ball, roll wrists over top of pull shot."
          }
        ],
        cooldown: ["Full body restorative yoga flow (10 mins)"],
        gearRecommended: [
          { name: "Batting Gloves Pro", category: "Cricket", benefit: "High-density foam padding protecting fingers from short pitch impacts" }
        ]
      },
      {
        dayName: "Day 4: Active Recovery, Mobility & Tactical Review",
        focus: "Tissue flush, nervous system resets, video tactical breakdown",
        estimatedTime: "35 Mins",
        intensity: "Low",
        warmup: ["Gentle 10 min stationary spin or walk"],
        mainDrills: [
          {
            name: "Rotator Cuff & Scapular Band Pulls",
            sets: "3 sets",
            repsOrDuration: "15 reps",
            rest: "30s",
            coachingNote: "Slow controlled eccentric tempo to fortify throwing shoulder."
          },
          {
            name: "Hip Flexor & Thoracic Spine Mobility Flow",
            sets: "3 rounds",
            repsOrDuration: "8 reps per movement",
            rest: "30s",
            coachingNote: "Open up hips to preserve lower spine health."
          }
        ],
        cooldown: ["Contrast shower (hot/cold) + 20 mins match video review"],
        gearRecommended: [
          { name: "Sports Foam Roller / Recovery Mat", category: "Accessories", benefit: "Accelerates lactic acid clearance and prevents DOMS stiffness" }
        ]
      }
    ]
  },
  Football: {
    sport: "Football",
    goal: "Match Stamina, Explosive Sprinting & Precision Finishing",
    level: "All Levels / Club Level",
    scheduleDays: 4,
    overview: "Elite football conditioning focusing on anaerobic threshold, multi-directional speed, first-touch precision under pressure, and powerful striking mechanics.",
    nutritionTip: "Consume 60g high glycemic carbs (banana + sports isotonic drink) 40 mins prior to kickoff. Rehydrate with 1.5x fluid lost during match.",
    schedule: [
      {
        dayName: "Day 1: Match Stamina & High-Intensity Interval Sprinting",
        focus: "Box-to-box endurance, repeat sprint ability (RSA)",
        estimatedTime: "50 Mins",
        intensity: "Extreme",
        warmup: ["FIFA 11+ dynamic warmup protocol (12 mins)", "High knees, carioca, groin open-close"],
        mainDrills: [
          {
            name: "Pitch-Length 100m Strides (Box to Box)",
            sets: "10 reps",
            repsOrDuration: "100m sprint in 15s",
            rest: "30s walk back",
            coachingNote: "Maintain tall upright running posture on final 30 meters."
          },
          {
            name: "T-Drill Football Change of Direction",
            sets: "6 sets",
            repsOrDuration: "Sprint, lateral shuffle left, shuffle right, backpedal",
            rest: "60s",
            coachingNote: "Drop hips low when braking to reverse direction instantly."
          },
          {
            name: "Dumbbell Bulgarian Split Squats",
            sets: "3 sets",
            repsOrDuration: "8 reps/leg",
            rest: "60s",
            coachingNote: "Builds single-leg deceleration strength to prevent ACL injuries."
          }
        ],
        cooldown: ["Hamstring and hip flexor stretches (5 mins)", "Calf wall stretch"],
        gearRecommended: [
          { name: "Professional Match Football", category: "Football", benefit: "True-flight ball for consistent training tactile feedback" },
          { name: "Cushioned Running Shoes", category: "Running", benefit: "Crucial for sprint conditioning sessions on track or hard turf" }
        ]
      },
      {
        dayName: "Day 2: Ball Mastery, First Touch & 1v1 Dominance",
        focus: "Close control in tight spaces, rapid decision making",
        estimatedTime: "50 Mins",
        intensity: "High",
        warmup: ["Juggling routine with feet, thighs, head (5 mins)", "Wall pass rhythm (100 passes each foot)"],
        mainDrills: [
          {
            name: "Cone Weave & Explosive Exit Burst",
            sets: "8 runs",
            repsOrDuration: "Zigzag through 6 cones at 1m spacing",
            rest: "45s",
            coachingNote: "Use inside and outside of pinky toe; head up on final exit touch."
          },
          {
            name: "Turn and Strike Finishing Drill (20 yards)",
            sets: "6 sets",
            repsOrDuration: "4 shots per set",
            rest: "90s",
            coachingNote: "Receive pass with back to goal, turn with one touch, strike bottom corners."
          }
        ],
        cooldown: ["Adductor stretch and gentle light jogging"],
        gearRecommended: [
          { name: "Football Cleats / Shoes", category: "Football", benefit: "Maximum traction studs for rapid cuts without slipping" }
        ]
      },
      {
        dayName: "Day 3: Core Power, Plyometrics & Free Kick Craft",
        focus: "Jump height for aerial duels, dead-ball shooting technique",
        estimatedTime: "45 Mins",
        intensity: "Moderate",
        warmup: ["Glute bridges", "Ankle pogo jumps (3x20)"],
        mainDrills: [
          {
            name: "Dumbbell Box Jumps / Tuck Jumps",
            sets: "4 sets",
            repsOrDuration: "6 reps",
            rest: "75s",
            coachingNote: "Land soft like a cat with knees tracking over toes."
          },
          {
            name: "25-Yard Set Piece Free Kicks Over Wall",
            sets: "5 sets",
            repsOrDuration: "5 kicks",
            rest: "60s",
            coachingNote: "Lock ankle, wrap inside instep around ball to generate top-spin dip."
          }
        ],
        cooldown: ["Spine decompression and quad stretches"],
        gearRecommended: [
          { name: "Breathable Sports Jersey", category: "Sports Clothing", benefit: "Moisture-wicking fabric keeps core temperature regulated during max effort" }
        ]
      },
      {
        dayName: "Day 4: Active Recovery & Tactical Film Review",
        focus: "Regeneration, foam rolling, tactical positioning study",
        estimatedTime: "30 Mins",
        intensity: "Low",
        warmup: ["5 mins easy jog + light dynamic mobility"],
        mainDrills: [
          {
            name: "Full Body Foam Rolling Sequence",
            sets: "1 set",
            repsOrDuration: "60s per major muscle group (IT bands, calves, quads, glutes)",
            rest: "0s",
            coachingNote: "Spend extra 15s on tight trigger points with calm slow breathing."
          }
        ],
        cooldown: ["15 mins hydration & sleep hygiene prep"],
        gearRecommended: [
          { name: "Sports Water Bottle", category: "Sports Accessories", benefit: "Track daily 3.5L hydration target easily" }
        ]
      }
    ]
  },
  Badminton: {
    sport: "Badminton",
    goal: "Explosive Footwork, Lightning Reflexes & Smash Power",
    level: "Intermediate / Advanced",
    scheduleDays: 3,
    overview: "Fast-twitch fiber activation, 6-corner court footwork automation, wrist snap pronation, and anaerobic stamina tailored for competitive badminton rallies.",
    nutritionTip: "High-cadence sweat loss requires sodium and magnesium replenishments during games to prevent forearm and calf cramps.",
    schedule: [
      {
        dayName: "Day 1: 6-Corner Shadow Footwork & Split Step Mastery",
        focus: "Court coverage speed, lunging stability, recovery back to center T",
        estimatedTime: "45 Mins",
        intensity: "High",
        warmup: ["Skipping rope 500 skips", "Wrist and ankle active circles", "Lateral lunges"],
        mainDrills: [
          {
            name: "6-Corner Random Shadow Footwork Drill",
            sets: "6 sets",
            repsOrDuration: "45 seconds high speed",
            rest: "60s",
            coachingNote: "Always execute split-step timing right as imaginary opponent strikes shuttle."
          },
          {
            name: "Front Court Net Kill & Deep Rear Court Scissor Jump Combos",
            sets: "5 sets",
            repsOrDuration: "12 shot sequences",
            rest: "75s",
            coachingNote: "Keep racket head above chest level at all times between shots."
          }
        ],
        cooldown: ["Calf and Achilles tendon stretches", "Wrist flexor/extensor stretches"],
        gearRecommended: [
          { name: "Badminton Racket Pro", category: "Badminton", benefit: "Lightweight carbon frame for ultra-fast reaction at the net" }
        ]
      },
      {
        dayName: "Day 2: Forearm Pronation, Smash Power & Jump Explosiveness",
        focus: "Upper body whip, steep smash angles, core anti-extension",
        estimatedTime: "50 Mins",
        intensity: "Extreme",
        warmup: ["Band shoulder internal/external rotations (3x15)", "Pogo jumps"],
        mainDrills: [
          {
            name: "Full Jump Smash Multi-Shuttle Feeding",
            sets: "8 sets",
            repsOrDuration: "15 smashes per set",
            rest: "90s",
            coachingNote: "Squeeze grip at contact point only. Drive shuttle down within 1 meter of service line."
          },
          {
            name: "Dumbbell Lateral Raises & Overhead Tricep Extensions",
            sets: "3 sets",
            repsOrDuration: "12 reps",
            rest: "60s",
            coachingNote: "Builds shoulder endurance to maintain smash velocity in 3rd set matches."
          }
        ],
        cooldown: ["Upper back and shoulder cross-arm stretches (5 mins)"],
        gearRecommended: [
          { name: "Hex Gym Dumbbells", category: "Gym Equipment", benefit: "Targeted resistance for wrist pronator and rotator cuff armor" }
        ]
      },
      {
        dayName: "Day 3: Defensive Reflexes, Net Tumble & Cool-Down Mobility",
        focus: "Low defensive stance, quick racket reaction, delicate net play",
        estimatedTime: "40 Mins",
        intensity: "Moderate",
        warmup: ["Reaction ball bouncing drills (5 mins)", "Neck & thoracic mobility"],
        mainDrills: [
          {
            name: "Rapid Drive Defense vs Smash Feeding",
            sets: "6 sets",
            repsOrDuration: "20 fast drives",
            rest: "60s",
            coachingNote: "Short compact push swing; do not take backswing on defense."
          },
          {
            name: "Spinning Net Shot Precision Practice",
            sets: "4 sets",
            repsOrDuration: "20 net touches",
            rest: "45s",
            coachingNote: "Brush underneath shuttle cork delicately with relaxed fingers."
          }
        ],
        cooldown: ["Full body restorative stretch routine + hydration recovery"],
        gearRecommended: [
          { name: "Breathable Sports Jersey", category: "Sports Clothing", benefit: "Stay cool and lightweight across 3-set badminton matches" }
        ]
      }
    ]
  },
  "Gym Equipment": {
    sport: "Gym Equipment",
    goal: "Hypertrophy, Functional Power & Athletic Core Strength",
    level: "All Levels",
    scheduleDays: 4,
    overview: "Science-based upper/lower split focusing on compound progressive overload, muscle hypertrophy, tendon resilience, and rotational core power.",
    nutritionTip: "Consume 1.8g to 2.2g protein per kg of bodyweight daily. Have 25g whey protein + fast carbs within 45 mins post-workout.",
    schedule: [
      {
        dayName: "Day 1: Upper Body Strength & Power Push-Pull",
        focus: "Chest, Upper Back, Shoulders & Arms",
        estimatedTime: "55 Mins",
        intensity: "High",
        warmup: ["5 mins jump rope", "Band pull-aparts (2x20)", "Arm circles & scapular pushups"],
        mainDrills: [
          {
            name: "Dumbbell Incline Bench Press",
            sets: "4 sets",
            repsOrDuration: "8-10 reps",
            rest: "90s",
            coachingNote: "Tuck elbows at 45 degrees, pause 1 second at bottom chest stretch."
          },
          {
            name: "Single-Arm Dumbbell Rows",
            sets: "4 sets",
            repsOrDuration: "10-12 reps",
            rest: "75s",
            coachingNote: "Pull with elbow towards back pocket; keep spine completely neutral."
          },
          {
            name: "Dumbbell Overhead Shoulder Press",
            sets: "3 sets",
            repsOrDuration: "10 reps",
            rest: "75s",
            coachingNote: "Lock core, do not arch lower back. Press dumbbells up in slight arc."
          },
          {
            name: "Dumbbell Bicep Curl to Overhead Tricep Extension Superset",
            sets: "3 sets",
            repsOrDuration: "12 reps each",
            rest: "60s",
            coachingNote: "Full range of motion; eliminate body swinging."
          }
        ],
        cooldown: ["Chest doorway stretch", "Lat hanging stretch (30s x 3)"],
        gearRecommended: [
          { name: "Hex Gym Dumbbells", category: "Gym Equipment", benefit: "High quality knurled grip enables heavy safe lifts" }
        ]
      },
      {
        dayName: "Day 2: Lower Body Power & Explosive Posterior Chain",
        focus: "Quads, Hamstrings, Glutes & Calves",
        estimatedTime: "55 Mins",
        intensity: "High",
        warmup: ["Bodyweight squats (20 reps)", "Walking lunges", "Glute bridges"],
        mainDrills: [
          {
            name: "Dumbbell Romanian Deadlifts (RDL)",
            sets: "4 sets",
            repsOrDuration: "10 reps",
            rest: "90s",
            coachingNote: "Hinge at hips pushing butt back until deep hamstring stretch, then drive hips forward."
          },
          {
            name: "Dumbbell Goblet Squats (Deep Depth)",
            sets: "4 sets",
            repsOrDuration: "12 reps",
            rest: "75s",
            coachingNote: "Hold dumbbell high at chest; break parallel with knees pushed outward."
          },
          {
            name: "Dumbbell Walking Lunges",
            sets: "3 sets",
            repsOrDuration: "20 total steps",
            rest: "60s",
            coachingNote: "Keep torso upright; light knee tap on floor."
          }
        ],
        cooldown: ["Pigeon pose glute stretch (1 min each side)", "Hamstring foam roll"],
        gearRecommended: [
          { name: "Hex Gym Dumbbells", category: "Gym Equipment", benefit: "Heavy resistance for foundational lower body muscle building" }
        ]
      },
      {
        dayName: "Day 3: Athletic Conditioning & Core Armor",
        focus: "HIIT, Anti-Rotational Core, Grip Strength",
        estimatedTime: "40 Mins",
        intensity: "Extreme",
        warmup: ["Dynamic jogging & jumping jacks"],
        mainDrills: [
          {
            name: "Dumbbell Farmer's Walk",
            sets: "4 rounds",
            repsOrDuration: "40 meters heavy carry",
            rest: "60s",
            coachingNote: "Stand tall, shoulders packed back, do not let weights sway."
          },
          {
            name: "Plank with Shoulder Taps",
            sets: "3 sets",
            repsOrDuration: "20 total taps",
            rest: "45s",
            coachingNote: "Lock hips solid; zero pelvic rotation during hand taps."
          },
          {
            name: "Burpee to Dumbbell Clean",
            sets: "4 sets",
            repsOrDuration: "10 reps",
            rest: "60s",
            coachingNote: "Explosive full body conditioning linking pushups to power cleans."
          }
        ],
        cooldown: ["Cobra pose abdominal stretch + child's pose (5 mins)"],
        gearRecommended: [
          { name: "Sports Water Bottle", category: "Sports Accessories", benefit: "Stay hydrated during intense interval training" }
        ]
      },
      {
        dayName: "Day 4: Rest, Joint Mobility & Active Recovery",
        focus: "System recovery, protein synthesis, muscle repair",
        estimatedTime: "25 Mins",
        intensity: "Low",
        warmup: ["Gentle 15 min walk outside"],
        mainDrills: [
          {
            name: "Full Body Mobility & Dynamic Stretching",
            sets: "1 set",
            repsOrDuration: "20 mins continuous",
            rest: "0s",
            coachingNote: "Focus on ankles, thoracic spine, and hip capsule mobility."
          }
        ],
        cooldown: ["8+ hours restful sleep target"],
        gearRecommended: [
          { name: "Breathable Sports Jersey", category: "Sports Clothing", benefit: "Comfortable athletic fit for everyday recovery and lounging" }
        ]
      }
    ]
  },
  Running: {
    sport: "Running",
    goal: "5K / 10K / Marathon Speed, Aerobic Capacity & Injury Resilience",
    level: "All Runners",
    scheduleDays: 4,
    overview: "Structured polarization training combining 80% aerobic base runs with 20% high-speed threshold intervals, VO2 max hill repeats, and running-specific strength.",
    nutritionTip: "Hydrate with 500ml water 2 hours before long runs. For runs over 60 mins, take 30g simple carbs (gels/dates) every 40 minutes.",
    schedule: [
      {
        dayName: "Day 1: Easy Aerobic Zone 2 Base Run + Strides",
        focus: "Mitochondrial density, fat oxidation, cardiovascular base",
        estimatedTime: "45 Mins",
        intensity: "Moderate",
        warmup: ["5 mins dynamic leg swings & ankle rolls"],
        mainDrills: [
          {
            name: "Zone 2 Conversational Pace Run",
            sets: "1 continuous run",
            repsOrDuration: "35-40 minutes (Heart rate 60-70% max)",
            rest: "N/A",
            coachingNote: "You should easily be able to speak in full complete sentences without gasping."
          },
          {
            name: "Post-Run 100m Acceleration Strides",
            sets: "4 reps",
            repsOrDuration: "100m building from 70% to 95% speed",
            rest: "60s walking rest",
            coachingNote: "Focus on tall posture, fast 180 SPM cadence, and soft midfoot landing."
          }
        ],
        cooldown: ["Standing quad and calf wall stretch (5 mins)"],
        gearRecommended: [
          { name: "Cushioned Running Shoes", category: "Running", benefit: "Plush responsive midsole absorbs road vibration and protects knees" }
        ]
      },
      {
        dayName: "Day 2: VO2 Max Interval Speed Drills",
        focus: "Top-end speed, lactate threshold, lung capacity expansion",
        estimatedTime: "45 Mins",
        intensity: "Extreme",
        warmup: ["10 mins easy jog", "High knees, butt kicks, carioca drills"],
        mainDrills: [
          {
            name: "800m Track / Road Repeats at 5K Goal Pace",
            sets: "5 sets",
            repsOrDuration: "800 meters hard effort",
            rest: "2 mins easy recovery jog",
            coachingNote: "Even pacing across all 5 sets—do not go out too fast on rep 1."
          },
          {
            name: "Short Hill Sprints (60m Incline)",
            sets: "4 reps",
            repsOrDuration: "60 meters max effort sprint uphill",
            rest: "Walk down slowly",
            coachingNote: "Drive knees high and pump arms aggressively; builds pure tendon elasticity."
          }
        ],
        cooldown: ["10 mins slow jog cooldown + hamstring stretch"],
        gearRecommended: [
          { name: "Cushioned Running Shoes", category: "Running", benefit: "Lightweight energy return for fast interval splits" }
        ]
      },
      {
        dayName: "Day 3: Runner's Functional Strength & Core Stability",
        focus: "Glute medius, single-leg stability, calf fortitude",
        estimatedTime: "35 Mins",
        intensity: "Moderate",
        warmup: ["Ankle hops and monster walks"],
        mainDrills: [
          {
            name: "Single-Leg Dumbbell Romanian Deadlift",
            sets: "3 sets",
            repsOrDuration: "10 reps/leg",
            rest: "60s",
            coachingNote: "Fixes muscle imbalances and stabilizes the knee during stance phase."
          },
          {
            name: "Eccentric Calf Heel Drops on a Step",
            sets: "3 sets",
            repsOrDuration: "15 reps/leg (3s lower)",
            rest: "45s",
            coachingNote: "Bulletproofs Achilles tendon against runner's tendonitis."
          },
          {
            name: "Side Planks with Leg Lift",
            sets: "3 sets",
            repsOrDuration: "30s per side",
            rest: "30s",
            coachingNote: "Prevents hip drop (Trendelenburg gait) when fatigued."
          }
        ],
        cooldown: ["IT band foam rolling + hip flexor lunge stretch"],
        gearRecommended: [
          { name: "Hex Gym Dumbbells", category: "Gym Equipment", benefit: "Essential resistance for single-leg strength and posture stability" }
        ]
      },
      {
        dayName: "Day 4: Weekly Long Run (Endurance Building)",
        focus: "Mental stamina, aerobic glycogen conservation",
        estimatedTime: "60-75 Mins",
        intensity: "High",
        warmup: ["5 mins walking mobility warmup"],
        mainDrills: [
          {
            name: "Long Slow Distance (LSD) Endurance Run",
            sets: "1 run",
            repsOrDuration: "8 to 14 km at steady conversational rhythm",
            rest: "N/A",
            coachingNote: "Sip water every 20 minutes. Negative split the last 2 km if feeling strong."
          }
        ],
        cooldown: ["Elevate legs against wall for 10 mins + rehydrate with electrolytes"],
        gearRecommended: [
          { name: "Cushioned Running Shoes", category: "Running", benefit: "Maximum cushioning prevents foot fatigue on double-digit kilometer runs" },
          { name: "Sports Water Bottle", category: "Sports Accessories", benefit: "Hydration carrier for long trail or asphalt courses" }
        ]
      }
    ]
  }
};

export const QUICK_COACH_PROMPTS = [
  {
    topic: "Cricket Bowling Speed",
    icon: "🏏",
    prompt: "How can I increase my fast bowling speed by 10 km/h without straining my lower back?",
    reply: "⚡ **Coach's Fast Bowling Velocity Blueprint:**\n\n1. **Lock the Front Leg (The Catapult Effect):** At front-foot contact, do NOT collapse your knee. A braced, straight front leg acts as a firm fulcrum, converting your run-up momentum instantly into bowling arm velocity.\n2. **Run-Up Rhythm Over Raw Sprinting:** Accelerate smoothly so your fastest stride is your gather stride. Don't stutter-step before the crease.\n3. **Non-Bowling Arm Pull:** Drive your left arm (for right-handers) down hard into your left hip pocket—this creates rotational torque across your lats.\n4. **Core Posterior Strength:** Add Dumbbell RDLs and Russian Twists to protect your L4/L5 lumbar spine from stress fractures.\n\n🏆 *Recommended Gear:* Tournament Leather Cricket Balls for grip, and Hex Dumbbells for rotational core stability.",
    relatedCategory: "Cricket",
    suggestedProducts: [1, 7, 5]
  },
  {
    topic: "Football Free Kick Curve",
    icon: "⚽",
    prompt: "How do I curve and dip a football over the defensive wall like Beckham or Messi?",
    reply: "🎯 **Tactical Free Kick Masterclass:**\n\n1. **Plant Foot Precision:** Place your non-kicking foot 6 inches beside the ball, angled about 30 degrees outward toward where you want the ball to start before bending.\n2. **Strike Zone:** Wrap the inside instep (large toe bone) around the bottom-outside quadrant of the ball. \n3. **Body Lean & Follow-Through:** Keep your chest slightly over the ball to control elevation, and follow through in an upward diagonal arc to generate aggressive top-spin that forces the ball to suddenly dip below the crossbar.\n4. **Ankle Rigidity:** Lock your ankle 100% rigid on contact—any limpness dissipates kinetic transfer.\n\n🏆 *Recommended Gear:* Match Grade Football and Firm Ground Football Cleats.",
    relatedCategory: "Football",
    suggestedProducts: [2, 6]
  },
  {
    topic: "Badminton Smash Power",
    icon: "🏸",
    prompt: "How can I make my badminton smash steeper and hit speeds over 300 km/h?",
    reply: "🚀 **Forearm Pronation & Apex Timing:**\n\n1. **Hit at the Highest Apex:** Jump and contact the shuttlecock 6-12 inches ahead of your racket shoulder—never let it drop level with your head.\n2. **Relaxation to Squeeze (The Whip):** Keep your fingers completely relaxed on the grip during the backswing. Squeeze tightly like catching a bird only at the micro-second of impact.\n3. **Forearm Pronation:** Rotate your forearm inward (turning palm from facing outward to inward) right through contact. This pronation generates 60% of all racket head speed.\n4. **Scissor Kick Landing:** Kick your right leg back in mid-air and land on your left foot to instantly push back toward the court center.\n\n🏆 *Recommended Gear:* High-Modulus Pro Carbon Badminton Racket.",
    relatedCategory: "Badminton",
    suggestedProducts: [3, 6]
  },
  {
    topic: "Pre-Match Fueling & Nutrition",
    icon: "🥗",
    prompt: "What should I eat 3 hours before a big match for maximum energy and zero stomach cramps?",
    reply: "⚡ **Athlete Performance Fueling Protocol:**\n\n- **3 Hours Before Kickoff/Match:** 100-150g complex low-GI carbs + 25g lean protein + low fat (e.g. Oatmeal with banana, honey, and whey protein, OR Brown rice with grilled chicken & sweet potato). Keep fats minimal as fat slows digestion.\n- **60 Mins Before:** 500ml water with a pinch of pink salt or electrolyte tab.\n- **20 Mins Before:** Fast carb boost (1 banana or energy gel + 2 sips of water).\n- **During Match Breaks:** Small sips of isotonic electrolyte drink every 15-20 minutes.\n\n🏆 *Recommended Gear:* Insulated Sports Hydration Shaker Bottle.",
    relatedCategory: "Sports Accessories",
    suggestedProducts: [8, 6]
  },
  {
    topic: "Shin Splints & Running Form",
    icon: "👟",
    prompt: "How do I fix shin splints and increase my running cadence to 180 SPM?",
    reply: "🏃 **Shin Splint Eradication & Cadence Blueprint:**\n\n1. **Eliminate Overstriding:** Shin splints are almost always caused by landing with your heel outstretched ahead of your center of mass. Land with your foot directly underneath your hips.\n2. **Target 175-185 SPM:** Use a metronome app or running playlist. Shorter, quicker strides reduce impact force on the tibia by up to 35%.\n3. **Strengthen Tibialis Anterior & Calves:** Perform daily toe raises against a wall (3x25) and eccentric calf drops on steps.\n4. **Cushioned Footwear:** Ensure your running shoes have adequate responsive cushioning to absorb asphalt shock waves.\n\n🏆 *Recommended Gear:* Cushioned Pro Running Shoes.",
    relatedCategory: "Running",
    suggestedProducts: [4, 6]
  },
  {
    topic: "Gym Muscle Building Split",
    icon: "💪",
    prompt: "What is the best 4-day workout split for building lean muscle without burning out?",
    reply: "🏋️ **Upper / Lower Hypertrophy Split:**\n\n- **Monday:** Upper Body Power (Dumbbell Incline Bench, Heavy Rows, Overhead Press, Bicep/Tricep supersets)\n- **Tuesday:** Lower Body Power (Dumbbell RDLs, Goblet Squats, Walking Lunges, Calf Drops)\n- **Wednesday:** Active Recovery (Mobility, light walking, hydration)\n- **Thursday:** Upper Body Hypertrophy (Higher reps 10-15 with strict time under tension)\n- **Friday:** Lower Body & Core Stability (Single-leg split squats, Farmer carries, Planks)\n- **Weekend:** Rest & match play.\n\nTarget 1.8g to 2.2g of protein per kg of bodyweight daily!\n\n🏆 *Recommended Gear:* Rubber Hex Dumbbells.",
    relatedCategory: "Gym Equipment",
    suggestedProducts: [5, 6]
  }
];

export const DAILY_ATHLETE_CHALLENGES = [
  {
    id: 1,
    day: "Day 1",
    sport: "All Sports",
    title: "Triple Century Agility Challenge",
    task: "Complete 100 jumping jacks + 100 high knees + 100 skipping rope reps without stopping for more than 30 seconds.",
    target: "300 reps total",
    badge: "🔥 Stamina Monster",
    xp: 150,
  },
  {
    id: 2,
    day: "Day 2",
    sport: "Cricket & Fitness",
    title: "Shadow Batting / Bowling Endurance",
    task: "Execute 50 perfect front-foot cover drives or 30 full run-up shadow bowling deliveries with full follow-through.",
    target: "50 Drive Strokes",
    badge: "🏏 Precision Master",
    xp: 200,
  },
  {
    id: 3,
    day: "Day 3",
    sport: "Football & Agility",
    title: "Iron Core & Plank Fortress",
    task: "Accumulate 4 total minutes of plank hold (e.g. 4 x 1 minute sets with 30s rest) + 50 Russian twists.",
    target: "4 Mins Plank",
    badge: "🛡️ Unshakeable Core",
    xp: 220,
  },
  {
    id: 4,
    day: "Day 4",
    sport: "Gym & Strength",
    title: "Dumbbell Century Squat & Press",
    task: "Complete 5 rounds of 10 Dumbbell Goblet Squats + 10 Overhead Presses with strict form.",
    target: "100 Total Reps",
    badge: "💪 Power Engine",
    xp: 250,
  },
  {
    id: 5,
    day: "Day 5",
    sport: "Running & Speed",
    title: "Cadence 180 Speed Burst",
    task: "Run 6 x 100m fast acceleration strides focusing on midfoot landing and 180 SPM rhythm.",
    target: "6x100m Strides",
    badge: "⚡ Lightning Sprint",
    xp: 300,
  }
];
