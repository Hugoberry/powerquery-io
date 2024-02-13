---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Devolve uma versão fechada do tipo de registo fornecido (ou o mesmo tipo, se já estiver fechado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Devolve uma versão fechada do <code>record</code>  fornecido <code>type</code> (ou o mesmo tipo, se já estiver fechado).


## Examples

### Example #1 
Criar uma versão fechada de &lt;code&gt;tipo [ A = number…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
