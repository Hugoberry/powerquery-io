---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Returns a comparer function which uses Ordinal rules to compare values.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Returns a comparer function which uses Ordinal rules to compare the provided values <code>x</code> and <code>y</code>.<br />      <br />      A comparer function accepts two arguments and returns -1, 0, or 1 based on whether the first value is less than, equal to, or greater than the second.    


## Examples

### Example #1 
Using Ordinal rules, compare if &#34;encyclopædia&#34; and &#34;encyclopaedia&#34; are equivalent. Note these are equivalent using &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
