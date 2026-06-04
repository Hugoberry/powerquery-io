---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Kembalikan rekod dengan nilai medan ditetapkan kepada nama parameter jenis fungsi, dan nilai mereka ditetapkan kepada jenis yang berkaitan dengan mereka.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Kembalikan rekod dengan nilai medan yang ditetapkan kepada nama parameter `type`, dan nilai mereka ditetapkan kepada jenis yang berkaitan dengan mereka.


## Examples

### Example #1
Cari jenis parameter untuk fungsi `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
