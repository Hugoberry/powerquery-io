---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Retorna si un tipus de registre està obert.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Retorna un valor <code>logical</code> que indica si un registre <code>type</code> està obert.


## Examples

### Example #1 
Determina si el registre &lt;code&gt;type [ A = number, ...]&lt;/code&gt; està obert.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
