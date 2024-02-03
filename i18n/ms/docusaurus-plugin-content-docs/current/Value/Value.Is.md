---
title: Value.Is
---

# Value.Is


## Description

Menentukan sama ada nilai serasi dengan jenis yang ditentukan.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Menentukan sama ada nilai serasi dengan jenis yang ditentukan. Ini bersamaan dengan operator "is" dalam M, dengan pengecualian bahawa ia boleh menerima rujukan jenis pengecam seperti Number.Type.


## Examples

### Example #1 
Bandingkan dua cara bagi menentukan jika nombor serasi dengan jenis nombor.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
