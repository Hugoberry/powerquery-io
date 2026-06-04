---
title: List.Alternate
---

# List.Alternate


Vrne seznam, sestavljen iz vseh elementov odmika, označenih z lihimi števili, na seznamu.


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

Vrne seznam, sestavljen iz vseh elementov odmika, označenih z lihimi števili, na seznamu. Izmenično jemlje in preskakuje vrednosti s seznama `list` glede na parametre.

-   `count`: določa število vrednosti, ki se vsakič preskočijo.
-   `repeatInterval`: izbirni interval ponavljanja, ki kaže, koliko vrednosti se doda med preskočenimi vrednostmi.
-   `offset`: izbirni parameter odmika, da se preskakovanje vrednosti začne pri začetnem odmiku.


## Examples

### Example #1
Ustvarite seznam iz \{1..10\}, ki preskoči prvo število.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2
Ustvarite seznam iz \{1..10\}, ki preskoči vsako drugo številko.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3
Ustvarite seznam iz \{1..10\}, ki se začne pri 1 in preskoči vsako drugo število.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4
Ustvarite seznam iz \{1..10\}, ki se začne z 1, preskoči eno vrednost, ohrani dve vrednosti in tako naprej.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
