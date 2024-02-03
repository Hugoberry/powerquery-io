---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Vrne vrsto, ki ni ničelna.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Vrne vrsto, ki ni <code>ničelna</code> iz <code>type</code>.


## Examples

### Example #1 
Vrne vrsto, ki ni ničelna, od &lt;code&gt;števila z ničelno vrsto&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
