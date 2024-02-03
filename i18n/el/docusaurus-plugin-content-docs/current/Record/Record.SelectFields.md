---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Επιστρέφει μια εγγραφή που περιέχει μόνο τα καθορισμένα πεδία.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Επιστρέφει μια εγγραφή η οποία περιλαμβάνει μόνο τα πεδία που καθορίζονται στη λίστα <code>fields</code> από την είσοδο <code>record</code>.


## Examples

### Example #1 
Επιλέγει τα πεδία &#34;Item&#34; και &#34;Price&#34; στην εγγραφή.
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
