---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Επιστρέφει έναν πίνακα με νέες στήλες στην καθορισμένη σειρά.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Επιστρέφει έναν πίνακα από την είσοδο `table`, με τις στήλες με τη σειρά που καθορίζονται από `columnOrder`. Οι στήλες που δεν έχουν καθοριστεί στη λίστα δεν θα αναδιαταχθούν. Αν η στήλη δεν υπάρχει, προκύπτει σφάλμα, εκτός αν η προαιρετική παράμετρος `missingField` καθορίζει μια εναλλακτική (π.χ. `MissingField.UseNull` ή `MissingField.Ignore`).


## Examples

### Example #1
Εναλλάσσει τη σειρά των στηλών \[Phone\] και \[Name\] στον πίνακα.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Εναλλάσσει τη σειρά των στηλών \[Phone\] και \[Address\] ή χρησιμοποιήστε το "MissingField.Ignore" στον πίνακα. Δεν αλλάζει τον πίνακα, επειδή η στήλη \[Address\] δεν υπάρχει.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
