---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Με βάση μια στήλη λιστών σε έναν πίνακα, δημιουργήστε ένα αντίγραφο μιας γραμμής για κάθε τιμή της λίστας.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Με βάση το <code>table</code>, όπου <code>column</code> είναι μια λίστα τιμών, διαιρεί τη λίστα σε μια γραμμή για κάθε τιμή. Οι τιμές στις άλλες στήλες αναπαράγονται σε κάθε νέα γραμμή που δημιουργείται.


## Examples

### Example #1 
Διαιρεί τη στήλη λίστας [Name] στον πίνακα.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
