---
title: Type.OpenRecord
---

# Type.OpenRecord


Devolve uma versão aberta do tipo de registo fornecido (ou do mesmo tipo, se já estiver aberto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Devolve uma versão aberta do <code>record</code> <code>type</code> fornecido (ou do mesmo tipo, se já estiver aberto).


## Examples

### Example #1 
Criar uma versão aberta de &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
