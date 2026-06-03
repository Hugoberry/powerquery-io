---
title: Value.Type
---

# Value.Type


Retorna o tipo do valor especificado.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Retorna o tipo do valor fornecido.

-   `value`: O valor cujo tipo será retornado.


## Examples

### Example #1
Retorna o tipo do número especificado.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Retorna o tipo da data especificada.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Retorna o tipo do registro especificado.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
