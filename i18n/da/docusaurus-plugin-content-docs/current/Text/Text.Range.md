---
title: Text.Range
---

# Text.Range


## Description

Returnerer et undersæt, der blev fundet ved en forskydning.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Returnerer understrengen fra teksten <code>text</code>, der blev fundet ved forskydningen <code>offset</code>.    Der kan inkluderes en valgfri parameter, <code>count</code>, for at angive, hvor mange tegn der skal returneres. Hvis der ikke er tegn nok, genereres der en fejl.


## Examples

### Example #1 
Find understrengen fra teksten &#34;Hello World&#34; med start ved indeks 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Find understrengen fra teksten &#34;Hello World Hello&#34; med start ved indeks 6, og som indeholder 5 tegn.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
