---
title: Text.Trim
---

# Text.Trim


## Description

Removes all leading and trailing whitespace.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Returns the result of removing all leading and trailing whitespace from text value <code>text</code>.


## Examples

### Example #1 
Remove leading and trailing whitespace from &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
