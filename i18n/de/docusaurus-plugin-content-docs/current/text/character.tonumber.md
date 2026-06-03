---
title: Character.ToNumber
---

# Character.ToNumber


Konvertiert ein Zeichen in einen Zahlenwert.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Gibt die Zahlenentsprechung der `character` zurück.  
  
Das Ergebnis ist der 21-Bit-Unicode-Codepunkt, der durch das angegebene Zeichen- oder Ersatzzeichenpaar dargestellt wird.


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
Konvertieren Sie das UTF-16-Ersatzzeichenpaar für das Emoticon "grinsendes Gesicht" in den entsprechenden hexadezimalen Codepunkt.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
