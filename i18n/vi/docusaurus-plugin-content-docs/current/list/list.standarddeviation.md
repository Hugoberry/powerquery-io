---
title: List.StandardDeviation
---

# List.StandardDeviation


Trả về ước tính dựa trên mẫu của độ lệch chuẩn.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Trả về ước tính dựa trên mẫu của độ lệch chuẩn của các giá trị trong danh sách, `numbersList`. Nếu `numbersList` là danh sách số thì một số được trả về. Một lỗi xuất hiện trên một danh sách trống hoặc một danh sách mục không thuộc loại `số`.


## Examples

### Example #1
Tìm độ lệch chuẩn của các số từ 1 tới 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
