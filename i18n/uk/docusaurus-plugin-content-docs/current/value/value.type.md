---
title: Value.Type
---

# Value.Type


Повертає тип заданого значення.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Повертає тип заданого значення.

-   `value`: значення, тип якого повертається.


## Examples

### Example #1
Повернути тип конкретного числа.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Повертає тип параметра дати.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Повертає тип параметра запису.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
