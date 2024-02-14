---
title: Table.CombineColumns
---

# Table.CombineColumns


Belirtilen sütunları belirtilen birleştirici işlevi kullanarak yeni bir sütun halinde birleştirir.


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

Belirtilen sütunları belirtilen birleştirici işlevi kullanarak yeni bir sütun halinde birleştirir.


## Examples

### Example #1 
Soyadlarını ve adları virgülle ayırarak yeni bir sütunda birleştirin.
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
