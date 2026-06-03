---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Restituisce un record con valori di campo impostati sul nome dei parametri di un tipo di funzione e i relativi valori impostati sui tipi corrispondenti.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Restituisce un record con valori di campo impostati sul nome dei parametri di `type` e i relativi valori impostati sui tipi corrispondenti.


## Examples

### Example #1
Trovare i tipi dei parametri alla funzione `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
