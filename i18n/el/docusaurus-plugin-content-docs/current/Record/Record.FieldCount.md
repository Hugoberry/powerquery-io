---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Επιστρέφει τον αριθμό των πεδίων της εγγραφής.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Επιστρέφει τον αριθμό των πεδίων της εγγραφής <code>record</code>.


## Examples

### Example #1 
Βρίσκει τον αριθμό των πεδίων στην εγγραφή.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
