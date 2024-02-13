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

Returnerer resultatet af at konvertere alle tegn i <code>text</code> til små bogstaver. Der kan også angives en valgfri <code>culture</code> (f. eks. "en-US").


## Examples

### Example #1 
Hent versionen af &#34;AbCd&#34; med små bogstaver.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
