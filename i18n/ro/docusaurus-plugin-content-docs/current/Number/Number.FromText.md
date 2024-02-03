---
title: Number.FromText
---

# Number.FromText


## Description

Creează numere din formatele text obişnuite (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Returnează o valoare <code>number</code> din valoarea text dată, <code>text</code>. <ul>  <li><code>text</code>: reprezentarea textuală a unei valori numerice. Reprezentarea trebuie să fie într-un format numeric obișnuit cum ar fi „15”, „3.423,10” sau „5,0E-10”.</li>  <li><code>culture</code>: O valoare cultură opțională care controlează modul în care este interpretat <code>text</code> (de exemplu „ro-RO”).</li> </ul>


## Examples

### Example #1 
Obţineţi valoarea number pentru &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obţineţi valoarea numerică pentru &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
