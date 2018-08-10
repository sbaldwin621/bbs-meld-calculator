import { sortBy } from 'lodash';

import { MeldGroup } from './abilities';

export enum Character {
  Terra = 'Terra', Ventus = 'Ventus', Aqua = 'Aqua'
}

export enum Command {
  // Attack
  QuickBlitz = 'Quick Blitz',
  Blitz = 'Blitz',
  MeteorCrash = 'Meteor Crash',
  MagicHour = 'Magic Hour',
  SlidingDash = 'Sliding Dash',
  FireDash = 'Fire Dash',
  DarkHaze = 'Dark Haze',
  SonicBlade = 'Sonic Blade',
  ChaosBlade = 'Chaos Blade',
  Zantetsuken = 'Zantetsuken',
  StrikeRaid = 'Strike Raid',
  FreezeRaid = 'Freeze Raid',
  TreasureRaid = 'Treasure Raid',
  SparkRaid = 'Spark Raid',
  WindRaid = 'Wind Raid',
  FireSurge = 'Fire Surge',
  BarrierSurge = 'Barrier Surge',
  ThunderSurge = 'Thunder Surge',
  AerialSlam = 'Aerial Slam',
  ArsSolum = 'Ars Solum',
  ArsArcanum = 'Ars Arcanum',
  TimeSplicer = 'Time Splicer',
  PoisonEdge = 'Poison Edge',
  WishingEdge = 'Wishing Edge',
  BlizzardEdge = 'Blizzard Edge',
  StunEdge = 'Stun Edge',
  SlotEdge = 'Slot Edge',
  FireStrike = 'Fire Strike',
  ConfusionStrike = 'Confusion Strike',
  BindingStrike = 'Binding Strike',
  TornadoStrike = 'Tornado Strike',
  BrutalBlast = 'Brutal Blast',
  MagnetSpiral = 'Magnet Spiral',
  Salvation = 'Salvation',
  Windcutter = 'Windcutter',
  LimitStorm = 'Limit Storm',
  CollisionMagnet = 'Collision Magnet',
  GeoImpact = 'Geo Impact',
  Sacrifice = 'Sacrifice',
  BreakTime = 'Break Time',

  // Magic
  Fire = 'Fire',
  Fira = 'Fira',
  Firaga = 'Firaga',
  DarkFiraga = 'Dark Firaga',
  FissionFiraga = 'Fission Firaga',
  CrawlingFire = 'Crawling Fire',
  TripleFiraga = 'Triple Firaga',
  Blizzard = 'Blizzard',
  Blizzara = 'Blizzara',
  Blizzaga = 'Blizzaga',
  TripleBlizzaga = 'Triple Blizzaga',
  Thunder = 'Thunder',
  Thundara = 'Thundara',
  Thundaga = 'Thundaga',
  ThundagaShot = 'Thundaga Shot',
  Cure = 'Cure',
  Cura = 'Cura',
  Curaga = 'Curaga',
  Esuna = 'Esuna',
  MineShield = 'Mine Shield',
  MineSquare = 'Mine Square',
  SeekerMine = 'Seeker Mine',
  ZeroGravity = 'Zero Gravity',
  ZeroGravira = 'Zero Gravira',
  ZeroGraviga = 'Zero Graviga',
  Magnet = 'Magnet',
  Magnera = 'Magnera',
  Magnega = 'Magnega',
  MunnyMagnet = 'Munny Magnet',
  EnergyMagnet = 'Energy Magnet',
  DLinkMagnet = 'D-Link Magnet',
  Aero = 'Aero',
  Aerora = 'Aerora',
  Aeroga = 'Aeroga',
  Faith = 'Faith',
  Warp = 'Warp',
  DeepFreeze = 'Deep Freeze',
  Glacier = 'Glacier',
  IceBarrage = 'Ice Barrage',
  FiragaBurst = 'Firaga Burst',
  RagingStorm = 'Raging Storm',
  Tornado = 'Tornado',
  MegaFlare = 'Mega Flare',
  Quake = 'Quake',
  Meteor = 'Meteor',
  Transcendence = 'Transcendence',
  Mini = 'Mini',
  Blackout = 'Blackout',
  Ignite = 'Ignite',
  Confuse = 'Confuse',
  Bind = 'Bind',
  Poison = 'Poison',
  Slow = 'Slow',
  Stop = 'Stop',
  Stopra = 'Stopra',
  Stopga = 'Stopga',
  Sleep = 'Sleep',
  WrathOfDarkness = 'Wrath of Darkness',

  // Action
  Jump = 'Jump',
  HighJump = 'High Jump',
  DodgeRoll = 'Dodge Roll',
  ThunderRoll = 'Thunder Roll',
  Cartwheel = 'Cartwheel',
  Firewheel = 'Firewheel',
  AirSlide = 'Air Slide',
  IceSlide = 'Ice Slide',
  Reversal = 'Reversal',
  Glide = 'Glide',
  Superglide = 'Superglide',
  FireGlide = 'Fire Glide',
  SonicImpact = 'Sonic Impact',
  Slide = 'Slide',
  HomingSlide = 'Homing Slide',
  Teleport = 'Teleport',
  Doubleflight = 'Doubleflight',
  Block = 'Block',
  RenewalBlock = 'Renewal Block',
  FocusBlock = 'Focus Block',
  StunBlock = 'Stun Block',
  PoisonBlock = 'Poison Block',
  Barrier = 'Barrier',
  RenewalBarrier = 'Renewal Barrier',
  FocusBarrier = 'Focus Barrier',
  ConfuseBarrier = 'Confuse Barrier',
  StopBarrier = 'Stop Barrier',

