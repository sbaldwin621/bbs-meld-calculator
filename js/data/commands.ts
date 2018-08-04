import { MeldGroup } from './abilities';

export enum Character {
  Terra, Ventus, Aqua
}

export enum Command {
  // Attack
  QuickBlitz,
  Blitz,
  MeteorCrash,
  MagicHour,
  SlidingDash,
  FireDash,
  DarkHaze,
  SonicBlade,
  ChaosBlade,
  Zantetsuken,
  StrikeRaid,
  FreezeRaid,
  TreasureRaid,
  SparkRaid,
  WindRaid,
  FireSurge,
  BarrierSurge,
  ThunderSurge,
  AerialSlam,
  ArsSolum,
  ArsArcanum,
  TimeSplicer,
  PoisonEdge,
  WishingEdge,
  BlizzardEdge,
  StunEdge,
  SlotEdge,
  FireStrike,
  ConfusionStrike,
  BindingStrike,
  TornadoStrike,
  BrutalBlast,
  MagnetSpiral,
  Salvation,
  Windcutter,
  LimitStorm,
  CollisionMagnet,
  GeoImpact,
  Sacrifice,
  BreakTime,

  // Magic
  Fire,
  Fira,
  Firaga,
  DarkFiraga,
  FissionFiraga,
  CrawlingFire,
  TripleFiraga,
  Blizzard,
  Blizzara,
  Blizzaga,
  TripleBlizzaga,
  Thunder,
  Thundara,
  Thundaga,
  ThundagaShot,
  Cure,
  Cura,
  Curaga,
  Esuna,
  MineShield,
  MineSquare,
  SeekerMine,
  ZeroGravity,
  ZeroGravira,
  ZeroGraviga,
  Magnet,
  Magnera,
  Magnega,
  MunnyMagnet,
  EnergyMagnet,
  DLinkMagnet,
  Aero,
  Aerora,
  Aeroga,
  Faith,
  Warp,
  DeepFreeze,
  Glacier,
  IceBarrage,
  FiragaBurst,
  RagingStorm,
  Tornado,
  MegaFlare,
  Quake,
  Meteor,
  Transcendence,
  Mini,
  Blackout,
  Ignite,
  Confuse,
  Bind,
  Poison,
  Slow,
  Stop,
  Stopra,
  Stopga,
  Sleep,
  WrathOfDarkness,

  // Action
  Jump,
  HighJump,
  DodgeRoll,
  ThunderRoll,
  Cartwheel,
  Firewheel,
  AirSlide,
  IceSlide,
  Reversal,
  Glide,
  Superglide,
  FireGlide,
  SonicImpact,
  Slide,
  HomingSlide,
  Teleport,
  Doubleflight,
  Block,
  RenewalBlock,
  FocusBlock,
  StunBlock,
  PoisonBlock,
  Barrier,
  RenewalBarrier,
  FocusBarrier,
  ConfuseBarrier,
  StopBarrier,

  // Reprisal
  CounterRush,
  ReversalSlash,
  PaybackRaid,
  CounterHammer,
  PaybackFang,
  CounterBlast,
  PaybackSurge,
  AerialRecovery,

  // Shotlock
  LightningRay,
  MeteorShower,
  BioBarrage
}

function addRecipe(firstIngredient: Command, secondIngredient: Command, meldGroup: MeldGroup, results: [Command, number][] | Command, characters: Character[] = [Character.Terra, Character.Ventus, Character.Aqua]) {

}

// Blitz
addRecipe(Command.QuickBlitz, Command.SlotEdge, MeldGroup.O, [[Command.Blitz, 90], [Command.ArsArcanum, 10]], [Character.Ventus]);
addRecipe(Command.QuickBlitz, Command.SlotEdge, MeldGroup.O, Command.Blitz, [Character.Terra, Character.Aqua]);
addRecipe(Command.BarrierSurge, Command.WishingEdge, MeldGroup.P, [[Command.Blitz, 90], [Command.TimeSplicer, 10]], [Character.Aqua]);
addRecipe(Command.StunEdge, Command.SlotEdge, MeldGroup.K, [[Command.Blitz, 90], [Command.TimeSplicer, 10]], [Character.Ventus, Character.Aqua]);
addRecipe(Command.StunEdge, Command.SlotEdge, MeldGroup.K, Command.Blitz, [Character.Terra]);

// Meteor Crash
addRecipe(Command.Blitz, Command.Quake, MeldGroup.N, Command.MeteorCrash, [Character.Terra]);
addRecipe(Command.FireStrike, Command.BrutalBlast, MeldGroup.D, Command.MeteorCrash, [Character.Terra]);

// Magic Hour
addRecipe(Command.Blitz, Command.ZeroGraviga, MeldGroup.O, [[Command.MagicHour, 90], [Command.MeteorShower, 10]], [Character.Aqua]);
addRecipe(Command.BarrierSurge, Command.Aeroga, MeldGroup.N, [[Command.MagicHour, 90], [Command.LightningRay, 10]], [Character.Aqua]);

