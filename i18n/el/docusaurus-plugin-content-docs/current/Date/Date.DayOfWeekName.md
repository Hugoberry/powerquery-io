---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Επιστρέφει το όνομα της ημέρας της εβδομάδας.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Επιστρέφει το όνομα της ημέρας της εβδομάδας για την παρεχόμενη τιμή <code>date</code>. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").


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
