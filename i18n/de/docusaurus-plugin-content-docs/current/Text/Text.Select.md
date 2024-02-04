---
title: Text.Select
---

# Text.Select


## Description

Hiermit werden alle Vorkommen des angegebenen Zeichens oder einer Liste von Zeichen aus dem Eingabetextwert ausgewählt.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Gibt eine Kopie des Textwerts "<code>text</code>" zurück, in der alle nicht in "<code>selectChars</code>" enthaltenen Zeichen entfernt wurden.  


## Examples

### Example #1 
Wählen Sie aus dem Textwert alle Zeichen im Bereich von &#34;a&#34; bis &#34;z&#34; aus.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
