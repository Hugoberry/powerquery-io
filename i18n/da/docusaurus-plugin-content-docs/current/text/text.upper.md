---
title: Text.Upper
---

# Text.Upper


Konverterer alle tegn til store bogstaver.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnerer resultatet af at konvertere alle tegn i `text` til store bogstaver. Der kan også angives en valgfri `culture` (f. eks. "en-US").


## Examples

### Example #1
Hent versionen af "aBcD" med store bogstaver.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
