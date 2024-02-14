---
title: List.Alternate
---

# List.Alternate


Returnerar en lista som består av alla förskjutna element i en lista.


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

Returnerar en lista som består av alla förskjutna element i en lista. Växlar mellan att använda och hoppa över värden från listan <code>list</code> beroende på parametrarna.    <ul>    <li><code>count</code>: Anger antalet värden som hoppas över varje gång.</li>    <li><code>repeatInterval</code>: Ett valfritt upprepningsintervall som anger hur många värden som läggs till mellan de överhoppade värdena.</li>    <li><code>offset</code>: En valfri offset-parameter som kan användas för att hoppa över värdena vid den ursprungliga förskjutningen.</li>    </ul>


## Examples

### Example #1 
Skapa en lista från \{1..10} som hoppar över det första numret.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Skapa en lista från \{1..10} som hoppar över vartannat nummer.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Skapa en lista från \{1..10} som börjar vid 1 och hoppar över vartannat nummer.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Skapa en lista från \{1..10} som börjar vid 1, hoppar över ett värde, bevarar två värden o.s.v.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
