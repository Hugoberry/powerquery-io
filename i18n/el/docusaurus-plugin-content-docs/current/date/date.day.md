---
title: Date.Day
---

# Date.Day


Επιστρέφει το στοιχείο ημερομηνίας.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει το στοιχείο ημέρας της δεδομένης τιμής `date`, `datetime` ή `datetimezone`.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` από την οποία εξάγεται το στοιχείο ημέρας.


## Examples

### Example #1
Λάβετε το στοιχείο ημέρας μιας `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία και ώρα 14/5/2011 05:00:00 μ.μ.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
