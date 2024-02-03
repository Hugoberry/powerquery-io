---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Kembalikan true jika jenis merupakan jenis boleh nol; jika tidak, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Kembalikan <code>true</code> jika jenis merupakan jenis <code>nullable</code> ; jika tidak, <code>false</code>.


## Examples

### Example #1 
Tentukan jika &lt;code&gt;number&lt;/code&gt; merupakan boleh nol.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Tentukan jika jenis &lt;code&gt;nombor boleh nol&lt;/code&gt; merupakan boleh nol.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
