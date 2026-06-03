---
title: Text.Split
---

# Text.Split


Tách văn bản thành danh sách giá trị văn bản dựa trên dấu tách được chỉ định.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Trả về danh sách các giá trị văn bản thu được từ việc chia tách một giá trị văn bản dựa trên dấu tách được chỉ định.

-   `text`: Giá trị văn bản cần chia tách.
-   `separator`: Dấu tách dùng để chia tách văn bản. Dấu tách có thể là một ký tự đơn lẻ hoặc một chuỗi ký tự. Nếu bạn sử dụng chuỗi ký tự, văn bản sẽ chỉ được chia tách trong những trường hợp có chuỗi chính xác.


## Examples

### Example #1
Tạo một danh sách từ giá trị văn bản "Name|Address|PhoneNumber" được phân tách bằng "|".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Tạo danh sách từ giá trị văn bản bằng một chuỗi ký tự.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
