---
title: Table.MinN
---

# Table.MinN


Palauttaa pienimmät rivit käyttäen annettua ehtoa.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Palauttaa pienimmät rivit kohteessa `table`, kun `comparisonCriteria` on annettu. Kun rivit on lajiteltu, parametri `countOrCondition` täytyy määrittää, jotta tulosta voidaan suodattaa lisää. Huomaa, että lajittelualgoritmi ei voi taata mitään kiinteää lajiteltua tulosta. Parametri `countOrCondition` voi olla useassa muodossa:

-   Jos luku määritetään, palautetaan enintään `countOrCondition` kohteen luettelo nousevassa järjestyksessä.
-   Jos ehto määritetään, palautetaan luettelo kohteita, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida.


## Examples

### Example #1
Etsi rivi, jolla on pienin arvo sarakkeessa \[a\] käyttäen ehtoa \[a\] &lt; 3 taulukossa. Rivit lajitellaan, ennen kuin suodatin otetaan käyttöön.
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
Etsi rivi, jolla on pienin arvo sarakkeessa \[a\] käyttäen ehtoa \[b\] &lt; 0 taulukossa. Rivit lajitellaan, ennen kuin suodatin otetaan käyttöön.
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
