---
title: List.MinN
---

# List.MinN


A listán szereplő legkisebb érték(ek)et adja vissza. Megadható a visszaadandó értékek száma vagy egy szűrési feltétel.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

A(z) `list` listán szereplő legkisebb érték(ek)et adja vissza. A(z) `countOrCondition` paraméter megadja a visszaadandó értékek számát vagy a szűrési feltételt. A nem kötelező `comparisonCriteria` paraméterrel határozható meg a listaértékek összehasonlításának módja.

-   `list`: Az értékek listája.
-   `countOrCondition`: Ha egy szám van megadva, a függvény egy legfeljebb `countOrCondition` elemből álló, növekvő sorrendben rendezett listát ad vissza. Ha egy feltétel van megadva, a függvény a feltételnek kezdetben megfelelő értékek listáját adja vissza. Ha egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket. Ha a paraméter nullértékű, a függvény a lista legkisebb értékét adja vissza.
-   `comparisonCriteria`: *(Nem kötelező)* Megadható egy nem kötelező `comparisonCriteria` érték a lista elemeinek összehasonlításához. Ha ez a paraméter null értékű, a függvény az alapértelmezett összehasonlítót használja.


## Examples

### Example #1
A `{3, 4, 5, -1, 7, 8, 2}` lista 5 legkisebb elemének megkeresése
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
