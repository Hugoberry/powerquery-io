---
title: Duration.FromText
---

# Duration.FromText


Zwraca wartość typu duration z tekstowej formy zapisu czasu, który upłynął (d.g:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Zwraca wartość czasu trwania z określonego tekstu (<code>text</code>). Ta funkcja umożliwia analizowanie następujących formatów:  <ul>        <li>(-)gg:mm(:ss(.uu)) </li>        <li>(-)ddd(.gg:mm(:ss(.uu))) </li> </ul>        <br />        (Wszystkie zakresy są włączne)<br />        ddd: Liczba dni.<br />        gg: Liczba godzin (od 0 do 23).<br />        mm: Liczba minut (od 0 do 59).<br />        ss: Liczba sekund (od 0 do 59).<br />        uu: Ułamek sekund (od 0 do 9999999).


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; na wartość typu &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
