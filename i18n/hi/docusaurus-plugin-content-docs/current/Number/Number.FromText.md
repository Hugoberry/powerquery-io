---
title: Number.FromText
---

# Number.FromText


## Description

सामान्य पाठ स्वरूपों (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;) से संख्याएँ बनाता है.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

दिए गए पाठ मान, <code>text</code> से एक <code>संख्या</code> मान लौटाता है. <ul>  <li><code>text</code>: किसी संख्या मान का पाठ प्रस्तुतिकरण. प्रस्तुतिकरण एक सामान्य संख्या स्वरूप में होना चाहिए, जैसे "15", "3,423.10", या "5.0E-10".</li>  <li><code>culture</code>: एक वैकल्पिक संस्कृति जो नियंत्रित करती है कि <code>text</code> की व्याख्या कैसे की जाए (उदाहरण के लिए, "en-US").</li> </ul>


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; का संख्या मान प्राप्त करें.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; का संख्या मान प्राप्त करें.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
