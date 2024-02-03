---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Atgriež neNullējamu tipu no tipa.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Atgriež tipu, kas nav <code>Nullable</code> tips, no <code>type</code>.


## Examples

### Example #1 
Atgrieziet &lt;code&gt;type Nullable number&lt;/code&gt; neNullējamu tipu.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
