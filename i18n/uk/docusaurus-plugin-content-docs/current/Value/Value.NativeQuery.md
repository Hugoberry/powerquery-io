---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Обчислює запит відносно цільового об’єкта.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Обчислює запит <code>query</code> стосовно цільового об’єкта <code>target</code>, використовуючи значення параметрів <code>parameters</code> і <code>options</code>.<br />Результат запиту залежить від цільового об’єкта <code>target</code>.<br />Цільовий об’єкт <code>target</code> надає контекст операції, описаній запитом <code>query</code>.<br />Елемент <code>query</code> описує запит, який потрібно виконати стосовно цільового об’єкта <code>target</code>. Формат запиту <code>query</code> залежить від особливостей цільового об’єкта <code>target</code> (наприклад, інструкція T-SQL).<br />Необов’язкове значення <code>parameters</code> може містити список або запис, потрібний, щоб надати значення параметрів, які очікує запит <code>query</code>.<br />Необов’язковий запис <code>options</code> може містити параметри, що впливають на обчислення запиту <code>query</code> стосовно цільового об’єкта <code>target</code>. Ці параметри залежать від цільового об’єкта <code>target</code>.<br />



## Category
Values
