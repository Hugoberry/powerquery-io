---
title: Type.NonNullable
---

# Type.NonNullable


## Description

किसी प्रकार से गैर निरर्थक प्रकार लौटाता है.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

<code>type</code> से गैर <code>निरर्थक</code> प्रकार लौटाता है.


## Examples

### Example #1 
&lt;code&gt;type nullable number&lt;/code&gt; का गैर निरर्थक प्रकार लौटाएँ.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
