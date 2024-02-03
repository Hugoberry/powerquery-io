---
title: Number.FromText
---

# Number.FromText


## Description

Crea numeri dai formati di testo comuni (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Restituisce un valore <code>number</code> dal valore di testo <code>text</code> specificato. <ul>  <li><code>text</code>: rappresentazione testuale di un valore numerico. La rappresentazione deve essere in un formato numerico comune, ad esempio "15", "3.423,10" o "5.0E-10".</li>  <li><code>culture</code>: impostazione cultura facoltativa che controlla il modo in cui <code>text</code> viene interpretato, ad esempio "it-IT".</li> </ul>


## Examples

### Example #1 
Ottenere il valore numerico di &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Ottenere il valore numerico di &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
