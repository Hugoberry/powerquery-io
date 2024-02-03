---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Συνδυάζει τις καθορισμένες στήλες σε μια νέα στήλη χρησιμοποιώντας την καθορισμένη συνάρτηση συνδυασμού.


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

Συνδυάζει τις καθορισμένες στήλες σε μια νέα στήλη χρησιμοποιώντας την καθορισμένη συνάρτηση συνδυασμού.


## Examples

### Example #1 
Συνδυάστε το επώνυμο και τα ονόματα σε μια νέα στήλη, διαχωρισμένα με κόμμα.
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
