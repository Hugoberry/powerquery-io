---
title: List.Alternate
---

# List.Alternate


Gibt eine Liste mit allen ungeraden Offsetelementen einer Liste zurück.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

Gibt eine Liste mit allen ungeraden Offsetelementen einer Liste zurück. Wechselt zwischen Verwendung und Überspringung von Werten aus der Liste "<code>list</code>" in Abhängigkeit von den Parametern.    <ul>    <li><code>count</code>: Gibt die Anzahl von Werten an, die bei jeder Ausführung übersprungen werden.</li>    <li><code>repeatInterval</code>: Ein optionales Wiederholungsintervall, um anzugeben, wie viele Werte zwischen den übersprungenen Werten hinzugefügt werden.</li>    <li><code>offset</code>: Ein optionaler Offsetparameter, um mit der Überspringung der Werte am ursprünglichen Offset zu beginnen.</li>    </ul>


## Examples

### Example #1 
Erstellt eine Liste auf der Grundlage von &#34;\{1..10}&#34;, bei der die erste Zahl übersprungen wird.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Erstellt eine Liste auf der Grundlage von &#34;\{1..10}&#34;, bei der jede zweite Zahl übersprungen wird.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Erstellt eine Liste auf der Grundlage von &#34;\{1..10}&#34;, bei der mit 1 begonnen und jede zweite Zahl übersprungen wird.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Erstellt eine Liste auf der Grundlage von &#34;\{1..10}&#34;, die mit 1 beginnt, einen Wert überspringt, zwei Werte behält usw.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
