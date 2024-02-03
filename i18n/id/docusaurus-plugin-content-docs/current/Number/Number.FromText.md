---
title: Number.FromText
---

# Number.FromText


## Description

Membuat bilangan dari format teks umum (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>number</code> dari nilai teks tertentu, <code>text</code>. <ul>  <li><code>text</code>: Representasi tekstual nilai bilangan. Representasi harus berupa format bilangan umum, seperti "15", "3,423.10", atau "5.0E-10".</li>  <li><code>culture</code>: Kultur opsional yang mengontrol bagaimana <code>text</code> diinterpretasi (misalnya, "en-US").</li> </ul>


## Examples

### Example #1 
Mengambil nilai bilangan &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Mengambil nilai bilangan &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
