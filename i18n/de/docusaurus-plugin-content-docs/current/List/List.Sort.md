---
title: List.Sort
---

# List.Sort


## Description

Sortiert eine Liste mit Daten gemäß den angegebenen Kriterien.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Sortiert eine Liste mit Daten (<code>list</code>) gemäß den angegebenen optionalen Kriterien.    Als Vergleichskriterium kann ein optionaler Parameter (<code>comparisonCriteria</code>) angegeben werden. Dieser akzeptiert folgende Werte:    <ul>    <li> Zum Steuern der Reihenfolge kann als Vergleichskriterium ein Order-Enumerationswert angegeben werden. (<code>Order.Descending</code>, <code>Order.Ascending</code>) </li>    <li> Zum Berechnen eines Schlüssels für die Sortierung kann eine Funktion mit einem einzelnen Argument verwendet werden. </li>    <li> Um sowohl einen Schlüssel auszuwählen als auch die Reihenfolge zu steuern, kann das Vergleichskriterium als Liste mit Schlüssel und Reihenfolge (<code>\{each 1 / _, Order.Descending}</code>) angegeben werden. </li>    <li> Zur vollständigen Steuerung des Vergleichs kann eine Funktion mit zwei Argumenten verwendet werden. Dieser Funktion werden zwei Elemente aus der Liste übergeben (zwei beliebige Elemente in beliebiger Reihenfolge). Die Funktion sollte einen der folgenden Werte zurückgeben:        <ul>            <li> <code>-1</code>: Das erste Element ist kleiner als das zweite Element.</li>            <li> <code>0</code>: Die Elemente sind gleichwertig.</li>            <li> <code>1</code>: Das erste Element ist größer als das zweite Element.</li>        </ul>        "Value.Compare" ist eine Methode, mit der diese Logik delegiert werden kann. </li>    </ul>


## Examples

### Example #1 
Sortiert die Liste &#34;\{2, 3, 1}&#34;.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Sortiert die Liste &#34;\{2, 3, 1}&#34; in absteigender Reihenfolge.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Sortiert die Liste &#34;\{2, 3, 1}&#34; in absteigender Reihenfolge unter Verwendung der Value.Compare-Methode.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
