---
title: Record.RemoveFields
---

# Record.RemoveFields


Καταργεί τα καθορισμένα πεδία από την εγγραφή εισόδου.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Επιστρέφει μια εγγραφή που καταργεί όλα τα πεδία που καθορίζονται στη λίστα `fields` από την είσοδο `record`. Αν το πεδίο που καθορίστηκε δεν υπάρχει, προκύπτει σφάλμα.


## Examples

### Example #1
Καταργεί το πεδίο "Price" από την εγγραφή.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Καταργεί τα πεδία "Price" και "Item" από την εγγραφή.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
