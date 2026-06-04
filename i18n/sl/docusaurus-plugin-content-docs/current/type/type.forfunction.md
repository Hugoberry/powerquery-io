---
title: Type.ForFunction
---

# Type.ForFunction


Vrne vrsto, ki predstavlja funkcije z določenim parametrom in omejitvami vrste vrnitve.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Ustvari `vrsto funkcije` iz zapisa `signature`, zapis z `vrnjeno vrsto` in `parametri`, in števila `min`, najmanjšim številom argumentov, zahtevanih za poziv funkcije.


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
