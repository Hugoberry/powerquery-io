---
title: Number.Power
---

# Number.Power


Υψώνει έναν αριθμό στη δύναμη που δίνεται.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Επιστρέφει το αποτέλεσμα της ύψωσης του `number` στη δύναμη του `power`. Εάν το `number` ή το `power` είναι null, η `Number.Power` επιστρέφει την τιμή null.

-   `number`: Η βάση.
-   `power`: Ο εκθέτης.


## Examples

### Example #1
Βρείτε την τιμή του 5 υψωμένο στη δύναμη του 3 (5 στον κύβο).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
