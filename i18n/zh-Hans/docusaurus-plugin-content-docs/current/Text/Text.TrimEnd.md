---
title: Text.TrimEnd
---

# Text.TrimEnd


删除所有指定的尾随字符。


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

返回从指定的 `text` 中删除所有尾随字符的结果。默认情况下，删除所有尾随空格字符。

-   `text`: 要从中删除尾随字符的文本。
-   `trim`: 替代默认剪裁的空格字符。此参数可以是单个字符或单个字符的列表。遇到非剪裁字符时，每个尾随剪裁操作都会停止。


## Examples

### Example #1
从 " a b c d " 删除尾随空格。
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
从填充浮点数的文本表示形式中删除尾随零。
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
从固定宽度帐户名称中删除尾随填充字符。
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
