---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Devolve um registo com valores de campo definidos para o nome dos parâmetros de um tipo de função e os respetivos valores definidos para os tipos correspondentes.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Devolve um registo com valores de campo definidos para o nome dos parâmetros de <code>type</code> e os respetivos valores definidos para os tipos correspondentes.


## Examples

### Example #1 
Encontrar os tipos de parâmetros para a função &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
