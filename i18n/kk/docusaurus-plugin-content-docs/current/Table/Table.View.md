---
title: Table.View
---

# Table.View


## Description

Кестені жасайды немесе оны сұрау және әрекет операциялары үшін пайдаланушы анықтайтын өңдегіштермен кеңейтеді.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Операция көрініске қолданылатын кезде, <code>table</code> көрсетілген функциялар операцияның әдепкі орындалу ретінің орнына пайдаланылатын <code>handlers</code> көрінісін қайтарады.<br />Егер <code>table</code> көрсетілген болса, барлық өңдегіш функциялары міндетті емес болып табылады. Егер <code>table</code> көрсетілмесе, <code>GetType</code> және <code>GetRows</code> өңдегіш функциялары міндетті болады. Егер операция үшін өңдегіш функциясы көрсетілмесе, <code>table</code> үшін операцияның әдепкі орындалу реті қолданылады (<code>GetExpression</code> жағдайынан басқа).<br />Өңдегіш функциялары <code>table</code> үшін қолданылған операцияның нәтижесіне семантикалық эквивалентті мәнді қайтаруы тиіс (немесе <code>GetExpression</code> жағдайындағы алынатын көріністі).<br />Егер өңдегіш функциясы қате шығарса, көрініске операцияның әдепкі орындалу реті қолданылады.<br /><code>Table.View</code> — M сұрауларын дереккөзге сәйенс сұрауларға түрлендіру (мысалы, M сұрауларынан T-SQL нұсқауларын жасау).<br /><code>Table.View</code> туралы толығырақ сипаттама алу үшін жарияланған Power Query реттелмелі қосқыш құжаттарын қараңыз.<br />


## Examples

### Example #1 
Жолдардың түрін немесе санын анықтау үшін жолға қатынасу рұқсатын қажет етпейтін негізгі көріністі жасаңыз.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
