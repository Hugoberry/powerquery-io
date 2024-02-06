---
title: Text.Lower
---

# Text.Lower


すべての文字を小文字に変換します。


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

<code>text</code> 内のすべての文字を小文字に変換した結果を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
&#34;AbCd&#34; の小文字のバージョンを取得します。
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
