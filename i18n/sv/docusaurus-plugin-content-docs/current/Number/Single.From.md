---
title: Single.From
---

# Single.From


## Description

Skapar en Single av det givna värdet.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returnerar ett enkelt <code>number</code>-värde från det givna <code>value</code>. Om det givna <code>value</code> är <code>null</code> returnerar <code>Enkelt.From</code> <code>null</code>.  Om det givna <code>value</code> är <code>number</code> inom intervallet för enkelt, returneras <code>value</code>. I annat fall returneras ett fel. Om <code>value</code> konverteras den först till en <code>number</code> med <code>Number.FromText</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Hämta Single &lt;code&gt;number&lt;/code&gt;-värdet för &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
