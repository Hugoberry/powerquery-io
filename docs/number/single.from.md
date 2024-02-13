---
title: Single.From
---

# Single.From


Creates a Single from the given value.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returns a Single <code>number</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Single.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>number</code> within the range of Single, <code>value</code> is returned, otherwise an error is returned. If <code>value</code> is of any other type, it will first be converted to a <code>number</code> using <code>Number.FromText</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the Single &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
