---
title: List.Modes
---

# List.Modes


## Description

Returnează o listă cu cele mai frecvente valori din listă.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Returnează elementul care apare cel mai frecvent în listă, <code>list</code>. Dacă lista este goală, se generează o excepție. Dacă apar mai multe elemente cu aceeași frecvență maximă, se alege ultimul element.     Poate fi specificată o valoare <code>comparisonCriteria</code> opțională, <code>equationCriteria</code>, pentru a controla testarea egalității. 


## Examples

### Example #1 
Găsiţi elementele care apar cel mai frecvent în lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
