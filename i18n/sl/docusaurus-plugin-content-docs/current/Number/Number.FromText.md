---
title: Number.FromText
---

# Number.FromText


## Description

Ustvari števila iz običajnih oblik besedila (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Vrne vrednost <code>number</code> iz navedene besedilne vrednosti <code>text</code>. <ul>  <li><code>text</code>: predstavitev številske vrednosti v obliki besedila. Predstavitev mora biti v običajni obliki števila – "15", "3,423.10", "5.0E-10".</li>  <li><code>culture</code>: izbirna kultura, ki nadzira način obravnave parametra <code>text</code> (na primer "sl-SI").</li> </ul>


## Examples

### Example #1 
Poiščite številsko vrednost za &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Poiščite številsko vrednost za &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
