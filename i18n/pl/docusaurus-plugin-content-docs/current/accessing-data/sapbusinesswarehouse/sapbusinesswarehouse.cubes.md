---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Zwraca moduły informacji (InfoCube) i zapytania w systemie SAP Business Warehouse pogrupowane według obszaru informacji (InfoArea).


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

Zwraca tabelę modułów informacji (InfoCube) i zapytania pogrupowane według obszaru informacji (InfoArea) z wystąpienia oprogramowania SAP Business Warehouse na serwerze `server` o numerze systemu `systemNumberOrSystemId` i identyfikatorze klienta `clientId`. Opcjonalny parametr rekordu (`optionsOrLogonGroup`) pozwala określić następujące opcje:



## Category
Accessing data
