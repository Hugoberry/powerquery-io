---
title: Text.Repeat
---

# Text.Repeat


Returns a text value composed of the input text repeated a specified number of times.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Returns a text value composed of the input text `text` repeated `count` times.


## Examples

### Example #1
Repeat the text "a" five times.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Repeat the text "helloworld" three times.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
