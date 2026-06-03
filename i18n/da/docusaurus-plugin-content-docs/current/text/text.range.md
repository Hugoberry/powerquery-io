---
title: Text.Range
---

# Text.Range


Returnerer et undersæt, der blev fundet ved en forskydning.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Returnerer understrengen fra teksten `text`, der blev fundet ved forskydningen `offset`. Der kan inkluderes en valgfri parameter, `count`, for at angive, hvor mange tegn der skal returneres. Der udløses en fejl, hvis der ikke er nok tegn.


## Examples

### Example #1
Find understrengen fra teksten "Hello World" med start ved indeks 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Find understrengen fra teksten "Hello World Hello" med start ved indeks 6, og som indeholder 5 tegn.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
