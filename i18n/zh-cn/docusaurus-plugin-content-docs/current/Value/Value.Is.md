---
title: Value.Is
---

# Value.Is


## Description

确定值是否与指定类型兼容。


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

确定值是否与指定类型兼容。这等效于 M 中的 “is” 运算符，例外情况是其可以接受标识符类型引用(如 Number.Type)。


## Examples

### Example #1 
比较两种确定数字是否与类型号兼容的方法。
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
