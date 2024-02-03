---
title: List.MinN
---

# List.MinN


## Description

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


## Details

A(z) <code>list</code> listán szereplő legkisebb érték(ek)et adja vissza.    A(z) <code>countOrCondition</code> paraméter megadja a visszaadandó értékek számát vagy a szűrési feltételt. A nem kötelező <code>comparisonCriteria</code> paraméterrel határozható meg a listaértékek összehasonlításának módja. <ul>        <li> <code>list</code>: Az értékek listája.</li>        <li> <code>countOrCondition</code>: Ha egy szám van megadva, a függvény egy legfeljebb <code>countOrCondition</code> elemből álló, növekvő sorrendben rendezett listát ad vissza. Ha egy feltétel van megadva, a függvény a feltételnek kezdetben megfelelő értékek listáját adja vissza. Ha egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket. Ha a paraméter nullértékű, a függvény a lista legkisebb értékét adja vissza.</li><li><code>comparisonCriteria</code>: <i>[Nem kötelező]</i> A nem kötelező <code>comparisonCriteria</code> érték megadásával meghatározható a lista elemeinek összehasonlítási módja. Ha ez a paraméter nullértékű, a függvény az alapértelmezett összehasonlítót használja. </li></ul>


## Examples

### Example #1 
A &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; lista 5 legkisebb elemének megkeresése
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
