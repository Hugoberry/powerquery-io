---
title: Number.FromText
---

# Number.FromText


## Description

Maakt getallen van algemene tekstindelingen (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Hiermee wordt een waarde voor <code>number</code> geretourneerd vanuit de opgegeven tekstwaarde, <code>text</code>. <ul> <li><code>text</code>: de tekstweergave van een number-waarde. De weergave moet een gewone getalnotatie hebben, bijvoorbeeld 15, 3.423,10 of 5.0E-10.</li> <li><code>culture</code>: een optionele cultuur die bepaalt hoe <code>text</code> wordt geïnterpreteerd (bijvoorbeeld: nl-NL).</li> </ul>


## Examples

### Example #1 
De getalwaarde van &lt;code&gt;&#34;4&#34;&lt;/code&gt; ophalen.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
De getalwaarde van &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; ophalen.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
