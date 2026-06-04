---
title: Time.Second
---

# Time.Second


Επιστρέφει το στοιχείο δευτερολέπτου.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει το στοιχείο δευτερολέπτου της παρεχόμενης τιμής `time`, `datetime` ή `datetimezone`, `dateTime`.


## Examples

### Example #1
Εύρεση της τιμής δευτερολέπτου σε μια τιμή datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
