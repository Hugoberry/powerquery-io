---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Palauttaa luvun, joka ilmaisee funktion tyypin käynnistämiseen tarvittavien parametrien vähimmäismäärän.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Palauttaa luvun, joka ilmaisee funktion syötteen `type` käynnistämiseen tarvittavien parametrien vähimmäismäärän.


## Examples

### Example #1
Etsi funktion `(x as number, optional y as text)` vaadittujen parametrien määrä.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
