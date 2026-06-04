---
title: Text.Replace
---

# Text.Replace


Zamenjuje sva pojavljivanja date podniske u tekstu.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Vraća rezultat zamene svih pojavljivanja tekstualne vrednosti `old` u tekstualnoj vrednosti `text` tekstualnom vrednošću `new`. Ova funkcija razlikuje mala i velika slova.


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
