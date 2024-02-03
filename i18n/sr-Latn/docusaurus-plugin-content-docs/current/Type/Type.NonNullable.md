---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Vraća tip koji ne može biti bez vrednosti iz tipa.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Vraća tip koji nije <code>nullable</code> iz <code>type</code>.


## Examples

### Example #1 
Vratite tip koji ne može biti bez vrednosti za &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
