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

Indicates whether the given text, <code>text</code>, ends with the specified value, <code>substring</code>. The indication is case sensitive.      <div>        <code>comparer</code> is a <code>Comparer</code> which is used to control the comparison. Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.      </div>      <div>        The following built-in comparers are available in the formula language:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Used to perform an exact ordinal comparison</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Used to perform an exact ordinal case-insensitive comparison</li>        <li> <code>Comparer.FromCulture</code>: Used to perform a culture-aware comparison</li>      </ul>


## Examples

### Example #1 
Check if &#34;Hello, World&#34; ends with &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Check if &#34;Hello, World&#34; ends with &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
