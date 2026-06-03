---
title: Value.Type
---

# Value.Type


Zwraca typ danej wartości.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Zwraca typ danej wartości.

-   `value`: wartość, której typ jest zwracany.


## Examples

### Example #1
Zwracaj typ określonej liczby.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Zwracaj typ określonej daty.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Zwracaj typ określonego rekordu.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
