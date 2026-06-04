---
title: Type.NonNullable
---

# Type.NonNullable


Επιστρέφει τον τύπο χωρίς δυνατότητα null από έναν τύπο.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Επιστρέφει τον τύπο χωρίς δυνατότητα `nullable` από το στοιχείο `type`.


## Examples

### Example #1
Επιστροφή του τύπου χωρίς δυνατότητα null του στοιχείου `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
