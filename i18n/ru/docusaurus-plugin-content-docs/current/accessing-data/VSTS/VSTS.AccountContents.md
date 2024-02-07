---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Введите URL-адрес своей службы аналитики Azure DevOps.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Возвращает в виде двоичного значения содержимое, скачанное по URL-адресу службы аналитики Azure DevOps. Эта функция использует разные учетные данные для разных организаций.


