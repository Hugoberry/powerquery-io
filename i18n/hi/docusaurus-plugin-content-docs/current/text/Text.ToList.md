---
title: Text.ToList
---

# Text.ToList


दिए गए पाठ मान से वर्ण मानों की सूची लौटाता है.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

दिए गए पाठ मान <code>text</code> से वर्ण मानों की सूची लौटाता है.


## Examples

### Example #1 
पाठ &#34;Hello World&#34; से वर्ण मानों की सूची बनाएँ.
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
