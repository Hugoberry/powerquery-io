---
title: Text.PadStart
---

# Text.PadStart


## Description

Verilen metnin başını doldurarak belirtilen uzunluktaki metni döndürür.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

<code>text</code> metin değerinin başına boşluk ekleyerek <code>count</code> uzunluğuna doldurulan bir <code>text</code> değeri döndürür.    Doldurma için kullanılan karakteri belirtmek için isteğe bağlı bir <code>character</code> karakteri kullanılabilir. Varsayılan doldurma karakteri boşluktur.


## Examples

### Example #1 
Metin değerinin başını, uzunluğu 10 karakter olacak şekilde doldurur.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Metin değerinin başını, uzunluğu 10 karakter olacak şekilde &#34;|&#34; ile doldurur.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
