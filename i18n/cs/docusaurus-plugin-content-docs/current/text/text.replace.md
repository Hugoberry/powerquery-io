---
title: Text.Replace
---

# Text.Replace


Nahradí všechny výskyty daného podřetězce v textu.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Vrátí výsledek nahrazení všech výskytů textové hodnoty `old` v textové hodnotě `text` textovou hodnotou `new`. Funkce rozlišuje velká a malá písmena.


## Examples

### Example #1
Nahradí všechny výskyty řetězce „the“ ve větě řetězcem „a“.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
