---
title: Table.MinN
---

# Table.MinN


Vráti najmenšiu hodnotu riadkov pomocou daných kritérií.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Vráti najmenšiu hodnotu riadkov v tabuľke `table` s daným kritériom `comparisonCriteria`. Po zoradení riadkov sa musí stanoviť parameter `countOrCondition` a ďalej tak filtrovať výsledok. Nezabúdajte, že algoritmus zoradenia nie je zárukou zobrazenia výsledku s pevným zoradením. Parameter `countOrCondition` môže mať viacero formátov:

-   Ak je stanovený počet, vráti sa zoznam s najviac `countOrCondition` položkami vo vzostupnom poradí.
-   Ak je stanovená podmienka, vráti sa zoznam položiek, ktoré pôvodne spĺňajú podmienku. Hneď ako niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú.


## Examples

### Example #1
Nájdite v tabuľke riadok s najmenšou hodnotou v stĺpci \[a\] s podmienkou \[a\] &lt; 3. Pred použitím filtra sa riadky zoradia.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2
Nájdite v tabuľke riadok s najmenšou hodnotou v stĺpci \[a\] s podmienkou \[b\] &lt; 0. Pred použitím filtra sa riadky zoradia.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
