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

Возвращает подстроку из текста <code>text</code>, найденную по смещению <code>offset</code>.    Можно включить необязательный параметр <code>count</code>, чтобы указать число символов, которое необходимо получить. Возвращает ошибку при недостаточном количестве символов.


## Examples

### Example #1 
Найдите подстроку из текста &#34;Hello World&#34;, начиная с индекса 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Найти подстроку из текста &#34;Hello World Hello&#34; длиной 5 символов, начиная с индекса 6.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
