---
title: Value.Is
---

# Value.Is


決定值是否與指定的類型相容。


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

決定值是否與指定的類型相容。這相當於 M 中的「is」運算子，例外狀況是它可以接受識別碼類型參考，例如 Number.Type。


## Examples

### Example #1 
比較判斷數字是否與類型數值相容的兩種方式。
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
