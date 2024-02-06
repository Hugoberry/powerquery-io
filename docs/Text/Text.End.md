---
title: Text.End
---

# Text.End


Returns the last characters of the text.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Returns a <code>text</code> value that is the last <code>count</code> characters of the <code>text</code> value <code>text</code>.


## Examples

### Example #1 
Get the last 5 characters of the text &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
