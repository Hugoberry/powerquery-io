---
title: List.Alternate
---

# List.Alternate


Vráti zoznam skladajúci sa zo všetkých nepárnych prvkov posunu v zozname.


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

Vráti zoznam skladajúci sa zo všetkých nepárnych prvkov posunu v zozname. Strieda medzi použitím a vynechaním hodnôt zo zoznamu `list` v závislosti od parametrov.

-   `count`: Stanoví počet hodnôt, ktoré sa zakaždým vynechajú.
-   `repeatInterval`: Voliteľný interval opakovania, ktorý označí počet hodnôt pridaných pomedzi vynechané hodnoty.
-   `offset`: Voliteľný parameter posunu, ktorým sa začnú vynechávať hodnoty v počiatočnom posune.


## Examples

### Example #1
Vytvorte zoznam z hodnôt \{1..10\}, v ktorom sa vynechá prvé číslo.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2
Vytvorte zoznam z hodnôt \{1..10\}, v ktorom sa vynechá každé druhé číslo.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3
Vytvorte zoznam z hodnôt \{1..10\}, ktorý začne číslom 1 a v ktorom sa vynechá každé druhé číslo.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4
Vytvorte zoznam z hodnôt \{1..10\}, ktorý začne číslom 1, vynechá jednu hodnotu, zachová dve hodnoty atď.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
