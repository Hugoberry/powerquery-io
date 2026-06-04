---
title: Value.Type
---

# Value.Type


지정된 값의 형식을 반환합니다.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

지정된 값의 형식을 반환합니다.

-   `value`: 형식이 반환되는 값입니다.


## Examples

### Example #1
지정된 숫자의 형식을 반환합니다.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
지정된 날짜의 형식을 반환합니다.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
지정된 레코드의 형식을 반환합니다.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
