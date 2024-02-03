---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Vrátí typ, který reprezentuje funkce s konkrétními parametry a omezením návratového typu.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Vytvoří typ funkce (<code>function type</code>) z: <code>signature</code>, záznam <code>returnType</code> a <code>Parameters</code> a <code>min</code>, minimální počet argumentů potřebných k vyvolání funkce.


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
