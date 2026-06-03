---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Retourneert een getal waarmee het minimum aantal parameters wordt aangegeven dat is vereist om het type functie aan te roepen.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Retourneert een getal waarmee het minimum aantal parameters wordt aangegeven dat is vereist om de invoer `type` van de functie aan te roepen.


## Examples

### Example #1
Zoek het aantal vereiste parameters voor de functie `(x als getal, optioneel y als tekst)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
