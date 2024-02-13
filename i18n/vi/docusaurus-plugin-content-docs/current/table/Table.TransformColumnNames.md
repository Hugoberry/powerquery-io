---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Biến đổi tên cột bằng cách sử dụng hàm đã cho.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Biến đổi tên cột bằng cách sử dụng hàm <code>nameGenerator</code> đã cho. Tùy chọn hợp lệ:    <div>      <code>MaxLength</code> chỉ định độ dài tối đa của tên cột mới. Nếu kết quả hàm đã cho có tên cột dài hơn thì tên dài đó sẽ bị cắt bớt.    </div>    <div>      <code>Comparer</code> được sử dụng để kiểm soát so sánh trong khi tạo tên cột mới. Trình so sánh có thể được sử dụng để cung cấp so sánh nhận thức về ngôn ngữ và văn hóa hoặc phân biệt chữ hoa-thường.    </div>    <div>      Thông tin sau đây được tích hợp trong trình so sánh hiện có bằng ngôn ngữ công thức:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Được sử dụng thực hiện so sánh thứ tự chính xác</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Được sử dụng để thực hiện so sánh phân biệt chữ hoa-thường thứ tự chính xác</li>      <li> <code>Comparer.FromCulture</code>: Được sử dụng để thực hiện só sánh nhận thức văn hóa</li>    </ul>    


## Examples

### Example #1 
Xóa ký tự &lt;code&gt;#(tab)&lt;/code&gt; khỏi tên cột
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Biến đổi tên cột để tạo tên phân biệt chữ hoa-thường có độ dài là 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
