---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Menghasilkan true jika jenisnya adalah jenis yang bisa memiliki nilai nol; jika tidak maka dihasilkan false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Menghasilkan <code>true</code> jika jenisnya adalah  <code>nullable</code>; jika tidak maka hasilnya <code>false</code>.


## Examples

### Example #1 
Tentukan apakah &lt;code&gt;number&lt;/code&gt; bisa berisi nilai nol.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Tentukan apakah &lt;code&gt;type nullable number&lt;/code&gt; dapat berisi nilai nol.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
