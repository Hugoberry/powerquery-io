---
title: Text.Upper
---

# Text.Upper


## Description

Konvertiert alle Zeichen in Großschreibung.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Gibt das Ergebnis der Konvertierung aller Zeichen in "<code>text</code>" in Großbuchstaben zurück. Optional kann auch ein Element vom Typ "<code>culture</code>" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1 
Ruft die groß geschriebene Version von &#34;aBcD&#34; ab.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
