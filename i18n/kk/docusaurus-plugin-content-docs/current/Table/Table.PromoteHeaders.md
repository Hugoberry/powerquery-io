---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Мәндердің бірінші жолын жаңа баған тақырыптарына көтереді (яғни баған атаулары).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Мәндердің бірінші жолын жаңа баған тақырыптарына көтереді (яғни баған атаулары). Әдепксінше тақырыптарға тек мәтін мен сандық мәндер көтеріледі. Жарамды параметрлер:    <div>      <code>PromoteAllScalars</code> : Егер <code>шын</code> мәніне қойылса, бірінші жолдағы барлық скалярлық мән <code>Тіл және аймақ параметрі</code> арқылы тақырыптарға көтеріледі, егер көрсетілсе (немесе ағымдағы құжат орны).    Мәтінге түрлендірілмейтін мәндер үшін әдепкі баған атауы пайдаланылады.    </div>    <div>    <code>Тіл және аймақ параметрі</code> : Деректердің тіл және аймақ параметрін көрсететін атау.    </div>  


## Examples

### Example #1 
Кестедегі мәндердің бірінші жолының деңгейін көтеру.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Кестенің бірінші жолындағы барлық скалярды тақырыптарға көтереді.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
