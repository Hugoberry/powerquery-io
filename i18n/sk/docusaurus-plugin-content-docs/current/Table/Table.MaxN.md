---
title: Table.MaxN
---

# Table.MaxN


## Description

Vráti najväčšiu hodnotu riadkov pomocou daných kritérií.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Vráti najväčšiu hodnotu riadkov v tabuľke <code>table</code> s daným kritériom <code>comparisonCriteria</code>.    Po zoradení riadkov sa musí stanoviť parameter <code>countOrCondition</code> a ďalej tak filtrovať výsledok. Nezabúdajte, že algoritmus zoradenia nie je zárukou zobrazenia výsledku s pevným zoradením. Parameter <code>countOrCondition</code> môže mať viacero formátov:    <ul>        <li> Ak je stanovený počet, vráti sa zoznam s najviac <code>countOrCondition</code> položkami vo vzostupnom poradí. </li>        <li> Ak je stanovená podmienka, vráti sa zoznam položiek, ktoré pôvodne spĺňajú podmienku. Hneď ako niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú. </li> </ul>


## Examples

### Example #1 
Nájdite v tabuľke riadok s najväčšou hodnotou v stĺpci [a] s podmienkou [a] &gt; 0. Pred použitím filtra sa riadky zoradia.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Nájdite v tabuľke riadok s najväčšou hodnotou v stĺpci [a] s podmienkou [b] &gt; 0. Pred použitím filtra sa riadky zoradia.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
