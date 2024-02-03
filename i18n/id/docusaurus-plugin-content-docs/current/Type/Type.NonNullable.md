---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Menghasilkan jenis yang tidak dapat berisi nilai nol dari sebuah jenis.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Menghasilkan jenis non <code>nullable</code> dari <code>type</code>.


## Examples

### Example #1 
Hasilkan jenis yang tidak bisa berisi nilai nol dari &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
