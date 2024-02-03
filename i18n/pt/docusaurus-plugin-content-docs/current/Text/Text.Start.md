---
title: Text.Start
---

# Text.Start


## Description

Returns the start of the text.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Returns the first <code>count</code> characters of <code>text</code> as a text value.


## Examples

### Example #1 
Get the first 5 characters of &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
