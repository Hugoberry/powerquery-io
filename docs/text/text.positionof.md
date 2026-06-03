---
title: Text.PositionOf
---

# Text.PositionOf


Returns the first position of the value (-1 if not found).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Returns the position of the specified occurrence of the text value `substring` found in `text`. An optional parameter `occurrence` may be used to specify which occurrence position to return (first occurrence by default). Returns -1 if `substring` was not found.

`comparer` is a `Comparer` which is used to control the comparison. Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.

The following built-in comparers are available in the formula language:

-   `Comparer.Ordinal`: Used to perform an exact ordinal comparison
-   `Comparer.OrdinalIgnoreCase`: Used to perform an exact ordinal case-insensitive comparison
-   `Comparer.FromCulture`: Used to perform a culture-aware comparison


## Examples

### Example #1
Get the position of the first occurrence of "World" in the text "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Get the position of the last occurrence of "World" in "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
