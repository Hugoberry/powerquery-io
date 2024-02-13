---
title: List.MaxN
---

# List.MaxN


Gibt die größten Werte in der Liste zurück. Hierzu muss die Anzahl der zurückzugebenden Werte oder eine Filterbedingung angegeben werden.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Gibt die größten Werte in der Liste "<code>list</code>" zurück.    Nach dem Sortieren der Zeilen können optionale Parameter zur weiteren Filterung des Ergebnisses angegeben werden. Der optionale Parameter "<code>countOrCondition</code>" gibt die zurückzugebende Anzahl von Werten oder eine Filterbedingung an. Der optionale Parameter "<code>comparisonCriteria</code>" gibt an, wie Werte in der Liste verglichen werden sollen. <ul>        <li> <code>list</code>: Die Liste mit den Werten.</li>        <li> <code>countOrCondition</code>:  Bei Angabe einer Zahl wird eine Liste mit bis zu <code>countOrCondition</code> Elementen in aufsteigender Reihenfolge zurückgegeben. Bei Angabe einer Bedingung wird eine Liste mit Elementen zurückgegeben, die die Bedingung erfüllen. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt.</li><li><code>comparisonCriteria</code>: <i>[Opional]</i> Ein optionaler <code>comparisonCriteria</code>-Wert kann angeben werden, um zu bestimmen, wie die Elemente in der Liste verglichen werden sollen. Ist dieser Parameter NULL, wird die standardmäßige Vergleichsfunktion verwendet. </li></ul>



## Category
List.Ordering
