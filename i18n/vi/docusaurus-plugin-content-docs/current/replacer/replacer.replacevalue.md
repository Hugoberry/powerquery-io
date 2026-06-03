---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Thay thế các giá trị trong đầu vào được cung cấp.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Thay thế giá trị `old` trong `value` gốc bằng giá trị `new`. Có thể sử dụng hàm thay thế này trong `List.ReplaceValue` và `Table.ReplaceValue`.


## Examples

### Example #1
Thay thế giá trị 11 bằng giá trị 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
