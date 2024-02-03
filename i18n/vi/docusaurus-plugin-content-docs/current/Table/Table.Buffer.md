---
title: Table.Buffer
---

# Table.Buffer


## Description

Tải một bảng trong bộ nhớ, cô lập bảng đó khỏi các thay đổi bên ngoài trong quá trình đánh giá.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Ghi bảng vào bộ đệm trong bộ nhớ để khi đánh giá, các thay đổi bên ngoài không ảnh hưởng đến bảng này.    Việc ghi vào bộ đệm không gây ra ảnh hưởng sâu rộng. Thao tác này đòi hỏi phải đánh giá mọi giá trị của ô vô hướng nhưng để nguyên giá trị có hướng (hàng, danh sách, bảng, v.v.).    <br />    <br />    Lưu ý rằng hàm này đôi khi có thể làm cho truy vấn của bạn chạy nhanh hơn hoặc không. Trong một số trường hợp, hàm này làm cho truy vấn của bạn chạy chậm hơn do phải sử dụng thêm     để đọc và lưu trữ tất cả dữ liệu vào bộ nhớ, cũng như do việc ghi vào bộ đệm làm cản trở hoạt động nén xuôi dòng. Nếu không cần ghi    dữ liệu vào bộ đệm nhưng bạn chỉ muốn ngăn hoạt động nén xuôi dòng, hay sử dụng <code>Table.StopFolding</code> thay vào đó.


## Examples

### Example #1 
Tải tất cả hàng trong bảng SQL vào bộ nhớ để các hoạt động xuôi dòng không thể truy vấn SQL Server được nữa.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
