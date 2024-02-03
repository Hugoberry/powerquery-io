---
title: Table.MaxN
---

# Table.MaxN


## Description

Pateikiama (-os) didžiausia (-ios) eilutė (-ės) naudojant nurodytus kriterijus.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Pateikiama (-os) didžiausia (-ios) <code>table</code> eilutė (-ės) pagal nurodytus <code>comparisonCriteria</code>.    Kai eilutės surikiuojamos, turi būti nurodytas parametras <code>countOrCondition</code>, kad būtų galima toliau filtruoti rezultatą. Atminkite, kad rikiavimo algoritmas negali garantuoti fiksuoto rikiavimo rezultato. Parametras <code>countOrCondition</code> gali būti kelių formų:    <ul>        <li> Jei nurodytas skaičius, didėjimo tvarka pateikiamas sąrašas, kurį sudaro iki <code>countOrCondition</code> elem. </li>        <li> Jei nurodyta sąlyga, pateikiamas sąrašas elementų, kurie iš pradžių atitiko sąlygą. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama. </li> </ul>


## Examples

### Example #1 
Raskite didžiausią reikšmę turinčią stulpelio [a] eilutę, atitinkančią sąlygą [a] &gt; 0, lentelėje. Atminkite, kad eilutės rikiuojamos prieš pritaikant filtrą.
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
Raskite didžiausią reikšmę turinčią stulpelio [a] eilutę, atitinkančią sąlygą [b] &gt; 0, lentelėje. Eilutės rikiuojamos prieš pritaikant filtrą.
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
