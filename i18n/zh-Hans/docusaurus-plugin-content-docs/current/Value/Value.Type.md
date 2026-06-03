---
title: Value.Type
---

# Value.Type


返回给定值的类型。


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

返回给定值的类型。

-   `value`: 返回其类型的值。


## Examples

### Example #1
返回指定数字的类型。
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
返回指定日期的类型。
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
返回指定记录的类型。
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
