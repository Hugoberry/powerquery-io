---
title: Text.EndsWith
---

# Text.EndsWith


Indicates whether the text ends in the specified value.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indicates whether the given text, `text`, ends with the specified value, `substring`. The indication is case sensitive.

`comparer` is a `Comparer` which is used to control the comparison. Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.

The following built-in comparers are available in the formula language:

-   `Comparer.Ordinal`: Used to perform an exact ordinal comparison
-   `Comparer.OrdinalIgnoreCase`: Used to perform an exact ordinal case-insensitive comparison
-   `Comparer.FromCulture`: Used to perform a culture-aware comparison


## Examples

### Example #1
Check if "Hello, World" ends with "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Check if "Hello, World" ends with "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
