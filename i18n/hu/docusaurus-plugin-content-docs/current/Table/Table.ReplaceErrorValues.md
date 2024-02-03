---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

A megadott oszlopokban szereplő hibaértékek cseréje a megadott értékekre.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

A(z) <code>table</code> paraméterben megadott oszlopokban szereplő hibaértékek cseréje a(z) <code>errorReplacement</code> listabeli értékekre. A listát \{\{column1, value1}, …} formátumban kell megadni. Oszloponként csak egy érték engedélyezett, és egy oszlop többszöri megadása hibához vezet.


## Examples

### Example #1 
Lecseréli a táblában szereplő hibaértékeket a „world” szóra.
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
Lecseréli a tábla A oszlopában szereplő hibaértékeket a „hello” szóra, a B oszlopában lévő hibaértékeket pedig a „world” szóra.
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
