---
title: Text.Trim
---

# Text.Trim


指定した先頭と末尾のすべての文字を削除します。


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

指定された `text` から先頭と末尾の文字をすべて削除した結果を返します。既定では、先頭と末尾の空白文字はすべて削除されます。

-   `text`: 先頭と末尾の文字を削除するテキスト。
-   `trim`: 既定でトリミングされる空白文字をオーバーライドします。このパラメーターには、1 文字または 1 文字の一覧を指定できます。トリミングされていない文字が検出されると、先頭と末尾のトリミング操作が停止します。


## Examples

### Example #1
" a b c d " から先頭と末尾の空白を削除します。
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
数値のテキスト表現から先頭と末尾のゼロを削除します。
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
HTML タグから先頭と末尾のかっこを削除します。
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
保留中の販売状態に使用する特殊文字を削除します。
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
