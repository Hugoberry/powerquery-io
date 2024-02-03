---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Επιστρέφει μια εγγραφή μετά την εφαρμογή συγκεκριμένων μετασχηματισμών.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Επιστρέφει μια εγγραφή μετά την εφαρμογή των μετασχηματισμών που καθορίζονται στη λίστα <code>transformOperations</code> σε <code>record</code>.    Μπορούν να μετασχηματιστούν ένα ή περισσότερα πεδία τη δεδομένη στιγμή.      <div>Στην περίπτωση μετασχηματισμού ενός αρχείου, η <code>transformOperations</code> αναμένεται να είναι μια λίστα με δύο στοιχεία. Το πρώτο στοιχείο στην <code>transformOperations</code> καθορίζει ένα όνομα πεδίου και το δεύτερο στοιχείο στην <code>transformOperations</code> καθορίζει τη συνάρτηση που θα χρησιμοποιηθεί για τον μετασχηματισμό. Για παράδειγμα, <code>\{"Quantity", Number.FromText}</code></div>      <div>Στην περίπτωση μετασχηματισμού πολλαπλών στοιχείων, η <code>transformOperations</code> αναμένεται να είναι μια λίστα με λίστες, όπου κάθε εσωτερική λίστα είναι ένα ζεύγος του ονόματος πεδίου και της λειτουργίας μετασχηματισμού. Για παράδειγμα, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Μετατρέπει το πεδίο &#34;Price&#34; σε αριθμό.
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
Μετατρέπει τα πεδία &#34;OrderID&#34; και &#34;Price&#34; σε αριθμούς.
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
