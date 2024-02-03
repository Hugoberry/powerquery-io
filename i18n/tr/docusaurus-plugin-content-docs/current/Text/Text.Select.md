---
title: Text.Select
---

# Text.Select


## Description

Verilen karakterin veya karakter listesinin girdi metin değerindeki tüm oluşumlarını seçerer.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

<code>text</code> metin değerinin <code>selectChars</code> konumundaki tüm karakterler kaldırılmamış şekilde kopyasını döndürür.  


## Examples

### Example #1 
&#39;a&#39; - &#39;z&#39; aralığındaki metin değerinden tüm karakterleri seçin.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
