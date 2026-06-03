---
title: List.MinN
---

# List.MinN


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


## Remarks

Gibt die kleinsten Werte in der Liste „`list`“ zurück. Der Parameter „`countOrCondition`“ gibt die zurückzugebende Anzahl von Werten oder eine Filterbedingung an. Der optionale Parameter „`comparisonCriteria`“ gibt an, wie Werte in der Liste verglichen werden sollen.

-   `list`: Die Liste der Werte.
-   `countOrCondition`: Wenn eine Zahl angegeben wird, wird eine Liste mit bis zu `countOrCondition` Elementen in aufsteigender Reihenfolge zurückgegeben. Bei Angabe einer Bedingung wird eine Liste mit Elementen zurückgegeben, die die Bedingung erfüllen. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt. Wenn dieser Parameter NULL ist, wird der kleinste Wert in der Liste zurückgegeben.
-   `comparisonCriteria`: *(Optional)* Ein optionaler `comparisonCriteria`\-Wert kann angegeben werden, um zu bestimmen, wie die Elemente in der Liste verglichen werden. Wenn dieser Parameter NULL ist, wird der Standardvergleich verwendet.


## Examples

### Example #1
Ermittelt die fünf kleinsten Werte in der Liste `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
