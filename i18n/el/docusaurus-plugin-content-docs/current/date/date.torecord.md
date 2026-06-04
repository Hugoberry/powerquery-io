---
title: Date.ToRecord
---

# Date.ToRecord


Επιστρέφει μια εγγραφή που περιέχει τμήματα της τιμής ημερομηνίας.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα τιμής της ημερομηνίας `date` που δόθηκε.

-   `date`: Μια τιμή της `date` για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.


## Examples

### Example #1
Μετατρέψτε την τιμή `#date(2011, 12, 31)` σε μια εγγραφή που περιέχει τμήματα από την τιμή ημερομηνίας.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
