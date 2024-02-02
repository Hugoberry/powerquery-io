---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Returns the first position in the text value of any listed character (-1 if not found).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Returns the first position of any character in the list <code>characters</code> that is found in <code>text</code>.    An optional parameter <code>occurrence</code> may be used to specify which occurrence position to return.


## Examples

### Example #1 
Find the first position of &#34;W&#34; or &#34;H&#34; in text &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Find all the positions of &#34;W&#34; or &#34;H&#34; in text &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
