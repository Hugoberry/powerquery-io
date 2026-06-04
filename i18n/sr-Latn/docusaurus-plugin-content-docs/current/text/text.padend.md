---
title: Text.PadEnd
---

# Text.PadEnd


Vraća tekst navedene dužine popunjavanjem kraja datog teksta.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Vraća `text` vrednost popunjenu do dužine `count` umetanjem razmaka pred kraj tekstualne vrednosti `text`. Može se koristiti opcionalni znak `character` da bi se naveo znak koji se koristi za popunjavanje. Podrazumevani znak za popunjavanje je razmak.


## Examples

### Example #1
Popunjavanje kraja tekstualne vrednosti tako da bude dužine 10 znakova.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Popunjavanje kraja tekstualne vrednosti pomoću „|“ tako da bude dužine 10 znakova.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
