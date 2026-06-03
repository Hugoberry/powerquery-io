---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Restituisce un numero che indica il numero minimo di parametri necessari per richiamare il tipo di funzione.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Restituisce un numero che indica il numero minimo di parametri necessari per richiamare l'elemento `type` di input della funzione.


## Examples

### Example #1
Trovare il numero di parametri necessari alla funzione `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
