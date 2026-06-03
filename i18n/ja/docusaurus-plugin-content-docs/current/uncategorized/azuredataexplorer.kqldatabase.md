---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Fabric Kusto クラスターからデータを検出モードでインポートします。


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

KQL データベース インスタンスからデータをインポートします


## Examples

### Example #1
Storm イベント情報のテーブルを返します
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
"help" クラスターの "Samples" データベースからの Storm イベントを含むテーブル
```



