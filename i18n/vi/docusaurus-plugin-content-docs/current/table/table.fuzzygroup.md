---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Khớp các hàng trong bảng dựa trên phương pháp khớp mờ các từ khóa.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Nhóm hàng `table` theo các giá trị khớp mờ trong cột được chỉ định, `key`, trong từng hàng. Với mỗi hàng, sẽ có một bản ghi được xây dựng chứa các cột chính (và giá trị của chúng) cùng với mọi cột tổng hợp như được chỉ định bởi `aggregatedColumns`. Hàm này không thể đảm bảo trả lại thứ tự hàng cố định.

Một tập hợp tùy chọn thuộc `options` có thể được bao gồm để chỉ định cách so sánh các cột chính. Các tùy chọn bao gồm:

-   `Culture` : Cho phép nhóm bản ghi dựa trên quy tắc cụ thể theo văn hóa. Đây có thể là bất kỳ tên văn hóa hợp lệ nào. Ví dụ: một tùy chọn Văn hóa gồm các bản ghi nhóm "ja-JP" dựa trên văn hóa của người Nhật. Giá trị mặc định là "" có nhóm dựa trên văn hóa của người Anh bất biến.
-   `IgnoreCase` : Giá trị logic (true/false) cho phép nhóm khóa phân biệt chữ hoa/thường. Ví dụ: khi là true, "Grapes" được nhóm với "grapes". Giá trị mặc định là true.
-   `IgnoreSpace` : Giá trị logic (true/false) cho phép kết hợp các phần văn bản để tìm nhóm. Ví dụ: khi là true, "Gra pes" được nhóm với "Grapes". Giá trị mặc định là true.
-   `SimilarityColumnName` : Tên của cột hiển thị độ tương tự giữa giá trị đầu vào và giá trị đại diện cho đầu vào đó. Giá trị mặc định là null, khi đó cột mới cho độ tương tự sẽ không được thêm vào.
-   `Threshold` : Một số trong khoảng từ 0,00 đến 1,00 cho biết điểm tương đồng mà tại đó hai giá trị sẽ được nhóm. Ví dụ: "Grapes" và "Graes" (thiếu "p") được nhóm với nhau chỉ khi tùy chọn này được đặt thành dưới 0,90. Ngưỡng 1,00 chỉ cho phép khớp chính xác. (Lưu ý rằng một "kết quả khớp chính xác" gần đúng có thể bỏ qua các khác biệt như viết hoa, thứ tự từ và dấu chấm câu.) Giá trị mặc định là 0,80.
-   `TransformationTable` : Bảng cho phép nhóm các bản ghi dựa trên các ánh xạ giá trị tùy chỉnh. Bảng sẽ chứa các cột "From" và "To". Ví dụ: "Grapes" được nhóm với "Raisins" nếu bảng chuyển đổi được cung cấp có cột "From" chứa "Grapes" và cột "To" chứa "Raisins". Lưu ý rằng việc chuyển đổi sẽ được áp dụng cho mọi phiên bản văn bản trong bảng chuyển đổi. Với bảng chuyển đổi ở trên, "Grapes are sweet" cũng được nhóm với "Raisins are sweet".


## Examples

### Example #1
Nhóm bảng thêm cột tổng hợp \[Tổng số\] có chứa số nhân viên ở từng vị trí (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
