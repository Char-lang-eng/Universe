function setup() {
  createCanvas(windowWidth, windowHeight);
  People = [60, 1, "", ""];
  Production = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Req = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
  Name = [
    "Buildings",
    "Streets",
    "Villages",
    "Towns",
    "Cities",
    "Countries",
    "Planets",
    "Solar Systems",
    "Galaxies",
    "Universes",
    "Multiverses",
    "Space-time Continuums",
    "Dimensions",
    "Realities",
    "Greater Existences",
  ];
  Units = [
    "",
    "K",
    "M",
    "B",
    "T",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  Price = [
    20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10000, 100000, 1000000,
    10000000, 100000000, 1000000000,
  ];
  Upgrade = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
  UpgradeCost = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1, 25];
  Tier = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  Curse = [1, 1, 1, 1, 1, 1, 1];
  CurseCost = [6, 7, 8, 9, 10, 35, 12, 10];
  CurseTier = [1, 1, 1, 1, 1, 1, 1];
  Timer = 10000;
  Type = ceil(random(0, 10));
  Duration = [0, 0];
  Bar = 0;
  Level = 1;
  Savetime = 100;
  Requirement = 10000;
  Unlocks = 0;
  Coins = [500, 1, "", ""];
  Screen = "Main";
  Rate = 1;
  Multiplier = 1;
  UGC = 250;
  Emeralds = 0;
  Shatter = 0;
  Cooldown = 0;
  DarkOil = 0;
  ShadowEmeralds = 0;
  CurseRate = 0;
  Treaty = 10;
  Event = 6;
  EventState = 1;
  ENames = [
    "Hearts",
    "Cards",
    "Chocolate Boxes",
    "Flowers",
    "Heart Balloons",
    "Love Arrows",
    "Dances",
    "Valentine's Day",
    "Eggs",
    "Eagles",
    "Nests",
    "Dolphins",
    "Sharks",
    "Lions",
    "Elephants",
    "Animal",
    "Cakes",
    "Bakeries",
    "Villages",
    "Cities",
    "Planets",
    "Galaxies",
    "Universes",
    "Anniversary",
    "Ice Cream",
    "Ice Cream Stalls",
    "Budget Airlines",
    "Beaches",
    "Private Islands",
    "Gift Shops",
    "Hotels",
    "Summer",
    "Pumpkins",
    "Ghosts",
    "Zombies",
    "Skeletons",
    "Vampires",
    "Warewolves",
    "Giant Spiders",
    "Halloween",
    "Presents",
    "Elves",
    "Reindeer",
    "Toy Factories",
    "Candy Canes",
    "Christmas Trees",
    "Sleighs",
    "Christmas",
  ];
  ELevel = 1;
  EPrice = [20, 100, 1000, 10000, 100000, 1000000];
  ETokens = [60, 1, "", ""];
  ERequirement = 10000;
  ECoins = [0, 1, "", ""];
  ERate = 0;
  EUGC = 250;
  ECooldown = 0;
  EProduction = [0, 0, 0, 0, 0, 0];
  EReq = [9, 9, 9, 9, 9, 9];
  EMulti = [1, 1, 1, 1, 1, 1];
  Reward = 1;
  Spend = 0.1;
  Wait = 0;
  i = 0;
  t = Date.now();
  p = 0;
  pp = 0;
  c = 0;
  cc = 0;
  ep = 0;
  epp = 0;
  ec = 0;
  ecc = 0;
  x = windowWidth;
  y = windowHeight;
  v = 5;
  if (getItem("v") >= 4) {
    People = getItem("People");
    Coins = getItem("Coins");
    Requirement = getItem("Requirement");
    Req = getItem("Req");
    Production = getItem("Production");
    Unlocks = getItem("Unlocks");
    Level = getItem("Level");
    Rate = getItem("Rate");
    UGC = getItem("UGC");
    Upgrade = getItem("Upgrade");
    UpgradeCost = getItem("UpgradeCost");
    Tier = getItem("Tier");
    Emeralds = getItem("Emeralds");
    ShadowEmeralds = getItem("ShadowEmeralds");
    CurseRate = getItem("CurseRate");
    Event = getItem("Event");
    EventState = getItem("EventState");
    ELevel = getItem("ELevel");
    ETokens = getItem("ETokens");
    ERequirement = getItem("ERequirement");
    ECoins = getItem("ECoins");
    ERate = getItem("ERate");
    EUGC = getItem("EUGC");
    EProduction = getItem("EProduction");
    EReq = getItem("EReq");
    EMulti = getItem("EMulti");
    Reward = getItem("Reward");
    Timer = getItem("Timer");
    Type = getItem("Type");
    Duration = getItem("Duration");
    t = getItem("t");
    p = getItem("p");
    pp = getItem("pp");
    c = getItem("c");
    cc = getItem("cc");
    ep = getItem("ep");
    epp = getItem("epp");
    ec = getItem("ec");
    ecc = getItem("ecc");
    Shatter = getItem("Shatter");
    Cooldown = getItem("Cooldown");
    ECooldown = getItem("ECooldown");
    Treaty = getItem("Treaty");
    if (getItem("v") >= 5) {
      DarkOil = getItem("DarkOil");
      Curse = getItem("Curse");
      CurseCost = getItem("CurseCost");
      CurseTier = getItem("CurseTier");
    }
  }
}
function draw() {
  if (Screen != "Event") {
    textAlign(LEFT, BASELINE);
    stroke(0);
    strokeWeight(0.5);
    fill(255, 0, 0);
    background(
      14 * max(1, Unlocks-8),
      185 / max(1, Unlocks-8),
      194 / max(1, Unlocks-8)
    );
    stroke(255);
    line(0, 0.1 * windowHeight, windowWidth, 0.1 * windowHeight);
    textSize(0.05 * windowWidth);
    stroke(0);
    text("Universe Clicker", 0.08 * windowWidth, 0.1 * windowHeight - 2);
    stroke(255);
    line(0, 0.25 * windowHeight, windowWidth, 0.25 * windowHeight);
    textSize(0.04 * windowHeight);
    stroke(0);
    fill(14 * max(1, Unlocks-8), 185 / max(1, Unlocks-8), 194 / max(1, Unlocks-8));
    rect(
      (23.5 * windowWidth) / 600,
      (98 * windowHeight) / 600,
      (65 * windowWidth) / 600,
      (35 * windowHeight) / 600
    );
    rect(
      (103.5 * windowWidth) / 600,
      (98 * windowHeight) / 600,
      (65 * windowWidth) / 600,
      (35 * windowHeight) / 600
    );
    if (Level >= 3) {
      rect(
        (183.5 * windowWidth) / 600,
        (98 * windowHeight) / 600,
        (65 * windowWidth) / 600,
        (35 * windowHeight) / 600
      );
    }
    if (Level >= 45) {
      rect(
        (263.5 * windowWidth) / 600,
        (98 * windowHeight) / 600,
        (65 * windowWidth) / 600,
        (35 * windowHeight) / 600
      );
    }
    fill(255, 0, 0);
    textAlign(RIGHT, CENTER);
    textSize(0.015 * windowWidth);
    text(
      floor(People[0] / People[1]) + People[3] + People[2],
      0.14 * windowWidth,
      0.195 * windowHeight
    );
    text(
      ceil(Coins[0] / Coins[1]) + Coins[3] + Coins[2],
      0.2733 * windowWidth,
      0.195 * windowHeight
    );
    if (Level >= 3) {
      text(Emeralds, 0.4066 * windowWidth, 0.195 * windowHeight);
    }
    if (Level >= 45) {
      text(ShadowEmeralds, 0.54 * windowWidth, 0.195 * windowHeight);
    }
    textSize(0.015 * windowHeight);
    text("Level " + Level, 0.145 * windowWidth, 0.155 * windowHeight);
    text(
      round(Rate / Coins[1], 3) + "/s",
      0.28 * windowWidth,
      0.155 * windowHeight
    );
    if (Level >= 3) {
      text("+" + Upgrade[11], 0.41 * windowWidth, 0.155 * windowHeight);
    }
    if (Level >= 45) {
      text("Dark Oil: " + DarkOil, 0.545 * windowWidth, 0.155 * windowHeight);
    }
    fill(51, 126, 240);
    noStroke();
    ellipse(
      (30 * windowWidth) / 600,
      (107 * windowHeight) / 600,
      (7 * windowWidth) / 600,
      (10 * windowHeight) / 600
    );
    rect(
      (25.5 * windowWidth) / 600,
      (111 * windowHeight) / 600,
      (9 * windowWidth) / 600,
      (7 * windowHeight) / 600,
      20
    );
    rect(
      (25.5 * windowWidth) / 600,
      (116 * windowHeight) / 600,
      (9 * windowWidth) / 600,
      (10 * windowHeight) / 600
    );
    fill(250, 239, 30);
    ellipse(
      (112 * windowWidth) / 600,
      (115 * windowHeight) / 600,
      (12 * windowWidth) / 600,
      (20 * windowHeight) / 600
    );
    fill(247, 177, 37);
    ellipse(
      (112 * windowWidth) / 600,
      (115 * windowHeight) / 600,
      (6 * windowWidth) / 600,
      (10 * windowHeight) / 600
    );
    if (Level >= 3) {
      fill(157, 245, 160);
      beginShape();
      vertex((192 * windowWidth) / 600, (101 * windowHeight) / 600);
      vertex((187 * windowWidth) / 600, (111 * windowHeight) / 600);
      vertex((187 * windowWidth) / 600, (121 * windowHeight) / 600);
      vertex((192 * windowWidth) / 600, (131 * windowHeight) / 600);
      vertex((197 * windowWidth) / 600, (121 * windowHeight) / 600);
      vertex((197 * windowWidth) / 600, (111 * windowHeight) / 600);
      endShape();
      fill(14, 176, 17);
      beginShape();
      vertex((192 * windowWidth) / 600, (107 * windowHeight) / 600);
      vertex((189 * windowWidth) / 600, (114 * windowHeight) / 600);
      vertex((189 * windowWidth) / 600, (118 * windowHeight) / 600);
      vertex((192 * windowWidth) / 600, (124 * windowHeight) / 600);
      vertex((195 * windowWidth) / 600, (118 * windowHeight) / 600);
      vertex((195 * windowWidth) / 600, (114 * windowHeight) / 600);
      endShape();
    }
    if (Level >= 45) {
      fill(199, 147, 237);
      beginShape();
      vertex((272 * windowWidth) / 600, (101 * windowHeight) / 600);
      vertex((267 * windowWidth) / 600, (111 * windowHeight) / 600);
      vertex((267 * windowWidth) / 600, (121 * windowHeight) / 600);
      vertex((272 * windowWidth) / 600, (131 * windowHeight) / 600);
      vertex((277 * windowWidth) / 600, (121 * windowHeight) / 600);
      vertex((277 * windowWidth) / 600, (111 * windowHeight) / 600);
      endShape();
      fill(159, 65, 209);
      beginShape();
      vertex((272 * windowWidth) / 600, (107 * windowHeight) / 600);
      vertex((269 * windowWidth) / 600, (114 * windowHeight) / 600);
      vertex((269 * windowWidth) / 600, (118 * windowHeight) / 600);
      vertex((272 * windowWidth) / 600, (124 * windowHeight) / 600);
      vertex((275 * windowWidth) / 600, (118 * windowHeight) / 600);
      vertex((275 * windowWidth) / 600, (114 * windowHeight) / 600);
      endShape();
    }
    fill(14 * max(1, Unlocks-8), 185 / max(1, Unlocks-8), 194 / max(1, Unlocks-8));
    stroke(255);
    rect(
      windowWidth * 0.675,
      windowHeight * 0.1,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.675,
      windowHeight * 0.175,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.75,
      windowHeight * 0.1,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.75,
      windowHeight * 0.175,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.825,
      windowHeight * 0.1,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.825,
      windowHeight * 0.175,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    fill(255, 205, 205);
    stroke(255, 0, 0);
    if (People[0] >= Requirement && Level < 120) {
      rect(
        windowWidth * 0.675,
        windowHeight * 0.1,
        windowWidth * 0.075,
        windowHeight * 0.075
      );
    }
    if (People[0] >= UGC && Level >= 2) {
      rect(
        windowWidth * 0.675,
        windowHeight * 0.175,
        windowWidth * 0.075,
        windowHeight * 0.075
      );
    }
    if (Cooldown == 0 && Level >= 5) {
      rect(
        windowWidth * 0.825,
        windowHeight * 0.175,
        windowWidth * 0.075,
        windowHeight * 0.075
      );
    }
    fill(255, 0, 0);
    stroke(0);
    textAlign(LEFT, CENTER);
    if (Level >= 5) {
      if (Cooldown == 0) {
        text(
          "Claim 1 hour of coins",
          windowWidth * 0.83,
          windowHeight * 0.175,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      } else {
        text(
          "Instant coins on cooldown: " + floor(100 - Cooldown / 864) + "%",
          windowWidth * 0.83,
          windowHeight * 0.175,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      }
    } else {
      text(
        "Locked",
        windowWidth * 0.83,
        windowHeight * 0.175,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Level < 120) {
      if (People[0] > Requirement) {
        text(
          "Click to level up",
          windowWidth * 0.68,
          windowHeight * 0.1,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      } else {
        text(
          floor((People[0] / Requirement) * 100) + "% to next level",
          windowWidth * 0.68,
          windowHeight * 0.1,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      }
    } else {
      text(
        "You have reached the highest level",
        windowWidth * 0.68,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Level >= 2) {
      if (People[0] > UGC) {
        text(
          "Click to upgrade coin income",
          windowWidth * 0.68,
          windowHeight * 0.175,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      } else {
        text(
          floor((People[0] / UGC) * 100) + "% to next upgrade",
          windowWidth * 0.68,
          windowHeight * 0.175,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      }
    } else {
      text(
        "Locked",
        windowWidth * 0.68,
        windowHeight * 0.175,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }

    if (Screen != "ES" && Level >= 3) {
      text(
        "Visit emerald shop",
        windowWidth * 0.755,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Screen == "ES" && Level >= 3) {
      text(
        "Return",
        windowWidth * 0.755,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Level < 3) {
      text(
        "Locked",
        windowWidth * 0.755,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Screen != "SES" && Level >= 45) {
      text(
        "Make sacrifices",
        windowWidth * 0.83,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Screen == "SES" && Level >= 45) {
      text(
        "Return",
        windowWidth * 0.83,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Level < 45) {
      text(
        "Locked",
        windowWidth * 0.83,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (Level >= 10) {
      if (Screen != "Shatter") {
        if (Shatter < 1) {
          text(
            "Shatter emeralds to gain a global boost",
            windowWidth * 0.755,
            windowHeight * 0.175,
            windowWidth * 0.065,
            windowHeight * 0.075
          );
        } else {
          text(
            Shatter + " emerald(s) shattered (+" + floor(sqrt(Shatter)) + "%)",
            windowWidth * 0.755,
            windowHeight * 0.175,
            windowWidth * 0.065,
            windowHeight * 0.075
          );
        }
      } else {
        text(
          "Return",
          windowWidth * 0.755,
          windowHeight * 0.175,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      }
    }
    if (Level < 10) {
      text(
        "Locked",
        windowWidth * 0.755,
        windowHeight * 0.175,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    textAlign(CENTER, CENTER);
    if (Level == 1) {
      text(
        "Welcome to universe clicker, where the aim is to take over life, the universe and everything. Before you can take over the universe, you need to take over some buildings. Each building costs 20 people and 1 coin. Once purchased, they will attract 1 person to your empire every second. Get to 10000 people and you will be able to level up. Also, try toggling the bar at the top right, it will allow you to buy stuff faster. Good luck!",
        0.2 * windowWidth,
        0.7 * windowHeight,
        0.6 * windowWidth,
        0.3 * windowHeight
      );
    }
    if (Level == 2) {
      text(
        "Congratulations, you reached level 2, unfortunately you have to sacrifice all of your production when you level up, but you will need to do this in order to progress. However, you can now spend people on upgrading your coin income, having more coins is extremely useful as you will need lots of coins in order to maximise production. You have also unlocked streets which generate buildings for no extra cost.",
        0.2 * windowWidth,
        0.7 * windowHeight,
        0.6 * windowWidth,
        0.3 * windowHeight
      );
    }
    if (Level == 3) {
      text(
        "You have now unlocked emeralds, which can be used to purchase permanent upgrades from the emerald shop, these will be key to allowing you to get by as the levels get tougher. You will earn emeralds whenever you complete a green bar or finish a level from now on.",
        0.2 * windowWidth,
        0.7 * windowHeight,
        0.6 * windowWidth,
        0.3 * windowHeight
      );
    }
    if (Level == 4) {
      text(
        "This is the end of the tutorial, keep buying, upgrading and levelling up until you have it all.",
        0.2 * windowWidth,
        0.7 * windowHeight,
        0.6 * windowWidth,
        0.3 * windowHeight
      );
    }
    textAlign(LEFT, CENTER);
    if (Level >= 20) {
      if (Event == 0) {
        fill(247, 123, 114);
      } else if (Event == 1) {
        fill(0, 128, 17);
      } else if (Event == 2) {
        fill(223, 120, 227);
      } else if (Event == 3) {
        fill(222, 222, 51);
      } else if (Event == 4) {
        fill(84, 12, 110);
      } else if (Event == 5) {
        fill(222, 222, 222);
      }

      textAlign(LEFT, CENTER);
      if (Event != 6) {
        rect(
          windowWidth * 0.9,
          windowHeight * 0.1,
          windowWidth * 0.1,
          windowHeight * 0.15
        );
      }
      fill(255, 0, 0);
      if (EventState == 1 && Event != 6) {
        text(
          "Start " + ENames[Event * 8 + 7] + " event",
          windowWidth * 0.905,
          windowHeight * 0.135,
          windowWidth * 0.07,
          windowHeight * 0.075
        );
      }
      if (EventState == 2) {
        text(
          "Go to " + ENames[Event * 8 + 7] + " event",
          windowWidth * 0.905,
          windowHeight * 0.135,
          windowWidth * 0.07,
          windowHeight * 0.075
        );
      }
      if (EventState == 3) {
        text(
          "Claim reward: " + Reward + " emeralds",
          windowWidth * 0.905,
          windowHeight * 0.135,
          windowWidth * 0.07,
          windowHeight * 0.075
        );
      }
    }
  }
  if (Screen == "Event") {
    textAlign(LEFT, BASELINE);
    stroke(0);
    strokeWeight(0.5);
    fill(255, 0, 0);
    if (Event == 0) {
      ref = [247, 123, 114];
    }
    if (Event == 1) {
      ref = [0, 128, 17];
    }
    if (Event == 2) {
      ref = [223, 120, 227];
    }
    if (Event == 3) {
      ref = [222, 222, 51];
    }
    if (Event == 4) {
      ref = [84, 12, 110];
    }
    if (Event == 5) {
      ref = [222, 222, 222];
    }
    background(ref[0], ref[1], ref[2]);
    stroke(255);
    line(0, 0.1 * windowHeight, windowWidth, 0.1 * windowHeight);
    textSize(0.05 * windowWidth);
    stroke(0);
    text(
      ENames[8 * (Event + 1) - 1] + " Event",
      0.08 * windowWidth,
      0.1 * windowHeight - 2
    );
    stroke(255);
    line(0, 0.25 * windowHeight, windowWidth, 0.25 * windowHeight);
    textSize(0.04 * windowHeight);
    stroke(0);
    fill(ref[0], ref[1], ref[2]);
    rect(
      (23.5 * windowWidth) / 600,
      (98 * windowHeight) / 600,
      (65 * windowWidth) / 600,
      (35 * windowHeight) / 600
    );
    rect(
      (103.5 * windowWidth) / 600,
      (98 * windowHeight) / 600,
      (65 * windowWidth) / 600,
      (35 * windowHeight) / 600
    );
    rect(
      (183.5 * windowWidth) / 600,
      (98 * windowHeight) / 600,
      (65 * windowWidth) / 600,
      (35 * windowHeight) / 600
    );
    fill(255, 0, 0);
    textAlign(RIGHT, CENTER);
    textSize(0.015 * windowWidth);
    text(
      floor(ETokens[0] / ETokens[1]) + ETokens[3] + ETokens[2],
      0.14 * windowWidth,
      0.195 * windowHeight
    );
    text(
      ceil(ECoins[0] / ECoins[1]) + ECoins[3] + ECoins[2],
      0.2733 * windowWidth,
      0.195 * windowHeight
    );
    text(Emeralds, 0.4066 * windowWidth, 0.195 * windowHeight);
    textSize(0.015 * windowHeight);
    text("Level " + ELevel, 0.145 * windowWidth, 0.155 * windowHeight);
    text(
      round(ERate / ECoins[1], 3) + "/s",
      0.28 * windowWidth,
      0.155 * windowHeight
    );
    fill(51, 126, 240);
    noStroke();
    if (Event == 0) {
      fill(255, 0, 0);
      arc(
        0.0505 * windowWidth,
        0.186 * windowHeight,
        0.01 * windowWidth,
        0.02 * windowHeight,
        3.15,
        0
      );
      arc(
        0.0575 * windowWidth,
        0.186 * windowHeight,
        0.01 * windowWidth,
        0.02 * windowHeight,
        3.15,
        0
      );
      triangle(
        0.045 * windowWidth,
        0.186 * windowHeight,
        0.063 * windowWidth,
        0.186 * windowHeight,
        0.054 * windowWidth,
        0.211 * windowHeight
      );
    }
    if (Event == 1) {
      fill(255, 255, 255);
      arc(
        0.05 * windowWidth,
        0.196 * windowHeight,
        0.015 * windowWidth,
        0.03 * windowHeight,
        0,
        3.15
      );
      arc(
        0.05 * windowWidth,
        0.197 * windowHeight,
        0.015 * windowWidth,
        0.045 * windowHeight,
        3.15,
        0
      );
    }
    if (Event == 2) {
      fill(245, 179, 98);
      ellipse(
        0.055 * windowWidth,
        0.192 * windowHeight,
        0.015 * windowWidth,
        0.01 * windowWidth
      );
      fill(255, 255, 255);
      beginShape();
      vertex(0.048 * windowWidth, 0.196 * windowHeight);
      vertex(0.062 * windowWidth, 0.196 * windowHeight);
      vertex(0.06 * windowWidth, 0.206 * windowHeight);
      vertex(0.05 * windowWidth, 0.206 * windowHeight);
      endShape();
    }
    if (Event == 3) {
      fill(250, 230, 175);
      ellipse(
        0.05 * windowWidth,
        0.195 * windowHeight,
        0.008 * windowWidth,
        0.012 * windowHeight
      );
      fill(94, 68, 24);
      ellipse(
        0.058 * windowWidth,
        0.195 * windowHeight,
        0.008 * windowWidth,
        0.012 * windowHeight
      );
      fill(156, 230, 192);
      ellipse(
        0.054 * windowWidth,
        0.186 * windowHeight,
        0.008 * windowWidth,
        0.012 * windowHeight
      );
      fill(207, 144, 19);
      arc(
        0.054 * windowWidth,
        0.197 * windowHeight,
        0.016 * windowWidth,
        0.024 * windowHeight,
        0,
        3.1
      );
    }
    if (Event == 4) {
      fill(222, 154, 71);
      ellipse(
        0.055 * windowWidth,
        0.195 * windowHeight,
        0.025 * windowWidth,
        0.03 * windowHeight
      );
      fill(0);
      ellipse(
        0.05 * windowWidth,
        0.19 * windowHeight,
        0.006 * windowWidth,
        0.009 * windowHeight
      );
      ellipse(
        0.06 * windowWidth,
        0.19 * windowHeight,
        0.006 * windowWidth,
        0.009 * windowHeight
      );
      arc(
        0.055 * windowWidth,
        0.197 * windowHeight,
        0.016 * windowWidth,
        0.02 * windowHeight,
        0,
        3.1
      );
      fill(222, 154, 71);
      arc(
        0.055 * windowWidth,
        0.196 * windowHeight,
        0.016 * windowWidth,
        0.01 * windowHeight,
        0,
        3.1
      );
      fill(23, 130, 50);
      rect(
        0.0525 * windowWidth,
        0.175 * windowHeight,
        0.005 * windowWidth,
        0.005 * windowHeight,
        100
      );
    }
    if (Event == 5) {
      stroke(0);
      fill(204, 10, 10);
      rect(
        0.045 * windowWidth,
        0.175 * windowHeight,
        0.02 * windowWidth,
        0.035 * windowHeight,
        10
      );
      fill(212, 171, 23);
      rect(
        0.052 * windowWidth,
        0.175 * windowHeight,
        0.006 * windowWidth,
        0.035 * windowHeight
      );
      rect(
        0.045 * windowWidth,
        0.185 * windowHeight,
        0.02 * windowWidth,
        0.006 * windowHeight
      );
      ellipse(
        0.052 * windowWidth,
        0.185 * windowHeight,
        0.006 * windowWidth,
        0.009 * windowHeight
      );
      ellipse(
        0.058 * windowWidth,
        0.185 * windowHeight,
        0.006 * windowWidth,
        0.009 * windowHeight
      );
      beginShape();
      vertex(0.055 * windowWidth, 0.187 * windowHeight);
      vertex(0.06 * windowWidth, 0.19 * windowHeight);
      vertex(0.05 * windowWidth, 0.196 * windowHeight);
      vertex(0.045 * windowWidth, 0.193 * windowHeight);
      vertex(0.055 * windowWidth, 0.187 * windowHeight);
      endShape();
      beginShape();
      vertex(0.055 * windowWidth, 0.187 * windowHeight);
      vertex(0.05 * windowWidth, 0.19 * windowHeight);
      vertex(0.06 * windowWidth, 0.196 * windowHeight);
      vertex(0.065 * windowWidth, 0.193 * windowHeight);
      vertex(0.055 * windowWidth, 0.187 * windowHeight);
      endShape();
      noStroke();
    }

    fill(247, 177, 37);
    ellipse(
      (112 * windowWidth) / 600,
      (115 * windowHeight) / 600,
      (12 * windowWidth) / 600,
      (20 * windowHeight) / 600
    );
    fill(250, 239, 30);
    ellipse(
      (112 * windowWidth) / 600,
      (115 * windowHeight) / 600,
      (6 * windowWidth) / 600,
      (10 * windowHeight) / 600
    );
    fill(157, 245, 160);
    beginShape();
    vertex((192 * windowWidth) / 600, (101 * windowHeight) / 600);
    vertex((187 * windowWidth) / 600, (111 * windowHeight) / 600);
    vertex((187 * windowWidth) / 600, (121 * windowHeight) / 600);
    vertex((192 * windowWidth) / 600, (131 * windowHeight) / 600);
    vertex((197 * windowWidth) / 600, (121 * windowHeight) / 600);
    vertex((197 * windowWidth) / 600, (111 * windowHeight) / 600);
    endShape();
    fill(14, 176, 17);
    beginShape();
    vertex((192 * windowWidth) / 600, (107 * windowHeight) / 600);
    vertex((189 * windowWidth) / 600, (114 * windowHeight) / 600);
    vertex((189 * windowWidth) / 600, (118 * windowHeight) / 600);
    vertex((192 * windowWidth) / 600, (124 * windowHeight) / 600);
    vertex((195 * windowWidth) / 600, (118 * windowHeight) / 600);
    vertex((195 * windowWidth) / 600, (114 * windowHeight) / 600);
    endShape();
    fill(ref[0], ref[1], ref[2]);
    stroke(255);
    rect(
      windowWidth * 0.75,
      windowHeight * 0.1,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.75,
      windowHeight * 0.175,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.825,
      windowHeight * 0.1,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    rect(
      windowWidth * 0.825,
      windowHeight * 0.175,
      windowWidth * 0.075,
      windowHeight * 0.075
    );
    fill(255, 205, 205);
    stroke(255, 0, 0);
    if (ETokens[0] >= ERequirement && ELevel < 7) {
      rect(
        windowWidth * 0.75,
        windowHeight * 0.1,
        windowWidth * 0.075,
        windowHeight * 0.075
      );
    }
    if (ETokens[0] >= EUGC) {
      rect(
        windowWidth * 0.75,
        windowHeight * 0.175,
        windowWidth * 0.075,
        windowHeight * 0.075
      );
    }
    if (ECooldown == 0) {
      rect(
        windowWidth * 0.825,
        windowHeight * 0.175,
        windowWidth * 0.075,
        windowHeight * 0.075
      );
    }
    fill(255, 0, 0);
    stroke(0);
    textAlign(LEFT, CENTER);
    if (ECooldown == 0) {
      text(
        "Claim 1 hour of coins",
        windowWidth * 0.83,
        windowHeight * 0.175,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    } else {
      text(
        "Instant coins on cooldown: " + floor(100 - ECooldown / 144) + "%",
        windowWidth * 0.83,
        windowHeight * 0.175,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (ELevel < 7) {
      if (ETokens[0] > ERequirement) {
        text(
          "Click to level up",
          windowWidth * 0.755,
          windowHeight * 0.1,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      } else {
        text(
          floor((ETokens[0] / ERequirement) * 100) + "% to next level",
          windowWidth * 0.755,
          windowHeight * 0.1,
          windowWidth * 0.065,
          windowHeight * 0.075
        );
      }
    } else {
      text(
        "You have reached the highest level",
        windowWidth * 0.755,
        windowHeight * 0.1,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    if (ETokens[0] > EUGC) {
      text(
        "Click to upgrade coin income",
        windowWidth * 0.755,
        windowHeight * 0.175,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    } else {
      text(
        floor((ETokens[0] / EUGC) * 100) + "% to next upgrade",
        windowWidth * 0.755,
        windowHeight * 0.175,
        windowWidth * 0.065,
        windowHeight * 0.075
      );
    }
    text(
      Shatter + " emerald(s) shattered (+" + floor(sqrt(Shatter)) + "%)",
      windowWidth * 0.83,
      windowHeight * 0.1,
      windowWidth * 0.065,
      windowHeight * 0.075
    );

    fill(14 * max(1, Unlocks-8), 185 / max(1, Unlocks-8), 194 / max(1, Unlocks-8));
    rect(
      0.9 * windowWidth,
      0.1 * windowHeight,
      0.1 * windowWidth,
      0.15 * windowHeight
    );
    fill(255, 0, 0);
    stroke(0);
    text(
      "Return to main game",
      0.905 * windowWidth,
      0.135 * windowHeight,
      0.1 * windowWidth,
      0.075 * windowHeight
    );
  }

  i = 0;

  while (i <= Unlocks) {
    if (i < 10) {
      fill(69, 224, 105);
      noStroke();
      if (Screen == "Main") {
        rect(
          0,
          0.05 * windowHeight * i + 0.25 * windowHeight,
          windowWidth * (Production[i] / Req[i]),
          0.05 * windowHeight
        );
        stroke(255, 255, 255);
        line(
          0,
          0.05 * windowHeight * (i + 1) + 0.25 * windowHeight,
          windowWidth,
          0.05 * windowHeight * (i + 1) + 0.25 * windowHeight
        );
      }
      if (Req[i] <= Production[i] && Screen == "Main") {
        if (Level == 1) {
          People[0] += 50 * Req[i];
        }
        if (Level == 2) {
          Coins[0] += 30 * (i + 1);
        }
        Req[i] = Req[i] * 9;
        Emeralds = Emeralds + i + 1 + Upgrade[11];
      }
      if (Screen == "Main") {
        textSize(0.02 * windowHeight);
        textAlign(LEFT, CENTER);
        stroke(0);
        fill(255, 0, 0);
        text(
          Name[i] + " = " + Math.floor(Production[i]),
          0.05 * windowWidth,
          0.05 * windowHeight * (i + 1) + 0.225 * windowHeight
        );
        textAlign(RIGHT, CENTER);
        if (i == 0) {
          text(
            "Cost = " + Price[0] + " People & 1 Coin",
            0.97 * windowWidth,
            0.05 * windowHeight * (i + 1) + 0.225 * windowHeight
          );
        } else {
          text(
            "Cost = " + Price[i] + " " + Name[i - 1] + " & 1 Coin",
            0.97 * windowWidth,
            0.05 * windowHeight * (i + 1) + 0.225 * windowHeight
          );
        }
      }
    } else {
      fill(163, 87, 240);
      noStroke();
      if (Screen == "Main") {
        rect(
          0,
          0.05 * windowHeight * i + 0.25 * windowHeight,
          windowWidth * (Production[i] / Req[i]),
          0.05 * windowHeight
        );
        stroke(255, 255, 255);
        line(
          0,
          0.05 * windowHeight * (i + 1) + 0.25 * windowHeight,
          windowWidth,
          0.05 * windowHeight * (i + 1) + 0.25 * windowHeight
        );
      }
      if (Req[i] <= Production[i] && Screen == "Main") {
        Req[i] = Req[i] * 9;
        Emeralds = Emeralds + i + 1 + Upgrade[11];
        DarkOil += floor(random(0, 6 ** (i - 8)));
        Savetime = 0
      }
      if (Screen == "Main") {
        textSize(0.02 * windowHeight);
        textAlign(LEFT, CENTER);
        stroke(0);
        fill(255, 0, 0);
        text(
          Name[i] + " = " + Math.floor(Production[i]),
          0.05 * windowWidth,
          0.05 * windowHeight * (i + 1) + 0.225 * windowHeight
        );
        textAlign(RIGHT, CENTER);
        text(
          "Cost = " + Price[i] + " " + Name[i - 1] + " & 1 Coin",
          0.97 * windowWidth,
          0.05 * windowHeight * (i + 1) + 0.225 * windowHeight
        );
      }
    }

    textAlign(LEFT, CENTER);
    if (Duration[0] == 0) {
      if (i == 0) {
        People[0] =
          People[0] +
          Production[0] *
            (((Date.now() - t) *
              Upgrade[0] *
              Curse[5] *
              (1 + sqrt(Shatter) / 100)) /
              1000);
      } else if (i < 10) {
        Production[i - 1] =
          Production[i - 1] +
          Production[i] *
            (((Date.now() - t) *
              Upgrade[i] *
              Curse[5] *
              (1 + sqrt(Shatter) / 100)) /
              1000);
      } else {
        Production[i - 1] =
          Production[i - 1] +
          Production[i] *
            (((Date.now() - t) *
              Curse[i - 10] *
              Curse[5] *
              (1 + sqrt(Shatter) / 100)) /
              1000);
      }
    } else {
      if (i == 0) {
        People[0] =
          People[0] +
          Production[0] *
            (((Date.now() - t) *
              Upgrade[0] *
              Curse[5] *
              (1 + sqrt(Shatter) / 100)) /
              2000);
      } else if (i < 10) {
        Production[i - 1] =
          Production[i - 1] +
          Production[i] *
            (((Date.now() - t) *
              Upgrade[i] *
              Curse[5] *
              (1 + sqrt(Shatter) / 100)) /
              2000);
      } else {
        Production[i - 1] =
          Production[i - 1] +
          Production[i] *
            (((Date.now() - t) *
              Curse[i - 10] *
              Curse[5] *
              (1 + sqrt(Shatter) / 100)) /
              2000);
      }
    }

    i++;
  }
  i = 0;
  while (i < ELevel && i < 6) {
    if (Screen == "Event") {
      noStroke();
      if (Event == 0) {
        fill(156, 8, 8);
      } else if (Event == 1) {
        fill(143, 136, 10);
      } else if (Event == 2) {
        fill(69, 224, 105);
      } else if (Event == 3) {
        fill(245, 229, 171);
      } else if (Event == 4) {
        fill(242, 201, 201);
      } else if (Event == 5) {
        fill(82, 153, 35);
      }
      rect(
        0,
        0.05 * windowHeight * i + 0.25 * windowHeight,
        windowWidth * (EProduction[i] / EReq[i]),
        0.05 * windowHeight
      );
      stroke(255, 255, 255);
      line(
        0,
        0.05 * windowHeight * (i + 1) + 0.25 * windowHeight,
        windowWidth,
        0.05 * windowHeight * (i + 1) + 0.25 * windowHeight
      );
      if (EProduction[i] >= EReq[i]) {
        EReq[i] = EReq[i] * 9;
        EMulti[i] = EMulti[i] * 1.75;
      }
      textSize(0.02 * windowHeight);
      textAlign(LEFT, CENTER);
      stroke(0);
      fill(255, 0, 0);
      text(
        ENames[8 * Event + i + 1] + " = " + Math.floor(EProduction[i]),
        0.05 * windowWidth,
        0.05 * windowHeight * (i + 1) + 0.225 * windowHeight
      );
      textAlign(RIGHT, CENTER);
      text(
        "Cost = " + EPrice[i] + " " + ENames[8 * Event + i] + " & 1 Event Coin",
        0.97 * windowWidth,
        0.05 * windowHeight * (i + 1) + 0.225 * windowHeight
      );
    }
    if (i == 0) {
      ETokens[0] =
        ETokens[0] +
        EProduction[0] *
          (((Date.now() - t) * EMulti[0] * (1 + sqrt(Shatter) / 100)) / 1000);
    } else {
      EProduction[i - 1] =
        EProduction[i - 1] +
        EProduction[i] *
          (((Date.now() - t) * EMulti[i] * (1 + sqrt(Shatter) / 100)) / 1000);
    }
    i++;
  }

  stroke(255);
  line(0, 0.25 * windowHeight, windowWidth, 0.25 * windowHeight);
  Coins[0] = Coins[0] + (Rate * (Date.now() - t)) / 1000;
  ECoins[0] = ECoins[0] + (ERate * (Date.now() - t)) / 1000;
  Timer = Timer - ((Date.now() - t) * CurseRate ** 3) / 1000;
  Savetime = Savetime - (Date.now() - t) / 1000;
  textSize(0.02 * windowHeight);
  fill(14 * max(1, Unlocks-8), 185 / max(1, Unlocks-8), 194 / max(1, Unlocks-8));
  if (Screen == "Event") {
    fill(ref[0], ref[1], ref[2]);
  }
  textAlign(LEFT, CENTER);
  rect(
    0.8 * windowWidth,
    0.025 * windowHeight,
    0.1 * windowWidth,
    0.05 * windowHeight
  );
  fill(222, 186, 27);
  text(floor(Spend * 100) + "%", 0.8 * windowWidth, 0.02 * windowHeight);
  rect(
    0.8 * windowWidth,
    0.025 * windowHeight,
    windowWidth * Spend * 0.1,
    0.05 * windowHeight
  );
  textSize(0.012 * windowHeight);
  stroke(0);
  if (v == 5) {
    fill(250, 0, 0);
    rect(0.015 * windowWidth, 0, 0.05 * windowWidth, 0.05 * windowHeight);
    fill(0);
    text(
      "Hard reset account",
      0.016 * windowWidth,
      0,
      0.048 * windowWidth,
      0.05 * windowHeight
    );
  }
  if (v == 1) {
    fill(0, 250, 0);
    rect(0.015 * windowWidth, 0, 0.05 * windowWidth, 0.05 * windowHeight);
    fill(0);
    text(
      "Save (Refresh to restart)",
      0.016 * windowWidth,
      0,
      0.048 * windowWidth,
      0.05 * windowHeight
    );
  }
  if (Screen == "ES") {
    textSize(0.04 * windowWidth);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    stroke(0);
    text("Emerald Shop", 0.5 * windowWidth, 0.3 * windowHeight);
    stroke(255);
    fill(14 * max(1, Unlocks-8), 185 / max(1, Unlocks-8), 194 / max(1, Unlocks-8));
    textSize(0.02 * windowWidth);
    rect(
      0.34 * windowWidth,
      0.4 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.5 * windowWidth,
      0.4 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );

    rect(
      0.1 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.26 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.42 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.58 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.74 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );

    rect(
      0.1 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.26 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.42 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.58 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.74 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );

    fill(255, 0, 0);
    stroke(0);
    textSize(0.01 * windowWidth);
    text("Coins<" + Tier[10] + ">", 0.42 * windowWidth, 0.42 * windowHeight);
    text("/10 to upgrade cost", 0.42 * windowWidth, 0.46 * windowHeight);
    if (UpgradeCost[10] == 1) {
      text(
        "Cost: " + UpgradeCost[10] + " emerald",
        0.42 * windowWidth,
        0.5 * windowHeight
      );
    } else {
      text(
        "Cost: " + UpgradeCost[10] + " emeralds",
        0.42 * windowWidth,
        0.5 * windowHeight
      );
    }
    text("Emeralds<" + Tier[11] + ">", 0.58 * windowWidth, 0.42 * windowHeight);
    text("+1 emerald per milestone", 0.58 * windowWidth, 0.46 * windowHeight);
    text(
      "Cost: " + UpgradeCost[11] + " emeralds",
      0.58 * windowWidth,
      0.5 * windowHeight
    );
    text("Buildings<" + Tier[0] + ">", 0.18 * windowWidth, 0.54 * windowHeight);
    text("X2 production", 0.18 * windowWidth, 0.58 * windowHeight);
    text(
      "Cost: " + UpgradeCost[0] + " emeralds",
      0.18 * windowWidth,
      0.62 * windowHeight
    );
    text("Streets<" + Tier[1] + ">", 0.34 * windowWidth, 0.54 * windowHeight);
    text("X2 production", 0.34 * windowWidth, 0.58 * windowHeight);
    text(
      "Cost: " + UpgradeCost[1] + " emeralds",
      0.34 * windowWidth,
      0.62 * windowHeight
    );
    if (Level >= 5) {
      text("Villages<" + Tier[2] + ">", 0.5 * windowWidth, 0.54 * windowHeight);
      text("X2 production", 0.5 * windowWidth, 0.58 * windowHeight);
      text(
        "Cost: " + UpgradeCost[2] + " emeralds",
        0.5 * windowWidth,
        0.62 * windowHeight
      );
    } else {
      text("Locked", 0.5 * windowWidth, 0.58 * windowHeight);
    }
    if (Level >= 8) {
      text("Towns<" + Tier[3] + ">", 0.66 * windowWidth, 0.54 * windowHeight);
      text("X2 production", 0.66 * windowWidth, 0.58 * windowHeight);
      text(
        "Cost: " + UpgradeCost[3] + " emeralds",
        0.66 * windowWidth,
        0.62 * windowHeight
      );
    } else {
      text("Locked", 0.66 * windowWidth, 0.58 * windowHeight);
    }
    if (Level >= 12) {
      text("Cities<" + Tier[4] + ">", 0.82 * windowWidth, 0.54 * windowHeight);
      text("X2 production", 0.82 * windowWidth, 0.58 * windowHeight);
      text(
        "Cost: " + UpgradeCost[4] + " emeralds",
        0.82 * windowWidth,
        0.62 * windowHeight
      );
    } else {
      text("Locked", 0.82 * windowWidth, 0.58 * windowHeight);
    }
    if (Level >= 17) {
      text(
        "Countries<" + Tier[5] + ">",
        0.18 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.18 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + UpgradeCost[5] + " emeralds",
        0.18 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.18 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 23) {
      text("Planets<" + Tier[6] + ">", 0.34 * windowWidth, 0.66 * windowHeight);
      text("X2 production", 0.34 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + UpgradeCost[6] + " emeralds",
        0.34 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.34 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 30) {
      text(
        "Solar Systems<" + Tier[7] + ">",
        0.5 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.5 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + UpgradeCost[7] + " emeralds",
        0.5 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.5 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 38) {
      text(
        "Galaxies<" + Tier[8] + ">",
        0.66 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.66 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + UpgradeCost[8] + " emeralds",
        0.66 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.66 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 47) {
      text(
        "Universes<" + Tier[9] + ">",
        0.82 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.82 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + UpgradeCost[9] + " emeralds",
        0.82 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.82 * windowWidth, 0.7 * windowHeight);
    }
  }
  if (Screen == "SES") {
    textSize(0.04 * windowWidth);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    stroke(0);
    text("Shadow Emerald Sacrifices", 0.5 * windowWidth, 0.35 * windowHeight);
    stroke(255);
    fill(14 * max(1, Unlocks-8), 185 / max(1, Unlocks-8), 194 / max(1, Unlocks-8));
    textSize(0.02 * windowWidth);

    rect(
      0.26 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.42 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.58 * windowWidth,
      0.52 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );

    rect(
      0.1 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.26 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.42 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.58 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    rect(
      0.74 * windowWidth,
      0.64 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );

    rect(
      0.34 * windowWidth,
      0.76 * windowHeight,
      0.32 * windowWidth,
      0.12 * windowHeight
    );

    fill(255, 0, 0);
    stroke(0);
    textSize(0.01 * windowWidth);
    text(
      "Warning: Dabbling with the dark arts may have unintended consequences",
      0.5 * windowWidth,
      0.4 * windowHeight
    );
    text(
      "Everything<" + CurseTier[5] + ">",
      0.34 * windowWidth,
      0.54 * windowHeight
    );
    text("X2 production (1 level)", 0.34 * windowWidth, 0.58 * windowHeight);
    text(
      "Cost: " + CurseCost[5] + " shadow emeralds",
      0.34 * windowWidth,
      0.62 * windowHeight
    );
    text("Coins<" + CurseTier[6] + ">", 0.5 * windowWidth, 0.54 * windowHeight);
    text("Halve instant coins cooldown", 0.5 * windowWidth, 0.58 * windowHeight);
    text(
      "Cost: " + CurseCost[6] + " shadow emeralds",
      0.5 * windowWidth,
      0.62 * windowHeight
    );
    text("Emeralds", 0.66 * windowWidth, 0.54 * windowHeight);
    text("Initiate emerald rush", 0.66 * windowWidth, 0.58 * windowHeight);
    text(
      "Cost: " + CurseCost[7] + " shadow emeralds",
      0.66 * windowWidth,
      0.62 * windowHeight
    );
    if (Level >= 61) {
      text(
        "Multiverses<" + CurseTier[0] + ">",
        0.18 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.18 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + CurseCost[0] + " shadow emeralds",
        0.18 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.18 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 72) {
      text(
        "Space-time Continuums<" + CurseTier[1] + ">",
        0.34 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.34 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + CurseCost[1] + " shadow emeralds",
        0.34 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.34 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 84) {
      text(
        "Dimensions<" + CurseTier[2] + ">",
        0.5 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.5 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + CurseCost[2] + " shadow emeralds",
        0.5 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.5 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 97) {
      text(
        "Realities<" + CurseTier[3] + ">",
        0.66 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.66 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + CurseCost[3] + " shadow emeralds",
        0.66 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.66 * windowWidth, 0.7 * windowHeight);
    }
    if (Level >= 111) {
      text(
        "Greater Existences<" + CurseTier[4] + ">",
        0.82 * windowWidth,
        0.66 * windowHeight
      );
      text("X2 production", 0.82 * windowWidth, 0.7 * windowHeight);
      text(
        "Cost: " + CurseCost[4] + " shadow emeralds",
        0.82 * windowWidth,
        0.74 * windowHeight
      );
    } else {
      text("Locked", 0.82 * windowWidth, 0.7 * windowHeight);
    }
    text("Harvest Dark Oil", 0.5 * windowWidth, 0.78 * windowHeight);
    text(
      "Claim " + floor((DarkOil + 1) ** 0.5) + " shadow emeralds",
      0.5 * windowWidth,
      0.82 * windowHeight
    );
    text(
      "Cost: " + Treaty / Coins[1] + Coins[3] + Coins[2] + " coins",
      0.5 * windowWidth,
      0.86 * windowHeight
    );
  }
  if (Screen == "Shatter") {
    textSize(0.04 * windowWidth);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    stroke(0);
    text("Shatter Emeralds", 0.5 * windowWidth, 0.3 * windowHeight);
    stroke(255);
    fill(14 * max(1, Unlocks-8), 185 / max(1, Unlocks-8), 194 / max(1, Unlocks-8));
    textSize(0.02 * windowWidth);
    rect(
      0.42 * windowWidth,
      0.4 * windowHeight,
      0.16 * windowWidth,
      0.12 * windowHeight
    );
    fill(255, 0, 0);
    stroke(0);
    textSize(0.01 * windowWidth);
    text("All Production Everywhere", 0.5 * windowWidth, 0.42 * windowHeight);
    text(
      "+" +
        floor(sqrt(Shatter)) +
        "% >>> +" +
        floor(sqrt(Shatter + ceil(Emeralds * Spend))) +
        "%",
      0.5 * windowWidth,
      0.46 * windowHeight
    );
    text(
      "Cost: " + ceil(Emeralds * Spend) + " emeralds",
      0.5 * windowWidth,
      0.5 * windowHeight
    );
  }
  if (Bar > 0) {
    background(0);
    fill(255, 0, 0);
    stroke(0);
    rect(
      0,
      0.45 * windowHeight,
      (windowWidth * (100 - Bar)) / 100,
      0.1 * windowHeight
    );
    textAlign(CENTER, BASELINE);
    if (Type <= 2) {
      text("Deconstruction", 0.5 * windowWidth, 0.45 * windowHeight);
    } else if (Type <= 4) {
      text(
        "Production temporarily halved",
        0.5 * windowWidth,
        0.45 * windowHeight
      );
    } else if (Type <= 6) {
      text(
        "Prices raised for 1 minute",
        0.5 * windowWidth,
        0.45 * windowHeight
      );
    } else if (Type <= 8) {
      text("Coins robbed", 0.5 * windowWidth, 0.45 * windowHeight);
    } else if (Type <= 10) {
      text("Shadow emeralds fading", 0.5 * windowWidth, 0.45 * windowHeight);
    }
    Bar = Bar - 0.5;
  } else {
    Bar = 0;
    Type = ceil(random(0, 10));
  }
  if (Duration[0] > 0) {
    Duration[0] = Duration[0] - (Date.now() - t) / 1000;
  } else {
    Duration[0] = 0;
  }
  if (Duration[1] > 0) {
    Duration[1] = Duration[1] - (Date.now() - t) / 1000;
    Price = [
      200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200, 100000, 1000000,
      10000000, 100000000, 1000000000, 10000000000,
    ];
  } else {
    Price = [
      20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10000, 100000, 1000000,
      10000000, 100000000, 1000000000,
    ];
    Duration[1] = 0;
  }
  if (Cooldown > 0) {
    Cooldown = Cooldown - (Date.now() - t)*Curse[6] / 1000;
  } else {
    Cooldown = 0;
  }
  if (ECooldown > 0) {
    ECooldown = ECooldown - (Date.now() - t) / 1000;
  } else {
    ECooldown = 0;
  }

  t = Date.now();

  if (Production[Unlocks] >= 1) {
    if ((Unlocks == 0) & (Level >= 2)) {
      Unlocks++;
    } else if (Unlocks == 1 && Level >= 4) {
      Unlocks++;
    } else if (Unlocks == 2 && Level >= 7) {
      Unlocks++;
    } else if (Unlocks == 3 && Level >= 11) {
      Unlocks++;
    } else if (Unlocks == 4 && Level >= 16) {
      Unlocks++;
    } else if (Unlocks == 5 && Level >= 22) {
      Unlocks++;
    } else if (Unlocks == 6 && Level >= 29) {
      Unlocks++;
    } else if (Unlocks == 7 && Level >= 37) {
      Unlocks++;
    } else if (Unlocks == 8 && Level >= 46) {
      Unlocks++;
    } else if (Unlocks == 9 && Level >= 60) {
      Unlocks++;
    } else if (Unlocks == 10 && Level >= 71) {
      Unlocks++;
    } else if (Unlocks == 11 && Level >= 83) {
      Unlocks++;
    } else if (Unlocks == 12 && Level >= 96) {
      Unlocks++;
    } else if (Unlocks == 13 && Level >= 110) {
      Unlocks++;
    }
  }
  if (EventState != 3) {
    if (month() == 2 && day() >= 8 && day() <= 14) {
      Event = 0;
    } else if (month() == 4 && day() <= 7) {
      Event = 1;
    } else if (month() == 6 && day() >= 21 && day() <= 27) {
      Event = 2;
    } else if (month() == 8 && day() <= 7) {
      Event = 3;
    } else if (month() == 10 && day() >= 25) {
      Event = 4;
    } else if (month() == 12 && day() >= 20 && day() <= 26) {
      Event = 5;
    } else {
      if (EventState == 1) {
        Event = 6;
      }
      if (EventState == 2) {
        EventState = 3;
        if (Screen == "Event") {
          Screen = "Main";
        }
      }
    }
  }
  if (People[0] / People[1] >= 1000000) {
    People[1] = People[1] * 1000;
    p = p + 1;
    if (p == 5) {
      pp = 5;
    }
    if (p > 30) {
      p = 5;
      pp = pp + 1;
    }
    People[2] = Units[p];
    People[3] = Units[pp];
  }
  if (People[0] / People[1] < 1000 && p != 0) {
    People[1] = People[1] / 1000;
    p = p - 1;
    if (p == 4) {
      if (pp == 5) {
        pp = 0;
      } else {
        pp = pp - 1;
        p = 30;
      }
    }
    People[2] = Units[p];
    People[3] = Units[pp];
  }
  if (Coins[0] / Coins[1] >= 1000000) {
    Coins[1] = Coins[1] * 1000;
    c = c + 1;
    if (c == 5) {
      cc = 5;
    }
    if (c > 30) {
      c = 5;
      cc = c + 1;
    }
    Coins[2] = Units[c];
    Coins[3] = Units[cc];
  }
  if (Coins[0] / Coins[1] < 1000 && c != 0) {
    Coins[1] = Coins[1] / 1000;
    c = c - 1;
    if (c == 4) {
      if (cc == 5) {
        cc = 0;
      } else {
        cc = cc - 1;
        c = 30;
      }
    }
    Coins[2] = Units[c];
    Coins[3] = Units[cc];
  }
  if (ETokens[0] / ETokens[1] >= 1000000) {
    ETokens[1] = ETokens[1] * 1000;
    ep = ep + 1;
    if (ep == 5) {
      epp = 5;
    }
    if (ep > 30) {
      ep = 5;
      epp = epp + 1;
    }
    ETokens[2] = Units[ep];
    ETokens[3] = Units[epp];
  }
  if (ETokens[0] / ETokens[1] < 1000 && ep != 0) {
    ETokens[1] = ETokens[1] / 1000;
    ep = ep - 1;
    if (ep == 4) {
      if (epp == 5) {
        epp = 0;
      } else {
        epp = epp - 1;
        ep = 30;
      }
    }
    ETokens[2] = Units[ep];
    ETokens[3] = Units[epp];
  }
  if (ECoins[0] / ECoins[1] >= 1000000) {
    ECoins[1] = ECoins[1] * 1000;
    ec = ec + 1;
    if (ec == 5) {
      ecc = 5;
    }
    if (ec > 30) {
      ec = 5;
      ecc = ec + 1;
    }
    ECoins[2] = Units[ec];
    ECoins[3] = Units[ecc];
  }
  if (ECoins[0] / ECoins[1] < 1000 && ec != 0) {
    ECoins[1] = ECoins[1] / 1000;
    ec = ec - 1;
    if (ec == 4) {
      if (ecc == 5) {
        ecc = 0;
      } else {
        ecc = ecc - 1;
        ec = 30;
      }
    }
    ECoins[2] = Units[ec];
    ECoins[3] = Units[ecc];
  }
  if (windowWidth == x && windowHeight == y) {
  } else {
    createCanvas(windowWidth, windowHeight);
  }
  x = windowWidth;
  y = windowHeight;

  if (Savetime < 0) {
    Savetime = 100;
    storeItem("People", People);
    storeItem("Coins", Coins);
    storeItem("Requirement", Requirement);
    storeItem("Req", Req);
    storeItem("Production", Production);
    storeItem("Unlocks", Unlocks);
    storeItem("Level", Level);
    storeItem("Rate", Rate);
    storeItem("UGC", UGC);
    storeItem("Upgrade", Upgrade);
    storeItem("UpgradeCost", UpgradeCost);
    storeItem("Tier", Tier);
    storeItem("Curse", Curse);
    storeItem("CurseCost", CurseCost);
    storeItem("CurseTier", CurseTier);
    storeItem("Emeralds", Emeralds);
    storeItem("Shatter", Shatter);
    storeItem("Cooldown", Cooldown);
    storeItem("ShadowEmeralds", ShadowEmeralds);
    storeItem("CurseRate", CurseRate);
    storeItem("Treaty", Treaty);
    storeItem("Event", Event);
    storeItem("EventState", EventState);
    storeItem("ELevel", ELevel);
    storeItem("EPrice", EPrice);
    storeItem("ETokens", ETokens);
    storeItem("ERequirement", ERequirement);
    storeItem("ECoins", ECoins);
    storeItem("ERate", ERate);
    storeItem("EUGC", EUGC);
    storeItem("ECooldown", ECooldown);
    storeItem("EProduction", EProduction);
    storeItem("EReq", EReq);
    storeItem("EMulti", EMulti);
    storeItem("Reward", Reward);
    storeItem("Timer", Timer);
    storeItem("Type", Type);
    storeItem("Duration", Duration);
    storeItem("t", t);
    storeItem("p", p);
    storeItem("pp", pp);
    storeItem("c", c);
    storeItem("cc", cc);
    storeItem("ep", ep);
    storeItem("epp", epp);
    storeItem("ec", ec);
    storeItem("ecc", ecc);
    storeItem("v", v);
    storeItem("DarkOil", DarkOil);
  }
}

function mouseClicked() {
  if (
    mouseX > 0.8 * windowWidth &&
    mouseX < 0.9 * windowWidth &&
    mouseY > 0.025 * windowHeight &&
    mouseY < 0.075 * windowHeight
  ) {
    Spend = ceil((1000 * (mouseX - 0.8 * windowWidth)) / windowWidth) / 100;
  }
  if (
    mouseX > 0.015 * windowWidth &&
    mouseX < 0.075 * windowWidth &&
    mouseY < 0.05 * windowHeight
  ) {
    Savetime = 1;
    if (v == 5) {
      v = 1;
    } else {
      v = 5;
    }
  }
  if (Screen == "Main") {
    if (mouseY > 0.25 * windowHeight && mouseY <= 0.3 * windowHeight) {
      i = 0;
      Multiplier = min(
        Math.ceil(Coins[0] * Spend),
        ceil(Spend * floor(People[0] / Price[i]))
      );
      if (Price[i] <= People[0] && Unlocks >= i) {
        Production[i] = Production[i] + Multiplier;
        Coins[0] = Coins[0] - Multiplier;
        People[0] = People[0] - Multiplier * Price[i];
      }
    }
    if (mouseY > 0.3 * windowHeight) {
      i = Math.floor((mouseY / windowHeight - 0.25) * 20);
      Multiplier = min(
        Math.ceil(Coins[0] * Spend),
        ceil(Spend * floor(Production[i - 1] / Price[i]))
      );
      if (Price[i] <= Production[i - 1] && Unlocks >= i) {
        Production[i] = Production[i] + Multiplier;
        Coins[0] = Coins[0] - Multiplier;
        Production[i - 1] = Production[i - 1] - Multiplier * Price[i];
      }
    }
    if (Timer < 0 && mouseY > 0.25 * windowHeight && Screen == "Main") {
      Timer = 10000;
      Bar = 100;
      Savetime = 0;
      if (Type <= 2 && Unlocks >= 2) {
        Production[Unlocks] = 0;
        Production[Unlocks - 1] = 0;
      } else if (Type <= 4) {
        Duration[0] = 240;
      } else if (Type <= 6) {
        Duration[1] = 60;
      } else if (Type <= 8) {
        Coins[0] = 0.25 * Coins[0];
      } else if (Type <= 10) {
        ShadowEmeralds = floor(ShadowEmeralds * 0.75);
      }
    }
  }
  if (Screen == "Event") {
    if (mouseY > 0.25 * windowHeight && mouseY <= 0.3 * windowHeight) {
      i = 0;
      Multiplier = min(
        Math.ceil(ECoins[0] * Spend),
        ceil(Spend * floor(ETokens[0] / EPrice[i]))
      );
      if (EPrice[i] <= ETokens[0] && ELevel > i) {
        EProduction[i] = EProduction[i] + Multiplier;
        ECoins[0] = ECoins[0] - Multiplier;
        ETokens[0] = ETokens[0] - Multiplier * EPrice[i];
      }
    }
    if (mouseY > 0.3 * windowHeight) {
      i = Math.floor((mouseY / windowHeight - 0.25) * 20);
      Multiplier = min(
        Math.ceil(ECoins[0] * Spend),
        ceil(Spend * floor(EProduction[i - 1] / EPrice[i]))
      );
      if (EPrice[i] <= EProduction[i - 1] && ELevel > i) {
        EProduction[i] = EProduction[i] + Multiplier;
        ECoins[0] = ECoins[0] - Multiplier;
        EProduction[i - 1] = EProduction[i - 1] - Multiplier * EPrice[i];
      }
    }
  }
  if (Screen == "ES") {
    i = false;
    if (mouseY > 0.4 * windowHeight && mouseY <= 0.52 * windowHeight) {
      if (
        mouseX > 0.34 * windowWidth &&
        mouseX < 0.5 * windowWidth &&
        Emeralds >= UpgradeCost[10]
      ) {
        Upgrade[10] = Upgrade[10] * 10;
        UGC = UGC / 10;
        Emeralds = Emeralds - UpgradeCost[10];
        UpgradeCost[10] = UpgradeCost[10] * 2;
        Tier[10] = Tier[10] + 1;
      }
      if (
        mouseX > 0.5 * windowWidth &&
        mouseX < 0.66 * windowWidth &&
        Emeralds >= UpgradeCost[11]
      ) {
        Upgrade[11] = Upgrade[11] + 1;
        Emeralds = Emeralds - UpgradeCost[11];
        UpgradeCost[11] = UpgradeCost[11] * 5;
        Tier[11] = Tier[11] + 1;
      }
    }
    if (mouseY > 0.52 * windowHeight && mouseY <= 0.64 * windowHeight) {
      if (mouseX > 0.1 * windowWidth && mouseX < 0.26 * windowWidth) {
        i = 0;
      }
      if (mouseX > 0.26 * windowWidth && mouseX < 0.42 * windowWidth) {
        i = 1;
      }
      if (
        mouseX > 0.42 * windowWidth &&
        mouseX < 0.58 * windowWidth &&
        Level >= 5
      ) {
        i = 2;
      }
      if (
        mouseX > 0.58 * windowWidth &&
        mouseX < 0.74 * windowWidth &&
        Level >= 8
      ) {
        i = 3;
      }
      if (
        mouseX > 0.74 * windowWidth &&
        mouseX < 0.9 * windowWidth &&
        Level >= 12
      ) {
        i = 4;
      }
      if (Emeralds >= UpgradeCost[i]) {
        Upgrade[i] = Upgrade[i] * 2;
        Emeralds = Emeralds - UpgradeCost[i];
        UpgradeCost[i] = UpgradeCost[i] * 3;
        Tier[i] = Tier[i] + 1;
      }
    }
    if (mouseY > 0.64 * windowHeight && mouseY <= 0.76 * windowHeight) {
      if (
        mouseX > 0.1 * windowWidth &&
        mouseX < 0.26 * windowWidth &&
        Level >= 17
      ) {
        i = 5;
      }
      if (
        mouseX > 0.26 * windowWidth &&
        mouseX < 0.42 * windowWidth &&
        Level >= 23
      ) {
        i = 6;
      }
      if (
        mouseX > 0.42 * windowWidth &&
        mouseX < 0.58 * windowWidth &&
        Level >= 30
      ) {
        i = 7;
      }
      if (
        mouseX > 0.58 * windowWidth &&
        mouseX < 0.74 * windowWidth &&
        Level >= 38
      ) {
        i = 8;
      }
      if (
        mouseX > 0.74 * windowWidth &&
        mouseX < 0.9 * windowWidth &&
        Level >= 47
      ) {
        i = 9;
      }
      if (Emeralds >= UpgradeCost[i]) {
        Upgrade[i] = Upgrade[i] * 2;
        Emeralds = Emeralds - UpgradeCost[i];
        UpgradeCost[i] = UpgradeCost[i] * 3;
        Tier[i] = Tier[i] + 1;
      }
    }
  }
  if (Screen == "SES") {
    i = false;
    if (mouseY > 0.52 * windowHeight && mouseY <= 0.64 * windowHeight) {
      if (mouseX > 0.26 * windowWidth && mouseX < 0.42 * windowWidth) {
        if (ShadowEmeralds >= CurseCost[5]) {
          Curse[5] = Curse[5] * 2;
          ShadowEmeralds = ShadowEmeralds - CurseCost[5];
          CurseCost[5] = CurseCost[5] * 5;
          CurseTier[5] = CurseTier[5] + 1;
        }
      }
      if (mouseX > 0.42 * windowWidth && mouseX < 0.58 * windowWidth) {
        if (ShadowEmeralds >= CurseCost[6]) {
          ShadowEmeralds = ShadowEmeralds - CurseCost[6];
          CurseCost[6] = CurseCost[6] * 4;
          Curse[6] = Curse[6] * 2;
          CurseTier[6] = CurseTier[6] + 1;
        }
      }
      if (mouseX > 0.58 * windowWidth && mouseX < 0.74 * windowWidth) {
        if (ShadowEmeralds >= CurseCost[7]) {
          ShadowEmeralds = ShadowEmeralds - CurseCost[7];
          Screen = "Main";
          Req = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
          CurseCost[7] = CurseCost[7] * 10;
        }
      }
    }
    if (mouseY > 0.64 * windowHeight && mouseY <= 0.76 * windowHeight) {
      if (
        mouseX > 0.1 * windowWidth &&
        mouseX < 0.26 * windowWidth &&
        Level >= 61
      ) {
        i = 0;
      }
      if (
        mouseX > 0.26 * windowWidth &&
        mouseX < 0.42 * windowWidth &&
        Level >= 72
      ) {
        i = 1;
      }
      if (
        mouseX > 0.42 * windowWidth &&
        mouseX < 0.58 * windowWidth &&
        Level >= 84
      ) {
        i = 2;
      }
      if (
        mouseX > 0.58 * windowWidth &&
        mouseX < 0.74 * windowWidth &&
        Level >= 97
      ) {
        i = 3;
      }
      if (
        mouseX > 0.74 * windowWidth &&
        mouseX < 0.9 * windowWidth &&
        Level >= 111
      ) {
        i = 4;
      }
      if (ShadowEmeralds >= CurseCost[i]) {
        Curse[i] = Curse[i] * 2;
        ShadowEmeralds = ShadowEmeralds - CurseCost[i];
        CurseCost[i] = CurseCost[i] * 2;
        CurseTier[i] = CurseTier[i] + 1;
      }
    }
    if (
      mouseY > 0.76 * windowHeight &&
      mouseY <= 0.88 * windowHeight &&
      mouseX > 0.34 * windowWidth &&
      mouseX < 0.64 * windowWidth &&
      Coins[0] >= Treaty
    ) {
      Coins[0] = Coins[0] - Treaty;
      Treaty = Treaty * 100;
      ShadowEmeralds += floor((DarkOil + 1) ** 0.5);
      DarkOil = 0;
    }
  }
  if (Screen == "Shatter") {
    if (
      mouseX > 0.42 * windowWidth &&
      mouseX < 0.58 * windowWidth &&
      mouseY > 0.4 * windowHeight &&
      mouseY < 0.52 * windowHeight
    ) {
      Shatter = Shatter + ceil(Emeralds * Spend);
      Emeralds = Emeralds - ceil(Emeralds * Spend);
    }
  }
  if (mouseY > 0.1 * windowHeight && mouseY <= 0.175 * windowHeight) {
    if (mouseX > 0.675 * windowWidth && mouseX <= 0.75 * windowWidth) {
      if (People[0] >= Requirement && Screen != "Event" && Level < 120) {
        Level = Level + 1;
        Requirement = Requirement * (5 + 0.1 * Level);
        Emeralds = Emeralds + Level * 2;
        if (Level == 3) {
          Emeralds = 0;
        }
        People = [0, 1, "", ""];
        Coins = [0, 1, "", ""];
        Unlocks = 0;
        Rate = 1;
        UGC = 250 / Upgrade[10];
        CurseRate = 0;
        Treaty = 10;
        DarkOil = 0;
        Timer = 10000;
        Type = ceil(random(0, 10));
        Duration = [0, 0];
        Production = [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Req = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
        CurseCost[7] = 10;
        p = 0;
        pp = 0;
        c = 0;
        cc = 0;
        Savetime = 0;
      }
    }
    if (mouseX > 0.75 * windowWidth && mouseX <= 0.825 * windowWidth) {
      if (Screen != "Event") {
        if (Level >= 3 && Screen != "ES") {
          Screen = "ES";
        } else {
          Screen = "Main";
        }
      }
      if (ETokens[0] >= ERequirement && Screen == "Event" && ELevel < 7) {
        ETokens[0] = ETokens[0] - ERequirement;
        ELevel = ELevel + 1;
        ERequirement = ERequirement * ERequirement;
        Reward = Reward * 3 + Level;
      }
    }
    if (mouseX > 0.825 * windowWidth && mouseX <= 0.9 * windowWidth) {
      if (Screen != "Event") {
        if (Level >= 45 && Screen != "SES") {
          Screen = "SES";
        } else if (Screen == "SES") {
          Screen = "Main";
        }
      }
    }
  }
  if (mouseY > 0.175 * windowHeight && mouseY <= 0.25 * windowHeight) {
    if (mouseX > 0.675 * windowWidth && mouseX <= 0.75 * windowWidth) {
      if (People[0] >= UGC && Level >= 2 && Screen != "Event") {
        Rate = Rate * 1.2;
        People[0] = People[0] - UGC;
        for(i = 1; i < Rate; i=i*40){
          UGC = UGC * 10;
        }
      }
    }

    if (
      mouseX > 0.75 * windowWidth &&
      mouseX <= 0.825 * windowWidth &&
      Level >= 10
    ) {
      if (Screen == "Shatter") {
        Screen = "Main";
      } else if (Screen != "Event") {
        Screen = "Shatter";
      }
      if (ETokens[0] >= EUGC && Screen == "Event") {
        ERate = ERate * 1.2;
        ETokens[0] = ETokens[0] - EUGC;
        //for(i = 1; i < ERate; i=i*10){
        EUGC = EUGC * 10;
        //}
      }
    }
    if (mouseX > 0.825 * windowWidth && mouseX <= 0.9 * windowWidth) {
      if (Cooldown == 0 && Screen != "Event" && Level >= 5) {
        Coins[0] = Coins[0] + Rate * 3600;
        Cooldown = 86400;
      }
      if (ECooldown == 0 && Screen == "Event") {
        ECoins[0] = ECoins[0] + ERate * 3600;
        ECooldown = 14400;
      }
    }
  }
  if (
    mouseX > 0.9 * windowWidth &&
    mouseY > 0.1 * windowHeight &&
    mouseY < 0.25 * windowHeight &&
    Event != 6 &&
    Level >= 20
  ) {
    if (Screen != "Event") {
      if (EventState == 1) {
        Screen = "Event";
        ERate = 1;
        EventState = 2;
        ECooldown = 14400;
      } else if (EventState == 2) {
        Screen = "Event";
      } else if (EventState == 3) {
        Emeralds = Emeralds + Reward;
        Reward = 1;
        EventState = 1;
        Event = 6;
        ELevel = 1;
        EPrice = [20, 100, 1000, 10000, 100000, 1000000];
        ETokens = [60, 1, "", ""];
        ERequirement = 10000;
        ECoins = [0, 1, "", ""];
        ERate = 0;
        EUGC = 250;
        EProduction = [0, 0, 0, 0, 0, 0];
        EReq = [9, 9, 9, 9, 9, 9];
        EMulti = [1, 1, 1, 1, 1, 1];
        ep = 0;
        epp = 0;
        ec = 0;
        ecc = 0;
      }
    } else if (Screen == "Event") {
      Screen = "Main";
    }
  }
  i = 0;
}
