---
title: Binary.ToText
---

# Binary.ToText


Codiert Binärdaten in ein Textformat.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Gibt das Ergebnis der Konvertierung einer Binärliste mit Zahlen (`binary`) in einen Textwert zurück. Optional kann mit "`encoding`" die gewünschte Codierung für den erzeugten Textwert angegeben werden. Für "`encoding`" können folgende `BinaryEncoding`\-Werte verwendet werden.

-   `BinaryEncoding.Base64`: Base64-Codierung
-   `BinaryEncoding.Hex`: hexadezimale Codierung



## Category
Binary
