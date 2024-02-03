---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Zkombinuje zadané sloupce do nového sloupce pomocí zadané kombinační funkce.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Details

Zkombinuje zadané sloupce do nového sloupce pomocí zadané kombinační funkce.


## Examples

### Example #1 
Zkombinujte příjmení a křestní jména do nového sloupce odděleného čárkou.
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation
