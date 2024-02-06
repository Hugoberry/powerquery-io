---
title: Text.StartsWith
---

# Text.StartsWith


Indicates whether the text starts with a specified value.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Returns true if text value <code>text</code> starts with text value <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> A <code>text</code> value which is to be searched</li>        <li><code>substring</code>: <i></i> A <code>text</code> value which is the substring to be searched for in <code>substring</code></li>        <li><code>comparer</code>: <i>[Optional]</i> A <code>Comparer</code> used for controlling the comparison. For example, <code>Comparer.OrdinalIgnoreCase</code> may be used to perform case-insensitive searches</li>      </ul>      <div>        <code>comparer</code> is a <code>Comparer</code> which is used to control the comparison. Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.      </div>      <div>        The following built-in comparers are available in the formula language:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Used to perform an exact ordinal comparison</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Used to perform an exact ordinal case-insensitive comparison</li>        <li> <code>Comparer.FromCulture</code>: Used to perform a culture-aware comparison</li>      </ul>


## Examples

### Example #1 
Check if the text &#34;Hello, World&#34; starts with the text &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Check if the text &#34;Hello, World&#34; starts with the text &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
