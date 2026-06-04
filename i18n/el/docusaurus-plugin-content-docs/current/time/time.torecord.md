---
title: Time.ToRecord
---

# Time.ToRecord


Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής Time `time` που δόθηκε.

-   `time`: Μια τιμή της `time` για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.


## Examples

### Example #1
Μετατρέψτε την τιμή `#time(11, 56, 2)` σε μια εγγραφή που περιέχει τιμές ώρας.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
