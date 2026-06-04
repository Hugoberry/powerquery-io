---
title: Type.ForFunction
---

# Type.ForFunction


Vráti typ, ktorý predstavuje funkcie so špecifickými parametrami a obmedzeniami typu návratu.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Vytvorí `typ funkcie` z `signature`, zo záznamu `typ vrátenia` a `parametrov`, a `min`, minimálneho počtu argumentov požadovaných na vyvolanie funkcie.


## Examples

### Example #1
Vytvorí typ pre funkciu, ktorá prijíma ako vstup číselný parameter s názvom X a vracia číslo.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
