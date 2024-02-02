---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Associe les colonnes spécifiées dans une nouvelle colonne à l&#39;aide de la fonction d&#39;association spécifiée.


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

Associe les colonnes spécifiées dans une nouvelle colonne à l'aide de la fonction d'association spécifiée.


## Examples

### Example #1 
Combinez le nom et le prénom dans une nouvelle colonne, en les séparant par une virgule.
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
