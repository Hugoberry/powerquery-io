---
title: Value.Type
---

# Value.Type


Возвращает тип данного значения.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Возвращает тип указанного значения.

-   `value`: значение, тип которого возвращается.


## Examples

### Example #1
Возвращает тип указанного числа.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Возвращает тип указанной даты.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Возвращает тип указанной записи.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
