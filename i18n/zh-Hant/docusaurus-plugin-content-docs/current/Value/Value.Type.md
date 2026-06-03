---
title: Value.Type
---

# Value.Type


傳回指定值的類型。


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

傳回指定值的類型。

-   `value`: 已傳回其類型的值。


## Examples

### Example #1
傳回指定數字的類型。
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
傳回指定日期的類型。
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
傳回指定記錄的類型。
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
