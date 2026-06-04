---
title: Value.Type
---

# Value.Type


Vraća tip date vrednosti.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Vraća tip date vrednosti.

-   `value`: Vrednost čiji tip se vraća.


## Examples

### Example #1
Vratite tip navedenog broja.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Vratite tip navedenog datuma.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Vratite tip navedenog zapisa.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
