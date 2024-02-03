---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Αντικαθιστά όλες τις καθορισμένες γραμμές με τις παρεχόμενες γραμμές.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Αντικαθιστά όλες τις καθορισμένες γραμμές του <code>table</code> με τις παρεχόμενες γραμμές. Οι γραμμές για αντικατάσταση και οι αντικαταστάσεις καθορίζονται στην <code>replacements</code>, χρησιμοποιώντας τη μορφή \{old, new}.    Μπορεί να καθοριστεί μια προαιρετική παράμετρος <code>equationCriteria</code> για τον έλεγχο της σύγκρισης μεταξύ των γραμμών του πίνακα.


## Examples

### Example #1 
Αντικαθιστά τις γραμμές [a = 1, b = 2] και [a = 2, b = 3] με [a = -1, b = -2],[a = -2, b = -3] στον πίνακα.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
