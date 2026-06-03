---
title: Text.Lower
---

# Text.Lower


Converts all characters to lowercase.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returns the result of converting all characters in `text` to lowercase. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the lowercase version of "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
