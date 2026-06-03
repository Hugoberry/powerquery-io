---
title: Text.Split
---

# Text.Split


基于指定的分隔符将文本拆分为文本值列表。


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

返回根据指定的分隔符拆分文本值而生成的文本值的列表。

-   `text`: 要拆分的文本值。
-   `separator`: 用于拆分文本的分隔符。分隔符可以是单个字符或字符序列。如果使用字符序列，则仅在出现确切序列的实例上拆分文本。


## Examples

### Example #1
从由 "|" 分隔的文本值 "Name|Address|PhoneNumber" 创建列表。
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
使用字符序列根据文本值创建列表。
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
