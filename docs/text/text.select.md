---
title: Text.Select
---

# Text.Select


Selects all occurrences of the given character or list of characters from the input text value.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Returns a copy of the text value `text` with all the characters not in `selectChars` removed.


## Examples

### Example #1
Select all characters in the range of 'a' to 'z' from the text value.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
