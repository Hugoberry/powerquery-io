---
title: Text.PadStart
---

# Text.PadStart


Vraća tekst navedene dužine popunjavanjem početka datog teksta.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Vraća `text` vrednost popunjenu do dužine `count` umetanjem razmaka na početku tekstualne vrednosti `text`. Može se koristiti opcionalni znak `character` da bi se naveo znak koji se koristi za popunjavanje. Podrazumevani znak za popunjavanje je razmak.


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
