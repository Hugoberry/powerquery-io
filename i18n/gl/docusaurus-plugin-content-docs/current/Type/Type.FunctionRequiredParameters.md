---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Devolve un número que indica o número mínimo de parámetros requiridos para invocar o tipo de función.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Devolve un número que indica o número mínimo de parámetros requiridos para invocar a entrada <code>type</code> da función.


## Examples

### Example #1 
Busque o número de parámetros requiridos para a función &lt;code&gt;(x como número, y opcional como texto)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
