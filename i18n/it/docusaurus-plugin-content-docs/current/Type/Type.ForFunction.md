---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Restituisce un tipo che rappresenta le funzioni con vincoli specifici per il tipo restituito e il parametro.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Crea un <code>function type</code> da <code>signature</code>, un record di <code>ReturnType</code>, <code>Parameters</code> e <code>min</code>, il numero minimo di argomenti necessari per richiamare la funzione.


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
