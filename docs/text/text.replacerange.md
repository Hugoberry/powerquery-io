---
title: Text.ReplaceRange
---

# Text.ReplaceRange


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


## Remarks

Returns the result of removing a number of characters, `count`, from text value `text` beginning at position `offset` and then inserting the text value `newText` at the same position in `text`.


## Examples

### Example #1
Replace a single character at position 2 in text value "ABGF" with new text value "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
