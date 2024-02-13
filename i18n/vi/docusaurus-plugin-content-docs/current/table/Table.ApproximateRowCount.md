---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Trả về số lượng hàng gần đúng trong bảng.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Trả về số lượng hàng xấp xỉ <code>table</code> hoặc lỗi nếu nguồn dữ liệu không hỗ trợ giá trị ước lượng.


## Examples

### Example #1 
Ước tính số tổ hợp riêng biệt của thành phố và tiểu bang trong một bảng lớn, để có thể dùng làm ước tính lượng số cho các cột. Ước tính lượng số quan trọng đến mức nhiều nguồn dữ liệu (như SQL Server) hỗ trợ ước lượng cụ thể này, thường sử dụng thuật toán có tên HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
