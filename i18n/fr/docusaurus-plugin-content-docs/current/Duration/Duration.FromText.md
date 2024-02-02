---
title: Duration.FromText
---

# Duration.FromText


## Description

Retourne une valeur de durée à partir d&#39;un format textuel de temps écoulé (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Retourne une valeur de durée à partir du texte spécifié, <code>text</code>. Les formats suivants peuvent être analysés par cette fonction : <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)jjj(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Toutes les plages sont inclusives)<br />        jjj : Nombre de jours.<br />        hh : Nombre d'heures, entre 0 et 23.<br />        mm : Nombre de minutes, entre 0 et 59.<br />        ss : Nombre de secondes, entre 0 et 59.<br />        ff : Fractions de seconde, entre 0 et 9999999.


## Examples

### Example #1 
Convertit &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; dans une valeur &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
