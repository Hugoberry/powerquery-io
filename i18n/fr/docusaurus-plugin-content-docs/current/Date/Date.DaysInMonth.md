---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Retourne un nombre compris entre 28 et 31 représentant le nombre de jours dans le mois.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Retourne le nombre de jours représentant le mois dans la valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>, <code>dateTime</code>. <ul>        <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> pour laquelle le nombre de jours dans le mois est retourné.</li>      </ul>


## Examples

### Example #1 
Nombre de jours dans le mois de décembre que représente &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
