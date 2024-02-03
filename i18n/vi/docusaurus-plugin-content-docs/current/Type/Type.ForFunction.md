---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Trả về một loại biểu thị các hàm có tham số cụ thể và trả về ràng buộc loại.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Tạo <code>loại hàm</code> từ <code>signature</code>, bản ghi của <code>ReturnType</code> và <code>Tham số</code> và <code>min</code>, số nhỏ nhất của đối số cần để gọi hàm.


## Examples

### Example #1 
Tạo loại chức năng lấy tham số dạng số có tên là X và trả về một số.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
