---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Створює функцію, яку може перехопити обробник, визначений у поданні (через Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Створює функцію подання на основі <code>function</code>, що можна обробляти в поданні, створеному <code>Table.View</code>.<br />Обробник <code>OnInvoke</code> для <code>Table.View</code> можна використовувати для визначення обробника для функції подання.<br />Як і у випадку обробників для вбудованих операцій, якщо обробник <code>OnInvoke</code> не вказано, він не обробляє функцію подання або виникла помилка обробника, <code>function</code> застосовується поверх подання.<br />Перегляньте опубліковану документацію щодо настроюваного з’єднувача Power Query, щоб дізнатися більше про <code>Table.View</code> та спеціальні функції подання.<br />



## Category
Table.Table construction
