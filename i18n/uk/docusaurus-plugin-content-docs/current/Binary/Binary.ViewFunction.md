---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Створює функцію, яку може перехопити обробник, визначений у поданні (через Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Створює функцію подання на основі <code>function</code>, що можна обробляти в поданні, створеному <code>Binary.View</code>.<br />Обробник <code>OnInvoke</code> для <code>Binary.View</code> можна використовувати для визначення обробника для функції подання.<br />Як і у випадку обробників для вбудованих операцій, якщо обробник <code>OnInvoke</code> не вказано, він не обробляє функцію подання або виникла помилка обробника, <code>function</code> застосовується поверх подання.<br />Перегляньте опубліковану документацію щодо настроюваного з’єднувача Power Query, щоб дізнатися більше про <code>Binary.View</code> та спеціальні функції подання.<br />



## Category
Binary
