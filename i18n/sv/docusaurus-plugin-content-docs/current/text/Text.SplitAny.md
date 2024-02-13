---
title: Text.SplitAny
---

# Text.SplitAny


Returnerar en lista med textvärden som delas upp baserat på något av tecknen i avgränsaren.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Returnerar en lista med textvärden som resulterar från uppdelningen av ett textvärde, <code>text</code>, baserat på något tecken i den angivna avgränsaren, <code>separators</code>.


## Examples

### Example #1 
Skapa en lista från textvärdet &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
