---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Повертає приблизну кількість рядків у таблиці.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Повертає приблизну кількість рядків у <code>table</code> або помилку, якщо джерело даних не підтримує апроксимацію.


## Examples

### Example #1 
Оцінка кількості унікальних комбінацій міста та області у великій таблиці, яку можна використовувати як оцінку кратності для стовпців. Оцінки кратності досить важливі, щоб різні джерела даних (як-от SQL Server) підтримували певну апроксимацію, часто за допомогою алгоритму HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
