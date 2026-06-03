---
title: Text.Proper
---

# Text.Proper


Schreibt den ersten Buchstaben jedes Worts groß.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Gibt das Ergebnis zurück, das entsteht, wenn lediglich der erste Buchstabe jedes Worts im Textwert "`text`" großgeschrieben wird. Alle anderen Buchstaben werden in Kleinschreibung zurückgegeben. Optional kann auch ein Element vom Typ "`culture`" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1
Wendet `Text.Proper` auf einen einfachen Satz an.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
