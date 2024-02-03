---
title: List.Alternate
---

# List.Alternate


## Description

Vrátí seznam složený ze všech prvků odsazení s lichými čísly v seznamu.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Vrátí seznam složený ze všech prvků odsazení s lichými čísly v seznamu. Alternuje mezi přebíráním a přeskakování hodnot v seznamu <code>list</code> v závislosti na parametrech.    <ul>    <li><code>count</code>: Určuje počet hodnot, které jsou pokaždé vynechány.</li>    <li><code>repeatInterval</code>: Volitelný interval opakování, který značí, kolik hodnot je přičteno mezi přeskočenými hodnotami.</li>    <li><code>offset</code>: Volitelný parametr odsazení, jehož pomocí lze určit odsazení, po kterém začnou být přeskakovány hodnoty.</li>    </ul>


## Examples

### Example #1 
Vytvoří seznam z rozsahu \{1..10}, který přeskočí první číslo.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Vytvoří seznam z rozsahu \{1..10}, který přeskočí každé druhé číslo.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Vytvoří seznam z rozsahu \{1..10}, který začne položkou jedna a přeskočí každé druhé číslo.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Vytvoří seznam z rozsahu \{1..10}, který začne položkou jedna, přeskočí jednu hodnotu, zachová dvě hodnoty atd.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
