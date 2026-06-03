---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Thêm một cột mới có các giá trị đại diện thu được bằng cách tạo nhóm mờ cho các giá trị của cột được chỉ định trong bảng.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Thêm cột mới `newColumnName` vào `table` với giá trị đại diện của `columnName`. Phần đại diện có được qua các giá trị khớp mờ trong `columnName`, ở từng hàng.

Một tập hợp tùy chọn `options` có thể được kèm theo để chỉ định cách so sánh các cột chính. Các tùy chọn bao gồm:

-   `Culture` : Cho phép nhóm bản ghi dựa trên quy tắc cụ thể theo văn hóa. Đây có thể là bất kỳ tên văn hóa hợp lệ nào. Ví dụ: một tùy chọn Văn hóa gồm các bản ghi nhóm "ja-JP" dựa trên văn hóa của người Nhật. Giá trị mặc định là "" có nhóm dựa trên văn hóa của người Anh bất biến.
-   `IgnoreCase` : Giá trị logic (true/false) cho phép nhóm khóa phân biệt chữ hoa/thường. Ví dụ: khi là true, "Grapes" được nhóm với "grapes". Giá trị mặc định là true.
-   `IgnoreSpace` : Giá trị logic (true/false) cho phép kết hợp các phần văn bản để tìm nhóm. Ví dụ: khi là true, "Gra pes" được nhóm với "Grapes". Giá trị mặc định là true.
-   `SimilarityColumnName` : Tên của cột hiển thị độ tương tự giữa giá trị đầu vào và giá trị đại diện cho đầu vào đó. Giá trị mặc định là null, khi đó cột mới cho độ tương tự sẽ không được thêm vào.
-   `Threshold` : Một số trong khoảng từ 0,00 đến 1,00 cho biết điểm tương đồng mà tại đó hai giá trị sẽ được nhóm. Ví dụ: "Grapes" và "Graes" (thiếu "p") được nhóm với nhau chỉ khi tùy chọn này được đặt thành dưới 0,90. Ngưỡng 1,00 chỉ cho phép khớp chính xác. (Lưu ý rằng một "kết quả khớp chính xác" gần đúng có thể bỏ qua các khác biệt như viết hoa, thứ tự từ và dấu chấm câu.) Giá trị mặc định là 0,80.
-   `TransformationTable` : Bảng cho phép nhóm các bản ghi dựa trên các ánh xạ giá trị tùy chỉnh. Bảng sẽ chứa các cột "From" và "To". Ví dụ: "Grapes" được nhóm với "Raisins" nếu bảng chuyển đổi được cung cấp có cột "From" chứa "Grapes" và cột "To" chứa "Raisins". Lưu ý rằng việc chuyển đổi sẽ được áp dụng cho mọi phiên bản văn bản trong bảng chuyển đổi. Với bảng chuyển đổi ở trên, "Grapes are sweet" cũng được nhóm với "Raisins are sweet".


## Examples

### Example #1
Tìm các giá trị đại diện cho vị trí của nhân viên.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
