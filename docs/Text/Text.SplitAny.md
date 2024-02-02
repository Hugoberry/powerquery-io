---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Returns a list of text values, split on any of the characters in the delimiter.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Returns a list of text values resulting from the splitting a text value <code>text</code> based on any character in the specified delimiter, <code>separators</code>.


## Examples

### Example #1 
Create a list from the text value &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
