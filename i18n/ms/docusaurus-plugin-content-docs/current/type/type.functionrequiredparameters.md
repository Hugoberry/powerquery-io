---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Kembalikan nombor yang menentukan nombor minimum parameter yang diperlukan untuk memulakan jenis fungsi.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Kembalikan nombor yang menentukan nombor minimum parameter yang diperlukan untuk memulakan input `type` fungsi.


## Examples

### Example #1
Cari bilangan parameter yang diperlukan bagi fungsi `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
