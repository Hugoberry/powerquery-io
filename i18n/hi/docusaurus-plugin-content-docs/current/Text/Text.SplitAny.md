---
title: Text.SplitAny
---

# Text.SplitAny


## Description

डिलिमिटर में किसी भी वर्ण पर विभाजित पाठ मानों की सूची लौटाता है.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

निर्दिष्ट डिलिमिटर <code>separators</code> में किसी भी वर्ण के आधार पर पाठ मान <code>text</code> के विभाजित होने के परिणामस्वरूप प्राप्त होने वाले पाठ मानों की सूची लौटाता है.


## Examples

### Example #1 
पाठ मान &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34; से सूची बनाएँ.
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
