---
title: Type.OpenRecord
---

# Type.OpenRecord


Retorna uma versão aberta do tipo de registro determinado (ou do mesmo tipo, se já está aberto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Retorna uma versão aberta do <code>registro</code> determinado <code>type</code> (ou do mesmo tipo, se já está aberto).


## Examples

### Example #1 
Crie uma versão aberta de &lt;code&gt;tipo [ A = número]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
