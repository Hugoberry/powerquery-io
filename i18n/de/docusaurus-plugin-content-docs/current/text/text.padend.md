---
title: Text.PadEnd
---

# Text.PadEnd


Gibt Text mit einer bestimmten Länge zurück. Hierzu wird das Ende des angegebenen Texts aufgefüllt.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Gibt einen `text`\-Wert zurück, der durch Einfügen von Leerzeichen am Ende des Textwerts "`text`" auf die Länge `count` aufgefüllt wird. Das zum Auffüllen verwendete Zeichen kann mithilfe eines optionalen Zeichens (`character`) angegeben werden. Das standardmäßige Auffüllzeichen ist ein Leerzeichen.


## Examples

### Example #1
Füllt das Ende eines Textwerts auf, sodass der Wert zehn Zeichen lang wird.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Füllt das Ende eines Textwerts mit "|" auf, sodass der Wert zehn Zeichen lang wird.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
