---
title: Type.IsNullable
---

# Type.IsNullable


Returnează true dacă o funcție este de un tip care acceptă valori null; altfel, fals.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Returnează `true` dacă un tip `nullable`; altfel, `false`.


## Examples

### Example #1
Determinați dacă `număr` acceptă valori null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determinați dacă `tip număr care acceptă valoarea null` acceptă valoarea null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
