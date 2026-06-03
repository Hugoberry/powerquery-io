---
title: Value.Type
---

# Value.Type


指定された値の型を返します。


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

指定された値の型を返します。

-   `value`: 型が返される値。


## Examples

### Example #1
指定された数値の型を返します。
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
指定された date の型を返します。
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
指定されたレコードの型を返します。
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
