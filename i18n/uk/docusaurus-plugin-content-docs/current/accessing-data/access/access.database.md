---
title: Access.Database
---

# Access.Database


Повертає структурне представлення бази даних Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Повертає структурне представлення бази даних Access `database`. Можна вказати додатковий параметр запису `options`, щоб керувати описаними нижче параметрами.

-   `CreateNavigationProperties` : Параметр із логічним значенням (true або false), що визначає, чи потрібно генерувати властивості навігації для значень, що повертаються (стандартне значення – false).
-   `NavigationPropertyNameGenerator` : Функція, що створює імена для властивостей навігації.

Параметр запису вказується, наприклад, так: \[параметр1 = значення1, параметр2 = значення2…\].



## Category
Accessing data
