---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Повертає набори даних InfoCube і запити в системі сховища бізнес-даних SAP, згруповані за каталогами InfoArea.


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

Повертає таблицю наборів даних InfoCube і запитів, згрупованих за каталогами InfoArea, з екземпляра сховища бізнес-даних SAP на сервері <code>server</code> із системним номером <code>systemNumberOrSystemId</code> та ідентифікатором клієнта <code>clientId</code>. Можна вказати додатковий параметр запису <code>optionsOrLogonGroup</code>, щоб керувати наведеними нижче параметрами.        



## Category
Accessing data
