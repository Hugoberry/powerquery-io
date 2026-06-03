---
title: List.Random
---

# List.Random


Gibt eine Liste mit Zufallszahlen zurück.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Gibt auf der Grundlage der Anzahl der zu generierenden Werte und eines optionalen Seedwerts eine Liste mit Zufallszahlen zwischen 0 und 1 zurück.

-   `count`: Die Anzahl der zu generierenden Zufallswerte.
-   `seed`: *(Optional)* Ein numerischer Wert, der zum Seeding des Zufallszahlengenerators verwendet wird. Ohne diese Angabe wird bei jedem Aufruf dieser Funktion eine eindeutige Liste mit Zufallszahlen generiert. Bei Angabe eines numerischen Seedwerts wird bei jedem Aufruf der Funktion die gleiche Liste mit Zufallszahlen generiert.


## Examples

### Example #1
Erstellt eine Liste mit drei Zufallszahlen.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Erstellt eine Liste mit drei Zufallszahlen unter Verwendung eines Seedwerts.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
