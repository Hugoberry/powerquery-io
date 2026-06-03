---
title: Text.PadStart
---

# Text.PadStart


Gibt Text mit einer bestimmten Länge zurück. Hierzu wird der Anfang des angegebenen Texts aufgefüllt.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Gibt einen `text`\-Wert zurück, der durch Einfügen von Leerzeichen am Beginn des Textwerts "`text`" auf die Länge `count` aufgefüllt wird. Das zum Auffüllen verwendete Zeichen kann mithilfe eines optionalen Zeichens (`character`) angegeben werden. Das standardmäßige Auffüllzeichen ist ein Leerzeichen.


## Examples

### Example #1
Füllt den Beginn eines Textwerts auf, sodass der Wert zehn Zeichen lang wird.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Füllt den Beginn eines Textwerts mit "|" auf, sodass der Wert zehn Zeichen lang wird.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
