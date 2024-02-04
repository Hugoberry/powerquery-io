---
title: List.FirstN
---

# List.FirstN


## Description

Gibt die erste Gruppe von Elementen in der Liste zurück. Hierzu wird entweder die zurückzugebende Anzahl oder eine qualifizierende Bedingung angegeben.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Bei Angabe einer Zahl wird die entsprechende Anzahl von Elementen zurückgegeben. </li>  <li>Bei Angabe einer Bedingung werden alle Elemente zurückgegeben, die die Bedingung erfüllen. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt. </li> </ul>


## Examples

### Example #1 
Ermittelt die ersten Werte in der Liste &#34;\{3, 4, 5, -1, 7, 8, 2}&#34;, die größer 0 sind.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
