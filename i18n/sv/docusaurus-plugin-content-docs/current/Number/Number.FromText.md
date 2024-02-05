---
title: Number.FromText
---

# Number.FromText


## Description

Skapar tal från vanliga textformat (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Returnerar ett <code>number</code>-värde från det angivna textvärdet, <code>text</code>. <ul>  <li><code>text</code>: Textrepresentationen av ett numeriskt värde. Representationen måste ha ett vanligt talformat, till exempel ”15”, ”3,423.10” eller ”5.0E-10”.</li>  <li><code>culture</code>: Valfri kultur som styr hur <code>text</code> ska tolkas (till exempel ”en-US”).</li> </ul>


## Examples

### Example #1 
Hämta det numeriska värdet för &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hämta det numeriska värdet för &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
