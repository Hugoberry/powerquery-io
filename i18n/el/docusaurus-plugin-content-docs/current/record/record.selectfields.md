---
title: Record.SelectFields
---

# Record.SelectFields


Επιστρέφει μια εγγραφή που περιέχει μόνο τα καθορισμένα πεδία.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Επιστρέφει μια εγγραφή η οποία περιλαμβάνει μόνο τα πεδία που καθορίζονται στη λίστα `fields` από την είσοδο `record`.


## Examples

### Example #1
Επιλέγει τα πεδία "Item" και "Price" στην εγγραφή.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
