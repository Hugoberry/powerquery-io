---
title: Text.RemoveRange
---

# Text.RemoveRange


Removes a count of characters starting at the given offset


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Returns a copy of the text value `text` with all the characters from position `offset` removed. An optional parameter, `count` can by used to specify the number of characters to remove. The default value of `count` is 1. Position values start at 0.


## Examples

### Example #1
Remove 1 character from the text value "ABEFC" at position 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Remove two characters from the text value "ABEFC" starting at position 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
