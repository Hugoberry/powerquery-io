---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Belirli bir parametreyle ve döndürülen tür kısıtlamalarıyla işlevleri temsil eden bir tür döndürür.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Bir <code>function type</code> oluşturur, bunu <code>signature</code>, <code>ReturnType</code> ve <code>Parameters</code> ve <code>min</code>, işlevin çalıştırılabilmesi için gerekli olan minimum sayıda bağımsız değişkenden gerçekleştirir.


## Examples

### Example #1 
X adında bir sayı parametresi alan ve bir sayı döndüren bir işlevin türünü oluşturur.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
