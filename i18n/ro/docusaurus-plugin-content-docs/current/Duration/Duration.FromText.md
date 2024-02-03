---
title: Duration.FromText
---

# Duration.FromText


## Description

Returnează o valoare pentru durată din formele textuale ale timpului scurs (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Returnează o valoare pentru durată din textul specificat, <code>text</code>. Următoarele formate pot fi analizate de această funcție: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Toate intervalele includ capetele)<br />        ddd: numărul de zile.<br />        hh: numărul de ore, între 0 și 23.<br />        mm: numărul de minute, între 0 și 59.<br />        ss: numărul de secunde, între 0 și 59.<br />        ff: fracțiune de secunde, între 0 și 9999999.


## Examples

### Example #1 
Convertiţi &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; într-o valoare &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
