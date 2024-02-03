---
title: Text.Upper
---

# Text.Upper


## Description

すべての文字を大文字に変換します。


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

<code>text</code> 内のすべての文字を大文字に変換した結果を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
&#34;aBcD&#34; の大文字のバージョンを取得します。
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
