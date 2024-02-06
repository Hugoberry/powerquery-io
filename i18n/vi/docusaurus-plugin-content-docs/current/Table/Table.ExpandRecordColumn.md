---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Mở rộng một cột bản ghi thành các cột với từng giá trị.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Cho <code>column</code> bản ghi trong đầu vào <code>table</code>, hãy tạo một bảng với một cột cho mỗi trường trong bản ghi. Có thể tùy chọn chỉ định <code>newColumnNames</code> để đảm bảo tên dành cho các cột trong bảng mới là duy nhất.    <ul>        <li><code>table</code>: Bảng gốc với cột bản ghi sẽ mở rộng. </li>        <li><code>column</code>: Cột sẽ mở rộng.</li>        <li><code>fieldNames</code>: Danh sách các trường sẽ mở rộng thành các cột trong bảng.</li>        <li><code>newColumnNames</code>: Danh sách tên cột sẽ đặt cho cột mới. Tên cột mới không được trùng lặp với bất kỳ cột nào trong bảng mới.</li>    </ul>


## Examples

### Example #1 
Mở rộng cột [a] trong bảng &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; thành 3 cột &#34;aa&#34;, &#34;bb&#34; và &#34;cc&#34;.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
