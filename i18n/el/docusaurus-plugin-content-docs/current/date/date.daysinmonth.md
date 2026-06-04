---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Επιστρέφει έναν αριθμό από 28 έως 31, ο οποίος δείχνει τον αριθμό των ημερών του μήνα.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει τον αριθμό των ημερών του μήνα στην τιμή `dateTime` της `date`, `datetime` ή `datetimezone`.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για την οποία επιστρέφεται ο αριθμός των ημερών του μήνα.


## Examples

### Example #1
Number of days in the month December as represented by `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
