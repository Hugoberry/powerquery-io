---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Tăng cấp hàng giá trị đầu tiên làm các tiêu đề cột mới (nghĩa là tên cột).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Tăng cấp hàng giá trị đầu tiên làm các tiêu đề cột mới (tức là tên cột). Theo mặc định, chỉ những giá trị là văn bản hoặc số mới được tăng cấp lên tiêu đề. Tùy chọn hợp lệ:    <div>      <code>PromoteAllScalars</code> : Nếu được đặt thành <code>true</code>, tất cả các giá trị vô hướng trong hàng đầu tiên sẽ được tăng cấp lên tiêu đề bằng cách sử dụng <code>Culture</code>, nếu được chỉ định (hoặc ngôn ngữ tài liệu hiện tại).    Đối với các giá trị không được chuyển thành văn bản, tên cột mặc định sẽ được sử dụng.    </div>    <div>    <code>Culture</code> : Tên ngôn ngữ chỉ định ngôn ngữ cho dữ liệu đó.    </div>  


## Examples

### Example #1 
Tăng cấp hàng giá trị đầu tiên trong bảng.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Tăng cấp tất cả các giá trị vô hướng trong hàng đầu tiên của bảng lên tiêu đề.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
