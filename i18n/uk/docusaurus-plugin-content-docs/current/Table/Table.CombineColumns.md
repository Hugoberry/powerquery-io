---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Об&#39;єднує вказані стовпці в новий стовпець за допомогою вказаної функції об&#39;єднання.


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

Об'єднує вказані стовпці в новий стовпець за допомогою вказаної функції об'єднання.


## Examples

### Example #1 
Об’єднання прізвищ та імен у новому стовпці з використанням коми як роздільника.
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
