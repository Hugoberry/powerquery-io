---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Thay thế giá trị lỗi trong cột được chỉ định bằng giá trị chỉ định tương ứng.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Thay thế giá trị lỗi trong cột được chỉ định của <code>table</code> bằng giá trị mới trong danh sách <code>errorReplacement</code>. Định dạng của danh sách là \{\{column1, value1}, …}. Có thể chỉ có một giá trị thay thế mỗi cột, chỉ định cột nhiều lần sẽ dẫn đến lỗi.


## Examples

### Example #1 
Thay thế giá trị lỗi bằng chữ &#34;world&#34; trong bảng.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
Thay thế giá trị lỗi trong cột A bằng chữ &#34;hello&#34; và trong cột B bằng chữ &#34;world&#34; trong bảng.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
