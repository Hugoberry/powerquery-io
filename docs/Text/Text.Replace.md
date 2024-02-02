---
title: Text.Replace
---

# Text.Replace


## Description

Replaces all occurrences of the given substring in the text.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Returns the result of replacing all occurrences of text value <code>old</code> in text value <code>text</code> with text value <code>new</code>. This function is case sensitive.


## Examples

### Example #1 
Replace every occurrence of &#34;the&#34; in a sentence with &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
