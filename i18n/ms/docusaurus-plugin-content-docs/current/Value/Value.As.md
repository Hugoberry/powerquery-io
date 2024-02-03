---
title: Value.As
---

# Value.As


## Description

Mengembalikan nilai jika ia serasi dengan jenis yang ditentukan.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Mengembalikan nilai jika ia serasi dengan jenis yang ditentukan. Ini bersamaan dengan operator "as" dalam M, dengan pengecualian bahawa ia boleh menerima rujukan jenis pengecam seperti Number.Type.


## Examples

### Example #1 
Tukarkan jenis nombor ke nombor.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Cuba untuk menukarkan jenis nilai teks kepada nombor.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
