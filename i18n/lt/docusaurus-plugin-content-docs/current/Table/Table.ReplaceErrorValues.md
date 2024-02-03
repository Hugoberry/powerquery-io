---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Pakeičia nurodytų stulpelių klaidų reikšmes nurodyta reikšme.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Pakeičia <code>table</code> nurodytų stulpelių klaidų reikšmes naujomis sąrašo <code>errorReplacement</code> reikšmėmis. Sąrašo formatas yra \{\{column1, value1}, …}. Gali būti tik viena stulpelio pakaitinė reikšmė. Kelis kartus nurodžius stulpelį įvyks klaida.


## Examples

### Example #1 
Pakeiskite klaidos reikšmę tekstu „world“ lentelėje.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
Pakeiskite klaidos reikšmę lentelės A stulpelyje tekstu „hello“, o B stulpelyje – „world“.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
