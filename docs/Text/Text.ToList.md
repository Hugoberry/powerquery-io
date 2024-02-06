---
title: Text.ToList
---

# Text.ToList


Returns a list of character values from the given text value.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Returns a list of character values from the given text value <code>text</code>.


## Examples

### Example #1 
Create a list of character values from the text &#34;Hello World&#34;.
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
