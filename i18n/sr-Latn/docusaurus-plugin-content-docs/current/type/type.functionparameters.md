---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Vraća zapis sa vrednostima polja podešenim na ime parametara za tip funkcije i njihove vrednosti podešene na odgovarajuće tipove.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Vraća zapis sa vrednostima polja podešenih na ime parametara za `type` i njihove vrednosti podešene na odgovarajuće tipove.


## Examples

### Example #1
Pronađite tipove parametara za funkciju `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
