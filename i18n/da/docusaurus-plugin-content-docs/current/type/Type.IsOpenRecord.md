---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Returnerer, om en posttype er åben.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Returnerer <code>logical</code>, der angiver, om en post <code>type</code> er åben.


## Examples

### Example #1 
Find ud af, om posten &lt;code&gt;type [ A = number, ...]&lt;/code&gt; er åben.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
