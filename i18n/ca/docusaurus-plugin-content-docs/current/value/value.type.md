---
title: Value.Type
---

# Value.Type


Retorna el tipus del valor donat.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Retorna el tipus del valor proporcionat.

-   `value`: valor el tipus del qual es retorna.


## Examples

### Example #1
Retorna el tipus del número especificat.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Retorna el tipus de la data especificada.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Retorna el tipus del registre especificat.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
