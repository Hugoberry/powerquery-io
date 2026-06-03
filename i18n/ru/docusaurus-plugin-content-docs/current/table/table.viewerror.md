---
title: Table.ViewError
---

# Table.ViewError


Создает измененную запись об ошибке, которая не запускает откат, когда ошибка генерируется обработчиком, определенным в представлении (через Table.View).


## Syntax

```powerquery
Table.ViewError(
    errorRecord as record
) as record
```


## Remarks

Создает на основе `errorRecord` измененную запись об ошибке, которая не запускает откат, когда ошибка генерируется обработчиком, определенным в представлении (через Table.View).



## Category
Table.Table construction
