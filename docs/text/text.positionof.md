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

Returns the position of the specified occurrence of the text value <code>substring</code> found in <code>text</code>.    An optional parameter <code>occurrence</code> may be used to specify which occurrence position to return (first occurrence by default).    Returns -1 if <code>substring</code> was not found.      <div>        <code>comparer</code> is a <code>Comparer</code> which is used to control the comparison. Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.      </div>      <div>        The following built-in comparers are available in the formula language:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Used to perform an exact ordinal comparison</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Used to perform an exact ordinal case-insensitive comparison</li>        <li> <code>Comparer.FromCulture</code>: Used to perform a culture-aware comparison</li>      </ul>


## Examples

### Example #1 
Get the position of the first occurrence of &#34;World&#34; in the text &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Get the position of last occurrence of &#34;World&#34; in &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
