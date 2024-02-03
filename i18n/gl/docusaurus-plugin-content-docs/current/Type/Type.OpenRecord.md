---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Devolve unha versión aberta do tipo de rexistro dado (ou o mesmo tipo, se xa está aberto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Devolve unha versión aberta do <code>rexistro</code> <code>type</code> dado (ou o mesmo tipo, se xa está aberto).


## Examples

### Example #1 
Crear unha versión aberta de &lt;code&gt;tipo [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