  // Reprisal
  CounterRush = 'Counter Rush',
  ReversalSlash = 'Reversal Slash',
  PaybackRaid = 'Payback Raid',
  CounterHammer = 'Counter Hammer',
  PaybackFang = 'Payback Fang',
  CounterBlast = 'Counter Blast',
  PaybackSurge = 'Payback Surge',
  AerialRecovery = 'Aerial Recovery',

  // Shotlock
  LightningRay = 'Lightning Ray',
  MeteorShower = 'Meteor Shower',
  BioBarrage = 'Bio Barrage'
}

export interface Recipe {
  first: Command,
  second: Command,
  meldGroup: MeldGroup,
  command: Command,
  upgrade?: {command: Command, percentage: number}
};

const recipes = {
  [Character.Terra]: [] as Recipe[],
  [Character.Ventus]: [] as Recipe[],
  [Character.Aqua]: [] as Recipe[]
};

// Recipe query functions
export function getRecipesForCharacter(character: Character) : Recipe[] {
  return recipes[character];
}

export function getRecipesForResult(character: Character, command: Command) : Recipe[] {
  return sortBy(recipes[character].filter(r => r.command == command || (r.upgrade && r.upgrade.command == command)), r => {
    if (r.command == command) {
      return -100;
    } else if (r.upgrade != null) {
      return -r.upgrade.percentage;
    } else {
      return 0;
    }
  });
}

export function getRecipesForIngredient(character: Character, ingredient: Command) : Recipe[] {
  return recipes[character].filter(r => r.first == ingredient || r.second == ingredient);
}

export function getCommandsForCharacter(character: Character) : Command[] {
  const commandSet = new Set<Command>();
  for (const {first, second, command, upgrade} of recipes[character]) {
    commandSet.add(first);
    commandSet.add(second);
    commandSet.add(command);
    
    if (upgrade != null) {
      commandSet.add(upgrade.command);
    }
  }

  const commands = Array.from(commandSet);
  commands.sort();

  return commands;
}

// Build recipe graph
function addRecipe(first: Command, second: Command, meldGroup: MeldGroup, command: Command | [Command, number, Command], characters: Character[] = [Character.Terra, Character.Ventus, Character.Aqua]) {
  for (const character of characters) {
    if (Array.isArray(command)) {
      const [regularCommand, percentage, upgradedCommand] = command;
      recipes[character].push({first, second, meldGroup, command: regularCommand, upgrade: {command: upgradedCommand, percentage}});
    } else {
      recipes[character].push({first, second, meldGroup, command});
    }    
  }
}

// ATTACK COMMANDS
// Blitz
addRecipe(Command.QuickBlitz, Command.SlotEdge, MeldGroup.O, [Command.Blitz, 10, Command.ArsArcanum], [Character.Ventus]);
addRecipe(Command.QuickBlitz, Command.SlotEdge, MeldGroup.O, Command.Blitz, [Character.Terra, Character.Aqua]);
addRecipe(Command.BarrierSurge, Command.WishingEdge, MeldGroup.P, [Command.Blitz, 10, Command.TimeSplicer], [Character.Aqua]);
addRecipe(Command.StunEdge, Command.SlotEdge, MeldGroup.K, [Command.Blitz, 10, Command.TimeSplicer], [Character.Ventus, Character.Aqua]);
addRecipe(Command.StunEdge, Command.SlotEdge, MeldGroup.K, Command.Blitz, [Character.Terra]);

// Meteor Crash
addRecipe(Command.Blitz, Command.Quake, MeldGroup.N, Command.MeteorCrash, [Character.Terra]);
addRecipe(Command.FireStrike, Command.BrutalBlast, MeldGroup.D, Command.MeteorCrash, [Character.Terra]);

// Magic Hour
addRecipe(Command.Blitz, Command.ZeroGraviga, MeldGroup.O, [Command.MagicHour, 10, Command.MeteorShower], [Character.Aqua]);
addRecipe(Command.BarrierSurge, Command.Aeroga, MeldGroup.N, [Command.MagicHour, 10, Command.LightningRay], [Character.Aqua]);

// Fire Dash
addRecipe(Command.SlidingDash, Command.Fire, MeldGroup.D, Command.FireDash);
addRecipe(Command.SlidingDash, Command.Fira, MeldGroup.C, Command.FireDash);
addRecipe(Command.ConfusionStrike, Command.Fire, MeldGroup.D, Command.FireDash);

// Dark Haze
addRecipe(Command.FireDash, Command.ZeroGravira, MeldGroup.D, Command.DarkHaze, [Character.Terra]);
addRecipe(Command.FireDash, Command.Blackout, MeldGroup.A, Command.DarkHaze, [Character.Terra]);
addRecipe(Command.FireSurge, Command.ZeroGravity, MeldGroup.C, Command.DarkHaze, [Character.Terra]);

// Sonic Blade
addRecipe(Command.Blitz, Command.DarkHaze, MeldGroup.D, [Command.SonicBlade, 10, Command.LightningRay], [Character.Terra]);
addRecipe(Command.Blitz, Command.AirSlide, MeldGroup.N, [Command.SonicBlade, 10, Command.LightningRay]);
addRecipe(Command.FireDash, Command.ThunderSurge, MeldGroup.K, [Command.SonicBlade, 10, Command.LightningRay]);

// Chaos Blade
addRecipe(Command.DarkHaze, Command.SonicBlade, MeldGroup.B, [Command.ChaosBlade, 20, Command.ArsSolum], [Character.Terra]);

// Zantetsuken
addRecipe(Command.DarkHaze, Command.Stopga, MeldGroup.B, [Command.Zantetsuken, 20, Command.ArsSolum], [Character.Terra]);
addRecipe(Command.SonicBlade, Command.Stopga, MeldGroup.F, [Command.Zantetsuken, 20, Command.ArsSolum], [Character.Terra]);

