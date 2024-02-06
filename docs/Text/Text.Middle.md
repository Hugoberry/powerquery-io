---
title: Text.Middle
---

# Text.Middle


Returns the substring up to a specific length.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Returns <code>count</code> characters, or through the end of <code>text</code>; at the offset <code>start</code>.


## Examples

### Example #1 
Find the substring from the text &#34;Hello World&#34; starting at index 6 spanning 5 characters.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Find the substring from the text &#34;Hello World&#34; starting at index 6 through the end.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
