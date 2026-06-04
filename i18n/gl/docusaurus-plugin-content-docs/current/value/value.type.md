---
title: Value.Type
---

# Value.Type


Devolve o tipo do valor indicado.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Devolve o tipo do valor indicado.

-   `value`: O valor cuxo tipo é devolto.


## Examples

### Example #1
Devolve o tipo do número especificado.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Devolve o tipo da data especificada.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Devolve o tipo do rexistro especificado.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
