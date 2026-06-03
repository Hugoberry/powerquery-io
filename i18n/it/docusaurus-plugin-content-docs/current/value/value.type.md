---
title: Value.Type
---

# Value.Type


Restituisce il tipo del valore specificato.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Restituisce il tipo del valore specificato.

-   `value`: il valore di cui viene restituito il tipo.


## Examples

### Example #1
Restituisci il tipo del numero specificato.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Restituisci il tipo della data specificata.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Restituisci il tipo del record specificato.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
