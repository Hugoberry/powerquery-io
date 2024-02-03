---
title: Text.PadStart
---

# Text.PadStart


## Description

Vraća tekst navedene dužine popunjavanjem početka datog teksta.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Vraća <code>text</code> vrednost popunjenu do dužine <code>count</code> umetanjem razmaka na početku tekstualne vrednosti <code>text</code>.    Može se koristiti opcionalni znak <code>character</code> da bi se naveo znak koji se koristi za popunjavanje. Podrazumevani znak za popunjavanje je razmak.


## Examples

### Example #1 
Popunjavanje početka tekstualne vrednosti tako da bude dužine 10 znakova.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Popunjavanje početka tekstualne vrednosti pomoću „|“ tako da bude dužine 10 znakova.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
