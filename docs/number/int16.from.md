---
title: Int16.From
---

# Int16.From


Creates a 16-bit integer from the given value.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returns a 16-bit integer <code>number</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Int16.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>number</code> within the range of 16-bit integer without a fractional part, <code>value</code> is returned. If it has fractional part, then the number is rounded with the rounding mode specified. The default rounding mode is <code>RoundingMode.ToEven</code>. If <code>value</code> is of any other type, it will first be converted to a <code>number</code> using <code>Number.FromText</code>. Refer to <code>Number.Round</code> for the available rounding modes. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the 16-bit integer &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Get the 16-bit integer &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; using &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
