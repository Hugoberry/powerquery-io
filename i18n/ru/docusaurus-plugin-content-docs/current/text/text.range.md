---
title: Text.Range
---

# Text.Range


Возвращает подстроку, найденную по смещению.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Возвращает подстроку текста `text`, найденную по смещению `offset`. Необязательный параметр `count` позволяет указать число символов в возвращаемой строке. Возвращает ошибку при недостаточном количестве символов.


## Examples

### Example #1
Найдите подстроку из текста "Hello World", начиная с индекса 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Найти подстроку из текста "Hello World Hello" длиной 5 символов, начиная с индекса 6.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
