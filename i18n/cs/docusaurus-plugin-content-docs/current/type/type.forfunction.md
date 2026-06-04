---
title: Type.ForFunction
---

# Type.ForFunction


Vrátí typ, který reprezentuje funkce s konkrétními parametry a omezením návratového typu.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Vytvoří typ funkce (`function type`) z: `signature`, záznam `returnType` a `Parameters` a `min`, minimální počet argumentů potřebných k vyvolání funkce.


## Examples

### Example #1
Vytvoří typ pro funkci, která přijímá jako vstup číselný parametr názvem X a vrací číslo.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
