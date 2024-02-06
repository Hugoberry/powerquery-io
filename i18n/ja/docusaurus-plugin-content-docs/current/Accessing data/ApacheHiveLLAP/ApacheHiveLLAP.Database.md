---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Hive LLAP からデータをインポートします


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Hive LLAP <code>server</code> 上の <code>database</code> で指定した Hive LLAP から、選択した <code>protocol</code> を使用してテーブルの一覧を返します。サーバーと一緒に、コロンで区切ってポート番号を指定することもできます (省略可能)。Thrift トランスポート プロトコルは、値 "Standard"、"HTTP" を使用した列挙型です。省略可能な <code>options</code> パラメーターを指定して、次のオプションを制御できます。<ul>        <li><code>ConnectionTimeout</code>: サーバーに対する接続の試行を破棄するまでに待機する長さを制御する期間。既定値はドライバーによって異なります。</li>        <li><code>CommandTimeout</code>: サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値はドライバーによって異なります。</li></ul><code>options</code> パラメーターは、[option1 = value1, option2 = value2...] という形式で指定します。


