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

Returns `count` characters, or through the end of `text`; at the offset `start`.


## Examples

### Example #1
Find the substring from the text "Hello World" starting at index 6 spanning 5 characters.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Find the substring from the text "Hello World" starting at index 6 through the end.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Find the substring from the text "Hello World" starting at index 0 spanning 2 characters.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
