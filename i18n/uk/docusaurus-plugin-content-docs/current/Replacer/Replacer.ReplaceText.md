---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Замінює текст у введених даних.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Замінює текст <code>old</code> у вихідному <code>text</code> на текст <code>new</code>. Ця функція заміни може використовуватися в <code>List.ReplaceValue</code> і <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Замінити текст &#34;hE&#34; на &#34;He&#34; у рядку &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
