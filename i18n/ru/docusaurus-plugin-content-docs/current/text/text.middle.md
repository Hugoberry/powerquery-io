---
title: Text.Middle
---

# Text.Middle


Возвращает подстроку до заданной длины.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Возвращает символы (`count` шт.) или идет до конца "`text`"; при смещении `start`.


## Examples

### Example #1
Возвращает подстроку из текста Hello World, начиная с индекса 6. Длина области, в которой производится поиск, начинается с указанного индекса и распространяется на 5 символов.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Отыскивает подстроку в тексте Hello World, начиная с индекса 6 до конца.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Найти подстроку из текста "Hello World" длиной 2 символа, начиная с индекса 0.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
