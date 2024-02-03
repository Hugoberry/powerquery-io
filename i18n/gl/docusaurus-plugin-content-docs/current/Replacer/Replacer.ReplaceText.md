---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Substitúe o texto dentro da entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Substitúe o texto <code>old</code> dentro do <code>text</code> orixinal co texto <code>new</code>. Esta función de substitución pódese utilizar en <code>List.ReplaceValue</code> e <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Substitúa o texto &#34;oL&#34; con &#34;Ol&#34; na cadea &#34;oLa, mundo&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
