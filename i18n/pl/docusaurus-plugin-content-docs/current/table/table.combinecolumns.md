---
title: Table.CombineColumns
---

# Table.CombineColumns


Łączy określone kolumny w nową kolumnę, używając określonej funkcji łączenia.


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

Łączy określone kolumny w nową kolumnę, używając określonej funkcji łączenia.


## Examples

### Example #1 
Połącz nazwisko i imię w nową kolumnę, oddzielając je przecinkiem.
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
