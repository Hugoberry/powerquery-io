---
title: List.MaxN
---

# List.MaxN


## Description

A listán szereplő legnagyobb érték(ek)et adja vissza. Meg kell adni a visszaadandó értékek számát vagy egy szűrési feltételt.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

A <code>list</code> listán szereplő legnagyobb érték(ek)et adja vissza.    A sorok rendezése után megadhatók nem kötelező paraméterek az eredmény további szűréséhez. A <code>countOrCondition</code> nem kötelező paraméter megadja a visszaadandó értékek számát vagy a szűrési feltételt. A nem kötelező <code>comparisonCriteria</code> paraméterrel határozható meg a listaértékek összehasonlításának módja. <ul>        <li> <code>list</code>: Az értékek listája.</li>        <li> <code>countOrCondition</code>: Ha egy szám van megadva, a függvény egy legfeljebb <code>countOrCondition</code> elemből álló, növekvő sorrendben rendezett listát ad vissza. Ha egy feltétel van megadva, a függvény a feltételnek kezdetben megfelelő elemek listáját adja vissza. Ha egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket.</li><li><code>comparisonCriteria</code>: <i>[Nem kötelező]</i> A nem kötelező <code>comparisonCriteria</code> érték megadásával meghatározható a lista elemeinek összehasonlítási módja. Ha ez a paraméter nullértékű, a függvény az alapértelmezett összehasonlítót használja. </li></ul>



## Category
List.Ordering
