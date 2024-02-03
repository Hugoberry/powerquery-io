---
title: Text.Replace
---

# Text.Replace


## Description

Metninde verilen alt dizenin tüm oluşumlarını değiştirir.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

<code>old</code> metin değerinin <code>text</code> metin değerindeki tüm oluşumlarını <code>new</code> metin değeri ile değiştirmenin sonucunu döndürür. Bu işlev büyük/küçük harfe duyarlıdır.


## Examples

### Example #1 
Bir tümcedeki tüm &#34;the&#34; örneklerini &#34;a&#34; ile değiştirir.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
