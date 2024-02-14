---
title: Decimal.From
---

# Decimal.From


Skapar en decimal av det givna värdet.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett decimal <code>number</code>-värde från det givna <code>value</code>. Om det givna <code>value</code> är <code>null</code> <code>Decimal.Från</code> returnerar <code>null</code>.  Om det givna <code>value</code> är <code>number</code> inom intervallet för Decimal, returneras <code>value</code>. I annat fall returneras ett fel. Om <code>value</code> konverteras den först till en <code>number</code> med <code>Number.FromText</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Hämta Decimal &lt;code&gt;number&lt;/code&gt;-värdet för &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
