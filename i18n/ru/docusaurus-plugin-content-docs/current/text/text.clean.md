---
title: Text.Clean
---

# Text.Clean


Возвращает текстовое значение с удалением всех управляющих символов.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Возвращает текстовое значение с удалением всех управляющих символов из <code>text</code>.


## Examples

### Example #1 
Удаление переводов строки и других управляющих символов из текстового значения.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
