---
title: Value.Type
---

# Value.Type


Devolve o tipo do valor especificado.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Devolver o tipo do valor dado.

-   `value`: o valor cujo tipo é devolvido.


## Examples

### Example #1
Devolver o tipo do número especificado.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Devolver o tipo de data especificada.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Devolver o tipo de registo especificado.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
