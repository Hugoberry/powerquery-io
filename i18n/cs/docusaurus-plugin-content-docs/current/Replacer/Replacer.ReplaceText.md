---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Nahradí text v zadaném vstupu.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Nahradí text <code>old</code> v původním záznamu <code>text</code> textem <code>new</code>. Tento nahrazovač lze použít u hodnot <code>List.ReplaceValue</code> a <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Nahradí v řetězci &#34;hEllo world&#34; podřetězec &#34;hE&#34; podřetězcem &#34;He&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
