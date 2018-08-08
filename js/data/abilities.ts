export enum Ability {
  // Prize abilities
  TreasureMagnet = 'Treasure Magnet',
  HpPrizePlus = 'HP Prize Plus',
  LinkPrizePlus = 'Link Prize Plus',
  LuckyStrike = 'Lucky Strike',

  // Status abilities
  HpBoost = 'HP Boost',
  FireBoost = 'Fire Boost',
  BlizzardBoost = 'Blizzard Boost',
  ThunderBoost = 'Thunder Boost',
  CureBoost = 'Cure Boost',
  ItemBoost = 'Item Boost',
  AttackHaste = 'Attack Haste',
  MagicHaste = 'Magic Haste',
  ComboFBoost = 'Combo F Boost',
  FinishBoost = 'Finish Boost',
  FireScreen = 'Fire Screen',
  BlizzardScreen = 'Blizzard Screen',
  ThunderScreen = 'Thunder Screen',
  DarkScreen = 'Dark Screen',
  ReloadBoost = 'Reload Boost',
  Defender = 'Defender',

  // Support abilities
  ComboPlus = 'Combo Plus',
  AirComboPlus = 'Air Combo Plus',
  ExpChance = 'EXP Chance',
  ExpWalker = 'EXP Walker',
  DamageSyphon = 'Damage Syphon',
  SecondChance = 'Second Chance',
  OnceMore = 'Once More',
  LeafBracer = 'Leaf Bracer',
  LuckBoost = 'Luck Boost'
}

export enum Crystal {
  Shimmering = 'Shimmering', 
  Fleeting = 'Fleeting',
  Pulsing = 'Pulsing',
  Wellspring = 'Wellspring',
  Soothing = 'Soothing',
  Hungry = 'Hungry',
  Abounding = 'Abounding'
}

export enum MeldGroup {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
  O = 'O',
  P = 'P'
}

interface Group {
  [Crystal.Shimmering]: Ability,
  [Crystal.Fleeting]: Ability,
  [Crystal.Pulsing]: Ability,
  [Crystal.Wellspring]: Ability,
  [Crystal.Soothing]: Ability,
  [Crystal.Hungry]: Ability,
  [Crystal.Abounding]: Ability
}

function createGroup(
  shimmering: Ability, fleeting: Ability, pulsing: Ability, wellspring: Ability,
  soothing: Ability, hungry: Ability, abounding: Ability
) {
  return ({
    [Crystal.Shimmering]: shimmering,
    [Crystal.Fleeting]: fleeting,
    [Crystal.Pulsing]: pulsing,
    [Crystal.Wellspring]: wellspring,
    [Crystal.Soothing]: soothing,
    [Crystal.Hungry]: hungry,
    [Crystal.Abounding]: abounding
  });
}

const A = Ability;
const groups = {
  [MeldGroup.A]: createGroup(A.FireBoost,      A.MagicHaste,  A.LeafBracer,   A.AirComboPlus, A.HpBoost,      A.HpPrizePlus,    A.LinkPrizePlus),
  [MeldGroup.B]: createGroup(A.FireBoost,      A.ReloadBoost, A.FinishBoost,  A.OnceMore,     A.DamageSyphon, A.HpPrizePlus,    A.ExpChance),
  [MeldGroup.C]: createGroup(A.FireScreen,     A.AttackHaste, A.FinishBoost,  A.ComboPlus,    A.HpBoost,      A.HpPrizePlus,    A.LinkPrizePlus),
  [MeldGroup.D]: createGroup(A.FireScreen,     A.AttackHaste, A.LeafBracer,   A.ComboPlus,    A.HpBoost,      A.HpPrizePlus,    A.LinkPrizePlus),
  [MeldGroup.E]: createGroup(A.BlizzardBoost,  A.MagicHaste,  A.LeafBracer,   A.ComboPlus,    A.ItemBoost,    A.HpPrizePlus,    A.LuckyStrike),
  [MeldGroup.F]: createGroup(A.BlizzardBoost,  A.ReloadBoost, A.SecondChance, A.AirComboPlus, A.DamageSyphon, A.HpPrizePlus,    A.LuckyStrike),
  [MeldGroup.G]: createGroup(A.BlizzardScreen, A.AttackHaste, A.LeafBracer,   A.AirComboPlus, A.ItemBoost,    A.HpPrizePlus,    A.LuckBoost),
  [MeldGroup.H]: createGroup(A.BlizzardScreen, A.MagicHaste,  A.ComboFBoost,  A.AirComboPlus, A.ItemBoost,    A.HpPrizePlus,    A.ExpWalker),
  [MeldGroup.I]: createGroup(A.ThunderBoost,   A.MagicHaste,  A.ComboFBoost,  A.AirComboPlus, A.HpBoost,      A.TreasureMagnet, A.LinkPrizePlus),
  [MeldGroup.J]: createGroup(A.ThunderBoost,   A.ReloadBoost, A.ComboFBoost,  A.OnceMore,     A.Defender,     A.TreasureMagnet, A.ExpChance),
  [MeldGroup.K]: createGroup(A.ThunderScreen,  A.AttackHaste, A.FinishBoost,  A.ComboPlus,    A.HpBoost,      A.TreasureMagnet, A.LinkPrizePlus),
  [MeldGroup.L]: createGroup(A.ThunderScreen,  A.AttackHaste, A.FinishBoost,  A.ComboPlus,    A.HpBoost,      A.TreasureMagnet, A.LuckyStrike),
  [MeldGroup.M]: createGroup(A.CureBoost,      A.MagicHaste,  A.ComboFBoost,  A.ComboPlus,    A.ItemBoost,    A.TreasureMagnet, A.LuckyStrike),
  [MeldGroup.N]: createGroup(A.CureBoost,      A.ReloadBoost, A.SecondChance, A.ComboPlus,    A.Defender,     A.TreasureMagnet, A.LuckyStrike),
  [MeldGroup.O]: createGroup(A.DarkScreen,     A.AttackHaste, A.FinishBoost,  A.AirComboPlus, A.ItemBoost,    A.TreasureMagnet, A.LuckyStrike),
  [MeldGroup.P]: createGroup(A.DarkScreen,     A.MagicHaste,  A.ComboFBoost,  A.AirComboPlus, A.ItemBoost,    A.TreasureMagnet, A.ExpWalker),
};
export { groups };