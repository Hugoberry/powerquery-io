---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Vráti typ, ktorý predstavuje funkcie so špecifickými parametrami a obmedzeniami typu návratu.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Vytvorí <code>typ funkcie</code> z <code>signature</code>, zo záznamu <code>typ vrátenia</code> a <code>parametrov</code>, a <code>min</code>, minimálneho počtu argumentov požadovaných na vyvolanie funkcie.


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
