---
title: Access.Database
---

# Access.Database


## Description

Повертає структурне представлення бази даних Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Повертає структурне представлення бази даних Access <code>database</code>. Можна вказати додатковий параметр запису <code>options</code>, щоб керувати наведеними нижче параметрами.    <ul><li><code>CreateNavigationProperties</code> : Параметр із логічним значенням (true або false), що визначає, чи потрібно генерувати властивості навігації для значень, що повертаються (стандартне значення&#160;– false).</li><li><code>NavigationPropertyNameGenerator</code> : Функція, що створює імена для властивостей навігації.</li></ul>    Параметр запису вказується, наприклад, так: [параметр1 = значення1, параметр2 = значення2…].



## Category
Accessing data
