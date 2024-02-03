---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Создает функцию, которая может быть перехвачена обработчиком, определенным в представлении (через Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Создает на основе <code>function</code> функцию для представления, создаваемого <code>Binary.View</code>.<br />Задать обработчик для функции представления можно с помощью обработчика <code>OnInvoke</code> из <code>Binary.View</code>.<br />Как и в случае обработчиков встроенных операций, если обработчик <code>OnInvoke</code> не указан, не обрабатывает функцию представления или выдает ошибку, для представления применяется <code>function</code>.<br />Более полное описание <code>Binary.View</code> и функций настраиваемого представления см. в опубликованной документации по настраиваемым соединителям Power Query.<br />



## Category
Binary
