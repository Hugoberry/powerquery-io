---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Removes a range of characters and inserts a new value at a specified position.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Returns the result of removing a number of characters, <code>count</code>, from text value <code>text</code> beginning at position <code>offset</code> and then inserting the text value <code>newText</code> at the same position in <code>text</code>.


## Examples

### Example #1 
Replace a single character at position 2 in text value &#34;ABGF&#34; with new text value &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
