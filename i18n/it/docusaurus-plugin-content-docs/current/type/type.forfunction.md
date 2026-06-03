---
title: Type.ForFunction
---

# Type.ForFunction


Restituisce un tipo che rappresenta le funzioni con vincoli specifici per il tipo restituito e il parametro.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Crea un `function type` da `signature`, un record di `ReturnType`, `Parameters` e `min`, il numero minimo di argomenti necessari per richiamare la funzione.


## Examples

### Example #1
Crea il tipo per una funzione che accetta un parametro numerico denominato X e restituisce un numero.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
