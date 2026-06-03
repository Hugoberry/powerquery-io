---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


İşlev türünü çalıştırılabilmesi için gereken minimum parametre sayısını belirten bir sayı döndürür.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

İşlevin `type` girişinin çalıştırılabilmesi için gereken minimum parametre sayısını belirten bir sayı döndürür.


## Examples

### Example #1
`(x as number, optional y as text)` işlevi için gerekli parametre sayısını bulun.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
