---
title: Text.PadStart
---

# Text.PadStart


指定されたテキストの先頭に文字を埋め込んで、指定された長さのテキストを返します。


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

長さが <code>count</code> になるようにテキスト値 <code>text</code> の先頭にスペースが挿入された <code>text</code> 値を返します。    省略可能な文字 <code>character</code> を、埋め込み用の文字として指定できます。既定の埋め込み文字はスペースです。


## Examples

### Example #1 
テキスト値の先頭に文字を埋め込んで、長さが 10 文字になるようにします。
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
テキスト値の先頭に &#34;|&#34; を埋め込んで、長さが 10 文字になるようにします。
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
