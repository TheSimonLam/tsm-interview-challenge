let masteries = [
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Ingenious Hunter",
        "id": 8134,
        "key": "IngeniousHunter",
        "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent Active Item <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>CDR</lol-uikit-tooltipped-keyword> (includes Trinkets).",
        "longDesc": "Gain 10% <b>Active Item CDR</b> plus an additional 6% per <i>Bounty Hunter</i> stack (includes Trinkets).<br><br>Earn a <i>Bounty Hunter</i> stack the first time you get a takedown on each enemy champion.",
        "icon": "perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Last Stand",
        "id": 8299,
        "key": "LastStand",
        "shortDesc": "Deal more damage to champions while you are low on health.",
        "longDesc": "Deal 5% - 11% increased damage to champions while you are below 60% health. Max damage gained at 30% health.",
        "icon": "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Revitalize",
        "id": 8453,
        "key": "Revitalize",
        "shortDesc": "Heals and shields you cast or receive are 5% stronger and increased by an additional 10% on low health targets.",
        "longDesc": "Heals and shields you cast or receive are 5% stronger and increased by an additional 10% on targets below 40% health.",
        "icon": "perk-images/Styles/Resolve/Revitalize/Revitalize.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Ravenous Hunter",
        "id": 8135,
        "key": "RavenousHunter",
        "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent healing from ability damage. ",
        "longDesc": "Heal for a percentage of the damage dealt by your abilities.<br>Healing: 2.5% + 2.5% per <i>Bounty Hunter</i> stack. <br><br>Earn a <i>Bounty Hunter</i> stack the first time you get a takedown on each enemy champion.<br><rules><br>Healing reduced to one third for Area of Effect abilities.</rules><br>",
        "icon": "perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Approach Velocity",
        "id": 8410,
        "key": "ApproachVelocity",
        "shortDesc": "Bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> towards nearby ally champions that are <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>movement impaired</lol-uikit-tooltipped-keyword> or enemy champions that you impair.",
        "longDesc": "Gain 15% Movement Speed towards nearby ally champions that are movement impaired or enemy champions that you impair. <br><br>Range: 1000",
        "icon": "perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Legend: Bloodline",
        "id": 9103,
        "key": "LegendBloodline",
        "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent<b> Lifesteal</b>. ",
        "longDesc": "Gain 0.8% life steal for every <i>Legend</i> stack (max 10 stacks).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
        "icon": "perk-images/Styles/Precision/Legend_Infamy.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Coup de Grace",
        "id": 8014,
        "key": "CoupDeGrace",
        "shortDesc": "Deal more damage to low health enemy champions.",
        "longDesc": "Deal 7% more damage to champions who have less than 40% health.<br><br>Additionally, takedowns on champions grant an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 9 Attack Damage or 15 Ability Power for 10s.",
        "icon": "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Overgrowth",
        "id": 8451,
        "key": "Overgrowth",
        "shortDesc": "Gain additional permanent max health when minions or monsters die near you.",
        "longDesc": "Permanently gain 0.2% maximum health for every 8 monsters or enemy minions that die near you.",
        "icon": "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Overheal",
        "id": 9101,
        "key": "Overheal",
        "shortDesc": "Excess healing on you becomes a shield.",
        "longDesc": "Excess healing on you becomes a shield, for up to 10% of your total health + 10.<br><br>Shield is built up from 40% of excess self-healing, or 300% of excess healing from allies.",
        "icon": "perk-images/Styles/Precision/Overheal.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Transcendence",
        "id": 8210,
        "key": "Transcendence",
        "shortDesc": "Gain 10% <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>CDR</lol-uikit-tooltipped-keyword> when you reach level 10. Excess CDR becomes AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword>.",
        "longDesc": "Gain 10% CDR when you reach level 10.<br><br>Each percent of CDR exceeding the CDR limit is converted to an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power.",
        "icon": "perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Eyeball Collection",
        "id": 8138,
        "key": "EyeballCollection",
        "shortDesc": "Collect eyeballs for champion and ward <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword>. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> for each eyeball plus bonus upon collection completion.",
        "longDesc": "Collect eyeballs for champion and ward takedowns. Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 0.6 Attack Damage or 1 Ability Power, per eyeball collected. <br><br>Upon completing your collection at 20 eyeballs, additionally gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage, or 10 Ability Power.<br><br>Collect 2 eyeballs per champion kill, 1 per assist, and 1 per ward takedown.",
        "icon": "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Cut Down",
        "id": 8017,
        "key": "CutDown",
        "shortDesc": "Deal more damage to champions with more max health than you.",
        "longDesc": "Deal 4% more damage to champions with 150 more max health than you, increasing to 12% at 2000 more max health.",
        "icon": "perk-images/Styles/Precision/CutDown/CutDown.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Taste of Blood",
        "id": 8139,
        "key": "TasteOfBlood",
        "shortDesc": "Heal when you damage an enemy champion.",
        "longDesc": "Heal when you damage an enemy champion.<br><br>Healing: 18-35 (+0.2 bonus AD, +0.1 AP) health (based on level)<br><br>Cooldown: 20s",
        "icon": "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Zombie Ward",
        "id": 8136,
        "key": "ZombieWard",
        "shortDesc": "After killing a ward, a friendly Zombie Ward is raised in its place. When your wards expire, they also reanimate as Zombie Wards.",
        "longDesc": "After killing a ward, a friendly Zombie Ward is raised in its place. Additionally, when your wards expire, they reanimate as Zombie Wards.<br><br>Zombie Wards are visible, last for 30 - 120s and don't count towards your ward limit.",
        "icon": "perk-images/Styles/Domination/ZombieWard/ZombieWard.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Legend: Alacrity",
        "id": 9104,
        "key": "LegendAlacrity",
        "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Attack Speed</b>. ",
        "longDesc": "Gain 3% attack speed plus an additional 1.5% for every <i>Legend</i> stack (max 10 stacks).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
        "icon": "perk-images/Styles/Precision/Legend_Heroism.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Legend: Tenacity",
        "id": 9105,
        "key": "LegendTenacity",
        "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Tenacity</b>. ",
        "longDesc": "Gain 5% tenacity plus an additional 2.5% for every <i>Legend</i> stack (max 10 stacks).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
        "icon": "perk-images/Styles/Precision/Legend_Tenacity.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Summon Aery",
        "id": 8214,
        "key": "SummonAery",
        "shortDesc": "Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.",
        "longDesc": "Your attacks and abilities send Aery to a target, damaging enemy champions or shielding allies.<br><br>Damage: 15 - 40 based on level (+<scaleAP>0.1 AP</scaleAP> and +<scaleAD>0.15 bonus AD</scaleAD>)<br>Shield: 30 - 80 based on level (+<scaleAP>0.25 AP</scaleAP> and +<scaleAD>0.4 bonus AD</scaleAD>) <br><br>Aery cannot be sent out again until she returns to you.",
        "icon": "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Conqueror",
        "id": 8010,
        "key": "Conqueror",
        "shortDesc": "After 4 seconds in combat, your first attack against an enemy champion grants you AD and converts some of your damage to true damage.",
        "longDesc": "After 4 seconds in combat, your first attack against an enemy champion grants you 10 - 35 AD, based on level, for 3 seconds and converts 20% of your damage to champions to true damage.<br><br><rules>Melee Only: Damaging enemy champions refreshes this buff.</rules>",
        "icon": "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Lethal Tempo",
        "id": 8008,
        "key": "LethalTempo",
        "shortDesc": "1.5s after damaging a champion gain a large amount of Attack Speed. Lethal Tempo allows you to temporarily exceed the attack speed limit.",
        "longDesc": "1.5s after damaging a champion gain 40 - 110% Attack Speed (based on level) for 3s. Attacking a champion extends the effect to 6s.<br><br>Cooldown: 6s<br><br>Lethal Tempo allows you to temporarily exceed the attack speed limit.",
        "icon": "perk-images/Styles/Precision/FlowofBattle/FlowofBattleTemp.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Presence of Mind",
        "id": 8009,
        "key": "PresenceOfMind",
        "shortDesc": "Takedowns restore 20% of your maximum mana and refund 10% of your ultimate's cooldown.",
        "longDesc": "Takedowns restore 20% of your maximum mana and refund 10% of your ultimate's cooldown.",
        "icon": "perk-images/Styles/Precision/LastResort/LastResortIcon.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Guardian",
        "id": 8465,
        "key": "Guardian",
        "shortDesc": "Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage, you're both hasted and granted a shield.",
        "longDesc": "<i>Guard</i> allies within 175 units of you, and allies you target with spells for 2.5s. While <i>Guarding</i>, if you or the ally take damage, both of you gain a shield and are hasted for 1.5s.<br><br>Cooldown: <scaleLevel>70 - 40</scaleLevel> seconds<br>Shield: <scaleLevel>70 - 150</scaleLevel> + <scaleAP>0.25%</scaleAP> of your ability power + <scalehealth>12%</scalehealth> of your bonus health.<br>Haste: +20% Movement Speed.",
        "icon": "perk-images/Styles/Resolve/Guardian/Guardian.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Sudden Impact",
        "id": 8143,
        "key": "SuddenImpact",
        "shortDesc": "Gain a burst of Lethality and Magic Penetration after using a dash, leap, blink, teleport, or when leaving stealth.",
        "longDesc": "After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you 10 Lethality and 8 Magic Penetration for 5s.<br><br>Cooldown: 4s",
        "icon": "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Triumph",
        "id": 9111,
        "key": "Triumph",
        "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> restore 12% of your missing health and grant an additional 20 gold. ",
        "longDesc": "Takedowns restore 12% of your missing health and grant an additional 20 gold. <br><br><hr></hr><br><i>'The most dangerous game brings the greatest glory.' <br>—Noxian Reckoner</i>",
        "icon": "perk-images/Styles/Precision/DangerousGame.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Font of Life",
        "id": 8463,
        "key": "FontOfLife",
        "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>Impairing</lol-uikit-tooltipped-keyword> the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked. ",
        "longDesc": "Impairing the movement of an enemy champion marks them for 4s.<br><br>Ally champions who attack marked enemies heal for 5 + 1% of your max health over 2s. ",
        "icon": "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Relentless Hunter",
        "id": 8105,
        "key": "RelentlessHunter",
        "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent <b>out of combat <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword></b>. ",
        "longDesc": "Gain 8 <b>out of combat Movement Speed</b> plus 8 per <i>Bounty Hunter</i> stack.<br><br>Earn a <i>Bounty Hunter</i> stack the first time you get a takedown on each enemy champion.",
        "icon": "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Cosmic Insight",
        "id": 8347,
        "key": "CosmicInsight",
        "shortDesc": "+5% <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>CDR</lol-uikit-tooltipped-keyword><br>+5% Max CDR<br>+5% Summoner Spell CDR<br>+5% Item CDR",
        "longDesc": "+5% CDR<br>+5% Max CDR<br>+5% Summoner Spell CDR<br>+5% Item CDR",
        "icon": "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Manaflow Band",
        "id": 8226,
        "key": "ManaflowBand",
        "shortDesc": "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.",
        "longDesc": "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.<br><br>Cooldown: 15 seconds",
        "icon": "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Magical Footwear",
        "id": 8304,
        "key": "MagicalFootwear",
        "shortDesc": "You get free boots at 10 min but you cannot buy boots before then. Each <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedown</lol-uikit-tooltipped-keyword> you get makes your boots come 30s sooner.",
        "longDesc": "You get free Slightly Magical Boots at 10 min, but you cannot buy boots before then. For each takedown you acquire the boots 30s sooner.<br><br>Slightly Magical Boots give you an additional +10 Movement Speed.",
        "icon": "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Biscuit Delivery",
        "id": 8345,
        "key": "BiscuitDelivery",
        "shortDesc": "Gain a free Biscuit every 3 min, until 12 min. Consuming a Biscuit permanently increases your max mana and restores health and mana.",
        "longDesc": "Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 3 mins, until 12 min.<br><br>Biscuits restore 15% of your missing health and mana. Consuming any Biscuit increases your mana cap by 40 mana permanently. <br><br><i>Manaless:</i> Champions without mana restore 20% missing health instead.",
        "icon": "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Nullifying Orb",
        "id": 8224,
        "key": "NullifyingOrb",
        "shortDesc": "Gain a magic damage shield when taken to low health by magic damage.",
        "longDesc": "When you take magic damage that would reduce your Health below 30%, gain a shield that absorbs 40 - 120 magic damage based on level (<scaleAP>+0.1 AP</scaleAP> and <scaleAD>+0.15 bonus AD</scaleAD>) for 4s.<br><br>Cooldown: 60s",
        "icon": "perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Fleet Footwork",
        "id": 8021,
        "key": "FleetFootwork",
        "shortDesc": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>.",
        "longDesc": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized.<br><br>Energized attacks heal you for 3 - 60 (+0.3 Bonus AD, +0.4 AP) and grant +30% movement speed for 1s.<br><rules>Healing is 60% as effective when used on a minion (30% effective for ranged).<br>Healing is increased by 40% of your critical damage modifier when triggered by a critical hit.</rules>",
        "icon": "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Electrocute",
        "id": 8112,
        "key": "Electrocute",
        "shortDesc": "Hitting a champion with 3 <b>separate</b> attacks or abilities in 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.",
        "longDesc": "Hitting a champion with 3 <b>separate</b> attacks or abilities within 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br>Damage: 50 - 220 (+0.5 bonus AD, +0.3 AP) damage.<br><br>Cooldown: 50 - 25s<br><br><hr></hr><i>'We called them the Thunderlords, for to speak of their lightning was to invite disaster.'</i>",
        "icon": "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Absolute Focus",
        "id": 8233,
        "key": "AbsoluteFocus",
        "shortDesc": "While above 70% health, gain extra <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.",
        "longDesc": "While above 70% health, gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 24 Attack Damage or 40 Ability Power (based on level). <br><br>Grants 3 Attack Damage or 5 Ability Power at level 1. ",
        "icon": "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Celerity",
        "id": 8234,
        "key": "Celerity",
        "shortDesc": "Gain 3% extra <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>. Gain extra AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> based on your bonus MS. ",
        "longDesc": "Gain 3% increased Movement Speed.<br>Your Bonus Movement Speed is converted to Attack Damage or Ability Power, <font color='#48C4B7'>adaptive</font> at a rate of 4.8% Attack Damage or 8% Ability Power.",
        "icon": "perk-images/Styles/Sorcery/Celerity/CelerityTemp.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Time Warp Tonic",
        "id": 8352,
        "key": "TimeWarpTonic",
        "shortDesc": "Your potions, biscuits and elixirs last 20% longer, and you gain 5% Movement Speed while under their effects.",
        "longDesc": "Your potions, biscuits and elixirs last 20% longer, and you gain 5% Movement Speed while under their effects.",
        "icon": "perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Bone Plating",
        "id": 8473,
        "key": "BonePlating",
        "shortDesc": "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 20-50 less damage.<br><br>Duration: 3s<br>Cooldown: 45s",
        "longDesc": "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 20-50 less damage.<br><br>Duration: 3s<br>Cooldown: 45s",
        "icon": "perk-images/Styles/Resolve/BonePlating/BonePlating.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Waterwalking",
        "id": 8232,
        "key": "Waterwalking",
        "shortDesc": "Gain <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> and AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> in the river.",
        "longDesc": "Gain 25 Movement Speed and an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level) when in the river.<br><br><hr></hr><br><i>May you be as swift as the rushing river and agile as a startled Rift Scuttler.</i><br>",
        "icon": "perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Scorch",
        "id": 8237,
        "key": "Scorch",
        "shortDesc": "Your first ability hit every 20s burns champions.",
        "longDesc": "Your next ability hit sets champions on fire dealing 20 - 60 bonus magic damage based on level after 1s.<br><br>Cooldown: 20s",
        "icon": "perk-images/Styles/Sorcery/Scorch/Scorch.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Kleptomancy",
        "id": 8359,
        "key": "Kleptomancy",
        "shortDesc": "After using an ability, your next attack will grant bonus gold if used on a champion. There's a chance you'll also gain a consumable.",
        "longDesc": "After using an ability, your next attack will grant bonus gold if used on a champion. There's a chance you'll also gain a consumable.",
        "icon": "perk-images/Styles/Inspiration/Kleptomancy/Kleptomancy.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Perfect Timing",
        "id": 8313,
        "key": "PerfectTiming",
        "shortDesc": "Gain a free Stopwatch. Stopwatch has a one time use <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Stasis'>Stasis</lol-uikit-tooltipped-keyword> effect.",
        "longDesc": "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 10 min. Stopwatch has a one time use Stasis effect.<br><br>Reduces the cooldown of Zhonya's Hourglass, Guardian Angel, and Gargoyle Stoneplate by 15%.",
        "icon": "perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Gathering Storm",
        "id": 8236,
        "key": "GatheringStorm",
        "shortDesc": "Gain increasing amounts of AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> over the course of the game.",
        "longDesc": "Every 10 min gain AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword>.<br><br><i>10 min</i>: + 8 AP or 5 AD <br><i>20 min</i>: + 24 AP or 14 AD<br><i>30 min</i>: + 48 AP or 29 AD<br><i>40 min</i>: + 80 AP or 48 AD<br><i>50 min</i>: + 120 AP or 72 AD<br><i>60 min</i>: + 168 AP or 101 AD<br>etc...",
        "icon": "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Glacial Augment",
        "id": 8351,
        "key": "GlacialAugment",
        "shortDesc": "Your first attack against an enemy champion slows them (per unit cooldown). Slowing champions with active items shoots a freeze ray at them, creating a lingering slow zone.",
        "longDesc": "Basic attacking a champion slows them for 2s. The slow increases in strength over its duration.<li><i>Ranged</i>: Ranged attacks slow by up to 30% - 40%</li> <li><i>Melee</i>: Melee attacks slow by up to 45% - 55%</li><br>Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 60%.<br><br>Cooldown: 7-4s per unit",
        "icon": "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Chrysalis",
        "id": 8472,
        "key": "Chrysalis",
        "shortDesc": "Start the game with an extra 60 health. At 4 takedowns, consume that health to gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 9 Attack Damage or 15 Ability Power.",
        "longDesc": "Start the game with an extra 60 health. At 4 takedowns, consume that health to gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 9 Attack Damage or 15 Ability Power.",
        "icon": "perk-images/Styles/Resolve/Chrysalis/Chrysalis.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Phase Rush",
        "id": 8230,
        "key": "PhaseRush",
        "shortDesc": "Hitting an enemy champion with 3 <b>separate</b> attacks or abilities grants a burst of <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>. ",
        "longDesc": "Hitting an enemy champion with 3 attacks or <b>separate</b> abilities within 3s grants 15 - 40% Movement Speed based on level and 75% Slow Resistance.<br><br>Duration: 3s<br>Cooldown: 15s",
        "icon": "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Conditioning",
        "id": 8429,
        "key": "Conditioning",
        "shortDesc": "After 10 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 5%.",
        "longDesc": "After 10 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 5%.",
        "icon": "perk-images/Styles/Resolve/Conditioning/Conditioning.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Hextech Flashtraption",
        "id": 8306,
        "key": "HextechFlashtraption",
        "shortDesc": "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel, then blink to a new location.",
        "longDesc": "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel for 2s to blink to a new location.<br><br>Cooldown: 20s. Goes on a 10s cooldown when you enter champion combat.",
        "icon": "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "Arcane Comet",
        "id": 8229,
        "key": "ArcaneComet",
        "shortDesc": "Damaging a champion with an ability hurls a damaging comet at their location.",
        "longDesc": "Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.<br><br><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>Adaptive Damage</font></lol-uikit-tooltipped-keyword>: 30 - 100 based on level (<scaleAP>+0.2 AP</scaleAP> and <scaleAD>+0.35 bonus AD</scaleAD>)<br>Cooldown: 20 - 8s<br><rules><br>Cooldown Reduction:<br>Single Target: 20%.<br>Area of Effect: 10%.<br>Damage over Time: 5%.<br></rules>",
        "icon": "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Future's Market",
        "id": 8321,
        "key": "FuturesMarket",
        "shortDesc": "You can enter debt to buy items.",
        "longDesc": "You can enter debt to buy items. The amount you can borrow increases over time.<br><br>Lending Fee: 50 gold",
        "icon": "perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Predator",
        "id": 8124,
        "key": "Predator",
        "shortDesc": "Add an active effect to your boots that grants a large boost of <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> and causes your next attack or ability to deal bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.",
        "longDesc": "Enchants your boots with the active effect '<font color='#c60300'>Predator</font>.'<br><br>Channel for 1.5s out of combat to gain 45% movement speed for 15s. Damaging attacks or abilities end this effect, dealing 60 - 180 (+<scaleAD>0.4</scaleAD> bonus AD)(+<scaleAP>0.25</scaleAP> AP) bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br>Cooldown: 150s - 100s. Starts the game on cooldown. 50% cooldown if interrupted while channeling.",
        "icon": "perk-images/Styles/Domination/Predator/Predator.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Unflinching",
        "id": 8242,
        "key": "Unflinching",
        "shortDesc": "After casting a Summoner Spell, gain Tenacity and Slow Resistance for a short duration. Additionally, gain Tenacity and Slow Resistance for each Summoner Spell on cooldown. ",
        "longDesc": "After casting a Summoner Spell, gain 15% Tenacity and Slow Resistance for 10s. Additionally, gain 10% Tenacity and Slow Resistance for each Summoner Spell on cooldown. ",
        "icon": "perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
    },
    {
        "runePathName": "Sorcery",
        "runePathId": 8200,
        "name": "The Ultimate Hat",
        "id": 8243,
        "key": "TheUltimateHat",
        "shortDesc": "Your ultimate's cooldown is reduced. Each time you cast your ultimate, its cooldown is further reduced.",
        "longDesc": "Your ultimate's cooldown is reduced by 5%. Each time you cast your ultimate, its cooldown is further reduced by 2%. Stacks up to 5 times.",
        "icon": "perk-images/Styles/Sorcery/TheUltimateHat/TheUltimateHat.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Demolish",
        "id": 8446,
        "key": "Demolish",
        "shortDesc": "Charge up a powerful attack against a tower while near it.",
        "longDesc": "Charge up a powerful attack against a tower over 4s, while within 600 range of it. The charged attack deals 125 (+30% of your max health) bonus physical damage.<br><br>Cooldown: 45s",
        "icon": "perk-images/Styles/Resolve/Demolish/Demolish.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Dark Harvest",
        "id": 8128,
        "key": "DarkHarvest",
        "shortDesc": "Champions, large minions, and large monsters drop soul essence on death. Touch souls to absorb them and deal bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword> on your next attack based on total soul essence collected.",
        "longDesc": "Champions, large minions, and large monsters drop soul essence on death. Collect souls to become <font color='#c60300'>Soul Charged</font>. Your next attack on a champion or structure consumes <font color='#c60300'>Soul Charged</font> to deal bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br><font color='#c60300'>Soul Charged</font> lasts 20s, increased to 300s after collecting 150 soul essence.<br><br>Bonus damage: 40 - 80 (+<scaleAD>0.25 bonus AD</scaleAD>) (+<scaleAP>0.2 AP</scaleAP>) + soul essence collected.<br><rules><br>Champions - 6 soul essence.<br>Monsters - 2 soul essence.<br>Minions - 4 soul essence.</rules>",
        "icon": "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Second Wind",
        "id": 8444,
        "key": "SecondWind",
        "shortDesc": "After taking damage from an enemy champion heal back some missing health over time. ",
        "longDesc": "After taking damage from an enemy champion, heal for 4% of your missing health +6 over 10s.",
        "icon": "perk-images/Styles/Resolve/SecondWind/SecondWind.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Cheap Shot",
        "id": 8126,
        "key": "CheapShot",
        "shortDesc": "Deal bonus true damage to enemy champions with <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairAct'>impaired movement or actions</lol-uikit-tooltipped-keyword>. ",
        "longDesc": "Damaging champions with <b>impaired movement or actions</b> deals 12 - 30 bonus true damage (based on level).<br><br>Cooldown: 4s<br><rules>Activates on damage occurring after the impairment.</rules>",
        "icon": "perk-images/Styles/Domination/CheapShot/CheapShot.png"
    },
    {
        "runePathName": "Precision",
        "runePathId": 8000,
        "name": "Press the Attack",
        "id": 8005,
        "key": "PressTheAttack",
        "shortDesc": "Hitting an enemy champion 3 consecutive times makes them vulnerable, dealing bonus damage and causing them to take more damage from all sources for 6s.",
        "longDesc": "Hitting an enemy champion with 3 consecutive basic attacks deals 40 - 180 bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword> (based on level) and makes them vulnerable, increasing the damage they take by 8 - 12% from all sources for 6s.",
        "icon": "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    },
    {
        "runePathName": "Domination",
        "runePathId": 8100,
        "name": "Ghost Poro",
        "id": 8120,
        "key": "GhostPoro",
        "shortDesc": "When you enter brush, a poro appears. It will stay behind to give you vision.",
        "longDesc": "Enter a brush to summon a poro after a brief channel. The poro will stay behind to give you vision until you summon a new one.<br><br>If an enemy enters brush with a poro in it, they scare it away, putting Ghost Poro on a 3s cooldown.<br><br>Poro channel is interrupted if you take damage.",
        "icon": "perk-images/Styles/Domination/GhostPoro/GhostPoro.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Unsealed Spellbook",
        "id": 8360,
        "key": "UnsealedSpellbook",
        "shortDesc": "Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.",
        "longDesc": "Swap one of your equipped Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 15s (initial swap cooldown is at 4 mins). <br><br>Your first swap becomes available at 6 mins. <br><rules><br>Summoner Spells can only be swapped while out of combat. <br>After using a swapped Summoner Spell you must swap 3 more times before the first can be selected again. </rules>",
        "icon": "perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Aftershock",
        "id": 8439,
        "key": "Aftershock",
        "shortDesc": "After <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Immobilize'>immobilizing</lol-uikit-tooltipped-keyword> an enemy champion gain defenses and later deal a burst of magic damage around you.",
        "longDesc": "After immobilizing an enemy champion, increase your Armor and Magic Resist by 70 - 120 for 2.5s. Then explode, dealing magic damage to nearby enemies.<br><br>Damage: 10 - 120 (+3% of your maximum health) (+15% of your bonus attack damage) (+10% of your ability power)<br>Cooldown: 35s",
        "icon": "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    },
    {
        "runePathName": "Inspiration",
        "runePathId": 8300,
        "name": "Minion Dematerializer",
        "id": 8316,
        "key": "MinionDematerializer",
        "shortDesc": "Start the game with 6 Minion Dematerializers. Killing minions with the item gives permanent bonus damage vs. that minion type.",
        "longDesc": "Start the game with 6 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 155s of the game.<br><br>Absorbing a minion increases your damage by +4% against that type of minion permanently, and an extra +1% for each additional minion of that type absorbed.<br>",
        "icon": "perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
    },
    {
        "runePathName": "Resolve",
        "runePathId": 8400,
        "name": "Grasp of the Undying",
        "id": 8437,
        "key": "GraspOfTheUndying",
        "shortDesc": "Every 4s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.",
        "longDesc": "Every 4s in combat, your next basic attack on a champion will:<li>Deal bonus magic damage equal to 4% of your max health</li><li>Heals you for 2% of your max health</li><li>Permanently increase your health by 5</li><br><rules><i>Ranged Champions:</i> Damage, healing, and permanent health gained reduced by 40%.</rules><br>",
        "icon": "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    }
];

export default masteries;
