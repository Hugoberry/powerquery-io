---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Kết hợp các cột được chỉ định thành một cột có giá trị trong bản ghi mới, trong đó mỗi bản ghi chứa tên trường và giá trị tương ứng với tên cột và giá trị của các cột được kết hợp.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Kết hợp các cột được chỉ định của <code>table</code> thành một cột mang giá trị bản ghi mới có tên là <code>newColumnName</code>, trong đó mỗi bản ghi có tên trường và giá trị tương ứng với tên cột và giá trị của các cột được kết hợp. Nếu chỉ định bản ghi cho <code>options</code>, có thể sẽ có các tùy chọn sau:     <ul>     <li> <code>DisplayNameColumn</code>: Khi chỉ định dưới dạng văn bản, cho biết tên cột đã cho phải được coi là tên hiển thị của bản ghi. Không cần phải là một trong các cột trong bản ghi. </li>     <li> <code>TypeName</code>: Khi được chỉ định dưới dạng văn bản, cung cấp tên loại lô-gic cho bản ghi kết quả có thể được sử dụng khi tải dữ liệu để thúc đẩy hành vi của môi trường tải. </li>    </ul>    



## Category
Table.Transformation
