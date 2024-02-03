---
title: Currency.From
---

# Currency.From


## Description

Returns a currency value from the given value.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returns a <code>currency</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Currency.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>number</code> within the range of currency, fractional part of the <code>value</code> is rounded to 4 decimal digits and returned. If <code>value</code> is of any other type, it will first be converted to a <code>number</code> using <code>Number.FromText</code>. Valid range for currency is <code>-922,337,203,685,477.5808</code> to <code>922,337,203,685,477.5807</code>. Refer to <code>Number.Round</code> for the available rounding modes. The default is <code>RoundingMode.ToEven</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the &lt;code&gt;currency&lt;/code&gt; value of &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Get the &lt;code&gt;currency&lt;/code&gt; value of &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; using &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
