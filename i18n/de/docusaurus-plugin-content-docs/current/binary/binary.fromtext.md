---
title: Binary.FromText
---

# Binary.FromText


Decodiert Daten aus einem Textformat in das Binärformat.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Gibt das Ergebnis der Konvertierung des Textwerts "`text`" in einen Binärwert (Liste vom Typ `number`) zurück. Mit "`encoding`" kann die für den Textwert verwendete Codierung angegeben werden. Für "`encoding`" können folgende `BinaryEncoding`\-Werte verwendet werden.

-   `BinaryEncoding.Base64`: Base64-Codierung
-   `BinaryEncoding.Hex`: hexadezimale Codierung


## Examples

### Example #1
Decodiert "1011" ins Binärformat.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Decodiert "1011" mit hexadezimaler Codierung ins Binärformat.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
