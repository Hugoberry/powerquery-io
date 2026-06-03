---
title: Text.Upper
---

# Text.Upper


Konvertiert alle Zeichen in Großschreibung.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Gibt das Ergebnis der Konvertierung aller Zeichen in "`text`" in Großbuchstaben zurück. Optional kann auch ein Element vom Typ "`culture`" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1
Ruft die groß geschriebene Version von "aBcD" ab.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