// Strike Raid
addRecipe(Command.QuickBlitz, Command.SlidingDash, MeldGroup.O, Command.StrikeRaid);

// Freeze Raid
addRecipe(Command.StrikeRaid, Command.Blizzara, MeldGroup.I, Command.FreezeRaid);
addRecipe(Command.BlizzardEdge, Command.BindingStrike, MeldGroup.K, Command.FreezeRaid);

// Treasure Raid
addRecipe(Command.StrikeRaid, Command.SlotEdge, MeldGroup.O, Command.TreasureRaid, [Character.Ventus]);
addRecipe(Command.SlotEdge, Command.Magnet, MeldGroup.D, Command.TreasureRaid, [Character.Ventus]);
addRecipe(Command.SlotEdge, Command.Magnera, MeldGroup.K, Command.TreasureRaid, [Character.Ventus]);

// Spark Raid
addRecipe(Command.FreezeRaid, Command.Magnega, MeldGroup.J, Command.SparkRaid, [Character.Ventus]);
addRecipe(Command.TreasureRaid, Command.Magnega, MeldGroup.N, Command.SparkRaid, [Character.Ventus]);

// Wind Raid
addRecipe(Command.FreezeRaid, Command.Aeroga, MeldGroup.B, Command.WindRaid, [Character.Ventus]);
addRecipe(Command.TreasureRaid, Command.Aeroga, MeldGroup.F, Command.WindRaid, [Character.Ventus]);

// Fire Surge
addRecipe(Command.FireDash, Command.Ignite, MeldGroup.D, Command.FireSurge);
addRecipe(Command.FireStrike, Command.Fira, MeldGroup.A, Command.FireSurge);
addRecipe(Command.ConfusionStrike, Command.Fira, MeldGroup.O, Command.FireSurge);
addRecipe(Command.BindingStrike, Command.Fira, MeldGroup.K, Command.FireSurge);

// Barrier Surge
addRecipe(Command.FireDash, Command.Barrier, MeldGroup.D, Command.BarrierSurge, [Character.Aqua]);
addRecipe(Command.StunEdge, Command.Barrier, MeldGroup.K, Command.BarrierSurge, [Character.Aqua]);

// Thunder Surge
addRecipe(Command.FireDash, Command.Thundara, MeldGroup.D, Command.ThunderSurge);
addRecipe(Command.FreezeRaid, Command.Thundara, MeldGroup.G, Command.ThunderSurge);
addRecipe(Command.StunEdge, Command.Thundara, MeldGroup.I, Command.ThunderSurge);
addRecipe(Command.ConfusionStrike, Command.Thundara, MeldGroup.I, Command.ThunderSurge, [Character.Ventus, Character.Aqua]);
addRecipe(Command.ConfusionStrike, Command.Thundara, MeldGroup.I, [Command.ThunderSurge, 5, Command.ArsSolum], [Character.Terra]);

// Aerial Slam
addRecipe(Command.FireDash, Command.HighJump, MeldGroup.A, Command.AerialSlam);
addRecipe(Command.FireSurge, Command.Aero, MeldGroup.D, Command.AerialSlam);
addRecipe(Command.FireStrike, Command.Aerora, MeldGroup.C, Command.AerialSlam, [Character.Terra, Character.Aqua]);
addRecipe(Command.FireStrike, Command.Aerora, MeldGroup.C, [Command.AerialSlam, 10, Command.ArsArcanum], [Character.Ventus]);

// Ars Solum
// RARE - Stun Edge (5%), Chaos Blade (20%), Zantetsuken (20%), Thunder Surge (5%), Stun Edge (5%)

// Ars Arcanum
// RARE - Blitz (10%), Aerial Slam (10%), Blizzard Edge (5%), Slot Edge (5%)
addRecipe(Command.Blitz, Command.AerialSlam, MeldGroup.F, Command.ArsArcanum, [Character.Ventus]);

// Time Splicer
// RARE - Blitz (10%), Stop Barrier (20%)
addRecipe(Command.AerialSlam, Command.Stopga, MeldGroup.F, Command.TimeSplicer, [Character.Ventus, Character.Aqua]);

// Poison Edge
addRecipe(Command.QuickBlitz, Command.Poison, MeldGroup.O, [Command.PoisonEdge, 5, Command.BioBarrage]);
addRecipe(Command.SlidingDash, Command.Poison, MeldGroup.K, [Command.PoisonEdge, 5, Command.BioBarrage]);
addRecipe(Command.StrikeRaid, Command.Poison, MeldGroup.D, [Command.PoisonEdge, 5, Command.BioBarrage]);

// Wishing Edge
addRecipe(Command.StrikeRaid, Command.BarrierSurge, MeldGroup.O, Command.WishingEdge, [Character.Aqua]);
addRecipe(Command.StunEdge, Command.BarrierSurge, MeldGroup.K, Command.WishingEdge, [Character.Aqua]);
addRecipe(Command.StunEdge, Command.BindingStrike, MeldGroup.J, Command.WishingEdge, [Character.Aqua]);

// Blizzard Edge
addRecipe(Command.QuickBlitz, Command.Blizzard, MeldGroup.G, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.QuickBlitz, Command.Blizzard, MeldGroup.G, [Command.BlizzardEdge, 5, Command.ArsArcanum], [Character.Ventus]);
addRecipe(Command.QuickBlitz, Command.Blizzara, MeldGroup.H, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.QuickBlitz, Command.Blizzara, MeldGroup.H, [Command.BlizzardEdge, 5, Command.ArsArcanum], [Character.Ventus]);
addRecipe(Command.SlidingDash, Command.Blizzard, MeldGroup.E, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.SlidingDash, Command.Blizzard, MeldGroup.E, [Command.BlizzardEdge, 5, Command.ArsArcanum], [Character.Ventus]);
addRecipe(Command.SlidingDash, Command.Blizzara, MeldGroup.G, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.SlidingDash, Command.Blizzara, MeldGroup.G, [Command.BlizzardEdge, 5, Command.ArsArcanum], [Character.Ventus]);

