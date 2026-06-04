---
title: Text.ToList
---

# Text.ToList


根據指定的文字值傳回字元值的清單。


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

根據指定的文字值 `text` 傳回字元值的清單。


## Examples

### Example #1
根據文字 "Hello World" 建立字元值的清單。
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
