---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Nahradí chybové hodnoty v zadaných stĺpcoch zodpovedajúcou zadanou hodnotou.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Nahradí chybové hodnoty v zadaných stĺpcoch tabuľky <code>table</code> novými hodnotami zo zoznamu <code>errorReplacement</code>. Formát zoznamu je \{\{column1, value1}, …}. Pre každý stĺpec môže byť určená len jedna náhradná hodnota, viacnásobné zadanie stĺpca spôsobí chybu.


## Examples

### Example #1 
Nahraďte v tabuľke chybovú hodnotu textom „world“.
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
Nahraďte v tabuľke chybovú hodnotu v stĺpci A textom „hello“ a v stĺpci B textom „world“.
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
