export enum Ability {
  // Prize abilities
  TreasureMagnet,
  HpPrizePlus,
  LinkPrizePlus,
  LuckyStrike,

  // Status abilities
  HpBoost,
  FireBoost,
  BlizzardBoost,
  ThunderBoost,
  CureBoost,
  ItemBoost,
  AttackHaste,
  MagicHaste,
  ComboFBoost,
  FinishBoost,
  FireScreen,
  BlizzardScreen,
  ThunderScreen,
  DarkScreen,
  ReloadBoost,
  Defender,

  // Support abilities
  ComboPlus,
  AirComboPlus,
  ExpChance,
  ExpWalker,
  DamageSyphon,
  SecondChance,
  OnceMore,
  LeafBracer,
  LuckBoost
}

export enum Crystal {
  Shimmering, 
  Fleeting,
  Pulsing,
  Wellspring,
  Soothing,
  Hungry,
  Abounding
}

export enum MeldGroup {
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P
}

const groups = new Map<MeldGroup, Map<Crystal, Ability>>();

function addGroup(
  name: MeldGroup,
  shimmering: Ability, fleeting: Ability, pulsing: Ability, wellspring: Ability,
  soothing: Ability, hungry: Ability, abounding: Ability
) {
  groups.set(name, new Map([
    [Crystal.Shimmering, shimmering],
    [Crystal.Fleeting, fleeting],
    [Crystal.Pulsing, pulsing],
    [Crystal.Wellspring, wellspring],
    [Crystal.Soothing, soothing],
    [Crystal.Hungry, hungry],
    [Crystal.Abounding, abounding]
  ]));
}

const A = Ability;
addGroup(MeldGroup.A, A.FireBoost,      A.MagicHaste,  A.LeafBracer,   A.AirComboPlus, A.HpBoost,      A.HpPrizePlus,    A.LinkPrizePlus);
addGroup(MeldGroup.B, A.FireBoost,      A.ReloadBoost, A.FinishBoost,  A.OnceMore,     A.DamageSyphon, A.HpPrizePlus,    A.ExpChance);
addGroup(MeldGroup.C, A.FireScreen,     A.AttackHaste, A.FinishBoost,  A.ComboPlus,    A.HpBoost,      A.HpPrizePlus,    A.LinkPrizePlus);
addGroup(MeldGroup.D, A.FireScreen,     A.AttackHaste, A.LeafBracer,   A.ComboPlus,    A.HpBoost,      A.HpPrizePlus,    A.LinkPrizePlus);
addGroup(MeldGroup.E, A.BlizzardBoost,  A.MagicHaste,  A.LeafBracer,   A.ComboPlus,    A.ItemBoost,    A.HpPrizePlus,    A.LuckyStrike);
addGroup(MeldGroup.F, A.BlizzardBoost,  A.ReloadBoost, A.SecondChance,	A.AirComboPlus,	A.DamageSyphon, A.HpPrizePlus,    A.LuckyStrike);
addGroup(MeldGroup.G, A.BlizzardScreen, A.AttackHaste,	A.LeafBracer,   A.AirComboPlus,	A.ItemBoost,    A.HpPrizePlus,    A.LuckBoost);
addGroup(MeldGroup.H, A.BlizzardScreen, A.MagicHaste,	A.ComboFBoost,	A.AirComboPlus,	A.ItemBoost,    A.HpPrizePlus,    A.ExpWalker);
addGroup(MeldGroup.I, A.ThunderBoost,	 A.MagicHaste,	A.ComboFBoost,  A.AirComboPlus,	A.HpBoost,      A.TreasureMagnet, A.LinkPrizePlus);
addGroup(MeldGroup.J, A.ThunderBoost,   A.ReloadBoost,	A.ComboFBoost,  A.OnceMore,     A.Defender,     A.TreasureMagnet, A.ExpChance);
addGroup(MeldGroup.K, A.ThunderScreen,  A.AttackHaste,	A.FinishBoost,  A.ComboPlus,    A.HpBoost,      A.TreasureMagnet, A.LinkPrizePlus);
addGroup(MeldGroup.L, A.ThunderScreen,  A.AttackHaste,	A.FinishBoost,  A.ComboPlus,    A.HpBoost,      A.TreasureMagnet, A.LuckyStrike);
addGroup(MeldGroup.M, A.CureBoost,      A.MagicHaste,	A.ComboFBoost,  A.ComboPlus,    A.ItemBoost,    A.TreasureMagnet, A.LuckyStrike);
addGroup(MeldGroup.N, A.CureBoost,      A.ReloadBoost,	A.SecondChance,	A.ComboPlus,    A.Defender,     A.TreasureMagnet, A.LuckyStrike);
addGroup(MeldGroup.O, A.DarkScreen,     A.AttackHaste,	A.FinishBoost,	A.AirComboPlus, A.ItemBoost,    A.TreasureMagnet, A.LuckyStrike);
addGroup(MeldGroup.P, A.DarkScreen,     A.MagicHaste,	A.ComboFBoost,	A.AirComboPlus, A.ItemBoost,    A.TreasureMagnet, A.ExpWalker);

export { groups };