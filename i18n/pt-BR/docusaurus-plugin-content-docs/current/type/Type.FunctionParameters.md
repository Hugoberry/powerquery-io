---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Retorna um registro com valores de campo definidos para o nome dos parâmetros de um tipo de função, e seus valores definidos para seus tipos correspondentes.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Retorna um registro com valores de campo definidos para o nome dos parâmetros de <code>type</code>, e seus valores definidos para seus tipos correspondentes.


## Examples

### Example #1 
Encontre os tipos dos parâmetros para a função &lt;code&gt;(x como número, y como texto)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
