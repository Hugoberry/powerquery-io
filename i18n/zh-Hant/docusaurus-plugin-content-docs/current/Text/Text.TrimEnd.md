---
title: Text.TrimEnd
---

# Text.TrimEnd


移除所有指定的尾端字元。


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

傳回從指定的 `text` 移除所有尾端字元的結果。預設會移除所有尾端空白字元。

-   `text`：要從中移除尾端字元的文字。
-   `trim`: 覆蓋預設修剪的空白字元。此參數可以是單一字元或單一字元清單。每個尾端修剪作業都會在遇到非修剪的字元時停止。


## Examples

### Example #1
從 " a b c d " 中移除尾端空白字元。
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
從填補浮點數的文字表示移除尾端零。
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
從固定寬度帳戶名稱移除尾端填補字元。
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
