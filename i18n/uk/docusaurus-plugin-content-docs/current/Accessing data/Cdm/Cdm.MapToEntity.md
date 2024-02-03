---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Повертає таблицю зі стовпцями, зіставленими з атрибутами сутності в Common Data Model, включно з типами даних.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

Повертає таблицю зі стовпцями, зіставленими з атрибутами сутності в Common Data Model, включно з типами даних. Зіставлені стовпці з визначення сутності буде додано, а усі незіставлені стовпці – видалено.


