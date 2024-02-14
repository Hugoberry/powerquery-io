---
title: Text.SplitAny
---

# Text.SplitAny


Retourneert een lijst met tekstwaarden, en splitst bij elk van de tekens in het scheidingsteken.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Retourneert een lijst met tekstwaarden die het resultaat is van het splitsen van een tekstwaarde <code>text</code> op basis van een teken in het opgegeven scheidingsteken, <code>separators</code>.


## Examples

### Example #1 
Een lijst maken van de tekstwaarde &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
