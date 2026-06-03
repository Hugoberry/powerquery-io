---
title: Text.TrimEnd
---

# Text.TrimEnd


指定した末尾の文字をすべて削除します。


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

指定された `text` から末尾の文字をすべて削除した結果を返します。既定では、末尾の空白文字はすべて削除されます。

-   `text`: 末尾の文字を削除するテキスト。
-   `trim`: 既定でトリミングされる空白文字をオーバーライドします。このパラメーターには、1 文字または 1 文字の一覧を指定できます。トリミングされていない文字が検出されると、末尾のトリミング操作が停止します。


## Examples

### Example #1
" a b c d " から末尾の空白を削除します。
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
パディングされた浮動小数点数のテキスト表現から末尾のゼロを削除します。
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
固定幅のアカウント名から末尾のパディング文字を削除します。
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
