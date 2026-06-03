---
title: Text.Insert
---

# Text.Insert


Inserts one text value into another at a given position.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Returns the result of inserting text value `newText` into the text value `text` at position `offset`. Positions start at number 0.


## Examples

### Example #1
Insert "C" between "B" and "D" in "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
