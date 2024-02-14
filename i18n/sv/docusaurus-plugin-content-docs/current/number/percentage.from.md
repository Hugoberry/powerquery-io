---
title: Percentage.From
---

# Percentage.From


Returnerar ett prosenttal av det angivna värdet.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett <code>percentage</code>-värde från det angivna <code>value</code>. Om det angivna <code>value</code> är <code>null</code>, returnerar <code>Percentage.From</code> <code>null</code>. Om det angivna <code>value</code> är <code>text</code> med efterföljande procenttecken, returneras det konverterade decimaltalet. För andra förekomster, konverteras värdet till en <code>number</code> med <code>Number.From</code>. En valfri <code>culture</code> kan också tillhandahållas (till exempel "en-US").


## Examples

### Example #1 
Hämta &lt;code&gt;prosent&lt;/code&gt;värdet för &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
