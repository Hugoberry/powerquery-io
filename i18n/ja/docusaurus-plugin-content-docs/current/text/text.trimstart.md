---
title: Text.TrimStart
---

# Text.TrimStart


指定した先頭の文字をすべて削除します。


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

指定された `text` から先頭の文字をすべて削除した結果を返します。既定では、先頭の空白文字はすべて削除されます。

-   `text`: 先頭の文字を削除するテキスト。
-   `trim`: 既定でトリミングされる空白文字をオーバーライドします。このパラメーターには、1 文字または 1 文字の一覧を指定できます。トリミングされていない文字が検出されると、先頭のトリミング操作が停止します。


## Examples

### Example #1
" a b c d " から先頭の空白を削除します。
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
数値のテキスト表現から先頭のゼロを削除します。
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
固定幅のアカウント名から先頭のパディング文字を削除します。
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
