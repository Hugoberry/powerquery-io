---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Gibt Text mit einer bestimmten Länge zurück. Hierzu wird das Ende des angegebenen Texts aufgefüllt.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Gibt einen <code>text</code>-Wert zurück, der durch Einfügen von Leerzeichen am Ende des Textwerts "<code>text</code>" auf die Länge <code>count</code> aufgefüllt wird.    Das zum Auffüllen verwendete Zeichen kann mithilfe eines optionalen Zeichens (<code>character</code>) angegeben werden. Das standardmäßige Auffüllzeichen ist ein Leerzeichen.


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
Füllt das Ende eines Textwerts mit &#34;|&#34; auf, sodass der Wert zehn Zeichen lang wird.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
