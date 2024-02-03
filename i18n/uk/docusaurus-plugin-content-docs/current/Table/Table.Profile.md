---
title: Table.Profile
---

# Table.Profile


## Description

Повертає конфігурацію стовпців таблиці.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Повертає конфігурацію стовпців у таблиці "<code>table</code>".<br />Про кожен стовпець надаються такі відомості (за наявності):<ul>  <li>мінімальне значення</li>;  <li>максимальне значення</li>;  <li>середнє значення</li>;  <li>стандартне відхилення</li>;  <li>кількість значень</li>;  <li>кількість Null-значень</li>;  <li>кількість унікальних значень</li>.</ul><br />



## Category
Table.Information
