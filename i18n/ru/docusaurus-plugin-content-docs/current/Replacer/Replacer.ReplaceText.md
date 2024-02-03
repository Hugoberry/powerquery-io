---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Заменяет текст в предоставленных входных данных.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Заменяет текст <code>old</code> в исходном <code>text</code> текстом <code>new</code>. Эту функцию замены можно использовать в <code>List.ReplaceValue</code> и <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Заменить текст &#34;hE&#34; на &#34;He&#34;в строке &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
