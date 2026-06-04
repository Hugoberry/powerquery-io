---
title: Table.Distinct
---

# Table.Distinct


Кестеден қайталанатын жолдарды жояды.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Кестеден көшірме жолдарды жояды. `equationCriteria` деген міндетті емес параметр кестенің қай бағандарында көшірмелер бар-жоғы тексерілгенін көрсетеді. `equationCriteria` көрсетілмеген болса, барлық бағандар тексерілген.  
  
Power Query кейде белгілі бір әрекеттерді серверлік деректер көздеріне жүктейтіндіктен ("бүктеу" ретінде белгілі), сондай-ақ кейде қатаң түрде қажет емес әрекеттерді өткізіп жіберу арқылы сұрауларды оңтайландыратындықтан, әдетте нақты қай көшірме сақталатынына кепілдік жоқ. Мысалы, баған мәндерінің бірегей жиынтығы бар бірінші жол сақталады деп және кестедегі кейінгі жолдар жойылады деп болжай алмайсыз. Көшірмелерді жою болжауға болатындай әрекет етуін қаласаңыз, алдымен `Table.Buffer` арқылы кестені буферлеңіз.


## Examples

### Example #1
Кестедегі қайталанатын жолдарды жою.
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
`({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})` кестесіндегі \[b\] бағанынан қайталанатын жолдарды жою.
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
