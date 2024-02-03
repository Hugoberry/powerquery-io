---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

V navedenih stolpcih zamenja vrednosti z napakami z ustrezno navedeno vrednostjo.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

V navedenih stolpcih tabele <code>table</code> zamenja vrednosti z napakami z novimi vrednostmi seznama <code>errorReplacement</code>. Oblika seznama je \{\{column1, value1}, …}. Za stolpec imate lahko le eno vrednost zamenjave; če stolpec določite večkrat, bo prišlo do napake.


## Examples

### Example #1 
Vrednost napake zamenjajte z besedo &#34;svet&#34; v tabeli.
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
Vrednost napake v stolpcu A zamenjajte z besedo &#34;živijo&#34; in v stolpcu B z besedo &#34;svet&#34; v tabeli.
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
