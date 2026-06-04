---
title: Duration.ToRecord
---

# Duration.ToRecord


Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της διάρκειας.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής διάρκειας, `duration`.

-   `duration`: Μια `duration` από την οποία δημιουργείται η εγγραφή.


## Examples

### Example #1
Convert `#duration(2, 5, 55, 20)` into a record of its parts including days, hours, minutes, and seconds if applicable.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
