---
title: Text.Replace
---

# Text.Replace


Replaces all occurrences of the given substring in the text.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Returns the result of replacing all occurrences of text value `old` in text value `text` with text value `new`. This function is case sensitive.


## Examples

### Example #1
Replace every occurrence of "the" in a sentence with "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
