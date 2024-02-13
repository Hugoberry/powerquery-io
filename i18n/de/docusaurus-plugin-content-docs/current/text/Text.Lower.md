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

Gibt das Ergebnis der Konvertierung aller Zeichen in "<code>text</code>" in Kleinbuchstaben zurück. Optional kann auch ein Element vom Typ "<code>culture</code>" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1 
Ruft die klein geschriebene Version von &#34;AbCd&#34; ab.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
