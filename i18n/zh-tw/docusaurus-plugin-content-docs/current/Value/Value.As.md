---
title: Value.As
---

# Value.As


## Description

如果值與指定的類型相容，則傳回值。


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

如果值與指定的類型相容，則傳回值。這相當於 M 中的「is」運算子，例外狀況是它可以接受識別碼類型參考，例如 Number.Type。


## Examples

### Example #1 
將數字轉換為數字。
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
嘗試將文字值轉換成數字。
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
