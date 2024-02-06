---
title: Table.CombineColumns
---

# Table.CombineColumns


Kombinerar de angivna kolumnerna till en ny kolumn som använder den angivna kombinationsfunktionen.


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

Kombinerar de angivna kolumnerna till en ny kolumn som använder den angivna kombinationsfunktionen.


## Examples

### Example #1 
Kombinera efter namnen i en ny kolumn, avgränsade med kommatecken.
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
