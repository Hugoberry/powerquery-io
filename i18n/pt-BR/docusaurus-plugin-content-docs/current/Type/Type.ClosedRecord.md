---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Retorna uma versão fechada do tipo de registro determinado (ou do mesmo tipo, se já está fechado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Retorna uma versão fechada do <code>registro</code> determinado <code>type</code> (ou do mesmo tipo, se já está fechado).


## Examples

### Example #1 
Crie uma versão fechada de &lt;code&gt;tipo [ A = número,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
