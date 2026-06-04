---
title: Type.ForFunction
---

# Type.ForFunction


Mengembalikan jenis yang mewakili fungsi dengan parameter tertentu dan mengembalikan kekangan jenis.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Wujudkan `function type` daripada `signature`, rekod `ReturnType` dan `Parameters`, dan `min`, bilangan minimum argumen diperlukan untuk memulakan fungsi.


## Examples

### Example #1
Mencipta jenis untuk fungsi yang mengambil parameter nombor bernama X dan mengembalikan nombor.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
