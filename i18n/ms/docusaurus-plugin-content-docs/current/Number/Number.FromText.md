---
title: Number.FromText
---

# Number.FromText


## Description

Mencipta nombor daripada format teks biasa (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>number</code> daripada nilai teks yang ditentukan, <code>text</code>. <ul>  <li><code>text</code>: Dapatkan perwakilan teks bagi nilai nombor. Perwakilan mesti dalam format nombor lazim, seperti "15", "3,423.10” atau "5.0E-10".</li>  <li><code>culture</code>: Budaya pilihan yang mengawal cara <code>text</code> ditafsirkan (contohnya, "en-US").</li> </ul>


## Examples

### Example #1 
Dapatkan nilai nombor bagi &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dapatkan nilai nombor bagi &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
