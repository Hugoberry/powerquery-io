---
title: Text.Insert
---

# Text.Insert


Bir metin değerini verilen konumda başka bir metin değerine ekler.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

<code>newText</code> metin değerini <code>offset</code> konumunda <code>text</code> metin değerine eklemenin sonucunu döndürür. Konumlar 0'dan başlar.


## Examples

### Example #1 
&#34;ABD&#34; ifadesinde &#34;B&#34; ile &#34;D&#34; arasına &#34;C&#34; ekler.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
