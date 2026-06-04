---
title: Date.AddMonths
---

# Date.AddMonths


Προσθέτει τους καθορισμένους μήνες στην ημερομηνία.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Επιστρέφει το αποτέλεσμα της `date`, `datetime` ή `datetimezone` μετά την πρόσθεση `numberOfMonths` μηνών στην τιμή `dateTime` της `datetime`.

-   `dateTime`: Η τιμή `date`, `datetime` ή `datetimezone` στην οποία προστίθενται μήνες.
-   `numberOfMonths`: Ο αριθμός των μηνών που θα προστεθούν.


## Examples

### Example #1
Προσθέτει 5 μήνες στην `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Προσθέτει 18 μήνες στην `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία και ώρα 14/5/2011 08:15:22 π.μ.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
