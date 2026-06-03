---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Returns the first position in the text value of any listed character (-1 if not found).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Returns the first position of any character in the list `characters` that is found in `text`. An optional parameter `occurrence` may be used to specify which occurrence position to return.


## Examples

### Example #1
Find the first position of "W" or "H" in text "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Find all the positions of "W" or "H" in text "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
