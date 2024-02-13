---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Retourneert of een recordtype open is.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Retourneert een <code>logische waarde</code> waarmee wordt aangegeven of een record <code>type</code> open is.


## Examples

### Example #1 
Bepaal of de record &lt;code&gt;type [ A = getal, ...]&lt;/code&gt; open is.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
