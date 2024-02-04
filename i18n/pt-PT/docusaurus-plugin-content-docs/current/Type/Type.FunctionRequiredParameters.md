---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Devolve um número a indicar o número mínimo de parâmetros necessários para invocar o tipo de função.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Devolve um número a indicar o número mínimo de parâmetros necessários para invocar a introdução <code>type</code> da função.


## Examples

### Example #1 
Encontrar o número de parâmetros necessários para a função &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
