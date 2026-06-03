---
title: Text.Range
---

# Text.Range


Uzaklıkta bulunan alt dizeyi döndürür.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

`text` uzaklığında bulunan `offset` metninden alt dizeyi döndürür. Kaç karakterin döndürüleceğini belirtmek için isteğe bağlı bir `count` parametresi eklenebilir. Yeterli karakter yoksa hata verir.


## Examples

### Example #1
"Hello World" metninde 6 dizininden başlayarak alt dizeyi bulur.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
"Hello World Hello" metninde 6 dizininden başlayarak ve 5 karakteri kapsayarak alt dizeyi bulur.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
