---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


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


## Remarks

Повертає таблицю наборів даних InfoCube і запитів, згрупованих за каталогами InfoArea, з екземпляра сховища бізнес-даних SAP на сервері `server` із системним номером `systemNumberOrSystemId` та ідентифікатором клієнта `clientId`. Можна вказати додатковий параметр запису `optionsOrLogonGroup`, щоб керувати наведеними нижче параметрами.



## Category
Accessing data
