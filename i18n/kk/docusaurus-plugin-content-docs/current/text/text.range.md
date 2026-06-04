---
title: Text.Range
---

# Text.Range


Ауытқуда анықталған ішкі жолды қайтарады.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

`text` мәтінінен `offset` ауытқуында анықталған ішкі жолды қайтарады. Қайтарылатын таңбалар санын көрсету үшін `count` міндетті емес параметрін қосуға болады. Жеткілікті таңбалар болмағанда, қатені тудырады.


## Examples

### Example #1
"Сәлем Әлем" мәтінінен 6 индексінде басталатын ішкі жолды анықтау.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
"Сәлем Әлем Сәлем" мәтінінен 6 индексінде басталатын 5 таңбаға созылатын ішкі жолды анықтау.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
