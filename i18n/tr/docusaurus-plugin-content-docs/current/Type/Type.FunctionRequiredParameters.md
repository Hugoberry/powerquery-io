---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

İşlev türünü çalıştırılabilmesi için gereken minimum parametre sayısını belirten bir sayı döndürür.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

İşlevin <code>type</code> girişinin çalıştırılabilmesi için gereken minimum parametre sayısını belirten bir sayı döndürür.


## Examples

### Example #1 
&lt;code&gt;(x as number, optional y as text)&lt;/code&gt; işlevi için gerekli parametre sayısını bulun.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
