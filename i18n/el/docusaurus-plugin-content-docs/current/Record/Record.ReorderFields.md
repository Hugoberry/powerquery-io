---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Αναδιατάσσει τα καθορισμένα πεδία στη νέα σειρά.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Επιστρέφει μια εγγραφή μετά την αναδιάταξη των πεδίων της <code>record</code> με τη σειρά των πεδίων που καθορίζονται στη λίστα <code>fieldOrder</code>. Οι τιμές των πεδίων διατηρούνται και τα πεδία που δεν υπάρχουν στη λίστα <code>fieldOrder</code> παραμένουν στην αρχική τους θέση.


## Examples

### Example #1 
Αναδιατάσσει κάποια από τα πεδία της εγγραφής.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
