---
title: Text.Trim
---

# Text.Trim


删除所有指定的前导字符和尾随字符。


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

返回从指定的 `text` 中删除所有前导字符和尾随字符的结果。默认情况下，将删除所有前导和尾随空格字符。

-   `text`: 要从中删除前导字符和尾随字符的文本。
-   `trim`: 替代默认剪裁的空格字符。此参数可以是单个字符或单个字符的列表。遇到非剪裁字符时，每个前导和尾随剪裁操作都会停止。


## Examples

### Example #1
从 " a b c d " 删除前导空格和尾随空格。
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
从数字的文本表示形式中删除前导零和尾随零。
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
从 HTML 标记中删除前导括号和尾随括号。
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
删除待售状态周围使用的特殊字符。
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
