---
title: Text.SplitAny
---

# Text.SplitAny


傳回文字值的清單 (在分隔符號中的任何字元處分割)。


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

傳回文字值的清單，這是根據分隔符號中指定的任何字元分割文字值產生的結果。

-   `text`: 要分割的文字值。
-   `separators`: 用來分割文字的分隔符號字元。


## Examples

### Example #1
使用指定的分隔符號字元從指定文字建立清單。
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
