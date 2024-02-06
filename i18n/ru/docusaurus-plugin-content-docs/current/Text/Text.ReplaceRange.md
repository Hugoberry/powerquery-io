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

Возвращает результат удаления заданного количества символов <code>count</code> из текстового значения <code>text</code>, начиная с позиции <code>offset</code>, затем вставляет текстовое значение <code>newText</code> в ту же позицию в <code>text</code>.


## Examples

### Example #1 
Заменить один символ в позиции 2 в текстовом значении &#34;ABGF&#34; новым текстовым значением &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
