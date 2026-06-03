---
title: Vertica.Database
---

# Vertica.Database


データを Vertica からインポートします


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`database` パラメーターで指定されたデータベースの、`server` パラメーターで指定されたサーバー上で使用できるスキーマのテーブルを返します。 省略可能なレコード パラメーター、`options` を指定して、追加のプロパティを指定できます。レコードには次のフィールドを含めることができます。

-   `ConnectionTimeout`: サーバーへの接続の試行を破棄するまで待機する長さを制御する期間。既定値はドライバーによって異なります。
-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値はドライバーによって異なります。


## Examples

### Example #1
Vertica 内のテーブルを一覧表示します
```powerquery

```



