---
title: Percentage.From
---

# Percentage.From


Returns a percentage value from the given value.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returns a <code>percentage</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Percentage.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>text</code> with a trailing percent symbol, then the converted decimal number will be returned. Otherwise, the value will be converted to a <code>number</code> using <code>Number.From</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the &lt;code&gt;percentage&lt;/code&gt; value of &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
