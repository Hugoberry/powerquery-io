---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Retourne une valeur qui indique si un type d&#39;enregistrement est ouvert.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Retourne une valeur <code>logical</code> qui indique si un enregistrement <code>type</code> est ouvert.


## Examples

### Example #1 
Détermine si l&#39;enregistrement &lt;code&gt;type [ A = number, ...]&lt;/code&gt; est ouvert.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
