---
title: Text.PadEnd
---

# Text.PadEnd


Verilen metnin sonunu doldurarak belirtilen uzunluktaki metni döndürür.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

`text` metin değerinin sonuna boşluk ekleyerek `count` uzunluğuna doldurulan bir `text` değeri döndürür. Doldurma için kullanılan karakteri belirtmek için isteğe bağlı bir `character` karakteri kullanılabilir. Varsayılan doldurma karakteri boşluktur.


## Examples

### Example #1
Metin değerinin sonunu, uzunluğu 10 karakter olacak şekilde doldurur.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Metin değerinin sonunu, uzunluğu 10 karakter olacak şekilde "|" ile doldurur.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
