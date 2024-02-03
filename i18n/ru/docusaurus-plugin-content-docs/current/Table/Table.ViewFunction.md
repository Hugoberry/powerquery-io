---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Создает функцию, которая может быть перехвачена обработчиком, определенным в представлении (через Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Создает на основе <code>function</code> функцию для представления, создаваемого <code>Table.View</code>.<br />Задать обработчик для функции представления можно с помощью <code>OnInvoke</code> из <code>Table.View</code>.<br />Как и в случае обработчиков встроенных операций, если обработчик <code>OnInvoke</code> не указан, не обрабатывает функцию представления или выдает ошибку, для представления применяется <code>function</code>.<br />Более полное описание <code>Table.View</code> и функций настраиваемого представления см. в опубликованной документации по настраиваемым соединителям Power Query.<br />



## Category
Table.Table construction
