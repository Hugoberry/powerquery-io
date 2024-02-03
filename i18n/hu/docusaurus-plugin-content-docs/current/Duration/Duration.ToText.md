---
title: Duration.ToText
---

# Duration.ToText


## Description

A „n.ó:p:s” formátumú szöveget adja vissza.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Az adott időtartam (<code>duration</code>) szöveges alakját adja vissza „nap.óra:perc:mp” formában. <ul>        <li><code>duration</code>: Az az <code>időtartam</code>, amelyből a rendszer kiszámolja a szöveges alakot.</li>  <li><code>format</code>: <i>[Opcionális]</i> Elavult, hibát eredményez, ha az értéke nem null</li>      </ul>


## Examples

### Example #1 
A &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; érték konvertálása szöveges értékre
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
