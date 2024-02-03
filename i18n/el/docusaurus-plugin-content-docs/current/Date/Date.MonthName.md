---
title: Date.MonthName
---

# Date.MonthName


## Description

Επιστρέφει το όνομα του στοιχείου μήνα.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Επιστρέφει το όνομα του στοιχείου μήνα για το παρεχόμενο <code>date</code>. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Λήψη του ονόματος μήνα.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
