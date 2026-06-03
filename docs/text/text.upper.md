---
title: Text.Upper
---

# Text.Upper


Converts all characters to uppercase.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returns the result of converting all characters in `text` to uppercase. An optional `culture` may also be provided (for example, "en-US").


## Examples

### Example #1
Get the uppercase version of "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
