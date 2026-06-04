---
title: Date.MonthName
---

# Date.MonthName


Επιστρέφει το όνομα του στοιχείου μήνα.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Επιστρέφει το όνομα του στοιχείου μήνα για το παρεχόμενο `date`. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή `culture` (για παράδειγμα, "en-US").


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