// Fire Dash
addRecipe(Command.SlidingDash, Command.Fire, MeldGroup.D, Command.FireDash);
addRecipe(Command.SlidingDash, Command.Fira, MeldGroup.C, Command.FireDash);
addRecipe(Command.ConfusionStrike, Command.Fire, MeldGroup.D, Command.FireDash);

// Dark Haze
addRecipe(Command.FireDash, Command.ZeroGravira, MeldGroup.D, Command.DarkHaze, [Character.Terra]);
addRecipe(Command.FireDash, Command.Blackout, MeldGroup.A, Command.DarkHaze, [Character.Terra]);
addRecipe(Command.FireSurge, Command.ZeroGravity, MeldGroup.C, Command.DarkHaze, [Character.Terra]);

// Sonic Blade
addRecipe(Command.Blitz, Command.DarkHaze, MeldGroup.D, [[Command.SonicBlade, 90], [Command.LightningRay, 10]], [Character.Terra]);
addRecipe(Command.Blitz, Command.AirSlide, MeldGroup.N, [[Command.SonicBlade, 90], [Command.LightningRay, 10]]);
addRecipe(Command.FireDash, Command.ThunderSurge, MeldGroup.N, [[Command.SonicBlade, 90], [Command.LightningRay, 10]]);

// Chaos Blade
addRecipe(Command.DarkHaze, Command.SonicBlade, MeldGroup.B, [[Command.ChaosBlade, 80], [Command.ArsSolum, 20]], [Character.Terra]);

// Zantetsuken
addRecipe(Command.DarkHaze, Command.Stopga, MeldGroup.B, [[Command.Zantetsuken, 80], [Command.ArsSolum, 20]], [Character.Terra]);
addRecipe(Command.SonicBlade, Command.Stopga, MeldGroup.F, [[Command.Zantetsuken, 80], [Command.ArsSolum, 20]], [Character.Terra]);

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
addRecipe(Command.ConfusionStrike, Command.Thundara, MeldGroup.I, [[Command.ThunderSurge, 95], [Command.ArsSolum, 5]], [Character.Terra]);

// Aerial Slam
addRecipe(Command.FireDash, Command.HighJump, MeldGroup.A, Command.AerialSlam);
addRecipe(Command.FireSurge, Command.Aero, MeldGroup.D, Command.AerialSlam);
addRecipe(Command.FireStrike, Command.Aerora, MeldGroup.C, Command.AerialSlam, [Character.Terra, Character.Aqua]);
addRecipe(Command.FireStrike, Command.Aerora, MeldGroup.C, [[Command.AerialSlam, 90], [Command.ArsArcanum, 10]], [Character.Ventus]);

// Ars Solum
// RARE MELD ONLY

// Ars Arcanum
// LOTS OF RARE MELDS
addRecipe(Command.Blitz, Command.AerialSlam, MeldGroup.F, Command.ArsArcanum, [Character.Ventus]);

// Time Splicer
// RARE MELDS
addRecipe(Command.AerialSlam, Command.Stopga, MeldGroup.F, Command.TimeSplicer, [Character.Ventus, Character.Aqua]);

// Poison Edge
addRecipe(Command.QuickBlitz, Command.Poison, MeldGroup.O, [[Command.PoisonEdge, 95], [Command.BioBarrage, 5]]);
addRecipe(Command.SlidingDash, Command.Poison, MeldGroup.K, [[Command.PoisonEdge, 95], [Command.BioBarrage, 5]]);
addRecipe(Command.StrikeRaid, Command.Poison, MeldGroup.D, [[Command.PoisonEdge, 95], [Command.BioBarrage, 5]]);

// Wishing Edge
addRecipe(Command.StrikeRaid, Command.BarrierSurge, MeldGroup.O, Command.WishingEdge, [Character.Aqua]);
addRecipe(Command.StunEdge, Command.BarrierSurge, MeldGroup.K, Command.WishingEdge, [Character.Aqua]);
addRecipe(Command.StunEdge, Command.BindingStrike, MeldGroup.J, Command.WishingEdge, [Character.Aqua]);

// Blizzard Edge
addRecipe(Command.QuickBlitz, Command.Blizzard, MeldGroup.G, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.QuickBlitz, Command.Blizzard, MeldGroup.G, [[Command.BlizzardEdge, 95], [Command.ArsArcanum, 5]], [Character.Ventus]);
addRecipe(Command.QuickBlitz, Command.Blizzara, MeldGroup.H, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.QuickBlitz, Command.Blizzara, MeldGroup.H, [[Command.BlizzardEdge, 95], [Command.ArsArcanum, 5]], [Character.Ventus]);
addRecipe(Command.SlidingDash, Command.Blizzard, MeldGroup.E, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.SlidingDash, Command.Blizzard, MeldGroup.E, [[Command.BlizzardEdge, 95], [Command.ArsArcanum, 5]], [Character.Ventus]);
addRecipe(Command.SlidingDash, Command.Blizzara, MeldGroup.G, Command.BlizzardEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.SlidingDash, Command.Blizzara, MeldGroup.G, [[Command.BlizzardEdge, 95], [Command.ArsArcanum, 5]], [Character.Ventus]);

