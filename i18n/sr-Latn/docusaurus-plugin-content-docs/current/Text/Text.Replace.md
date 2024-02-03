---
title: Text.Replace
---

# Text.Replace


## Description

Zamenjuje sva pojavljivanja date podniske u tekstu.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Vraća rezultat zamene svih pojavljivanja tekstualne vrednosti <code>old</code> u tekstualnoj vrednosti <code>text</code> tekstualnom vrednošću <code>new</code>. Ova funkcija razlikuje mala i velika slova.


## Examples

### Example #1 
Zamena svakog pojavljivanja teksta „the“ u rečenici tekstom „a“.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
