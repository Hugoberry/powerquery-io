---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Combina le colonne specificate in una nuova colonna utilizzando la funzione di combinatore specificata.


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

Combina le colonne specificate in una nuova colonna utilizzando la funzione di combinatore specificata.


## Examples

### Example #1 
Combinare i cognomi e i nomi in una nuova colonna, separati da una virgola.
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
