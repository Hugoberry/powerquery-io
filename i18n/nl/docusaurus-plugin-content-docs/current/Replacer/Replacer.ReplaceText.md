---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Vervangt tekst binnen de aangeleverde invoer.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Vervangt de tekst <code>old</code> in de oorspronkelijke <code>text</code> door de tekst <code>new</code>. Deze vervangingsfunctie kan worden gebruikt in <code>List.ReplaceValue</code> en <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
De tekst &#34;hA&#34; vervangen door &#34;Ha&#34; in de tekenreeks &#34;hAllo wereld&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
