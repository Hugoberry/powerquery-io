---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Vraća tekst navedene dužine popunjavanjem kraja datog teksta.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Vraća <code>text</code> vrednost popunjenu do dužine <code>count</code> umetanjem razmaka pred kraj tekstualne vrednosti <code>text</code>.    Može se koristiti opcionalni znak <code>character</code> da bi se naveo znak koji se koristi za popunjavanje. Podrazumevani znak za popunjavanje je razmak.


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
