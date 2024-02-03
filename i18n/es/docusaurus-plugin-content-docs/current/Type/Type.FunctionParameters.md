---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Devuelve un registro con valores de campo establecidos en el nombre de los parámetros de un tipo de función, y sus valores establecidos en sus tipos correspondientes.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Devuelve un registro con los valores de campo establecidos en el nombre de los parámetros de <code>type</code>, y sus valores establecidos en sus tipos correspondientes.


## Examples

### Example #1 
Buscar los tipos de los parámetros para la función &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
