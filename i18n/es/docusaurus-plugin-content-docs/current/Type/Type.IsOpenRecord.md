---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Devuelve si un tipo de registro está abierto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Devuelve un <code>logical</code> que indica si un registro <code>type</code> está abierto.


## Examples

### Example #1 
Determinar si el registro &lt;code&gt;type [ A = number, ...]&lt;/code&gt; está abierto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
