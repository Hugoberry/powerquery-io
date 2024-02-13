---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Devuelve un número que indica el número mínimo de parámetros necesarios para invocar el tipo de función.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Devuelve un número que indica el número mínimo de parámetros necesarios para invocar la entrada <code>type</code> de función.


## Examples

### Example #1 
Buscar el número de parámetros necesarios para la función &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
