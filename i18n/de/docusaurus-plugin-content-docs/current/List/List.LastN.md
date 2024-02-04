---
title: List.LastN
---

# List.LastN


## Description

Gibt den letzten Wert in der Liste zurück.  Optional kann die zurückzugebende Anzahl oder eine qualifizierende Bedingung angegeben werden.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Gibt das letzte Element der Liste "<code>list</code>" zurück. Ist die Liste leer, wird eine Ausnahme ausgelöst. Diese Funktion akzeptiert einen optionalen Parameter (<code>countOrCondition</code>), um das Sammeln mehrerer Elemente oder das Filtern von Elementen zu unterstützen. "<code>countOrCondition</code>" kann auf drei Arten angegeben werden: <ul>  <li>Bei Angabe einer Zahl wird die entsprechende Anzahl von Elementen zurückgegeben. </li>  <li>Bei Angabe einer Bedingung werden alle Elemente zurückgegeben, die die Bedingung erfüllen. Die Überprüfung beginnt am Ende der Liste. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt. </li>  <li>Ist dieser Parameter NULL, wird das letzte Element in der Liste zurückgegeben.</li> </ul>


## Examples

### Example #1 
Ermittelt den letzten Wert in der Liste &#34;\{3, 4, 5, -1, 7, 8, 2}&#34;.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Ermittelt die letzten Werte in der Liste &#34;\{3, 4, 5, -1, 7, 8, 2}&#34;, die größer null sind.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
