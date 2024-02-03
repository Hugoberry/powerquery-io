---
title: Table.MinN
---

# Table.MinN


## Description

Tiek atgriezta(-s) mazākā(-s) rinda(-s), izmantojot norādītos kritērijus.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Tiek atgrieztas tabulas <code>table</code> rindas ar mazāko vērtību, ņemot vērā parametru <code>comparisonCriteria</code>. Pēc rindu kārtošanas ir jānorāda parametrs <code>countOrCondition</code>, lai precīzāk filtrētu rezultātu. Ņemiet vērā, ka kārtošanas algoritms nevar nodrošināt nemainīgu kārtošanas rezultātu. Parametru <code>countOrCondition</code> var norādīt dažādos veidos.    <ul>        <li> Ja ir norādīts skaitlis, tiek atgriezts augošā secībā sakārtots saraksts, kurā vienumu skaits nepārsniedz parametra <code>countOrCondition</code> vērtību. </li>        <li> Ja ir norādīts nosacījums, tiek atgriezts to vienumu saraksts, kuri sākotnēji atbilst nosacījumam. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek pārbaudīti. </li>  </ul>


## Examples

### Example #1 
Atrodiet tabulā rindu ar mazāko vērtību kolonnā [a] ar nosacījumu [a] &lt; 3. Ņemiet vērā, ka rindas tiek kārtotas pirms filtra lietošanas.
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
Atrodiet tabulā rindu ar mazāko vērtību kolonnā [a] ar nosacījumu [b] &lt; 0. Ņemiet vērā, ka rindas tiek kārtotas pirms filtra lietošanas.
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
