---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Bir türden boş değer atanabilir olmayan türü döndürür.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

<code>type</code> kaynağından <code>nullable</code> olmayan türü döndürür.


## Examples

### Example #1 
&lt;code&gt;type nullable number&lt;/code&gt; için boş değer atanabilir olmayan türü döndürür.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
