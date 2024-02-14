---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Trả về bản ghi có các giá trị trường đã đặt cho tên tham số của một loại hàm và giá trị của chúng được đặt cho loại tương ứng.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Trả về bản ghi có các giá trị trường đã đặt cho tên tham số của <code>type</code> và giá trị của chúng được đặt cho loại tương ứng.


## Examples

### Example #1 
Tìm loại tham số cho hàm &lt;code&gt;(x là số, y là văn bản)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
