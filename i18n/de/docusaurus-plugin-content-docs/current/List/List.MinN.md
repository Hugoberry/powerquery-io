---
title: List.MinN
---

# List.MinN


## Description

Gibt die kleinsten Werte in der Liste zurück. Hierzu kann die Anzahl der zurückzugebenden Werte oder eine Filterbedingung angegeben werden.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Gibt die kleinsten Werte in der Liste "<code>list</code>" zurück.    Der Parameter "<code>countOrCondition</code>" gibt die zurückzugebende Anzahl von Werten oder eine Filterbedingung an. Der optionale Parameter "<code>comparisonCriteria</code>" gibt an, wie Werte in der Liste verglichen werden sollen. <ul>        <li> <code>list</code>: Die Liste mit den Werten.</li>        <li> <code>countOrCondition</code>:  Bei Angabe einer Zahl wird eine Liste mit bis zu <code>countOrCondition</code> Elementen in aufsteigender Reihenfolge zurückgegeben. Bei Angabe einer Bedingung wird eine Liste mit Elementen zurückgegeben, die die Bedingung erfüllen. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt. Ist dieser Parameter NULL, wird der allerkleinste Wert in der Liste zurückgegeben.</li><li><code>comparisonCriteria</code>: <i>[Opional]</i> Ein optionaler <code>comparisonCriteria</code>-Wert kann angeben werden, um zu bestimmen, wie die Elemente in der Liste verglichen werden sollen. Ist dieser Parameter NULL, wird die standardmäßige Vergleichsfunktion verwendet. </li></ul>


## Examples

### Example #1 
Ermittelt die fünf kleinsten Werte in der Liste &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
