---
title: Text.At
---

# Text.At


Возвращает символ в указанной позиции.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Возвращает символ в текстовом значении `text` в позиции `index`. Первый символ в тексте находится в позиции 0.


## Examples

### Example #1
Найти символ в позиции 4 в строке "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
