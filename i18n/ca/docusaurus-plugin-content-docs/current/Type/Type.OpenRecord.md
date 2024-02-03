---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Retorna una versió oberta del tipus de registre proporcionat (o el mateix tipus, si ja està obert).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Retorna una versió oberta de <code>record</code> <code>type</code> proporcionat (o el mateix tipus, si ja està obert).


## Examples

### Example #1 
Creeu una versió oberta de &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
