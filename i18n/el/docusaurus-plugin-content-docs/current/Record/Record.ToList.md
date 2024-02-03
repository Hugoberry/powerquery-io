---
title: Record.ToList
---

# Record.ToList


## Description

Επιστρέφει μια λίστα των τιμών που περιέχει τις τιμές πεδίου της εγγραφής εισόδου.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Επιστρέφει μια λίστα των τιμών που περιέχει τις τιμές πεδίου από την είσοδο <code>record</code>.


## Examples

### Example #1 
Κάντε εξαγωγή των τιμών πεδίων από μια εγγραφή.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
