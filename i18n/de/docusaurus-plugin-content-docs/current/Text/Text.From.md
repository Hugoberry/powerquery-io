---
title: Text.From
---

# Text.From


## Description

Erstellt einen Textwert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Gibt die Textdarstellung von "<code>value</code>" zurück. Bei "<code>value</code>" kann es sich um einen <code>number</code>-, <code>date</code>-, <code>time</code>-, <code>datetime</code>-, <code>datetimezone</code>-, <code>logical</code>-, <code>duration</code>- oder <code>binary</code>-Wert handeln.    Ist der angegebene Wert NULL, gibt <code>Text.From</code> NULL zurück. Optional kann auch ein Element vom Typ "<code>culture</code>" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1 
Erstellt einen Textwert auf der Grundlage der Zahl 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
