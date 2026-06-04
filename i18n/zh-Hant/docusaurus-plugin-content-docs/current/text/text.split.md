---
title: Text.Split
---

# Text.Split


根據指定的分隔符號，將文字分割成文字值的清單。


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

傳回文字值的清單，這是根據指定的分隔符號分割文字值產生的結果。

-   `text`: 要分割的文字值。
-   `separator`: 用於分割文字的分隔符號。分隔符號可以是單一字元或一連串的字元。如果使用一連串的字元，則只會在發生確切順序所在的執行個體分割文字。


## Examples

### Example #1
根據 "|" 分隔的文字值 "Name|Address|PhoneNumber" 建立清單。
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
使用一系列字元從文字值建立清單。
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
