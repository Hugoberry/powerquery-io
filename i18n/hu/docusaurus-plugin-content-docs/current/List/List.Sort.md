---
title: List.Sort
---

# List.Sort


## Description

A megadott feltételeknek megfelelően rendez egy adatokból álló listát.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

A megadott nem kötelező feltételeknek megfelelően rendez egy adatokból álló <code>list</code> listát.    Megadható egy nem kötelező <code>comparisonCriteria</code> paraméter összehasonlítási feltételként. Ez a következő értékek egyike lehet:    <ul>    <li> A sorrend szabályozásához az összehasonlítási feltétel az Order számbavétel egyik értéke lehet (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> A rendezéshez használandó kulcs kiszámításához használható egy 1 argumentumot fogadó függvény. </li>    <li> Egyidejűleg egy kulcs kiválasztásához és a sorrend szabályozásához az összehasonlítási feltétel lehet egy kulcsból és egy sorrendből álló lista (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Az összehasonlítás teljes körű szabályozásához használható egy 2 argumentumot elfogadó függvény, amely két elemet kap meg a listából (bármely két elemet, bármilyen sorrendben). A függvény a következő értékek valamelyikét adja ki:         <ul>            <li> <code>-1</code>: Az első elem kisebb, mint a második.</li>            <li> <code>0</code>: A két elem egyenlő.</li>            <li> <code>1</code>: Az első elem nagyobb, mint a második.</li>        </ul>       A  Value.Compare metódus használható ezen logikai működés delegálásához. </li>    </ul>


## Examples

### Example #1 
A \{2, 3, 1} lista rendezése
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
A \{2, 3, 1} lista rendezése csökkenő sorrendben
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
A \{2, 3, 1} lista rendezése csökkenő sorrendben a Value.Compare metódus használatával
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
