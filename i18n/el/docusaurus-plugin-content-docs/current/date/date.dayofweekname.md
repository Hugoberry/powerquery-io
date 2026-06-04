---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Επιστρέφει το όνομα της ημέρας της εβδομάδας.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Επιστρέφει το όνομα της ημέρας της εβδομάδας για την παρεχόμενη τιμή `date`. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή `culture` (για παράδειγμα, "en-US").


## Examples

### Example #1
Λήψη του ονόματος της ημέρας της εβδομάδας.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
