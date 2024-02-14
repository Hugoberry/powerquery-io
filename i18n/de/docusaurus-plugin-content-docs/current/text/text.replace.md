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

Gibt das Ergebnis zurück, das entsteht, wenn alle Vorkommen des Textwerts "<code>old</code>" im Textwert "<code>text</code>" durch den Textwert "<code>new</code>" ersetzt werden. Bei dieser Funktion wird die Groß-/Kleinschreibung berücksichtigt.


## Examples

### Example #1 
Ersetzt alle Vorkommen von &#34;the&#34; in einen Satz durch &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
