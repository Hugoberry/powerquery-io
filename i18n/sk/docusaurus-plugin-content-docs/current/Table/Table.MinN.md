---
title: Table.MinN
---

# Table.MinN


## Description

Vráti najmenšiu hodnotu riadkov pomocou daných kritérií.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Vráti najmenšiu hodnotu riadkov v tabuľke <code>table</code> s daným kritériom <code>comparisonCriteria</code>. Po zoradení riadkov sa musí stanoviť parameter <code>countOrCondition</code> a ďalej tak filtrovať výsledok. Nezabúdajte, že algoritmus zoradenia nie je zárukou zobrazenia výsledku s pevným zoradením. Parameter <code>countOrCondition</code> môže mať viacero formátov:    <ul>        <li> Ak je stanovený počet, vráti sa zoznam s najviac <code>countOrCondition</code> položkami vo vzostupnom poradí. </li>        <li> Ak je stanovená podmienka, vráti sa zoznam položiek, ktoré pôvodne spĺňajú podmienku. Hneď ako niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú. </li> </ul>


## Examples

### Example #1 
Nájdite v tabuľke riadok s najmenšou hodnotou v stĺpci [a] s podmienkou [a] &lt; 3. Pred použitím filtra sa riadky zoradia.
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
Nájdite v tabuľke riadok s najmenšou hodnotou v stĺpci [a] s podmienkou [b] &lt; 0. Pred použitím filtra sa riadky zoradia.
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
