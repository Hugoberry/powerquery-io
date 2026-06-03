---
title: Text.TrimStart
---

# Text.TrimStart


Loại bỏ tất cả các ký tự ở đầu được chỉ định.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Trả về kết quả loại bỏ tất cả các ký tự ở đầu khỏi `text` được chỉ định. Theo mặc định, tất cả các ký tự dấu cách ở đầu đều bị loại bỏ.

-   `text`: Văn bản chứa các ký tự ở đầu sẽ bị loại bỏ.
-   `trim`: Ghi đè các ký tự dấu cách được cắt bớt theo mặc định. Tham số này có thể là một ký tự đơn hoặc danh sách các ký tự đơn. Mỗi thao tác cắt ký tự ở đầu sẽ dừng khi gặp một ký tự không bị cắt.


## Examples

### Example #1
Loại bỏ dấu cách cách quãng khỏi " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Loại bỏ các số 0 ở đầu khỏi dạng biểu diễn văn bản của một số.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Loại bỏ các ký tự đệm ở đầu khỏi tên tài khoản có độ rộng cố định.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
