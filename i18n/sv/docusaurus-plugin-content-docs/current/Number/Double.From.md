---
title: Double.From
---

# Double.From


Skapar en Double av det givna värdet.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett Double <code>number</code>-värde från det givna <code>value</code>. Om det givna <code>value</code> är <code>null</code> returnerar <code>Double.From</code> <code>null</code>.  Om det givna <code>value</code> är <code>number</code> inom intervallet för Double, returneras <code>value</code>. I annat fall returneras ett fel. Om <code>value</code> konverteras den först till en <code>number</code> med <code>Number.FromText</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Hämta Double &lt;code&gt;number&lt;/code&gt;-värdet för &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
