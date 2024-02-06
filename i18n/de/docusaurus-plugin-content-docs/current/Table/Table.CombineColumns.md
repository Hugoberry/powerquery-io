---
title: Table.CombineColumns
---

# Table.CombineColumns


Fasst die angegebenen Spalten unter Verwendung der angegebenen Kombinationsfunktion in einer neuen Spalte zusammen.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Remarks

Fasst die angegebenen Spalten unter Verwendung der angegebenen Kombinationsfunktion in einer neuen Spalte zusammen.


## Examples

### Example #1 
Kombinieren Sie die Nach- und Vornamen in einer neuen Spalte, getrennt durch ein Komma.
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
