---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Restituisce se un tipo di record è aperto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Restituisce un valore <code>logical</code> che indica se un record <code>type</code> è aperto.


## Examples

### Example #1 
Determinare se il record &lt;code&gt;type [ A = number, ...]&lt;/code&gt; è aperto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
