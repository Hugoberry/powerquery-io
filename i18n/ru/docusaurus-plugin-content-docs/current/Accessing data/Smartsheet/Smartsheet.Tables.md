---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Возвращает таблицу листов, отчетов, папок и рабочих областей из API Smartsheet


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Возвращает вложенную таблицу доступных листов, отчетов, папок и рабочих областей из API Smartsheet.


## Examples

### Example #1 
Возвращает листы, папки, отчеты и рабочие области, доступные на верхнем уровне иерархии Smartsheet
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Таблица папок, отчетов и рабочих областей с верхнего уровня иерархии Smartsheet
```



