---
title: Table.MinN
---

# Table.MinN


Vrne najmanjše vrstice glede na dane kriterije.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Vrne najmanjše vrstice v tabeli `table`, če navedete `comparisonCriteria`. Ko so vrstice razvrščene, morate določiti parameter `countOrCondition` za nadaljnje filtriranje rezultata. Upoštevajte, da algoritem razvrščanja ne zagotavlja nespremenljivega razvrščenega rezultata. Parameter `countOrCondition` ima lahko več oblik:

-   Če navedete število, je vrnjen seznam z največ `countOrCondition` elementi v naraščajočem vrstnem redu.
-   Če navedete pogoj, je vrnjen seznam elementov, ki prvotno izpolnjujejo pogoj. Ko določen element ne izpolnjuje več pogoja, se nadaljnji elementi ne upoštevajo.


## Examples

### Example #1
Poiščite vrstico z najmanjšo vrednostjo v stolpcu \[a\] s pogojem \[a\] &lt; 3 v tabeli. Vrstice so razvrščene, preden uporabite filter.
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
Poiščite vrstico z najmanjšo vrednostjo v stolpcu \[a\] s pogojem \[b\] &lt; 3 v tabeli. Vrstice so razvrščene, preden uporabite filter.
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
