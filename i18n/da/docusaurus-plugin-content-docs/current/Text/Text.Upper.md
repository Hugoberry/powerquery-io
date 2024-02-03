---
title: Text.Upper
---

# Text.Upper


## Description

Konverterer alle tegn til store bogstaver.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Returnerer resultatet af at konvertere alle tegn i <code>text</code> til store bogstaver. Der kan også angives en valgfri <code>culture</code> (f. eks. "en-US").


## Examples

### Example #1 
Hent versionen af &#34;aBcD&#34; med store bogstaver.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
