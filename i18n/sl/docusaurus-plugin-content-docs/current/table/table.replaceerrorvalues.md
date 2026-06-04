---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


V navedenih stolpcih zamenja vrednosti z napakami z ustrezno navedeno vrednostjo.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

V navedenih stolpcih tabele `table` zamenja vrednosti z napakami z novimi vrednostmi seznama `errorReplacement`. Oblika seznama je \{\{column1, value1\}, …\}. Za stolpec imate lahko le eno vrednost zamenjave; če stolpec določite večkrat, bo prišlo do napake.


## Examples

### Example #1
Vrednost napake zamenjajte z besedo"svet"v tabeli.
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
Vrednost napake v stolpcu A zamenjajte z besedo"živijo"in v stolpcu B z besedo"svet"v tabeli.
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
