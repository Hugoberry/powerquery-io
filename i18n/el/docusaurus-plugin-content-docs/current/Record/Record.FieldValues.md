---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Επιστρέφει μια λίστα με τις τιμές πεδίων.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Επιστρέφει μια λίστα με τις τιμές πεδίων στην εγγραφή <code>record</code>.


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
