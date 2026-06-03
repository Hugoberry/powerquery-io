---
title: Table.MaxN
---

# Table.MaxN


Returnerer den eller de største rækker ved hjælp af de angivne kriterier.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Returnerer den eller de største rækker i `table` med den angivne `comparisonCriteria`. Når rækkerne er sorteret, skal parameteren `countOrCondition` angives for at filtrere resultatet yderligere. Bemærk, at sorteringsalgoritmen ikke kan garantere et fast sorteret resultat. Parameteren `countOrCondition` kan anvendes på flere måder:

-   Hvis der er angivet et tal, returneres der en liste på op til `countOrCondition` elementer i stigende rækkefølge.
-   Hvis der er angivet en betingelse, returneres der en liste over elementer, der i starten opfylder betingelsen. Når et element ikke opfylder betingelsen, tages der ikke flere elementer med i betragtning.


## Examples

### Example #1
Find rækken med den største værdi i kolonnen \[a\] med betingelsen \[a\] > 0 i tabellen. Rækkerne sorteres, før filteret anvendes.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2
Find rækken med den største værdi i kolonnen \[a\] med betingelsen \[b\] > 0 i tabellen. Rækkerne sorteres, før filteret anvendes.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
