---
title: Value.As
---

# Value.As


## Description

如果值与指定类型兼容，则返回该值。


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

如果值与指定类型兼容，则返回该值。这等效于 M 中的 “as” 运算符，例外情况是其可以接受标识符类型引用(如 Number.Type)。


## Examples

### Example #1 
将数字强制转换为数字。
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
尝试将文本值强制转换为数字。
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
