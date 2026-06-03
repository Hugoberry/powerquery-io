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

Returns the substring from the text `text` found at the offset `offset`. An optional parameter, `count`, can be included to specify how many characters to return. Raises an error if there aren't enough characters.


## Examples

### Example #1
Find the substring from the text "Hello World" starting at index 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Find the substring from the text "Hello World Hello" starting at index 6 spanning 5 characters.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
