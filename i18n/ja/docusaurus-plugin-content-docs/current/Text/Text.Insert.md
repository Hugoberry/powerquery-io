---
title: Text.Insert
---

# Text.Insert


## Description

テキスト値を指定された位置の別のテキスト値に挿入します。


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

位置 <code>offset</code> のテキスト値 <code>text</code> にテキスト値 <code>newText</code> を挿入した結果を返します。位置は 0 から始まります。


## Examples

### Example #1 
&#34;ABD&#34; の &#34;B&#34; と &#34;D&#34; の間に &#34;C&#34; を挿入します。
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
