---
title: Character.FromNumber
---

# Character.FromNumber


Konvertiert eine Zahl in ein Textzeichen.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Gibt die Zeichenentsprechung der Nummer zurück.<br />    <br />    Die bereitgestellte <code>number</code> sollte ein 21-Bit-Unicode-Codepunkt sein.


## Examples

### Example #1 
Konvertiert eine Zahl in den entsprechenden Zeichenwert.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Konvertiert ein Zeichen in eine Zahl und wieder zurück.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Konvertieren Sie den Hexadezimalcodepunkt für das Emoticon &#34;grinsendes Gesicht&#34; in das entsprechende UTF-16-Ersatzzeichenpaar.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
