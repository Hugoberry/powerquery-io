---
title: Number.ToText
---

# Number.ToText


Konvertiert die angegebene Zahl in Text.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Konvertiert den numerischen Wert <code>number</code> in einen Textwert entsprechend dem von <code>format</code> vorgegebenen Format.<br />    <br />    Das Format ist ein Textwert, der angibt, wie die Zahl konvertiert werden soll. Weitere Informationen zu den unterstützten Formatwerten finden Sie unter https://go.microsoft.com/fwlink/?linkid=2241210 und https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Optional kann auch <code>culture</code> angegeben werden (z. B. „en-US”), um das kulturabhängige Verhalten von <code>format</code> zu steuern.


## Examples

### Example #1 
Konvertiert eine Zahl in Text ohne Angabe eines Formats.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Konvertiert eine Zahl in ein exponentielles Format.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Konvertiert eine Zahl in ein Prozentformat mit nur einer Dezimalstelle.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
