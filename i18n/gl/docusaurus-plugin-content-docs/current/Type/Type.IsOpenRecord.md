---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Devolve se un tipo de rexistro é aberto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Devolve unha <code>lóxica</code> que indica se un rexistro <code>type</code> é aberto.


## Examples

### Example #1 
Determine se o rexistro &lt;code&gt;tipo [ A = number, ...]&lt;/code&gt; está aberto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
