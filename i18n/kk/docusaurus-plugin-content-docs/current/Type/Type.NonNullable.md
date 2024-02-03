---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Түрден нөлдік емес түрді береді.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

<code>type</code> түрінен <code>нөлдік емес</code> түрді береді


## Examples

### Example #1 
&lt;code&gt;Түрдің нөлдік санының&lt;/code&gt; нөлдік емес түрін береді.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
