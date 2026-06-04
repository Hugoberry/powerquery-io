---
title: Record.FieldValues
---

# Record.FieldValues


Επιστρέφει μια λίστα με τις τιμές πεδίων.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Επιστρέφει μια λίστα με τις τιμές πεδίων στην εγγραφή `record`.


## Examples

### Example #1
Βρίσκει τις τιμές πεδίων στην εγγραφή.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
