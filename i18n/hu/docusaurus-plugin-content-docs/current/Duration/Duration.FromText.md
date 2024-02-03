---
title: Duration.FromText
---

# Duration.FromText


## Description

Egy időtartamértéket ad vissza az eltelt idő szöveges alakjaiból (n.ó:p:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Időtartamértéket ad vissza a megadott szövegből: <code>text</code>. Ez a függvény a következő formátumokat tudja elemezni: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Beleértve a tartományok szélső értékeit)<br />        ddd: Napok száma.<br />        hh: Órák száma 0 és 23 között.<br />        mm: Percek száma 0 és 59 között.<br />        ss: Másodpercek száma 0 és 59 között.<br />        ff: Másodperc töredéke 0 és 9 999 999 között.


## Examples

### Example #1 
A &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; érték konvertálása &lt;code&gt;duration&lt;/code&gt; értékre
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
