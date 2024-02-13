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

Gibt einen <code>text</code>-Wert zurück, der durch Einfügen von Leerzeichen am Beginn des Textwerts "<code>text</code>" auf die Länge <code>count</code> aufgefüllt wird.    Das zum Auffüllen verwendete Zeichen kann mithilfe eines optionalen Zeichens (<code>character</code>) angegeben werden. Das standardmäßige Auffüllzeichen ist ein Leerzeichen.


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
Füllt den Beginn eines Textwerts mit &#34;|&#34; auf, sodass der Wert zehn Zeichen lang wird.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
