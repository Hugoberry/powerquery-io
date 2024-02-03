---
title: Table.MinN
---

# Table.MinN


## Description

Returnerer den eller de mindste rækker ved hjælp af de angivne kriterier.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Returnerer den eller de mindste rækker i <code>table</code> med den angivne <code>comparisonCriteria</code>. Når rækkerne er sorteret, skal parameteren <code>countOrCondition</code> angives for at filtrere resultatet yderligere. Bemærk, at sorteringsalgoritmen ikke kan garantere et fast sorteret resultat. Parameteren <code>countOrCondition</code> kan anvendes på flere måder:    <ul>        <li> Hvis der er angivet et tal, returneres der en liste på op til <code>countOrCondition</code> elementer i stigende rækkefølge. </li>        <li> Hvis der er angivet en betingelse, returneres der en liste over elementer, der i starten opfylder betingelsen. Når et element ikke opfylder betingelsen, tages der ikke flere elementer med i betragtning. </li> </ul>


## Examples

### Example #1 
Find rækken med den mindste værdi i kolonnen [a] med betingelsen [a] &lt; 3 i tabellen. Rækkerne sorteres, før filteret anvendes.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Find rækken med den mindste værdi i kolonnen [a] med betingelsen [b] &lt; 0 i tabellen. Rækkerne sorteres, før filteret anvendes.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
