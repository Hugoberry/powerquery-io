---
title: VSTS.AccountContents
---

# VSTS.AccountContents


## Description

Введите URL-адрес своей службы аналитики Azure DevOps.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Details

Возвращает в виде двоичного значения содержимое, скачанное по URL-адресу службы аналитики Azure DevOps. Эта функция использует разные учетные данные для разных организаций.


