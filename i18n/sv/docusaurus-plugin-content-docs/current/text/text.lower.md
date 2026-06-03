---
title: Text.Lower
---

# Text.Lower


Konverterar alla tecken till gemener.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnerar resultatet av att konvertera alla tecken i `text` till gemener. En valfri `culture` kan även anges (till exempel "en-US").


## Examples

### Example #1
Hämta "AbCd" med gemener.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
