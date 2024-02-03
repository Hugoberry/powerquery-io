---
title: List.Alternate
---

# List.Alternate


## Description

Egy listát ad vissza, amelyen egy lista összes páratlan sorszámú eltolt eleme szerepel.


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

Egy listát ad vissza, amelyen egy lista összes páratlan sorszámú eltolt eleme szerepel. Felváltva vesz és kihagy értékeket a(z) <code>list</code> listáról, a paraméterektől függően.    <ul>    <li><code>count</code>: Meghatározza, hogy mindig hány érték legyen kihagyva.</li>    <li><code>repeatInterval</code>: Opcionális ismétlési intervallum, amely megadja, hogy a kihagyott értékek között hány érték kerüljön felvételre.</li>    <li><code>offset</code>: Opcionális eltolási paraméter, amely megadja, hogy az értékek kihagyása a kezdeti eltolástól kiindulva kezdődjön.</li>    </ul>


## Examples

### Example #1 
Lista készítése az \{1..10} tartományból, amely kihagyja az első számot
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Lista készítése az \{1..10} tartományból, amely kihagyja minden második számot.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Lista készítése az \{1..10} tartományból, amely 1-nél kezdődik, és kihagyja minden második számot
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Lista készítése az \{1..10} tartományból, amely 1-nél kezdődik, kihagy egy értéket, megtart két értéket és így tovább.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
