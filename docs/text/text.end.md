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

Returns a `text` value that is the last `count` characters of the `text` value `text`.


## Examples

### Example #1
Get the last 5 characters of the text "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
