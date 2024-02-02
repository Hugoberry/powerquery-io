---
title: Text.Lower
---

# Text.Lower


## Description

Converts all characters to lowercase.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Returns the result of converting all characters in <code>text</code> to lowercase. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the lowercase version of &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
