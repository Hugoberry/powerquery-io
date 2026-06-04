---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Pateikiama bet kurios iš nurodytų eilučių padėtis arba padėtys lentelėje.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Pateikiama (-os) eilutė (-ės) padėtis (-os) nuo pirmojo `rows` sąrašo pasikartojimo `table`. Pateikia -1, jei pasikartojimų nerasta.

-   `table`: įvesties lentelė.
-   `rows`: eilučių sąrašas lentelėje, kuriame reikia rasti pareigas.
-   `occurrence`: *(pasirinktinai)* Nurodo, kuriuos eilutės pasikartojimus pateikti.
-   `equationCriteria`: *(pasirinktinai)* Valdo lentelės eilučių palyginimą.


## Examples

### Example #1
Raskite pirmojo \[a = 2, b = 4\] arba \[a = 6, b = 8\] atvejo padėtį lentelėje `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Raskite visų \[a = 2, b = 4\] arba \[a = 6, b = 8\] atvejų padėtį lentelėje `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
