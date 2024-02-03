---
title: Text.Select
---

# Text.Select


## Description

Selects all occurrences of the given character or list of characters from the input text value.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Returns a copy of the text value <code>text</code> with all the characters not in <code>selectChars</code> removed.  


## Examples

### Example #1 
Select all characters in the range of &#39;a&#39; to &#39;z&#39; from the text value.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
