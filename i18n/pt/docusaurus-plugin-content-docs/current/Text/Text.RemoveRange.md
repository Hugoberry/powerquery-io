---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Removes a count of characters starting at the given offset


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Returns a copy of the text value <code>text</code> with all the characters from position <code>offset</code> removed.    An optional parameter, <code>count</code> can by used to specify the number of characters to remove. The default value of <code>count</code> is 1. Position values start at 0.


## Examples

### Example #1 
Remove 1 character from the text value &#34;ABEFC&#34; at position 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Remove two characters from the text value &#34;ABEFC&#34; starting at position 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
