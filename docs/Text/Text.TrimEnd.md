---
title: Text.TrimEnd
---

# Text.TrimEnd


Removes all trailing whitespace.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returns the result of removing all trailing whitespace from text value <code>text</code>.


## Examples

### Example #1 
Remove trailing whitespace from &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
