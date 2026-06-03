---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Bir işlev türünün parametrelerinin adına ayarlanan alan değerleriyle ve bunların karşılık gelen türlerine ayarlanan değerleriyle bir kayıt döndürür.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

`type` parametrelerinin adına ayarlanan alan değerleriyle ve bunların karşılık gelen türlerine ayarlanan değerleriyle bir kayıt döndürür.


## Examples

### Example #1
`(x as number, y as text)` işlevi için parametre türlerini bulun.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
