---
title: Type.IsNullable
---

# Type.IsNullable


Επιστρέφει την τιμή "true" αν ένας τύπος είναι τύπου null. Διαφορετικά, επιστρέφει την τιμή "false".


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Επιστρέφει την τιμή `true` αν ένας τύπος μπορεί να έχει τιμή `nullable`. Διαφορετικά επιστρέφει την τιμή `false`.


## Examples

### Example #1
Προσδιορισμός του κατά πόσο το στοιχείο `number` μπορεί να έχει τιμή null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Προσδιορισμός του κατά πόσο το στοιχείο `type nullable number` μπορεί να έχει τιμή null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
