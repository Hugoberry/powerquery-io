---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

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


## Details

Thêm cột mới <code>newColumnName</code> vào <code>table</code> với giá trị đại diện của <code>columnName</code>. Phần đại diện có được qua các giá trị khớp mờ trong <code>columnName</code>, ở từng hàng.    Một tập hợp tùy chọn <code>options</code> có thể được kèm theo để chỉ định cách so sánh các cột chính. Các tùy chọn bao gồm:    <ul><li><code>Culture</code> : Cho ph&#233;p nh&#243;m bản ghi dựa tr&#234;n quy tắc cụ thể theo văn h&#243;a. Đ&#226;y c&#243; thể l&#224; bất kỳ t&#234;n văn h&#243;a hợp lệ nào. V&#237; dụ: một t&#249;y chọn Văn h&#243;a gồm c&#225;c bản ghi nh&#243;m &quot;ja-JP&quot; dựa tr&#234;n văn h&#243;a của người Nhật. Gi&#225; trị mặc định l&#224; &quot;&quot; có nh&#243;m dựa tr&#234;n văn h&#243;a của người Anh b&#226;́t bi&#234;́n.</li><li><code>IgnoreCase</code> : Gi&#225; trị logic (true/false) cho ph&#233;p nh&#243;m khóa ph&#226;n biệt chữ hoa/thường. V&#237; dụ: khi là true, &quot;Grapes&quot; được nh&#243;m với &quot;grapes&quot;. Gi&#225; trị mặc định l&#224; true.</li><li><code>IgnoreSpace</code> : Gi&#225; trị logic (true/false) cho ph&#233;p kết hợp c&#225;c phần văn bản để t&#236;m nh&#243;m. V&#237; dụ: khi là true, &quot;Gra pes&quot; được nh&#243;m với &quot;Grapes&quot;. Gi&#225; trị mặc định l&#224; true.</li><li><code>SimilarityColumnName</code> : T&#234;n của cột hiển thị đ&#244;̣ tương tự giữa gi&#225; trị đầu v&#224;o v&#224; gi&#225; trị đại diện cho đầu v&#224;o đ&#243;. Gi&#225; trị mặc định l&#224; null, khi đ&#243; cột mới cho đ&#244;̣ tương tự sẽ kh&#244;ng được th&#234;m vào.</li><li><code>Threshold</code> : Một số trong khoảng từ 0,00 đến 1,00 cho bi&#234;́t điểm tương đ&#244;̀ng m&#224; tại đ&#243; hai gi&#225; trị sẽ được nh&#243;m.    V&#237; dụ: &quot;Grapes&quot; v&#224; &quot;Graes&quot; (thiếu &quot;p&quot;) được nh&#243;m với nhau chỉ khi t&#249;y chọn n&#224;y được đặt th&#224;nh dưới 0,90.    Ngưỡng 1,00 chỉ cho ph&#233;p khớp ch&#237;nh x&#225;c.    (Lưu &#253; rằng một &quot;kết quả khớp ch&#237;nh x&#225;c&quot; gần đ&#250;ng c&#243; thể bỏ qua c&#225;c kh&#225;c biệt như viết hoa, thứ tự từ v&#224; dấu chấm c&#226;u.)    Gi&#225; trị mặc định l&#224; 0,80.</li><li><code>TransformationTable</code> : Bảng cho phép nhóm các bản ghi dựa tr&#234;n các ánh xạ giá trị tùy chỉnh. Bảng sẽ chứa các c&#244;̣t &quot;From&quot; và &quot;To&quot;. Ví dụ: &quot;Grapes&quot; được nhóm với &quot;Raisins&quot; n&#234;́u bảng chuy&#234;̉n đ&#244;̉i được cung c&#226;́p có c&#244;̣t &quot;From&quot; chứa &quot;Grapes&quot; và c&#244;̣t &quot;To&quot; chứa &quot;Raisins&quot;. Lưu ý rằng vi&#234;̣c chuy&#234;̉n đ&#244;̉i sẽ được áp dụng cho mọi phi&#234;n bản văn bản trong bảng chuy&#234;̉n đ&#244;̉i. Với bảng chuy&#234;̉n đ&#244;̉i ở tr&#234;n, &quot;Grapes are sweet&quot; cũng được nhóm với &quot;Raisins are sweet&quot;.</li></ul><br />    


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
