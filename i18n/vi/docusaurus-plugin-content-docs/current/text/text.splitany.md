---
title: Text.SplitAny
---

# Text.SplitAny


Trả về danh sách giá trị văn bản, tách trên ký tự bất kỳ trong dấu tách.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Trả về danh sách các giá trị văn bản thu được từ việc chia tách một giá trị văn bản dựa trên ký tự bất kỳ được chỉ định trong dấu tách.

-   `text`: Giá trị văn bản cần chia tách.
-   `separators`: Các ký tự dấu tách dùng để chia tách văn bản.


## Examples

### Example #1
Tạo danh sách từ văn bản đã cho bằng các ký tự dấu tách được chỉ định.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
