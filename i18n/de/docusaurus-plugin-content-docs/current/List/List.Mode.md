---
title: List.Mode
---

# List.Mode


## Description

Gibt den am häufigsten vorkommenden Wert in der Liste zurück.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Gibt das Element zurück, das in der Liste "<code>list</code>" am häufigsten vorkommt. Ist die Liste leer, wird eine Ausnahme ausgelöst. Sind mehrere Elemente mit der gleichen maximalen Häufigkeit vorhanden, wird das letzte Element ausgewählt.    Die Gleichheitsüberprüfung kann mit einem optionalen <code>comparisonCriteria</code>-Wert (<code>equationCriteria</code>) gesteuert werden. 


## Examples

### Example #1 
Ermittelt das Element, das in der Liste &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; am häufigsten vorkommt.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Ermittelt das Element, das in der Liste &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; am häufigsten vorkommt.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
