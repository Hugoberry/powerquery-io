---
title: Text.Insert
---

# Text.Insert


Вставляет одно текстовое значение в другое в заданной позиции.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Возвращает результат вставки текстового значения <code>newText</code> в текстовое значение <code>text</code> в позиции <code>offset</code>. Позиции начинаются с номера 0.


## Examples

### Example #1 
Вставить &#34;C&#34; между &#34;B&#34; и &#34;D&#34; в &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
