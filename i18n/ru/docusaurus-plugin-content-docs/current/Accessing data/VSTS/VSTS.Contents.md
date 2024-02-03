---
title: VSTS.Contents
---

# VSTS.Contents


## Description

Введите URL-адрес своей службы аналитики Azure DevOps.


## Syntax

```powerquery
VSTS.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Возвращает в виде двоичного значения содержимое, скачанное по URL-адресу службы аналитики Azure DevOps. Эта функция использует глобальные учетные данные для всех доступных организаций.


