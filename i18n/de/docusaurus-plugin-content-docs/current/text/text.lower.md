---
title: Text.Lower
---

# Text.Lower


Konvertiert alle Zeichen in Kleinschreibung.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Gibt das Ergebnis der Konvertierung aller Zeichen in "`text`" in Kleinbuchstaben zurück. Optional kann auch ein Element vom Typ "`culture`" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1
Ruft die klein geschriebene Version von "AbCd" ab.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