// Stun Edge
addRecipe(Command.SlidingDash, Command.Thunder, MeldGroup.K, Command.StunEdge, [Character.Ventus, Character.Aqua]);
addRecipe(Command.SlidingDash, Command.Thunder, MeldGroup.K, [Command.StunEdge, 5, Command.ArsSolum], [Character.Terra]);
addRecipe(Command.StrikeRaid, Command.Thunder, MeldGroup.L, Command.StunEdge, [Character.Ventus, Character.Aqua]);
addRecipe(Command.StrikeRaid, Command.Thunder, MeldGroup.L, [Command.StunEdge, 5, Command.ArsSolum], [Character.Terra]);
addRecipe(Command.StrikeRaid, Command.Thundara, MeldGroup.K, Command.StunEdge, [Character.Ventus, Character.Aqua]);
addRecipe(Command.StrikeRaid, Command.Thundara, MeldGroup.K, [Command.StunEdge, 5, Command.ArsSolum], [Character.Terra]);

// Slot Edge
addRecipe(Command.WishingEdge, Command.Cure, MeldGroup.O, Command.SlotEdge, [Character.Aqua]);
addRecipe(Command.PoisonEdge, Command.Cura, MeldGroup.P, Command.SlotEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.PoisonEdge, Command.Cura, MeldGroup.P, [Command.SlotEdge, 5, Command.ArsArcanum], [Character.Ventus]);
addRecipe(Command.BlizzardEdge, Command.Cura, MeldGroup.G, Command.SlotEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.BlizzardEdge, Command.Cura, MeldGroup.G, [Command.SlotEdge, 5, Command.ArsArcanum], [Character.Ventus]);
addRecipe(Command.Curaga, Command.RenewalBlock, MeldGroup.N, [Command.SlotEdge, 10, Command.BreakTime], [Character.Terra, Character.Ventus]);
addRecipe(Command.Curaga, Command.FocusBlock, MeldGroup.P, [Command.SlotEdge, 10, Command.BreakTime], [Character.Terra, Character.Ventus]);
addRecipe(Command.Curaga, Command.RenewalBarrier, MeldGroup.N, [Command.SlotEdge, 10, Command.BreakTime], [Character.Aqua]);
addRecipe(Command.Curaga, Command.FocusBarrier, MeldGroup.P, [Command.SlotEdge, 10, Command.BreakTime], [Character.Aqua]);

// Fire Strike
addRecipe(Command.PoisonEdge, Command.Fira, MeldGroup.D, Command.FireStrike);
addRecipe(Command.WishingEdge, Command.Ignite, MeldGroup.A, Command.FireStrike, [Character.Aqua]);
addRecipe(Command.StunEdge, Command.Fire, MeldGroup.K, Command.FireStrike);

// Confusion Strike
addRecipe(Command.QuickBlitz, Command.Confuse, MeldGroup.O, Command.ConfusionStrike);
addRecipe(Command.SlidingDash, Command.ZeroGravity, MeldGroup.K, Command.ConfusionStrike);
addRecipe(Command.StrikeRaid, Command.Confuse, MeldGroup.G, Command.ConfusionStrike);

// Binding Strike
addRecipe(Command.QuickBlitz, Command.Bind, MeldGroup.K, Command.BindingStrike);
addRecipe(Command.StrikeRaid, Command.Bind, MeldGroup.O, Command.BindingStrike);
addRecipe(Command.StunEdge, Command.ZeroGravity, MeldGroup.I, Command.BindingStrike);

// Brutal Blast
addRecipe(Command.StunEdge, Command.MineShield, MeldGroup.O, [Command.BrutalBlast, 30, Command.Quake], [Character.Terra]);
addRecipe(Command.BindingStrike, Command.MineSquare, MeldGroup.L, [Command.BrutalBlast, 30, Command.Quake], [Character.Terra]);

// Tornado Strike
addRecipe(Command.ConfusionStrike, Command.Aeroga, MeldGroup.G, Command.TornadoStrike, [Character.Ventus]);
addRecipe(Command.BindingStrike, Command.Aeroga, MeldGroup.F, Command.TornadoStrike, [Character.Ventus]);

// Magnet Spiral
addRecipe(Command.BindingStrike, Command.CollisionMagnet, MeldGroup.K, Command.MagnetSpiral);
addRecipe(Command.BindingStrike, Command.Magnega, MeldGroup.J, Command.MagnetSpiral);

// Windcutter
addRecipe(Command.BindingStrike, Command.Aeroga, MeldGroup.F, Command.Windcutter, [Character.Terra]);
addRecipe(Command.ConfusionStrike, Command.Aeroga, MeldGroup.G, Command.Windcutter, [Character.Terra]);

// Limit Storm
addRecipe(Command.ConfusionStrike, Command.BrutalBlast, MeldGroup.G, Command.LimitStorm, [Character.Terra]);
addRecipe(Command.BindingStrike, Command.BrutalBlast, MeldGroup.D, Command.LimitStorm, [Character.Terra]);

// Salvation
addRecipe(Command.WindRaid, Command.Curaga, MeldGroup.N, Command.Salvation, [Character.Ventus]);

// Collision Magnet
addRecipe(Command.QuickBlitz, Command.Magnera, MeldGroup.K, [Command.CollisionMagnet, 20, Command.MagnetSpiral]);
addRecipe(Command.StunEdge, Command.Magnera, MeldGroup.L, [Command.CollisionMagnet, 20, Command.MagnetSpiral]);
addRecipe(Command.ZeroGravira, Command.Magnet, MeldGroup.I, [Command.CollisionMagnet, 20, Command.MagnetSpiral]);

