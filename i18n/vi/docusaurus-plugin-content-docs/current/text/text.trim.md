---
title: Text.Trim
---

# Text.Trim


Loại bỏ tất cả các ký tự ở đầu và cuối được chỉ định.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Trả về kết quả loại bỏ tất cả các ký tự ở đầu và cuối khỏi `text` được chỉ định. Theo mặc định, tất cả các ký tự dấu cách ở đầu và cuối đều bị loại bỏ.

-   `text`: Văn bản chứa các ký tự ở đầu và cuối sẽ bị loại bỏ.
-   `trim`: Ghi đè các ký tự dấu cách được cắt bớt theo mặc định. Tham số này có thể là một ký tự đơn hoặc danh sách các ký tự đơn. Mỗi thao tác cắt ký tự ở đầu và cuối sẽ dừng khi gặp một ký tự không bị cắt.


## Examples

### Example #1
Loại bỏ dấu cách cách quãng và kế tiếp khỏi " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Loại bỏ các số 0 ở đầu và cuối khỏi dạng biểu diễn văn bản của một số.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Loại bỏ dấu ngoặc ở đầu và cuối tiếp khỏi thẻ HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Loại bỏ các ký tự đặc biệt được sử dụng xung quanh trạng thái bán hàng đang chờ xử lý.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
