---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Returns a logical value based on the equality check over the two given values.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Returns a <code>logical</code> value based on the equality check over the two given values, <code>x</code> and <code>y</code>, using the provided <code>comparer</code>.      <div>        <code>comparer</code> is a <code>Comparer</code> which is used to control the comparison.        A comparer is a function that accepts two arguments and returns -1, 0, or 1 based on whether the first value is less than, equal to, or greater than the second.        Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.      </div>      <div>        The following built-in comparers are available in the formula language:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Used to perform an exact ordinal comparison</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Used to perform an exact ordinal case-insensitive comparison</li>        <li> <code>Comparer.FromCulture</code>: Used to perform a culture-aware comparison</li>      </ul>


## Examples

### Example #1 
Compare &#34;1&#34; and &#34;A&#34; using &#34;en-US&#34; locale to determine if the values are equal.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
