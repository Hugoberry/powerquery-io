---
title: Type.ForFunction
---

# Type.ForFunction


Retourneert een type dat functies met specifieke typebeperkingen voor parameters en retouren vertegenwoordigt.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Maakt een `functietype` van `signature`, een record van `ReturnType` en `Parameters`, en `min`, het minimumaantal argumenten dat is vereist om de functie aan te roepen.


## Examples

### Example #1
Hiermee wordt het type voor een functie gemaakt waarbij een cijferparameter met de naam X wordt gebruikt en een getal wordt geretourneerd.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
