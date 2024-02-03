---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Ұяшықтардың кемінде біреуінде қатені қамтитын кіріс кестеден жолдар жойылған кестені қайтарады. Егер бағандар тізімі көрсетілген болса, онда тек көрсетілген бағандардағы ұяшықтарда қателер бар-жоғы тексеріледі.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Ұяшықтардың кемінде біреуінде қатені қамтитын кіріс кестеден жолдар жойылған кестені қайтарады. Егер бағандар тізімі көрсетілген болса, онда тек көрсетілген бағандардағы ұяшықтарда қателер бар-жоғы тексеріледі.


## Examples

### Example #1 
Бірінші жолдан қате мәнін жойыңыз.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
