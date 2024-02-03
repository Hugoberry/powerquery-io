---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Μετασχηματίζει τις γραμμές του πίνακα χρησιμοποιώντας την καθορισμένη συνάρτηση μετασχηματισμού.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Δημιουργεί μια <code>list</code> εφαρμόζοντας τη λειτουργία <code>transform</code> σε κάθε γραμμή του <code>table</code>.


## Examples

### Example #1 
Μετασχηματίστε τις γραμμές ενός πίνακα σε μια λίστα αριθμών.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Μετασχηματίστε τις γραμμές ενός αριθμητικού πίνακα σε εγγραφές κειμένου.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
