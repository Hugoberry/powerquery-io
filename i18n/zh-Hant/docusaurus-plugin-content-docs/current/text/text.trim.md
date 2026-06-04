---
title: Text.Trim
---

# Text.Trim


移除所有指定的開頭和尾端字元。


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

傳回從指定的 `text` 移除所有開頭和尾端字元的結果。預設會移除所有開頭和尾端空白字元。

-   `text`: 要從中移除開頭和尾端字元的文字。
-   `trim`: 覆蓋預設修剪的空白字元。此參數可以是單一字元或單一字元清單。每個開頭和尾端修剪作業都會在遇到非修剪的字元時停止。


## Examples

### Example #1
從 " a b c d " 中移除開頭和尾端空白字元。
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
從數字的文字表示移除開頭和尾端零。
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
從 HTML 標籤移除開頭和尾端括弧。
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
移除在擱置銷售狀態前後使用的特殊字元。
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
