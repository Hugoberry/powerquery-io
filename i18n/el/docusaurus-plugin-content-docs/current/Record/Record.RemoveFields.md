---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Καταργεί τα καθορισμένα πεδία από την εγγραφή εισόδου.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Επιστρέφει μια εγγραφή που καταργεί όλα τα πεδία που καθορίζονται στη λίστα <code>fields</code> από την είσοδο <code>record</code>. Εάν το όνομα που καθορίστηκε δεν υπάρχει, παρουσιάζεται εξαίρεση.


## Examples

### Example #1 
Καταργεί το πεδίο &#34;Price&#34; από την εγγραφή.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Καταργεί τα πεδία &#34;Price&#34; και &#34;Item&#34; από την εγγραφή.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
