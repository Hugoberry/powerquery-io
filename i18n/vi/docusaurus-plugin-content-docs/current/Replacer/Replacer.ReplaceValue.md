---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Thay thế các giá trị trong đầu vào được cung cấp.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Thay thế giá trị <code>old</code> trong <code>value</code> gốc bằng giá trị <code>new</code>. Có thể sử dụng hàm thay thế này trong <code>List.ReplaceValue</code> và <code>Table.ReplaceValue</code>.


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
