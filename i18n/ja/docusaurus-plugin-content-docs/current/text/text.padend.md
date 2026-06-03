---
title: Text.PadEnd
---

# Text.PadEnd


指定されたテキストの末尾に文字を埋め込んで、指定された長さのテキストを返します。


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

長さが `count` になるようにテキスト値 `text` の末尾にスペースが挿入された `text` 値を返します。 省略可能な文字 `character` を、埋め込み用の文字として指定できます。既定の埋め込み文字はスペースです。


## Examples

### Example #1
テキスト値の末尾に文字を埋め込んで、長さが 10 文字になるようにします。
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
テキスト値の末尾に "|" を埋め込んで、長さが 10 文字になるようにします。
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
