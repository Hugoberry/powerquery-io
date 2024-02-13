---
title: Text.TrimStart
---

# Text.TrimStart


Removes all leading whitespace.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returns the result of removing all leading whitespace from text value <code>text</code>.


## Examples

### Example #1 
Remove leading whitespace from &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
