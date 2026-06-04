---
title: Type.IsNullable
---

# Type.IsNullable


Ak ide o typ s povolenou hodnotou Null, vráti hodnotu True, v opačnom prípade vráti hodnotu False.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Ak ide o typ `s povolenou hodnotou Null`, vráti hodnotu `True` v opačnom prípade vráti hodnotu `False`.


## Examples

### Example #1
Zisti, či má `číslo` povolenú hodnotu Null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Zisti, či má `zadajte číslo s povolenou hodnotou Null` povolenú hodnotu Null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