// Stun Edge
addRecipe(Command.SlidingDash, Command.Thunder, MeldGroup.K, Command.StunEdge, [Character.Ventus, Character.Aqua]);
addRecipe(Command.SlidingDash, Command.Thunder, MeldGroup.K, [[Command.StunEdge, 95], [Command.ArsSolum, 5]], [Character.Terra]);
addRecipe(Command.StrikeRaid, Command.Thunder, MeldGroup.L, Command.StunEdge, [Character.Ventus, Character.Aqua]);
addRecipe(Command.StrikeRaid, Command.Thunder, MeldGroup.L, [[Command.StunEdge, 95], [Command.ArsSolum, 5]], [Character.Terra]);
addRecipe(Command.StrikeRaid, Command.Thundara, MeldGroup.K, Command.StunEdge, [Character.Ventus, Character.Aqua]);
addRecipe(Command.StrikeRaid, Command.Thundara, MeldGroup.K, [[Command.StunEdge, 95], [Command.ArsSolum, 5]], [Character.Terra]);

// Slot Edge
addRecipe(Command.WishingEdge, Command.Cure, MeldGroup.O, Command.SlotEdge, [Character.Aqua]);
addRecipe(Command.PoisonEdge, Command.Cura, MeldGroup.P, Command.SlotEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.PoisonEdge, Command.Cura, MeldGroup.P, [[Command.SlotEdge, 95], [Command.ArsArcanum, 5]], [Character.Ventus]);
addRecipe(Command.BlizzardEdge, Command.Cura, MeldGroup.G, Command.SlotEdge, [Character.Terra, Character.Aqua]);
addRecipe(Command.BlizzardEdge, Command.Cura, MeldGroup.G, [[Command.SlotEdge, 95], [Command.ArsArcanum, 5]], [Character.Ventus]);
addRecipe(Command.Curaga, Command.RenewalBlock, MeldGroup.N, [[Command.SlotEdge, 90], [Command.BreakTime, 10]], [Character.Terra, Character.Ventus]);
addRecipe(Command.Curaga, Command.FocusBlock, MeldGroup.P, [[Command.SlotEdge, 90], [Command.BreakTime, 10]], [Character.Terra, Character.Ventus]);
addRecipe(Command.Curaga, Command.RenewalBarrier, MeldGroup.N, [[Command.SlotEdge, 90], [Command.BreakTime, 10]], [Character.Aqua]);
addRecipe(Command.Curaga, Command.FocusBarrier, MeldGroup.P, [[Command.SlotEdge, 90], [Command.BreakTime, 10]], [Character.Aqua]);

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
addRecipe(Command.StunEdge, Command.MineShield, MeldGroup.O, [[Command.BrutalBlast, 70], [Command.Quake, 30]], [Character.Terra]);
addRecipe(Command.BindingStrike, Command.MineSquare, MeldGroup.L, [[Command.BrutalBlast, 70], [Command.Quake, 30]], [Character.Terra]);

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
addRecipe(Command.QuickBlitz, Command.Magnera, MeldGroup.K, [[Command.CollisionMagnet, 80], [Command.MagnetSpiral, 20]]);
addRecipe(Command.StunEdge, Command.Magnera, MeldGroup.L, [[Command.CollisionMagnet, 80], [Command.MagnetSpiral, 20]]);
addRecipe(Command.ZeroGravira, Command.Magnet, MeldGroup.I, [[Command.CollisionMagnet, 80], [Command.MagnetSpiral, 20]]);

// Geo Impact
addRecipe(Command.BrutalBlast, Command.BrutalBlast, MeldGroup.N, [[Command.GeoImpact, 70], [Command.Quake, 30]], [Character.Terra]);

// Sacrifice
addRecipe(Command.DarkHaze, Command.Warp, MeldGroup.B, Command.Sacrifice, [Character.Terra]);
addRecipe(Command.PoisonEdge, Command.Warp, MeldGroup.D, Command.Sacrifice, [Character.Terra]);

// ORPHANS
addRecipe(Command.ThunderSurge, Command.DodgeRoll, MeldGroup.P, [[???], [Command.SparkRaid, 20]], [Character.Ventus]);
addRecipe(Command.Thundaga, Command.DodgeRoll, MeldGroup.L, [[???], [Command.SparkRaid, 20]], [Character.Ventus]);
addRecipe(Command.StunBlock, Command.DodgeRoll, MeldGroup.L, [[???], [Command.SparkRaid, 20]], [Character.Ventus]);

addRecipe(Command.Stopga, Command.Barrier, MeldGroup.C, [[???], [Command.TimeSplicer, 20]], [Character.Aqua]);
