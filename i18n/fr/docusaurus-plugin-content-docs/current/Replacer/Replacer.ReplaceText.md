---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Remplace le texte dans l&#39;entrée fournie.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Remplace le texte <code>old</code> dans le <code>text</code> d'origine par le texte <code>new</code>. Cette fonction de remplacement peut être utilisée dans <code>List.ReplaceValue</code> et <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Remplace le texte &#34; hE &#34; par &#34; He &#34; dans la chaîne &#34; hEllo world &#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
