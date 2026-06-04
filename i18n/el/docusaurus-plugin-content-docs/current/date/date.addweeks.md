---
title: Date.AddWeeks
---

# Date.AddWeeks


Προσθέτει τις καθορισμένες εβδομάδες στην ημερομηνία.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Επιστρέφει το αποτέλεσμα της `date`, `datetime` ή `datetimezone` μετά την πρόσθεση `numberOfWeeks` εβδομάδων στην τιμή `dateTime` της `datetime`.

-   `dateTime`: Η τιμή `date`, `datetime` ή `datetimezone` στην οποία προστίθενται εβδομάδες.
-   `numberOfWeeks`: Ο αριθμός των εβδομάδων που θα προστεθούν.


## Examples

### Example #1
Προσθέτει 2 εβδομάδες στην `date`, `datetime` ή `datetimezone` αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
