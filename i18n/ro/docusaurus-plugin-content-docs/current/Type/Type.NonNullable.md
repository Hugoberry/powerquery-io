---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Returnează tipul care nu acceptă valoarea null dintr-un tip.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Returnează tipul care nu <code>acceptă valoarea null</code> din <code>type</code>.


## Examples

### Example #1 
Returnează tipul care nu acceptă valoarea null de &lt;code&gt;număr care acceptă valoarea null&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
