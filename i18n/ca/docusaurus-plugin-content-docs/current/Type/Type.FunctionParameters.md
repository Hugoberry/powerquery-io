---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Retorna un registre amb valors de camp establerts al nom dels paràmetres d&#39;un tipus de funció, i els seus valors establerts als tipus corresponents.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Retorna un registre amb valors de camp establerts al nom dels paràmetres de <code>type</code>, i els seus valors establerts als tipus corresponents.


## Examples

### Example #1 
Cerqueu els tipus de paràmetres de la funció &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