// Geo Impact
addRecipe(Command.BrutalBlast, Command.BrutalBlast, MeldGroup.N, [Command.GeoImpact, 30, Command.Quake], [Character.Terra]);

// Sacrifice
addRecipe(Command.DarkHaze, Command.Warp, MeldGroup.B, Command.Sacrifice, [Character.Terra]);
addRecipe(Command.PoisonEdge, Command.Warp, MeldGroup.D, Command.Sacrifice, [Character.Terra]);

// MAGIC COMMANDS
// Fira
addRecipe(Command.FireDash, Command.Fire, MeldGroup.D, Command.Fira);
addRecipe(Command.FireStrike, Command.Fire, MeldGroup.D, Command.Fira);
addRecipe(Command.Fire, Command.Fire, MeldGroup.A, Command.Fira);
addRecipe(Command.Fire, Command.Ignite, MeldGroup.C, Command.Fira);

// Firaga
addRecipe(Command.FireDash, Command.Fira, MeldGroup.D, Command.Firaga, [Character.Terra, Character.Ventus]);
addRecipe(Command.FireDash, Command.Fira, MeldGroup.D, [Command.Firaga, 10, Command.RagingStorm], [Character.Aqua]);
addRecipe(Command.Fire, Command.Fira, MeldGroup.A, Command.Firaga, [Character.Terra, Character.Ventus]);
addRecipe(Command.Fire, Command.Fira, MeldGroup.A, [Command.Firaga, 10, Command.RagingStorm], [Character.Aqua]);
addRecipe(Command.Fira, Command.Fira, MeldGroup.B, Command.Firaga, [Character.Terra, Character.Ventus]);
addRecipe(Command.Fira, Command.Fira, MeldGroup.B, [Command.Firaga, 10, Command.RagingStorm], [Character.Aqua]);

// Dark Firaga
addRecipe(Command.DarkHaze, Command.Firaga, MeldGroup.D, Command.DarkFiraga, [Character.Terra]);
addRecipe(Command.Firaga, Command.Blackout, MeldGroup.B, Command.DarkFiraga, [Character.Terra]);

// Fission Firaga
addRecipe(Command.Fira, Command.Aeroga, MeldGroup.A, Command.FissionFiraga, [Character.Terra, Character.Ventus]);
addRecipe(Command.Fira, Command.Aeroga, MeldGroup.A, [Command.FissionFiraga, 20, Command.FiragaBurst], [Character.Aqua]);
addRecipe(Command.Firaga, Command.Aerora, MeldGroup.A, Command.FissionFiraga, [Character.Terra, Character.Ventus]);
addRecipe(Command.Firaga, Command.Aerora, MeldGroup.A, [Command.FissionFiraga, 20, Command.FiragaBurst], [Character.Aqua]);
addRecipe(Command.Firaga, Command.Aeroga, MeldGroup.B, Command.FissionFiraga, [Character.Terra, Character.Ventus]);
addRecipe(Command.Firaga, Command.Aeroga, MeldGroup.B, [Command.FissionFiraga, 20, Command.FiragaBurst], [Character.Aqua]);

// Triple Firaga
addRecipe(Command.Fira, Command.Firaga, MeldGroup.A, [Command.TripleFiraga, 10, Command.RagingStorm], [Character.Aqua]);
addRecipe(Command.Blitz, Command.Firaga, MeldGroup.D, [Command.TripleFiraga, 10, Command.RagingStorm], [Character.Aqua]);
addRecipe(Command.Firaga, Command.Firaga, MeldGroup.B, [Command.TripleFiraga, 10, Command.RagingStorm], [Character.Aqua]);

// Crawling Fire
addRecipe(Command.Firaga, Command.Slow, MeldGroup.A, Command.CrawlingFire, [Character.Terra, Character.Ventus]);
addRecipe(Command.Firaga, Command.Slow, MeldGroup.A, [Command.CrawlingFire, 20, Command.FiragaBurst], [Character.Aqua]);
addRecipe(Command.Firaga, Command.Stopra, MeldGroup.D, Command.CrawlingFire, [Character.Terra, Character.Ventus]);
addRecipe(Command.Firaga, Command.Stopra, MeldGroup.D, [Command.CrawlingFire, 20, Command.FiragaBurst], [Character.Aqua]);
addRecipe(Command.Firaga, Command.Stopga, MeldGroup.B, Command.CrawlingFire, [Character.Terra, Character.Ventus]);
addRecipe(Command.Firaga, Command.Stopga, MeldGroup.B, [Command.CrawlingFire, 20, Command.FiragaBurst], [Character.Aqua]);

// Blizzara
addRecipe(Command.StrikeRaid, Command.Blizzard, MeldGroup.G, Command.Blizzara);
addRecipe(Command.BlizzardEdge, Command.Blizzard, MeldGroup.G, Command.Blizzara);
addRecipe(Command.Blizzard, Command.Blizzard, MeldGroup.E, Command.Blizzara);
addRecipe(Command.Blizzard, Command.Aero, MeldGroup.H, Command.Blizzara);

// Blizzaga
addRecipe(Command.BlizzardEdge, Command.Blizzara, MeldGroup.G, Command.Blizzaga);
addRecipe(Command.Blizzard, Command.Blizzara, MeldGroup.E, Command.Blizzaga);
addRecipe(Command.Blizzara, Command.Blizzara, MeldGroup.F, Command.Blizzaga);

// Triple Blizzaga
addRecipe(Command.Blitz, Command.Blizzaga, MeldGroup.G, Command.TripleBlizzaga, [Character.Aqua]);
addRecipe(Command.Blizzara, Command.Blizzaga, MeldGroup.E, Command.TripleBlizzaga, [Character.Aqua]);
addRecipe(Command.Blizzaga, Command.Blizzaga, MeldGroup.F, Command.TripleBlizzaga, [Character.Aqua]);

