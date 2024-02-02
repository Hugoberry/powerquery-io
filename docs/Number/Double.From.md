---
title: Double.From
---

# Double.From


## Description

Creates a Double from the given value.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returns a Double <code>number</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Double.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>number</code> within the range of Double, <code>value</code> is returned, otherwise an error is returned. If <code>value</code> is of any other type, it will first be converted to a <code>number</code> using <code>Number.FromText</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the Double &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
