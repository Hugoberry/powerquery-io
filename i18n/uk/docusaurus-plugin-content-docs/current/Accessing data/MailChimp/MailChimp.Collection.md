---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Повертає таблицю з даними з кінцевої точки MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Викликає API MailChimp і повертає отриманий набір даних у вигляді таблиці. Автоматично розбиває всі результати на сторінки. Можна використати додатковий параметр entityName для кінцевих точок API, для яких ім’я основної сутності (entityName) відрізняється від кореневої кінцевої точки у відповіді формату JSON.


## Examples

### Example #1 
Отримує таблицю даних із кінцевої точки &#34;списки&#34; інтерфейсу API MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Таблиця з даними списків.
```


### Example #2 
Отримує таблицю даних із кінцевої точки &#34;папки кампаній&#34; інтерфейсу API MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Таблиця з даними папок кампаній.
```



