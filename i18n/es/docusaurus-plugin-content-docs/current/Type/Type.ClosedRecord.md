---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Devuelve una versión cerrada del tipo de registro proporcionado (o el mismo tipo, si ya está cerrado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Devuelve una versión cerrada del <code>record</code> <code>type</code> proporcionado (o el mismo tipo, si ya está cerrado).


## Examples

### Example #1 
Cree una versión cerrada de &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