// Thundara
addRecipe(Command.StunEdge, Command.Thunder, MeldGroup.K, Command.Thundara);
addRecipe(Command.Thunder, Command.Thunder, MeldGroup.I, Command.Thundara);
addRecipe(Command.ZeroGravity, Command.Magnet, MeldGroup.L, Command.Thundara);

// Thundaga
addRecipe(Command.BindingStrike, Command.Thundara, MeldGroup.K, [Command.Thundaga, 10, Command.LightningRay]);
addRecipe(Command.Thunder, Command.Thundara, MeldGroup.I, [Command.Thundaga, 10, Command.LightningRay]);
addRecipe(Command.Thundara, Command.Thundara, MeldGroup.J, [Command.Thundaga, 10, Command.LightningRay]);

// Thundaga Shot
addRecipe(Command.StrikeRaid, Command.Thundaga, MeldGroup.I, [Command.ThundagaShot, 15, Command.MeteorShower], [Character.Aqua]);
addRecipe(Command.FreezeRaid, Command.Thundaga, MeldGroup.E, [Command.ThundagaShot, 15, Command.MeteorShower], [Character.Aqua]);
addRecipe(Command.Firaga, Command.Thundaga, MeldGroup.A, [Command.ThundagaShot, 15, Command.MeteorShower], [Character.Aqua]);

// Cura
addRecipe(Command.Thunder, Command.Cure, MeldGroup.I, Command.Cura);
addRecipe(Command.Cure, Command.Cure, MeldGroup.M, Command.Cura);
addRecipe(Command.Cure, Command.Aero, MeldGroup.O, Command.Cura);

// Curaga
addRecipe(Command.Cure, Command.Cura, MeldGroup.M, Command.Curaga);
addRecipe(Command.Cura, Command.Cura, MeldGroup.N, Command.Curaga);

// Mine Shield
addRecipe(Command.Fira, Command.ZeroGravity, MeldGroup.A, Command.MineShield);
addRecipe(Command.Ignite, Command.Stop, MeldGroup.D, Command.MineShield);
addRecipe(Command.Fira, Command.Block, MeldGroup.C, Command.MineShield, [Character.Terra, Character.Ventus]);
addRecipe(Command.Stopra, Command.Block, MeldGroup.M, Command.MineShield, [Character.Terra, Character.Ventus]);

// Mine Square
addRecipe(Command.Fira, Command.Stop, MeldGroup.A, Command.MineSquare);
addRecipe(Command.Aerora, Command.Ignite, MeldGroup.D, Command.MineSquare);
addRecipe(Command.Fira, Command.Barrier, MeldGroup.C, Command.MineSquare, [Character.Aqua]);
addRecipe(Command.Stopra, Command.Barrier, MeldGroup.M, Command.MineSquare, [Character.Aqua]);

// Seeker Mine
addRecipe(Command.MineShield, Command.MineSquare, MeldGroup.B, Command.SeekerMine, [Character.Aqua]);
addRecipe(Command.MineShield, Command.Magnega, MeldGroup.C, Command.SeekerMine, [Character.Aqua]);
addRecipe(Command.MineSquare, Command.Magnega, MeldGroup.D, Command.SeekerMine, [Character.Aqua]);

// Zero Gravira
addRecipe(Command.Thunder, Command.ZeroGravity, MeldGroup.I, Command.ZeroGravira, [Character.Ventus, Character.Aqua]);
addRecipe(Command.Thunder, Command.ZeroGravity, MeldGroup.I, [Command.ZeroGravira, 10, Command.Warp], [Character.Terra]);
addRecipe(Command.ZeroGravity, Command.ZeroGravity, MeldGroup.M, Command.ZeroGravira, [Character.Ventus, Character.Aqua]);
addRecipe(Command.ZeroGravity, Command.ZeroGravity, MeldGroup.M, [Command.ZeroGravira, 10, Command.Warp], [Character.Terra]);
addRecipe(Command.Magnet, Command.Aero, MeldGroup.P, Command.ZeroGravira, [Character.Ventus, Character.Aqua]);
addRecipe(Command.Magnet, Command.Aero, MeldGroup.P, [Command.ZeroGravira, 10, Command.Warp], [Character.Terra]);

// Zero Graviga
addRecipe(Command.Thundara, Command.ZeroGravira, MeldGroup.I, Command.ZeroGraviga, [Character.Ventus, Character.Aqua]);
addRecipe(Command.Thundara, Command.ZeroGravira, MeldGroup.I, [Command.ZeroGraviga, 20, Command.Warp], [Character.Terra]);
addRecipe(Command.ZeroGravity, Command.ZeroGravira, MeldGroup.M, Command.ZeroGraviga, [Character.Ventus, Character.Aqua]);
addRecipe(Command.ZeroGravity, Command.ZeroGravira, MeldGroup.M, [Command.ZeroGraviga, 20, Command.Warp], [Character.Terra]);
addRecipe(Command.ZeroGravira, Command.ZeroGravira, MeldGroup.N, Command.ZeroGraviga, [Character.Ventus, Character.Aqua]);
addRecipe(Command.ZeroGravira, Command.ZeroGravira, MeldGroup.N, [Command.ZeroGraviga, 20, Command.Warp], [Character.Terra]);

// Magnera
addRecipe(Command.StunEdge, Command.Magnet, MeldGroup.K, Command.Magnera);
addRecipe(Command.Thunder, Command.Magnet, MeldGroup.I, Command.Magnera);
addRecipe(Command.Magnet, Command.Magnet, MeldGroup.M, Command.Magnera);

