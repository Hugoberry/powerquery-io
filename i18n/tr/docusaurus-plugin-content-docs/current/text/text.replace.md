---
title: Text.Replace
---

# Text.Replace


Metninde verilen alt dizenin tüm oluşumlarını değiştirir.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

`old` metin değerinin `text` metin değerindeki tüm oluşumlarını `new` metin değeri ile değiştirmenin sonucunu döndürür. Bu işlev büyük/küçük harfe duyarlıdır.


## Examples

### Example #1
Bir tümcedeki tüm "the" örneklerini "a" ile değiştirir.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
