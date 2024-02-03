---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Nahradí chybové hodnoty v uvedených sloupcích odpovídající zadanou hodnotou.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Nahradí chybové hodnoty v zadaných sloupcích (<code>table</code>) novými hodnotami v seznamu <code>errorReplacement</code>. Formát seznamu je \{\{sloupec1, hodnota1}, ...}. Pro sloupec se může použít jenom jedna nahrazující hodnota. Pokud se sloupec uvede víc než jednou, bude výsledkem chyba.


## Examples

### Example #1 
Nahradí chybovou hodnotu textem „world“ v tabulce.
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
Nahradí chybovou hodnotu ve sloupci A textem „hello“ a ve sloupci B textem „world“ v tabulce.
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
