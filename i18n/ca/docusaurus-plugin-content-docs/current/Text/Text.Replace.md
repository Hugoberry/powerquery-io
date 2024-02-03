---
title: Text.Replace
---

# Text.Replace


## Description

Substitueix totes les aparicions de la subcadena donada al text.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Retorna el resultat de substituir totes les aparicions del valor de text <code>old</code> al valor de text <code>text</code> pel valor de text <code>new</code>. Aquesta funció distingeix entre majúscules i minúscules.


## Examples

### Example #1 
Substitueix totes les aparicions de &#34;the&#34; d&#39;una frase per &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
