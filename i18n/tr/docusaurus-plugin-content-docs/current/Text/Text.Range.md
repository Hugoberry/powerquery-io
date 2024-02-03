---
title: Text.Range
---

# Text.Range


## Description

Uzaklıkta bulunan alt dizeyi döndürür.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

<code>offset</code> uzaklığında bulunan <code>text</code> metninden alt dizeyi döndürür.    Kaç karakterin döndürüleceğini belirtmek için isteğe bağlı bir <code>count</code> parametresi eklenebilir. Yeterli sayıda karakter bulunmazsa hata verir.


## Examples

### Example #1 
&#34;Hello World&#34; metninde 6 dizininden başlayarak alt dizeyi bulur.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
&#34;Hello World Hello&#34; metninde 6 dizininden başlayarak ve 5 karakteri kapsayarak alt dizeyi bulur.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
