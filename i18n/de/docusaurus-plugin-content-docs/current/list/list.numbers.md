---
title: List.Numbers
---

# List.Numbers


Gibt auf der Grundlage eines Anfangswerts, einer Anzahl und eines optionalen inkrementellen Werts eine Liste mit Zahlen zurück.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Gibt auf der Grundlage eines Anfangswerts, einer Anzahl und eines optionalen inkrementellen Werts eine Liste mit Zahlen zurück. Der inkrementelle Standardwert lautet 1.

-   `start`: Der Anfangswert in der Liste.
-   `count`: Die Anzahl der zu erstellenden Werte.
-   `increment`: *(Optional)* Der Wert, um den inkrementiert werden soll. Ohne Angabe dieses Werts werden die Werte jeweils um eins (1) erhöht.


## Examples

### Example #1
Generiert eine bei 1 beginnende Liste mit 10 fortlaufenden Zahlen.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Generiert eine bei 1 beginnende Liste mit 10 Zahlen und einer Schrittweite von 2 für jede weitere Zahl.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
