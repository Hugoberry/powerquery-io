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

Возвращает символы (<code>count</code> шт.) или идет до конца "<code>text</code>"; при смещении <code>start</code>.


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




## Category
Text.Extraction
