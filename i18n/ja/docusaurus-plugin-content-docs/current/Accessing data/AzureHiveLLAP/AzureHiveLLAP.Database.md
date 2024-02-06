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

HDInsight Interactive Query <code>server</code> の <code>database</code> で指定した HDInsight Interactive Query からテーブルの一覧を返します。サーバーと一緒に、コロンで区切ってポート番号を指定することもできます (省略可能)。省略可能な <code>options</code> パラメーターを指定して、次のオプションを制御できます。<ul>        <li><code>ConnectionTimeout</code>: サーバーへの接続試行を破棄するまで待機する長さを制御する期間。既定値はドライバーによって異なります。</li>        <li><code>CommandTimeout</code>: サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値はドライバーによって異なります。</li></ul><code>options</code> パラメーターは、[option1 = value1, option2 = value2...] という形式で指定します。


