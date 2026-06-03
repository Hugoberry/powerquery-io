---
title: Table.Group
---

# Table.Group


Nhóm các hàng trong bảng có cùng khóa.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Nhóm các hàng `table` theo các cột có khóa được xác định bởi `key`. `key` có thể là tên của một cột hoặc tên của danh sách cột. Đối với mỗi nhóm, mỗi bản ghi sẽ được xây dựng bao gồm các cột có khóa (và giá trị của các cột này), cùng với mọi cột tổng hợp do `aggregatedColumns` chỉ định. Theo tùy chọn, `groupKind` và `comparer` cũng có thể được chỉ định.  
  
Nếu dữ liệu đã được sắp xếp theo các cột có khóa thì `groupKind` của GroupKind.Local có thể được cung cấp. Điều này có thể cải thiện hiệu suất gộp nhóm trong một số trường hợp, vì tất cả các hàng có bộ giá trị khóa đã cho đều được cho là liền nhau.  
  
Khi chuyển `comparer`, lưu ý rằng nếu coi các khóa khác nhau là giống nhau thì một hàng có thể bị đặt trong một nhóm có khóa khác với khóa của hàng đó.  
  
Hàm này không đảm bảo thứ tự của các hàng trả về.


## Examples

### Example #1
Nhóm bảng cộng thêm một cột tính gộp \[total\] chứa tổng số giá ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
