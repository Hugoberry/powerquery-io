---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Pateikiamas tipas, atitinkantis funkcijas su konkrečiu parametru ir pateikiamo tipo apribojimais.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Sukuriamas <code>function type</code> iš <code>signature</code>, <code>ReturnType</code> ir <code>Parameters</code> įrašų ir <code>min</code>. Funkcijai iškviesti reikia minimalaus skaičiaus argumentų.


## Examples

### Example #1 
Sukuriamas funkcijos tipas, kuris paima skaičiaus parametrą pavadinimu X ir pateikia skaičių.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
