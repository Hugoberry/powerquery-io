---
title: Text.Repeat
---

# Text.Repeat


指定の回数繰り返された入力テキストで構成されるテキスト値を返します。


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

<code>count</code> 回繰り返された入力テキスト <code>text</code> で構成されるテキスト値を返します。


## Examples

### Example #1 
テキスト &#34;a&#34; を 5 回繰り返します。
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
テキスト &#34;helloworld&#34; を 3 回繰り返します。
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
