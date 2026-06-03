---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Удаляет диапазон символов и вводит новое значение в указанную позицию.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Возвращает результат удаления заданного количества символов `count` из текстового значения `text`, начиная с позиции `offset`, затем вставляет текстовое значение `newText` в ту же позицию в `text`.


## Examples

### Example #1
Заменить один символ в позиции 2 в текстовом значении "ABGF" новым текстовым значением "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
