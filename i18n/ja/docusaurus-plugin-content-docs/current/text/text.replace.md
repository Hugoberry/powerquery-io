---
title: Text.Replace
---

# Text.Replace


テキスト内で出現する指定されたサブストリングをすべて置き換えます。


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

テキスト値 <code>text</code> に出現するすべてのテキスト値 <code>old</code> をテキスト値 <code>new</code> に置き換えた結果を返します。この関数では大文字と小文字が区別されます。


## Examples

### Example #1 
文章内に出現するすべての &#34;the&#34; を &#34;a&#34; に置き換えます。
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
