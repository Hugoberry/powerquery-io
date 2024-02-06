---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Devolve se um tipo de registo estiver aberto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Devolve um valor <code>logical</code> a indicar se um registo <code>type</code> está aberto.


## Examples

### Example #1 
Determinar se o registo &lt;code&gt;type [ A = number, ...]&lt;/code&gt; está aberto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
