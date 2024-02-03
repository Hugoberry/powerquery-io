---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Retorna una versió tancada del tipus de registre proporcionat (o el mateix tipus, si ja està tancat).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Retorna una versió tancada de <code>record</code> <code>type</code> proporcionat (o el mateix tipus, si ja està tancat).


## Examples

### Example #1 
Crea una versió tancada de &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
