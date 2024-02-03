---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Vrne vrsto, ki predstavlja funkcije z določenim parametrom in omejitvami vrste vrnitve.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Ustvari <code>vrsto funkcije</code> iz zapisa <code>signature</code>, zapis z <code>vrnjeno vrsto</code> in <code>parametri</code>, in števila <code>min</code>, najmanjšim številom argumentov, zahtevanih za poziv funkcije.


## Examples

### Example #1 
Ustvari vrsto za funkcije, ki prevzame številko parametra z imenom X, in vrne število.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
