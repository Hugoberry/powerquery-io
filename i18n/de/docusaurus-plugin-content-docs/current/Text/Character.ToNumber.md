---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Konvertiert ein Zeichen in einen Zahlenwert.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Gibt die Zahlenentsprechung der <code>character</code> zurück.<br />    <br />    Das Ergebnis ist der 21-Bit-Unicode-Codepunkt, der durch das angegebene Zeichen- oder Ersatzzeichenpaar dargestellt wird.  


## Examples

### Example #1 
Konvertiert ein Zeichen in den entsprechenden Zahlenwert.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Konvertieren Sie das UTF-16-Ersatzzeichenpaar für das Emoticon &#34;grinsendes Gesicht&#34; in den entsprechenden hexadezimalen Codepunkt.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
