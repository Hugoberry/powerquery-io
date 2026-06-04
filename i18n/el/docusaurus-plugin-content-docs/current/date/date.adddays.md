---
title: Date.AddDays
---

# Date.AddDays


Προσθέτει τις καθορισμένες ημέρες στην ημερομηνία.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Επιστρέφει το αποτέλεσμα της `date`, `datetime` ή `datetimezone` μετά την πρόσθεση `numberOfDays` ημερών στην τιμή `dateTime` της `datetime`.

-   `dateTime`: Η τιμή `date`, `datetime` ή `datetimezone` στην οποία προστίθενται ημέρες.
-   `numberOfDays`: Ο αριθμός των ημερών που θα προστεθούν.


## Examples

### Example #1
Προσθέτει 5 ημέρες στην `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
