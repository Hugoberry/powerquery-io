---
title: Text.Remove
---

# Text.Remove


Verilen karakterin veya karakter listesinin girdi metin değerindeki tüm oluşumlarını kaldırır.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

<code>text</code> metin değerinin <code>removeChars</code> konumundaki tüm karakterler kaldırılmış şekilde kopyasını döndürür.  


## Examples

### Example #1 
Metin değerinden , ve ; karakterlerini kaldırır.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
