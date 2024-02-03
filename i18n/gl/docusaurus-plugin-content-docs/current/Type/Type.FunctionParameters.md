---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Devolve un rexistro con valores de campo establecidos no nome dos parámetros dun tipo de función e os seus valores establecidos nos seus tipos correspondentes.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Devolve un rexistro con valores de campo establecidos no nome dos parámetros <code>type</code>, e os seus valores establecidos nos seus tipos correspondentes.


## Examples

### Example #1 
Atope os tipos de parámetros para a función &lt;code&gt;(x como número, y como texto)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
