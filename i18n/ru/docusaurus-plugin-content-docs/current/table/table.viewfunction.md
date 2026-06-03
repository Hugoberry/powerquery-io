---
title: Table.ViewFunction
---

# Table.ViewFunction


Создает функцию, которая может быть перехвачена обработчиком, определенным в представлении (через Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Создает на основе `function` функцию для представления, создаваемого `Table.View`.

Задать обработчик для функции представления можно с помощью `OnInvoke` из `Table.View`.

Как и в случае обработчиков встроенных операций, если обработчик `OnInvoke` не указан, не обрабатывает функцию представления или выдает ошибку, для представления применяется `function`.

Более полное описание `Table.View` и функций настраиваемого представления см. в опубликованной документации по настраиваемым соединителям Power Query.



## Category
Table.Table construction
