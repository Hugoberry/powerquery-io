---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Azure Data Explorer (Kusto) からデータをインポートします


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Azure Data Explorer (Kusto) インスタンスからデータをインポートします


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



