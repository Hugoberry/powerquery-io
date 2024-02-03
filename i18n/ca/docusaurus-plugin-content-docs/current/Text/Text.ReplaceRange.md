---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Suprimeix un interval de caràcters i insereix un valor nou en una posició especificada.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Retorna el resultat de suprimir un nombre de caràcters, <code>count</code>, del valor de text <code>text</code> començant per la posició <code>offset</code> i després insereix el valor de text <code>newText</code> a la mateixa posició a <code>text</code>.


## Examples

### Example #1 
Substitueix un única caràcter a la posició 2 del valor de text &#34;ABGF&#34; amb el valor de text nou &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
