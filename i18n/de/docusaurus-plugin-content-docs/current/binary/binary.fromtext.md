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

Gibt das Ergebnis der Konvertierung des Textwerts "<code>text</code>" in einen Binärwert (Liste vom Typ <code>number</code>) zurück. Mit "<code>encoding</code>" kann die für den Textwert verwendete Codierung angegeben werden.      Für "<code>encoding</code>" können folgende <code>BinaryEncoding</code>-Werte verwendet werden.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base64-Codierung</li>        <li><code>BinaryEncoding.Hex</code>: hexadezimale Codierung</li>      </ul>


## Examples

### Example #1 
Decodiert &#34;1011&#34; ins Binärformat.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Decodiert &#34;1011&#34; mit hexadezimaler Codierung ins Binärformat.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
