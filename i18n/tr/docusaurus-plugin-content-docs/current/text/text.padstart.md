---
title: Text.PadStart
---

# Text.PadStart


Verilen metnin başını doldurarak belirtilen uzunluktaki metni döndürür.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

`text` metin değerinin başına boşluk ekleyerek `count` uzunluğuna doldurulan bir `text` değeri döndürür. Doldurma için kullanılan karakteri belirtmek için isteğe bağlı bir `character` karakteri kullanılabilir. Varsayılan doldurma karakteri boşluktur.


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
Metin değerinin başını, uzunluğu 10 karakter olacak şekilde "|" ile doldurur.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
