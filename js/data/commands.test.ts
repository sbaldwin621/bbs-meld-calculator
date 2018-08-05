import { getRecipesForCharacter, getRecipesForIngredient, getRecipesForResult, Character, Command, Recipe } from './commands';
import { MeldGroup } from './abilities';

describe('getRecipesForResult', () => {
  it('gets Terra recipes for Blitz', () => {
    const recipesForBlitz = getRecipesForResult(Character.Terra, Command.Blitz);

    const expected: Recipe[] = [
      {first: Command.QuickBlitz, second: Command.SlotEdge, meldGroup: MeldGroup.O, result: Command.Blitz, percentage: 100},
      {first: Command.StunEdge, second: Command.SlotEdge, meldGroup: MeldGroup.K, result: Command.Blitz, percentage: 100}
    ];
    expect(recipesForBlitz).toHaveLength(expected.length)
    expect(recipesForBlitz).toEqual(expect.arrayContaining(expected));
  });

  it('gets Ventus recipes for Ars Arcanum', () => {
    const recipesForArsArcanum = getRecipesForResult(Character.Ventus, Command.ArsArcanum);

    const expected: Recipe[] = [
      {first: Command.Blitz, second: Command.AerialSlam, meldGroup: MeldGroup.F, result: Command.ArsArcanum, percentage: 100},
      {first: Command.QuickBlitz, second: Command.SlotEdge, meldGroup: MeldGroup.O, result: Command.ArsArcanum, percentage: 10},
      {first: Command.FireStrike, second: Command.Aerora, meldGroup: MeldGroup.C, result: Command.ArsArcanum, percentage: 10},
      {first: Command.QuickBlitz, second: Command.Blizzard, meldGroup: MeldGroup.G, result: Command.ArsArcanum, percentage: 5},
      {first: Command.QuickBlitz, second: Command.Blizzara, meldGroup: MeldGroup.H, result: Command.ArsArcanum, percentage: 5},
      {first: Command.SlidingDash, second: Command.Blizzard, meldGroup: MeldGroup.E, result: Command.ArsArcanum, percentage: 5},
      {first: Command.SlidingDash, second: Command.Blizzara, meldGroup: MeldGroup.G, result: Command.ArsArcanum, percentage: 5},
      {first: Command.PoisonEdge, second: Command.Cura, meldGroup: MeldGroup.P, result: Command.ArsArcanum, percentage: 5},
      {first: Command.BlizzardEdge, second: Command.Cura, meldGroup: MeldGroup.G, result: Command.ArsArcanum, percentage: 5}
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
    const expected = [
      {first: Command.QuickBlitz, second: Command.SlotEdge, meldGroup: MeldGroup.O, result: Command.Blitz, percentage: 90},
      {first: Command.QuickBlitz, second: Command.SlotEdge, meldGroup: MeldGroup.O, result: Command.ArsArcanum, percentage: 10},
      {first: Command.QuickBlitz, second: Command.SlidingDash, meldGroup: MeldGroup.O, result: Command.StrikeRaid, percentage: 100},
      {first: Command.QuickBlitz, second: Command.Poison, meldGroup: MeldGroup.O, result: Command.PoisonEdge, percentage: 95},
      {first: Command.QuickBlitz, second: Command.Poison, meldGroup: MeldGroup.O, result: Command.BioBarrage, percentage: 5},
      {first: Command.QuickBlitz, second: Command.Blizzard, meldGroup: MeldGroup.G, result: Command.BlizzardEdge, percentage: 95},
      {first: Command.QuickBlitz, second: Command.Blizzard, meldGroup: MeldGroup.G, result: Command.ArsArcanum, percentage: 5},
      {first: Command.QuickBlitz, second: Command.Blizzara, meldGroup: MeldGroup.H, result: Command.BlizzardEdge, percentage: 95},
      {first: Command.QuickBlitz, second: Command.Blizzara, meldGroup: MeldGroup.H, result: Command.ArsArcanum, percentage: 5},
      {first: Command.QuickBlitz, second: Command.Confuse, meldGroup: MeldGroup.O, result: Command.ConfusionStrike, percentage: 100},
      {first: Command.QuickBlitz, second: Command.Bind, meldGroup: MeldGroup.K, result: Command.BindingStrike, percentage: 100},
      {first: Command.QuickBlitz, second: Command.Magnera, meldGroup: MeldGroup.K, result: Command.CollisionMagnet, percentage: 80},
      {first: Command.QuickBlitz, second: Command.Magnera, meldGroup: MeldGroup.K, result: Command.MagnetSpiral, percentage: 20},
      {first: Command.QuickBlitz, second: Command.Aero, meldGroup: MeldGroup.G, result: Command.Aerora, percentage: 95},
      {first: Command.QuickBlitz, second: Command.Aero, meldGroup: MeldGroup.G, result: Command.Tornado, percentage: 5},
      {first: Command.QuickBlitz, second: Command.Aerora, meldGroup: MeldGroup.O, result: Command.Aeroga, percentage: 90},
      {first: Command.QuickBlitz, second: Command.Aerora, meldGroup: MeldGroup.O, result: Command.Tornado, percentage: 10},
    ];
    expect(recipesForQuickBlitz).toHaveLength(expected.length);
    expect(recipesForQuickBlitz).toEqual(expect.arrayContaining(expected));
  });
});