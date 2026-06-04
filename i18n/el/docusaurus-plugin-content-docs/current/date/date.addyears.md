---
title: Date.AddYears
---

# Date.AddYears


Προσθέτει τα καθορισμένα έτη στην ημερομηνία.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Επιστρέφει το αποτέλεσμα της `date`, `datetime` ή `datetimezone` μετά την πρόσθεση `numberOfYears` σε μια τιμή `dateTime` της `datetime`.

-   `dateTime`: Η τιμή `date`, `datetime` ή `datetimezone` στην οποία προστίθενται έτη.
-   `numberOfYears`: Ο αριθμός των ετών που θα προστεθούν.


## Examples

### Example #1
Προσθέτει 4 έτη στην `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Προσθέτει 10 έτη στην `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία και ώρα 14/5/2011 08:15:22 π.μ.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
