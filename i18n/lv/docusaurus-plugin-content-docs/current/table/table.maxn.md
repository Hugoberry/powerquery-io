---
title: Table.MaxN
---

# Table.MaxN


Tiek atgriezta(-s) lielākā(-s) rinda(-s), izmantojot norādītos kritērijus.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Atgriež tabulas `table` rindas ar lielāko vērtību, ņemot vērā parametru `comparisonCriteria`. Pēc rindu kārtošanas ir jānorāda parametrs `countOrCondition`, lai precīzāk filtrētu rezultātu. Ņemiet vērā, ka kārtošanas algoritms nevar nodrošināt nemainīgu kārtošanas rezultātu. Parametru `countOrCondition` var norādīt dažādos veidos.

-   Ja ir norādīts skaitlis, tiek atgriezts augošā secībā sakārtots saraksts, kurā vienumu skaits nepārsniedz parametra `countOrCondition` vērtību.
-   Ja ir norādīts nosacījums, tiek atgriezts to vienumu saraksts, kuri sākotnēji atbilst nosacījumam. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek pārbaudīti.


## Examples

### Example #1
Atrodiet tabulā rindu ar lielāko vērtību kolonnā \[a\] ar nosacījumu \[a\] > 0. Ņemiet vērā, ka rindas tiek kārtotas pirms filtra lietošanas.
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
Atrodiet tabulā rindu ar lielāko vērtību kolonnā \[a\] ar nosacījumu \[b\] > 0. Ņemiet vērā, ka rindas tiek kārtotas pirms filtra lietošanas.
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