// Magnega
addRecipe(Command.Magnet, Command.Magnera, MeldGroup.I, Command.Magnega);
addRecipe(Command.Magnera, Command.Magnera, MeldGroup.J, Command.Magnega);

// Munny Magnet
addRecipe(Command.WishingEdge, Command.Magnera, MeldGroup.K, Command.MunnyMagnet, [Character.Aqua]);
addRecipe(Command.Thundara, Command.Magnera, MeldGroup.I, Command.MunnyMagnet, [Character.Aqua]);

// Energy Magnet
addRecipe(Command.Cure, Command.Magnera, MeldGroup.M, Command.EnergyMagnet, [Character.Aqua]);
addRecipe(Command.Cura, Command.Magnera, MeldGroup.N, Command.EnergyMagnet, [Character.Aqua]);

// D-Link Magnet
addRecipe(Command.ZeroGravira, Command.Magnera, MeldGroup.L, Command.DLinkMagnet, [Character.Aqua]);
addRecipe(Command.Magnera, Command.Stopra, MeldGroup.I, Command.DLinkMagnet, [Character.Aqua]);

// Aerora
addRecipe(Command.QuickBlitz, Command.Aero, MeldGroup.G, Command.Aerora, [Character.Terra, Character.Aqua]);
addRecipe(Command.QuickBlitz, Command.Aero, MeldGroup.G, [Command.Aerora, 5, Command.Tornado], [Character.Ventus]);
addRecipe(Command.Thunder, Command.Aero, MeldGroup.I, Command.Aerora, [Character.Terra, Character.Aqua]);
addRecipe(Command.Thunder, Command.Aero, MeldGroup.I, [Command.Aerora, 5, Command.Tornado], [Character.Ventus]);
addRecipe(Command.Aero, Command.Aero, MeldGroup.E, Command.Aerora, [Character.Terra, Character.Aqua]);
addRecipe(Command.Aero, Command.Aero, MeldGroup.E, [Command.Aerora, 5, Command.Tornado], [Character.Ventus]);

// Aeroga
addRecipe(Command.QuickBlitz, Command.Aerora, MeldGroup.O, Command.Aeroga, [Character.Terra, Character.Aqua]);
addRecipe(Command.QuickBlitz, Command.Aerora, MeldGroup.O, [Command.Aeroga, 10, Command.Tornado], [Character.Ventus]);
addRecipe(Command.Aero, Command.Aerora, MeldGroup.M, Command.Aeroga, [Character.Terra, Character.Aqua]);
addRecipe(Command.Aero, Command.Aerora, MeldGroup.M, [Command.Aeroga, 10, Command.Tornado], [Character.Ventus]);
addRecipe(Command.Aerora, Command.Aerora, MeldGroup.N, Command.Aeroga, [Character.Terra, Character.Aqua]);
addRecipe(Command.Aerora, Command.Aerora, MeldGroup.N, [Command.Aeroga, 10, Command.Tornado], [Character.Ventus]);

// Warp
// RARE - Zero Gravira (10%), Zero Graviga (20%)

// Faith
addRecipe(Command.WindRaid, Command.BreakTime, MeldGroup.N, Command.Faith, [Character.Ventus]);

// Deep Freeze
addRecipe(Command.FreezeRaid, Command.Blizzaga, MeldGroup.G, Command.DeepFreeze);
addRecipe(Command.BindingStrike, Command.Blizzaga, MeldGroup.H, Command.DeepFreeze);
addRecipe(Command.Blizzaga, Command.TripleBlizzaga, MeldGroup.F, Command.DeepFreeze, [Character.Aqua]);

// Glacier
addRecipe(Command.Blizzaga, Command.DeepFreeze, MeldGroup.E, Command.Glacier, [Character.Aqua]);
addRecipe(Command.TripleBlizzaga, Command.DeepFreeze, MeldGroup.F, Command.Glacier, [Character.Aqua]);

// Ice Barrage
addRecipe(Command.Blizzaga, Command.MineShield, MeldGroup.F, Command.IceBarrage, [Character.Aqua]);
addRecipe(Command.Blizzaga, Command.MineSquare, MeldGroup.H, Command.IceBarrage, [Character.Aqua]);

// Firaga Burst
// RARE - Fission Firaga (20%), Crawling Fire (20%)

// Raging Storm
// RARE - Firewheel (10%), Firaga (10%), Triple Firaga (10%)
addRecipe(Command.FissionFiraga, Command.FiragaBurst, MeldGroup.B, Command.RagingStorm, [Character.Aqua]);

// Mega Flare
addRecipe(Command.FissionFiraga, Command.CrawlingFire, MeldGroup.B, Command.MegaFlare);

// Quake
// RARE - Brutal Blast (30%), Geo Impact (30%)
addRecipe(Command.BrutalBlast, Command.ZeroGraviga, MeldGroup.B, [Command.Quake, 10, Command.Meteor], [Character.Terra]);
addRecipe(Command.BrutalBlast, Command.Magnega, MeldGroup.C, [Command.Quake, 10, Command.Meteor], [Character.Terra]);

// Meteor
// RARE - Quake (10%)
addRecipe(Command.GeoImpact, Command.Quake, MeldGroup.B, Command.Meteor, [Character.Terra]);

// Tornado
// RARE - Aerora (5%), Aeroga (10%)
addRecipe(Command.Magnega, Command.Aeroga, MeldGroup.N, Command.Tornado, [Character.Ventus]);

// Transcendence
addRecipe(Command.MagnetSpiral, Command.ZeroGraviga, MeldGroup.J, Command.Transcendence);

// Mini
addRecipe(Command.Magnega, Command.Magnega, MeldGroup.J, Command.Mini);
addRecipe(Command.Magnega, Command.Bind, MeldGroup.I, Command.Mini);
addRecipe(Command.Magnera, Command.Warp, MeldGroup.N, Command.Mini, [Character.Terra]);

