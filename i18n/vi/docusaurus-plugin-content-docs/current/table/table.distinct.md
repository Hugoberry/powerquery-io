---
title: Table.Distinct
---

# Table.Distinct


Loại bỏ hàng trùng lặp khỏi bảng.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Loại bỏ hàng trùng lặp khỏi bảng.    Tham số tùy chọn, <code>equationCriteria</code>, chỉ định những cột của bảng được kiểm tra trùng lặp. Nếu <code>equationCriteria</code> không được chỉ định, tất cả các cột sẽ được kiểm tra.<br />    <br />    Vì Power Query đôi khi giảm tải một số thao tác sang nguồn dữ liệu phụ trợ (còn gọi là "nén") và đôi khi tối ưu hóa các truy vấn bằng cách  bỏ qua các thao tác không thực sự cần thiết. Nhìn chung, không đảm bảo loại trùng lặp cụ thể nào sẽ được giữ lại.    Ví dụ, bạn không thể giả định rằng hàng đầu tiên với tập giá trị cột duy nhất sẽ được giữ lại và các hàng bên dưới trong bảng sẽ bị xóa đi.    Nếu muốn xóa trùng lặp để có kết quả theo dự đoán, đầu tiên, bạn cần tạo bộ đệm cho bảng bằng cách sử dụng <code>Table.Buffer</code>.


## Examples

### Example #1 
Loại bỏ hàng trùng lặp khỏi bảng.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
Loại bỏ hàng trùng lặp khỏi cột [b] trong bảng &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
