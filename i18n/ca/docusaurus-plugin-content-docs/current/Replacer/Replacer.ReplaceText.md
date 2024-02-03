---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Substitueix el text dins de l&#39;entrada proporcionada.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Substitueix el text <code>old</code> del <code>text</code> original pel text <code>new</code>. Aquesta funció de substitució es pot utilitzar a <code>List.ReplaceValue</code> i <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Substitueix el text &#34;hE&#34; per &#34;He&#34; a la cadena &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
