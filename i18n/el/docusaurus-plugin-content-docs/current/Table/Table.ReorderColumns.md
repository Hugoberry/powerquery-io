---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Επιστρέφει έναν πίνακα με νέες στήλες στην καθορισμένη σειρά.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Επιστρέφει έναν πίνακα από την είσοδο <code>table</code>, με τις στήλες με τη σειρά που καθορίζονται από το <code>columnOrder</code>. Οι στήλες που δεν έχουν καθοριστεί στη λίστα δεν θα αναδιαταχθούν.     Εάν η στήλη δεν υπάρχει, παρουσιάζεται εξαίρεση εκτός αν η προαιρετική παράμετρος <code>missingField</code> καθορίζει μια εναλλακτική (για παράδειγμα, <code>MissingField.UseNull</code> ή <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Εναλλάσσει τη σειρά των στηλών [Phone] και [Name] στον πίνακα.
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
Εναλλάσσει τη σειρά των στηλών [Phone] και [Address] ή χρησιμοποιήστε το &#34;MissingField.Ignore&#34; στον πίνακα. Δεν αλλάζει τον πίνακα, επειδή η στήλη [Address] δεν υπάρχει.
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
