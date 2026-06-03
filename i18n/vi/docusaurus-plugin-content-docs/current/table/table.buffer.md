---
title: Table.Buffer
---

# Table.Buffer


Tải một bảng trong bộ nhớ, cô lập bảng đó khỏi các thay đổi bên ngoài trong quá trình đánh giá.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Tải một bảng trong bộ nhớ, cô lập bảng đó khỏi các thay đổi bên ngoài trong quá trình đánh giá. Việc ghi vào bộ đệm không gây ra ảnh hưởng sâu rộng. Thao tác này đòi hỏi phải đánh giá mọi giá trị của ô vô hướng nhưng để nguyên giá trị có hướng (bản ghi, danh sách, bảng, v.v.).

-   `table`: Bảng cần đệm trong bộ nhớ.
-   `options`: (Tùy chọn) Có thể dùng các giá trị bản ghi tùy chọn sau đây:
    -   `BufferMode`: Chế độ đệm mô tả loại thao tác ghi vào bộ đệm cần thực hiện. Tùy chọn này có thể là `BufferMode.Eager` hoặc `BufferMode.Delayed`.

Khi bạn sử dụng hàm này, truy vấn có khả năng sẽ chạy nhanh hơn. Trong một số trường hợp, hàm này có thể làm cho truy vấn của bạn chạy chậm hơn do được thêm vào chi phí khi đọc tất cả dữ liệu và lưu trữ vào bộ nhớ, đồng thời thao tác ghi vào bộ đệm sẽ cản trở việc đưa vào hạ nguồn. Nếu dữ liệu không cần được ghi vào bộ đệm nhưng bạn chỉ muốn cản trở việc đưa vào hạ nguồn, hãy dùng `Table.StopFolding`.


## Examples

### Example #1
Tải tất cả các hàng trong bảng SQL vào bộ nhớ để mọi thao tác hạ nguồn đều không thể truy vấn SQL Server nữa.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
