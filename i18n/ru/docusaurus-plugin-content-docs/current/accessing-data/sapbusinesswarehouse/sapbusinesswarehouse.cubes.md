---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Возвращает инфокубы и запросы в системе SAP Business Warehouse, сгруппированные по инфообласти.


## Syntax

```powerquery
SapBusinessWarehouse.Cubes(
    server as text,
    systemNumberOrSystemId as text,
    clientId as text,
    optional optionsOrLogonGroup as any,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу инфокубов и запросов, сгруппированных по инфообласти, из экземпляра SAP Business Warehouse на сервере `server` с номером системы `systemNumberOrSystemId` и идентификатором клиента `clientId`. Необязательный параметр записи `optionsOrLogonGroup` может быть указан для управления следующими параметрами:



## Category
Accessing data
