---
title: Text.Replace
---

# Text.Replace


## Description

Nahradí všetky výskyty daného podreťazca v texte.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Vráti výsledok nahradenia všetkých výskytov textovej hodnoty <code>old</code> v textovej hodnote <code>text</code> textovou hodnotou <code>new</code>. Táto funkcia rozlišuje malé a veľké písmená.


## Examples

### Example #1 
Nahraďte každý výskyt textu &#34;the&#34; vo vete textom &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
