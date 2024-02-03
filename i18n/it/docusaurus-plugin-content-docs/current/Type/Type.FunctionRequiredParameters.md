---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Restituisce un numero che indica il numero minimo di parametri necessari per richiamare il tipo di funzione.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Restituisce un numero che indica il numero minimo di parametri necessari per richiamare l'elemento <code>type</code> di input della funzione.


## Examples

### Example #1 
Trovare il numero di parametri necessari alla funzione &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
