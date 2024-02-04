---
title: Text.Remove
---

# Text.Remove


## Description

Entfernt alle Vorkommen des angegebenen Zeichens oder der angegebenen Liste mit Zeichen aus dem Eingabetextwert.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Gibt eine Kopie des Textwerts "<code>text</code>" zurück, in der alle Zeichen aus "<code>removeChars</code>" entfernt wurden.  


## Examples

### Example #1 
Entfernt die Zeichen &#34;,&#34; und &#34;;&#34; aus dem Textwert.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
