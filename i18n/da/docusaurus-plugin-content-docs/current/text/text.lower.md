---
title: Text.Lower
---

# Text.Lower


Konverterer alle tegn til små bogstaver.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnerer resultatet af at konvertere alle tegn i `text` til små bogstaver. Der kan også angives en valgfri `culture` (f. eks. "en-US").


## Examples

### Example #1
Hent versionen af "AbCd" med små bogstaver.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
