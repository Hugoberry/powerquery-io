---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Returnerer teksten i en angivet længde ved at udfylde slutningen af den angivne tekst.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Returnerer en værdi af typen <code>text</code>, der er udfyldt til længden <code>count</code>, ved at indsætte mellemrum i slutningen af tekstværdien <code>text</code>.    Der kan bruges et valgfrit tegn <code>character</code> til at angive det tegn, der skal bruges til udfyldning. Standardtegnet for udfyldning er et mellemrum.


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
Udfyld slutningen af en tekstværdi med &#34;|&#34;, så den indeholder 10 tegn.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
