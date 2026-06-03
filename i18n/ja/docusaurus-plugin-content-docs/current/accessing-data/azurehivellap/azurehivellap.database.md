---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


HDInsight Interactive Query からデータをインポートします


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

HDInsight Interactive Query `server` の `database` で指定した HDInsight Interactive Query からテーブルの一覧を返します。サーバーと一緒に、コロンで区切ってポート番号を指定することもできます (省略可能)。省略可能な `options` パラメーターを指定して、次のオプションを制御できます。

-   `ConnectionTimeout`: サーバーへの接続試行を破棄するまで待機する長さを制御する期間。既定値はドライバーによって異なります。
-   `CommandTimeout`: サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値はドライバーによって異なります。

`options` パラメーターは、\[option1 = value1, option2 = value2...\] という形式で指定します。


