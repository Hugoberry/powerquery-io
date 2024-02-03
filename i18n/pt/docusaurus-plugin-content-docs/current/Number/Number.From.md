---
title: Number.From
---

# Number.From


## Description

Creates a number from the given value.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returns a <code>number</code> value from the given <code>value</code>. An optional <code>culture</code> may also be provided (for example, "en-US").If the given <code>value</code> is <code>null</code>, <code>Number.From</code> returns <code>null</code>. If the given <code>value</code> is <code>number</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>number</code> value:      <ul>        <li><code>text</code>: A <code>number</code> value from textual representation. Common text formats are handled ("15", "3,423.10", "5.0E-10"). Refer to <code>Number.FromText</code> for details.</li>        <li><code>logical</code>: 1 for <code>true</code>, 0 for <code>false</code>.</li>        <li><code>datetime</code>: A double-precision floating-point number that contains an OLE Automation date equivalent.</li>        <li><code>datetimezone</code>: A double-precision floating-point number that contains an OLE Automation date equivalent of the local date and time of <code>value</code>.</li>        <li><code>date</code>: A double-precision floating-point number that contains an OLE Automation date equivalent.</li>        <li><code>time</code>:  Expressed in fractional days.</li>        <li><code>duration</code>: Expressed in whole and fractional days.</li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Get the &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Get the &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Get the &lt;code&gt;number&lt;/code&gt; value of &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
