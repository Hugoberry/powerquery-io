---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

從 AtScale 匯入/DirectQuery Cube 資料。


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

從伺服器 <code>server</code> 上的 AtScale 傳回 Cube 資料。您可指定選用記錄參數 <code>options</code> 來控制下列選項:<ul>        <li><code>TypedMeasureColumns</code>: 邏輯值，指出於多維度或表格式模型中指定的類型是否將用於所新增量值資料行的類型。當設定為 false 時，「數目」類型將用於所有量值資料行。此選項的預設值為 false。</li>        <li><code>CommandTimeout</code>: 期間 (以秒為單位)，控制在取消伺服器端查詢前允許其執行多長時間。預設值取決於驅動程式。</li>        <li><code>ConnectionTimeout</code>: 期間 (以秒為單位)，控制放棄嘗試連線至伺服器前的等待時間。預設值取決於驅動程式。</li></ul>該記錄參數的指定形式為 [option1 = value1, option2 = value2...]。


