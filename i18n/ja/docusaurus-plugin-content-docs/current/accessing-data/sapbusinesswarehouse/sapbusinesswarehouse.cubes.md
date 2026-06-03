---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


SAP Business Warehouse システム内の InfoCubes とクエリを InfoArea ごとにグループ化して返します。


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

サーバー `server` 上のシステム番号 `systemNumberOrSystemId`、クライアント ID `clientId` の SAP Business Warehouse インスタンスから、InfoArea ごとにグループ化した InfoCubes とクエリのテーブルを返します。省略可能なレコード パラメーター `optionsOrLogonGroup` を指定すると、以下のオプションを制御できます。



## Category
Accessing data
