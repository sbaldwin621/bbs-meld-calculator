import { getRecipesForCharacter, getRecipesForIngredient, getRecipesForResult, Character, Command, Recipe } from './commands';
import { MeldGroup } from './abilities';

describe('getRecipesForResult', () => {
  it('gets Terra recipes for Blitz', () => {
    const recipesForBlitz = getRecipesForResult(Character.Terra, Command.Blitz);

    const expected: Recipe[] = [
      {first: Command.QuickBlitz, second: Command.SlotEdge, meldGroup: MeldGroup.O, command: Command.Blitz},
      {first: Command.StunEdge, second: Command.SlotEdge, meldGroup: MeldGroup.K, command: Command.Blitz}
    ];
    expect(recipesForBlitz).toHaveLength(expected.length)
    expect(recipesForBlitz).toEqual(expect.arrayContaining(expected));
  });

  it('gets Ventus recipes for Ars Arcanum', () => {
    const recipesForArsArcanum = getRecipesForResult(Character.Ventus, Command.ArsArcanum);

    const expected: Recipe[] = [
      {first: Command.Blitz, second: Command.AerialSlam, meldGroup: MeldGroup.F, command: Command.ArsArcanum},
      {first: Command.QuickBlitz, second: Command.SlotEdge, meldGroup: MeldGroup.O, command: Command.Blitz, upgrade: {command: Command.ArsArcanum, percentage: 10}},
      {first: Command.FireStrike, second: Command.Aerora, meldGroup: MeldGroup.C, command: Command.AerialSlam, upgrade: {command: Command.ArsArcanum, percentage: 10}},
      {first: Command.QuickBlitz, second: Command.Blizzard, meldGroup: MeldGroup.G, command: Command.BlizzardEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}},
      {first: Command.QuickBlitz, second: Command.Blizzara, meldGroup: MeldGroup.H, command: Command.BlizzardEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}},
      {first: Command.SlidingDash, second: Command.Blizzard, meldGroup: MeldGroup.E, command: Command.BlizzardEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}},
      {first: Command.SlidingDash, second: Command.Blizzara, meldGroup: MeldGroup.G, command: Command.BlizzardEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}},
      {first: Command.PoisonEdge, second: Command.Cura, meldGroup: MeldGroup.P, command: Command.SlotEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}},
      {first: Command.BlizzardEdge, second: Command.Cura, meldGroup: MeldGroup.G, command: Command.SlotEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}}
    ];
    expect(recipesForArsArcanum).toHaveLength(expected.length);    
    expect(recipesForArsArcanum).toEqual(expect.arrayContaining(expected));
  });

  it('gets Aqua recipes for Meteor Crash', () => {
    const recipesForMeteorCrash = getRecipesForResult(Character.Aqua, Command.MeteorCrash);
    expect(recipesForMeteorCrash).toHaveLength(0);
  })
});

describe('getRecipesForIngredient', () => {
  it('gets recipes for QuickBlitz', () => {
    const recipesForQuickBlitz = getRecipesForIngredient(Character.Ventus, Command.QuickBlitz);
    const expected: Recipe[] = [
      {first: Command.QuickBlitz, second: Command.SlotEdge, meldGroup: MeldGroup.O, command: Command.Blitz, upgrade: {command: Command.ArsArcanum, percentage: 90}},
      {first: Command.QuickBlitz, second: Command.SlidingDash, meldGroup: MeldGroup.O, command: Command.StrikeRaid},
      {first: Command.QuickBlitz, second: Command.Poison, meldGroup: MeldGroup.O, command: Command.PoisonEdge, upgrade: {command: Command.BioBarrage, percentage: 5}},
      {first: Command.QuickBlitz, second: Command.Blizzard, meldGroup: MeldGroup.G, command: Command.BlizzardEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}},
      {first: Command.QuickBlitz, second: Command.Blizzara, meldGroup: MeldGroup.H, command: Command.BlizzardEdge, upgrade: {command: Command.ArsArcanum, percentage: 5}},
      {first: Command.QuickBlitz, second: Command.Confuse, meldGroup: MeldGroup.O, command: Command.ConfusionStrike},
      {first: Command.QuickBlitz, second: Command.Bind, meldGroup: MeldGroup.K, command: Command.BindingStrike},
      {first: Command.QuickBlitz, second: Command.Magnera, meldGroup: MeldGroup.K, command: Command.CollisionMagnet, upgrade: {command: Command.MagnetSpiral, percentage: 20}},
      {first: Command.QuickBlitz, second: Command.Aero, meldGroup: MeldGroup.G, command: Command.Aerora, upgrade: {command: Command.Tornado, percentage: 5}},
      {first: Command.QuickBlitz, second: Command.Aerora, meldGroup: MeldGroup.O, command: Command.Aeroga, upgrade: {command: Command.Tornado, percentage: 10}}
    ];
    expect(recipesForQuickBlitz).toHaveLength(expected.length);
    expect(recipesForQuickBlitz).toEqual(expect.arrayContaining(expected));
  });
});