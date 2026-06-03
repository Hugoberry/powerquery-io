---
title: Text.TrimEnd
---

# Text.TrimEnd


Loại bỏ tất cả các ký tự ở cuối được chỉ định.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Trả về kết quả loại bỏ tất cả các ký tự ở cuối khỏi `text` được chỉ định. Theo mặc định, tất cả các ký tự dấu cách ở cuối đều bị loại bỏ.

-   `text`: Văn bản chứa các ký tự ở cuối sẽ bị loại bỏ.
-   `trim`: Ghi đè các ký tự dấu cách được cắt bớt theo mặc định. Tham số này có thể là một ký tự đơn hoặc danh sách các ký tự đơn. Mỗi thao tác cắt ký tự ở cuối sẽ dừng khi gặp một ký tự không bị cắt.


## Examples

### Example #1
Loại bỏ dấu cách kế tiếp khỏi " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Loại bỏ các số 0 ở cuối khỏi dạng biểu diễn văn bản của số dấu phẩy động được đệm.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Loại bỏ các ký tự đệm ở cuối khỏi tên tài khoản có độ rộng cố định.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
