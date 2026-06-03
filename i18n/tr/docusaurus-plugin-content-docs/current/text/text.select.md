---
title: Text.Select
---

# Text.Select


Verilen karakterin veya karakter listesinin girdi metin değerindeki tüm oluşumlarını seçerer.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

`text` metin değerinin `selectChars` konumundaki tüm karakterler kaldırılmamış şekilde kopyasını döndürür.


## Examples

### Example #1
'a' - 'z' aralığındaki metin değerinden tüm karakterleri seçin.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
