---
title: Table.MinN
---

# Table.MinN


Pateikiama (-os) mažiausia (-ios) eilutė (-ės) naudojant nurodytus kriterijus.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Pateikiama (-os) mažiausia (-ios) `table` eilutė (-ės) pagal nurodytus `comparisonCriteria`. Kai eilutės surikiuojamos, turi būti nurodytas parametras `countOrCondition`, kad būtų galima toliau filtruoti rezultatą. Atminkite, kad rikiavimo algoritmas negali garantuoti fiksuoto rikiavimo rezultato. Parametras `countOrCondition` gali būti kelių formų:

-   Jei nurodytas skaičius, didėjimo tvarka pateikiamas sąrašas, kurį sudaro iki `countOrCondition` elem.
-   Jei nurodyta sąlyga, pateikiamas sąrašas elementų, kurie iš pradžių atitiko sąlygą. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama.


## Examples

### Example #1
Raskite mažiausią reikšmę turinčią stulpelio \[a\] eilutę, atitinkančią sąlygą \[a\] &lt; 3, lentelėje. Eilutės rikiuojamos prieš pritaikant filtrą.
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
Raskite mažiausią reikšmę turinčią stulpelio \[a\] eilutę, atitinkančią sąlygą \[b\] &lt; 0, lentelėje. Eilutės rikiuojamos prieš pritaikant filtrą.
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
