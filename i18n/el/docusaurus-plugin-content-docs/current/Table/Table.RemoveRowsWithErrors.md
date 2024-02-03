---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Επιστρέφει έναν πίνακα με τις γραμμές που καταργήθηκαν από τον πίνακα εισόδου και περιείχαν ένα σφάλμα σε τουλάχιστον ένα από τα κελιά. Εάν καθορίζεται μια λίστα στηλών, μόνο τα κελιά στις καθορισμένες στήλες ελέγχονται για σφάλματα.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Επιστρέφει έναν πίνακα με τις γραμμές που καταργήθηκαν από τον πίνακα εισόδου και περιείχαν ένα σφάλμα σε τουλάχιστον ένα από τα κελιά. Εάν καθορίζεται μια λίστα στηλών, μόνο τα κελιά στις καθορισμένες στήλες ελέγχονται για σφάλματα.


## Examples

### Example #1 
Καταργεί την τιμή σφάλματος από την πρώτη σειρά.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
