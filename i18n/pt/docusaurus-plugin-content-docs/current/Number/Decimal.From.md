---
title: Decimal.From
---

# Decimal.From


## Description

Creates a Decimal from the given value.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returns a Decimal <code>number</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Decimal.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>number</code> within the range of Decimal, <code>value</code> is returned, otherwise an error is returned. If <code>value</code> is of any other type, it will first be converted to a <code>number</code> using <code>Number.FromText</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the Decimal &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
