---
title: Duration.ToText
---

# Duration.ToText


## Description

Returnerar texten i formatet &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Returnerar en textrepresentation i formatet dag.timme:minuter:sekunder för det givna varaktighetsvärdet <code>duration</code>. <ul>        <li><code>duration</code>: En <code>varaktighet</code> som textrepresentationen beräknas från.</li>  <li><code>format</code>: <i>[Valfritt]</i> Inaktuellt, utlöser ett fel om inte null</li>      </ul>


## Examples

### Example #1 
Konvertera &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; till ett textvärde.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
