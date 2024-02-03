---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Возвращает таблицу инфокубов и запросов, сгруппированных по инфообласти, из экземпляра SAP Business Warehouse на сервере <code>server</code> с номером системы <code>systemNumberOrSystemId</code> и идентификатором клиента <code>clientId</code>. Необязательный параметр записи <code>optionsOrLogonGroup</code> может быть указан для управления следующими параметрами:        



## Category
Accessing data
