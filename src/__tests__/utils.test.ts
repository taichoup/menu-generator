import { describe, it, expect, afterEach, vi } from 'vitest';
import { getCurrentSeason, generateGroceries } from '../utils';
import { Seasons, Dish, DifficultyLevel } from '../assets/plats';
import { Condiments, Legumes, Viande } from '../assets/ingredients';

const makeDish = (ingredients: Dish['ingredients']): Dish => ({
  name: 'test',
  ingredients,
  difficulty: DifficultyLevel.CASUAL,
  course: 'plat',
  seasons: 'all',
});

describe('getCurrentSeason', () => {
  afterEach(() => vi.restoreAllMocks());

  const mockMonth = (month: number) =>
    vi.spyOn(Date.prototype, 'getMonth').mockReturnValue(month);

  it.each([
    [0, Seasons.WINTER],
    [1, Seasons.WINTER],
    [2, Seasons.WINTER],
    [3, Seasons.WINTER],
    [4, Seasons.SPRING],
    [5, Seasons.SPRING],
    [6, Seasons.SPRING],
    [7, Seasons.SUMMER],
    [8, Seasons.SUMMER],
    [9, Seasons.SUMMER],
    [10, Seasons.FALL],
    [11, Seasons.FALL],
  ])('month %i → %s', (month, expected) => {
    mockMonth(month);
    expect(getCurrentSeason()).toBe(expected);
  });
});

describe('generateGroceries', () => {
  it('returns empty buckets for a dish with no ingredients', () => {
    const result = generateGroceries([makeDish([])]);
    expect(result.légumes).toEqual([]);
    expect(result.viande).toEqual([]);
    expect(result.condiments).toEqual([]);
  });

  it('categorizes an ingredient into the correct bucket', () => {
    const result = generateGroceries([makeDish([Legumes.CAROTTES, Viande.POULET])]);
    expect(result.légumes).toEqual([{ name: Legumes.CAROTTES, count: 1 }]);
    expect(result.viande).toEqual([{ name: Viande.POULET, count: 1 }]);
  });

  it('increments count when the same ingredient appears in multiple dishes', () => {
    const result = generateGroceries([
      makeDish([Legumes.CAROTTES]),
      makeDish([Legumes.CAROTTES]),
    ]);
    expect(result.légumes).toEqual([{ name: Legumes.CAROTTES, count: 2 }]);
  });

  it('increments count when the same ingredient appears twice in one dish', () => {
    const result = generateGroceries([makeDish([Condiments.AIL, Condiments.AIL])]);
    expect(result.condiments).toEqual([{ name: Condiments.AIL, count: 2 }]);
  });

  it('aggregates ingredients across multiple dishes without mixing buckets', () => {
    const result = generateGroceries([
      makeDish([Legumes.CAROTTES, Condiments.AIL]),
      makeDish([Viande.POULET, Condiments.AIL]),
    ]);
    expect(result.légumes).toEqual([{ name: Legumes.CAROTTES, count: 1 }]);
    expect(result.condiments).toEqual([{ name: Condiments.AIL, count: 2 }]);
    expect(result.viande).toEqual([{ name: Viande.POULET, count: 1 }]);
  });

  it('silently ignores raw string ingredients not in any enum', () => {
    const result = generateGroceries([makeDish(['ingrédient inconnu'])]);
    Object.values(result).forEach(bucket => expect(bucket).toEqual([]));
  });

  it('returns empty buckets for an empty menu list', () => {
    const result = generateGroceries([]);
    Object.values(result).forEach(bucket => expect(bucket).toEqual([]));
  });
});
