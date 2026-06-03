---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Заменяет текст в предоставленных входных данных.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Заменяет текст `old` в исходном `text` текстом `new`. Эту функцию замены можно использовать в `List.ReplaceValue` и `Table.ReplaceValue`.


## Examples

### Example #1
Заменить текст "hE" на "He"в строке "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
