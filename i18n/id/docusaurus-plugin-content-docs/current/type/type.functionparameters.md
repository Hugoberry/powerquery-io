---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Menghasilkan rekaman dengan nilai bidang yang diatur ke nama parameter jenis fungsi, dan nilainya diatur ke jenisnya yang terkait.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Menghasilkan rekaman dengan nilai bidang yang diatur ke nama parameter `type`, dan nilainya diatur ke jenisnya yang terkait.


## Examples

### Example #1
Temukan jenis parameter untuk fungsi `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
