---
title: Number.ToText
---

# Number.ToText


Converteert het opgegeven getal naar tekst.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Converteert de numerieke waarde <code>number</code> naar een tekstwaarde volgens de notatie die is opgegeven door <code>format</code>.<br />    <br />    De notatie is een tekstwaarde die aangeeft hoe het getal moet worden geconverteerd. Ga voor meer informatie over de ondersteunde opmaakwaarden naar https://go.microsoft.com/fwlink/?linkid=2241210 en https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld nl-NL) om het cultuurafhankelijke gedrag van <code>format</code> te bepalen.


## Examples

### Example #1 
Converteer een getal naar tekst zonder een notatie op te geven.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Converteer een getal naar exponentiële notatie.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Converteer een getal naar een percentagenotatie met slechts één decimaalpositie.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
