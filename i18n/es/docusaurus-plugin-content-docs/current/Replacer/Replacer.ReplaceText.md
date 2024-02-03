---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Reemplaza el texto dentro de la entrada proporcionada.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Reemplaza el texto <code>old</code> del original <code>text</code> con el texto <code>new</code>. Esta función sustituto se puede usar en <code>List.ReplaceValue</code> y <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Reemplazar el texto &#34;hO&#34; con &#34;Ho&#34; en la cadena &#34;hOla mundo&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
