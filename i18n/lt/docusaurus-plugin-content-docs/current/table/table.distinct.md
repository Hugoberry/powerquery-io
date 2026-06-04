---
title: Table.Distinct
---

# Table.Distinct


Iš lentelės pašalinamos pasikartojančios eilutės.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Iš lentelės pašalina pasikartojančias eilutes. Pasirenkamas parametras, `equationCriteria`, nurodo, kurie lentelės stulpeliai yra tikrinami dėl dubliavimosi. Jei `equationCriteria` nėra nurodytas, tikrinami visi stulpeliai.  
  
Kadangi „Power Query“ kartais iškelia tam tikras operacijas į vidinius duomenų šaltinius, (dar vadinama „perdavimu“) ir kartais optimizuoja užklausas praleisdamas operacijas, kurios nėra griežtai būtinos, paprastai nėra garantijos, kuris konkretus dublikatas bus išsaugotas. Pavyzdžiui, negalima daryti prielaidos, kad pirmoji eilutė su unikaliu stulpelių reikšmių rinkiniu išliks, o žemiau lentelėje esančios eilutės bus pašalintos. Jei norite, kad dublikatų šalinimas veiktų numatytai, pirmiausia reikia buferizuoti lentelę naudojant `Table.Buffer`.


## Examples

### Example #1
Pašalinkite pasikartojančias eilutes iš lentelės.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Pašalinkite pasikartojančias eilutes iš stulpelio \[b\] lentelėje `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
