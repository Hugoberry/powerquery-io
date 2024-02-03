---
title: Text.Start
---

# Text.Start


## Description

Metnin başlangıcını döndürür


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

<code>text</code> öğesinin ilk <code>count</code> karakterini metin değeri olarak döndürür.


## Examples

### Example #1 
&#34;Hello, World&#34; metninin ilk 5 karakterini alır.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
