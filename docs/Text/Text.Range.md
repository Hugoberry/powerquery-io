---
title: Text.Range
---

# Text.Range


Returns the substring found at offset.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Returns the substring from the text <code>text</code> found at the offset <code>offset</code>.    An optional parameter, <code>count</code>, can be included to specify how many characters to return. Throws an error if there aren't enough characters.


## Examples

### Example #1 
Find the substring from the text &#34;Hello World&#34; starting at index 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Find the substring from the text &#34;Hello World Hello&#34; starting at index 6 spanning 5 characters.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
