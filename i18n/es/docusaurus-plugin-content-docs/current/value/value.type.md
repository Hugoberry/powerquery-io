---
title: Value.Type
---

# Value.Type


Devuelve el tipo del valor dado.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Devuelve el tipo del valor especificado.

-   `value`: valor cuyo tipo se devuelve.


## Examples

### Example #1
Devuelve el tipo del número especificado.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Devuelve el tipo de la fecha especificada.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Devuelve el tipo del registro especificado.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
