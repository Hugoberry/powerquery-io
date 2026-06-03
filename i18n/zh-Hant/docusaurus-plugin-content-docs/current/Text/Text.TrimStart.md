---
title: Text.TrimStart
---

# Text.TrimStart


移除所有指定的開頭字元。


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

傳回從指定的 `text` 移除所有開頭字元的結果。預設會移除所有開頭空白字元。

-   `text`: 要從中移除開頭字元的文字。
-   `trim`: 覆蓋預設修剪的空白字元。此參數可以是單一字元或單一字元清單。每個開頭修剪作業都會在遇到非修剪的字元時停止。


## Examples

### Example #1
從 " a b c d " 中移除開頭空白字元。
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
從數字的文字表示移除開頭零。
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
從固定寬度帳戶名稱移除開頭填補字元。
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