// Blackout
addRecipe(Command.ZeroGravity, Command.Confuse, MeldGroup.M, Command.Blackout);
addRecipe(Command.ZeroGravira, Command.Confuse, MeldGroup.N, Command.Blackout);
addRecipe(Command.ZeroGravira, Command.Poison, MeldGroup.P, Command.Blackout);

// Ignite
addRecipe(Command.Fire, Command.Bind, MeldGroup.A, Command.Ignite);
addRecipe(Command.Fira, Command.Bind, MeldGroup.C, Command.Ignite);

// Stopra
addRecipe(Command.Slow, Command.Slow, MeldGroup.L, Command.Stopra);
addRecipe(Command.Slow, Command.Stop, MeldGroup.K, Command.Stopra);

// Stopga
addRecipe(Command.Stop, Command.Stopra, MeldGroup.I, Command.Stopga);
addRecipe(Command.Stopra, Command.Stopra, MeldGroup.J, Command.Stopga);

// ACTION COMMANDS
// Homing Slide
addRecipe(Command.SlidingDash, Command.Magnera, MeldGroup.P, Command.HomingSlide, [Character.Ventus, Character.Aqua]);
addRecipe(Command.SlidingDash, Command.AirSlide, MeldGroup.C, Command.HomingSlide, [Character.Ventus, Character.Aqua]);
addRecipe(Command.Magnet, Command.AirSlide, MeldGroup.L, Command.HomingSlide, [Character.Ventus, Character.Aqua]);

// Thunder Roll
addRecipe(Command.ThunderSurge, Command.DodgeRoll, MeldGroup.P, [Command.ThunderRoll, 20, Command.SparkRaid], [Character.Ventus]);
addRecipe(Command.Thundaga, Command.DodgeRoll, MeldGroup.L, [Command.ThunderRoll, 20, Command.SparkRaid], [Character.Ventus]);
addRecipe(Command.StunBlock, Command.DodgeRoll, MeldGroup.L, [Command.ThunderRoll, 20, Command.SparkRaid], [Character.Ventus]);

// Firewheel
addRecipe(Command.Firaga, Command.Cartwheel, MeldGroup.B, Command.Firewheel, [Character.Aqua]);
addRecipe(Command.FissionFiraga, Command.Cartwheel, MeldGroup.B, Command.Firewheel, [Character.Aqua]);
addRecipe(Command.FireSurge, Command.Cartwheel, MeldGroup.C, [Command.Firewheel, 10, Command.RagingStorm], [Character.Aqua]);

// Ice Slide
addRecipe(Command.BlizzardEdge, Command.AirSlide, MeldGroup.F, Command.IceSlide);
addRecipe(Command.Blizzaga, Command.AirSlide, MeldGroup.H, Command.IceSlide);

// Fire Glide
addRecipe(Command.FireSurge, Command.Glide, MeldGroup.C, Command.FireGlide, [Character.Ventus]);
addRecipe(Command.Firaga, Command.Glide, MeldGroup.B, Command.FireGlide, [Character.Ventus]);

// Renewal Block
addRecipe(Command.Curaga, Command.Block, MeldGroup.P, Command.RenewalBlock, [Character.Terra, Character.Ventus]);
addRecipe(Command.Esuna, Command.Block, MeldGroup.C, Command.RenewalBlock, [Character.Terra, Character.Ventus]);

// Stun Block
addRecipe(Command.StunEdge, Command.Block, MeldGroup.L, Command.StunBlock, [Character.Terra, Character.Ventus]);
addRecipe(Command.Thundaga, Command.Block, MeldGroup.I, Command.StunBlock, [Character.Terra, Character.Ventus]);

// Poison Block
addRecipe(Command.PoisonEdge, Command.Block, MeldGroup.H, [Command.PoisonBlock, 20, Command.BioBarrage], [Character.Terra, Character.Ventus]);
addRecipe(Command.Poison, Command.Block, MeldGroup.P, [Command.PoisonBlock, 20, Command.BioBarrage], [Character.Terra, Character.Ventus]);

// Renewal Barrier
addRecipe(Command.Curaga, Command.Barrier, MeldGroup.P, Command.RenewalBarrier, [Character.Aqua]);
addRecipe(Command.Esuna, Command.Barrier, MeldGroup.N, Command.RenewalBarrier, [Character.Aqua]);

// Confuse Barrier
addRecipe(Command.ConfusionStrike, Command.Barrier, MeldGroup.C, Command.ConfuseBarrier, [Character.Aqua]);
addRecipe(Command.Confuse, Command.Barrier, MeldGroup.L, Command.ConfuseBarrier, [Character.Aqua]);

// Stop Barrier
addRecipe(Command.Stopga, Command.Barrier, MeldGroup.C, [Command.StopBarrier, 20, Command.TimeSplicer], [Character.Aqua]);

// Payback Fang
addRecipe(Command.SlidingDash, Command.CounterHammer, MeldGroup.P, Command.PaybackFang, [Character.Terra]);

// Payback Raid
addRecipe(Command.SlidingDash, Command.StrikeRaid, MeldGroup.P, Command.PaybackRaid, [Character.Ventus]);

// Payback Surge
addRecipe(Command.SlidingDash, Command.FireSurge, MeldGroup.C, Command.PaybackSurge, [Character.Aqua]);
addRecipe(Command.SlidingDash, Command.ThunderSurge, MeldGroup.L, Command.PaybackSurge, [Character.Aqua]);

// SHOTLOCK COMMANDS
// Lightning Ray
// RARE - Magic Hour (10%), Sonic Blade (10%), Thundaga (10%)

// Meteor Shower
// RARE - Thundaga Shot (15%)

// BioBarrage
// RARE - Poison Edge (5%), Poison Block (20%)