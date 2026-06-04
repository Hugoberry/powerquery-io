---
title: Number.Exp
---

# Number.Exp


Υψώνει το e στη δύναμη που δίνεται.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Επιστρέφει το αποτέλεσμα της ύψωσης του e στη δύναμη του `number` (εκθετική συνάρτηση).

-   `number`: Μια συνάρτηση `number` για την οποία θα υπολογιστεί η εκθετική συνάρτηση. Αν η `number` είναι null, η `Number.Exp` επιστρέφει την τιμή null.


## Examples

### Example #1
Υψώστε το e στη δύναμη του 3.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
