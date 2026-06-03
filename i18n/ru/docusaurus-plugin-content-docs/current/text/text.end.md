---
title: Text.End
---

# Text.End


Возвращает последние символы текста.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Возвращает значение `text`, представляющее собой последние `count` символов значения `text` типа `text`.


## Examples

### Example #1
Получить последние 5 символов строки "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
