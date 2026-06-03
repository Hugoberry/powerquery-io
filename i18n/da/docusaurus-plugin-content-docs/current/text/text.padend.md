---
title: Text.PadEnd
---

# Text.PadEnd


Returnerer teksten i en angivet længde ved at udfylde slutningen af den angivne tekst.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Returnerer en værdi af typen `text`, der er udfyldt til længden `count`, ved at indsætte mellemrum i slutningen af tekstværdien `text`. Der kan bruges et valgfrit tegn `character` til at angive det tegn, der skal bruges til udfyldning. Standardtegnet for udfyldning er et mellemrum.


## Examples

### Example #1
Udfyld slutningen af en tekstværdi, så den indeholder 10 tegn.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Udfyld slutningen af en tekstværdi med "|", så den indeholder 10 tegn.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
