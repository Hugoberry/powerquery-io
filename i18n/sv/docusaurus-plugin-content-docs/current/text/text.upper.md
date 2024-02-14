---
title: Text.Upper
---

# Text.Upper


Konverterar alla tecken till versaler.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnerar resultatet av att konvertera alla tecken i <code>text</code> till versaler. En valfri <code>culture</code> kan även anges (till exempel "en-US").


## Examples

### Example #1 
Hämta &#34;aBcD&#34; med versaler.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
