---
title: Text.Replace
---

# Text.Replace


Ersetzt alle Vorkommen der angegebenen Teilzeichenfolge im Text.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Gibt das Ergebnis zurück, das entsteht, wenn alle Vorkommen des Textwerts "`old`" im Textwert "`text`" durch den Textwert "`new`" ersetzt werden. Bei dieser Funktion wird die Groß-/Kleinschreibung berücksichtigt.


## Examples

### Example #1
Ersetzt alle Vorkommen von "the" in einen Satz durch "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
