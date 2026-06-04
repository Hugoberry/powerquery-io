---
title: Date.AddQuarters
---

# Date.AddQuarters


Προσθέτει τα καθορισμένα τρίμηνα στην ημερομηνία.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Επιστρέφει το αποτέλεσμα της `date`, `datetime` ή `datetimezone` μετά την πρόσθεση `numberOfQuarters` τριμήνων στην τιμή `dateTime` της `datetime`.

-   `dateTime`: Η τιμή `date`, `datetime` ή `datetimezone` στην οποία προστίθενται τρίμηνα.
-   `numberOfQuarters`: Ο αριθμός των τριμήνων που θα προστεθούν.


## Examples

### Example #1
Προσθέτει 1 τρίμηνο στην `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
