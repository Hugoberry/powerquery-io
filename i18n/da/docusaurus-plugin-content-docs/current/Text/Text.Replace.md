---
title: Text.Replace
---

# Text.Replace


## Description

Erstatter alle forekomster af den angivne understreng i teksten.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Returnerer resultatet af at erstatte alle forekomster af tekstværdien <code>old</code> i tekstværdien <code>text</code> med værdien <code>new</code>. Denne funktion skelner mellem store og små bogstaver.


## Examples

### Example #1 
Erstat alle forekomster af &#34;the&#34; i en sætning med &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
