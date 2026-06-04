---
title: Record.TransformFields
---

# Record.TransformFields


Επιστρέφει μια εγγραφή μετά την εφαρμογή συγκεκριμένων μετασχηματισμών.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Επιστρέφει μια εγγραφή μετά την εφαρμογή των μετασχηματισμών που καθορίζονται στη λίστα `transformOperations` σε `record`. Μπορούν να μετασχηματιστούν ένα ή περισσότερα πεδία τη δεδομένη στιγμή.

Στην περίπτωση μετασχηματισμού ενός αρχείου, η `transformOperations` αναμένεται να είναι μια λίστα με δύο στοιχεία. Το πρώτο στοιχείο στην `transformOperations` καθορίζει ένα όνομα πεδίου και το δεύτερο στοιχείο στην `transformOperations` καθορίζει τη συνάρτηση που θα χρησιμοποιηθεί για τον μετασχηματισμό. Για παράδειγμα, `{"Quantity", Number.FromText}`

Στην περίπτωση μετασχηματισμού πολλαπλών στοιχείων, η `transformOperations` αναμένεται να είναι μια λίστα με λίστες, όπου κάθε εσωτερική λίστα είναι ένα ζεύγος του ονόματος πεδίου και της λειτουργίας μετασχηματισμού. Για παράδειγμα, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Μετατρέπει το πεδίο "Price" σε αριθμό.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
Μετατρέπει τα πεδία "OrderID" και "Price" σε αριθμούς.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
