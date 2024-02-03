---
title: Duration.FromText
---

# Duration.FromText


## Description

Restituisce un valore della durata da rappresentazioni testuali in formato di tempo trascorso (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Restituisce un valore di durata dal testo specificato, <code>text</code>. Questa funzione può analizzare i formati seguenti: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ggg(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Tutti gli intervalli sono inclusivi)<br />        ggg: numero di giorni.<br />        hh: numero di ore, compreso tra 0 e 23.<br />        mm: numero di minuti, compreso tra 0 e 59.<br />        ss: numero di secondi, compreso tra 0 e 59.<br />        ff: frazione di secondi, compreso tra 0 e 9999999.


## Examples

### Example #1 
Converte &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; in un valore &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
