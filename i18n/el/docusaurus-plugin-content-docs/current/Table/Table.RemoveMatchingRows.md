---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Καταργεί όλες τις εμφανίσεις των καθορισμένων γραμμών από τον πίνακα.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Καταργεί όλες τις εμφανίσεις των καθορισμένων <code>rows</code> από τον <code>table</code>.    Μπορεί να καθοριστεί μια προαιρετική παράμετρος <code>equationCriteria</code> για τον έλεγχο της σύγκρισης μεταξύ των γραμμών του πίνακα.


## Examples

### Example #1 
Καταργήστε όλες τις γραμμές όπου [a = 1] από τον πίνακα &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
