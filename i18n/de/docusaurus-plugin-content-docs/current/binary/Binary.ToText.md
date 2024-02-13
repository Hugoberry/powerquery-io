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

Gibt das Ergebnis der Konvertierung einer Binärliste mit Zahlen (<code>binary</code>) in einen Textwert zurück. Optional kann mit "<code>encoding</code>" die gewünschte Codierung für den erzeugten Textwert angegeben werden.      Für "<code>encoding</code>" können folgende <code>BinaryEncoding</code>-Werte verwendet werden.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base64-Codierung</li>        <li><code>BinaryEncoding.Hex</code>: hexadezimale Codierung</li>      </ul>



## Category
Binary
