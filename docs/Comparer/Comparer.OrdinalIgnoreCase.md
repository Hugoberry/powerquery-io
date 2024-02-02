---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Returns a case-insensitive comparer function which uses Ordinal rules to compare values.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Returns a case-insensitive comparer function which uses Ordinal rules to compare the provided values <code>x</code> and <code>y</code>.<br />        <br />        A comparer function accepts two arguments and returns -1, 0, or 1 based on whether the first value is less than, equal to, or greater than the second.    


## Examples

### Example #1 
Using case-insensitive Ordinal rules, compare &#34;Abc&#34; with &#34;abc&#34;. Note &#34;Abc&#34; is less than &#34;abc&#34; using &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
