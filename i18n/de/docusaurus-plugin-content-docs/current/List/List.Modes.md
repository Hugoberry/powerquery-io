---
title: List.Modes
---

# List.Modes


## Description

Gibt eine Liste mit den Werten zurück, die in der Liste am häufigsten vorkommen.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Gibt das Element zurück, das in der Liste "<code>list</code>" am häufigsten vorkommt. Ist die Liste leer, wird eine Ausnahme ausgelöst. Sind mehrere Elemente mit der gleichen maximalen Häufigkeit vorhanden, wird das letzte Element ausgewählt.    Die Gleichheitsüberprüfung kann mit einem optionalen <code>comparisonCriteria</code>-Wert (<code>equationCriteria</code>) gesteuert werden. 


## Examples

### Example #1 
Ermittelt die Elemente, die in der Liste &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; am häufigsten vorkommen.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
