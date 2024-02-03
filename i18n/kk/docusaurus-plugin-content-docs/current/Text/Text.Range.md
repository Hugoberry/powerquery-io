---
title: Text.Range
---

# Text.Range


## Description

Ауытқуда анықталған ішкі жолды қайтарады.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

<code>text</code> мәтінінен <code>offset</code> ауытқуында анықталған ішкі жолды қайтарады.    Қайтарылатын таңбалар санын көрсету үшін <code>count</code> міндетті емес параметрін қосуға болады. Жеткілікті таңбалар болмағанда, қатені береді.


## Examples

### Example #1 
&#34;Сәлем Әлем&#34; мәтінінен 6 индексінде басталатын ішкі жолды анықтау.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
&#34;Сәлем Әлем Сәлем&#34; мәтінінен 6 индексінде басталатын 5 таңбаға созылатын ішкі жолды анықтау.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
