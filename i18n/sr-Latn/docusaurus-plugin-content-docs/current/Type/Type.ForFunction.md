---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Vraća tip koji predstavlja funkcije sa određenim ograničenjima parametara i tipova vraćanja.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Pravi <code>function type</code> od <code>signature</code>, zapis za <code>ReturnType</code> i <code>Parameters</code>, kao i <code>min</code>, minimalni broj argumenata potreban za pozivanje funkcije.


## Examples

### Example #1 
Pravi tip za funkciju koja koristi parametar broja pod imenom X i vraća broj.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
