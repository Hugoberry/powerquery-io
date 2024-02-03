---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Lắp ráp bản ghi vào chuỗi truy vấn URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Lắp ráp bản ghi <code>query</code> vào chuỗi truy vấn URI, thoát các ký tự khi cần thiết.


## Examples

### Example #1 
Mã hóa chuỗi truy vấn chứa một số ký tự đặc biệt.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
