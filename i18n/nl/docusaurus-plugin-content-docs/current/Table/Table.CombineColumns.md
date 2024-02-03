---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Voegt met behulp van de opgegeven combinatiefunctie de opgegeven kolommen samen tot een nieuwe kolom.


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

Voegt met behulp van de opgegeven combinatiefunctie de opgegeven kolommen samen tot een nieuwe kolom.


## Examples

### Example #1 
Combineer de voor- en achternamen in een nieuwe kolom, gescheiden door een komma.
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
