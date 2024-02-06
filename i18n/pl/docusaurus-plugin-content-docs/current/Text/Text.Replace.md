---
title: Text.Replace
---

# Text.Replace


Zamienia wszystkie wystąpienia danego podciągu w tekście.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Zwraca wynik zamiany wszystkich wystąpień wartości tekstowej <code>old</code> w wartości tekstowej <code>text</code> na wartość tekstową <code>new</code>. Ta funkcja rozróżnia wielkość liter.


## Examples

### Example #1 
Zamień każde wystąpienie wyrazu „the” w zdaniu na wyraz „a”.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
