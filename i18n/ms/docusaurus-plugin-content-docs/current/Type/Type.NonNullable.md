---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Kembalikan jenis bukan boleh nol daripada sesuatu jenis.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Kembalikan jebis bukan <code>nullable</code> daripada <code>type</code>.


## Examples

### Example #1 
Kembalikan jenis bukan boleh nol daripada &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
