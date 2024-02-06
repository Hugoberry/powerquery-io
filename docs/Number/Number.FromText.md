---
title: Number.FromText
---

# Number.FromText


Creates numbers from common text formats (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Returns a <code>number</code> value from the given text value, <code>text</code>. <ul>  <li><code>text</code>: The textual representation of a number value. The representation must be in a common number format, such as "15", "3,423.10", or "5.0E-10".</li>  <li><code>culture</code>: An optional culture that controls how <code>text</code> is interpreted (for example, "en-US").</li> </ul>


## Examples

### Example #1 
Get the number value of &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Get the number value of &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
