---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Trả về kết quả của thao tác cố suy ra các tính năng SQL cho trình điều khiển SQL.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Trả về kết quả của thao tác cố suy ra các tính năng của SQL với chuỗi kết nối `connectionString` sử dụng ODBC. `connectionString` có thể là văn bản hoặc bản ghi của các cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số.


## Examples

### Example #1
Trả về các tính năng SQL được suy ra cho chuỗi kết nối.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
