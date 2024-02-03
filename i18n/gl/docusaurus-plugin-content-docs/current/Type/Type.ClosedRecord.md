---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Devolve unha versión pechada do tipo de rexistro fornecido (ou o mesmo tipo se xa está pechado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Devolve unha versión pechada do <code>rexistro</code> <code>type</code> facilitado (ou o mesmo tipo se xa está pechado).


## Examples

### Example #1 
Crear unha versión pechada de &lt;code&gt;tipo [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
