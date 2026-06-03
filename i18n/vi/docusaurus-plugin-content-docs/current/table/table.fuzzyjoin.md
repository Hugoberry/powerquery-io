---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Nối các hàng từ hai bảng so khớp mờ với nhau dựa trên các khóa cho sẵn.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Nối các hàng `table1` với các hàng `table2` dựa trên phép khớp mờ những giá trị của cột chính do `key1` chọn (cho `table1`) và `key2` chọn (cho `table2`).

Khớp mờ là một phép so sánh dựa trên sự tương đồng của văn bản chứ không phải sự ngang bằng.

Theo mặc định, sẽ thực hiện phép nối trong, tuy nhiên, có thể đưa vào `joinKind` tùy chọn để chỉ định loại phép nối. Các tùy chọn bao gồm:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Có thể đưa vào tập hợp `joinOptions` tùy chọn để chỉ định cách so sánh những cột chính. Các tùy chọn bao gồm:

-   `ConcurrentRequests` : Một số trong khoảng từ 1 đến 8 cho biết số luồng song song để sử dụng cho hoạt động khớp mờ. Giá trị mặc định là 1.
-   `Culture` : Cho phép nhóm bản ghi dựa trên quy tắc cụ thể theo văn hóa. Đây có thể là bất kỳ tên văn hóa hợp lệ nào. Ví dụ: một tùy chọn Văn hóa gồm các bản ghi khớp "ja-JP" dựa trên văn hóa của người Nhật. Giá trị mặc định là "" có kết quả khớp dựa trên văn hóa của người Anh bất biến.
-   `IgnoreCase` : Giá trị logic (true/false) cho phép khớp khóa phân biệt chữ hoa/thường. Ví dụ: khi là true, "Grapes" khớp với "grapes". Giá trị mặc định là true.
-   `IgnoreSpace` : Giá trị logic (true/false) cho phép kết hợp các phần văn bản để tìm kết quả khớp. Ví dụ: khi là true, "Gra pes" khớp với "Grapes". Giá trị mặc định là true.
-   `NumberOfMatches` : Một số nguyên chỉ định số hàng khớp tối đa có thể được trả về cho mỗi hàng đầu vào. Ví dụ: Giá trị là 1 sẽ trả về nhiều nhất một hàng khớp cho mỗi hàng đầu vào. Nếu không cung cấp tùy chọn này thì tất cả các hàng khớp đều được trả về.
-   `SimilarityColumnName` : Tên của cột hiển thị độ tương tự giữa giá trị đầu vào và giá trị đại diện cho đầu vào đó. Giá trị mặc định là null, khi đó cột mới cho độ tương tự sẽ không được thêm vào.
-   `Threshold` : Một số trong khoảng từ 0,00 đến 1,00 cho biết điểm tương đồng mà tại đó hai giá trị sẽ khớp nhau. Ví dụ: "Grapes" và "Graes" (thiếu "p") được khớp với nhau chỉ khi tùy chọn này được đặt thành dưới 0,90. Ngưỡng 1,00 chỉ cho phép khớp chính xác. (Lưu ý rằng một "kết quả khớp chính xác" gần đúng có thể bỏ qua các khác biệt như viết hoa, thứ tự từ và dấu chấm câu.) Giá trị mặc định là 0,80.
-   `TransformationTable` : Bảng cho phép khớp các bản ghi dựa trên các ánh xạ giá trị tùy chỉnh. Bảng sẽ chứa các cột "From" và "To". Ví dụ: "Grapes" được khớp với "Raisins" nếu bảng chuyển đổi được cung cấp có cột "From" chứa "Grapes" và cột "To" chứa "Raisins". Lưu ý rằng việc chuyển đổi sẽ được áp dụng cho mọi phiên bản văn bản trong bảng chuyển đổi. Với bảng chuyển đổi ở trên, "Grapes are sweet" cũng được khớp với "Raisins are sweet".


## Examples

### Example #1
Phép nối mờ bên trong ở bên trái của hai bảng dựa trên \[FirstName\]
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
