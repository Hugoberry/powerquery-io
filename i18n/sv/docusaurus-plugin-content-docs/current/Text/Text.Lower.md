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

Returnerar resultatet av att konvertera alla tecken i <code>text</code> till gemener. En valfri <code>culture</code> kan även anges (till exempel "en-US").


## Examples

### Example #1 
Hämta &#34;AbCd&#34; med gemener.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
