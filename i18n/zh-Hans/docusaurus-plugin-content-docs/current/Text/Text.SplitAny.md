---
title: Text.SplitAny
---

# Text.SplitAny


返回基于分隔符中的任何字符拆分的文本值列表。


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

返回根据分隔符中指定的任何字符拆分文本值而生成的文本值的列表。

-   `text`: 要拆分的文本值。
-   `separators`: 用于拆分文本的分隔符字符。


## Examples

### Example #1
使用指定的分隔符字符根据给定文本创建列表。
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
