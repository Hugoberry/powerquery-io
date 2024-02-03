---
title: Duration.FromText
---

# Duration.FromText


## Description

Pateikiama trukmės reikšmė iš tekstinių praėjusio laiko formų (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Pateikiama trukmės reikšmė iš nurodyto teksto (<code>text</code>). Ši funkcija gali analizuoti šiuos formatus: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Visuose intervaluose reikšmės nurodytos imtinai)<br />        ddd: dienų skaičius.<br />        hh: valandų skaičius, tarp 0 ir 23.<br />        mm: minučių skaičius, tarp 0 ir 59.<br />        ss: sekundžių skaičius, tarp 0 ir 59.<br />        ff: sekundžių dalis, tarp 0 ir 9999999.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; į &lt;code&gt;duration&lt;/code&gt; reikšmę.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
