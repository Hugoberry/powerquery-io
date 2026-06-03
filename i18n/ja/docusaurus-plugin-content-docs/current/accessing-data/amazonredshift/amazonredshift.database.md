---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Amazon Redshift データベースからデータをインポートします。


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

データベース `database` 内の Amazon Redshift クラスター `server` 上のテーブルを一覧表示するテーブルを返します。省略可能なレコード パラメーター `options` を指定して、次のオプションを制御できます。

-   `Provider Name`: 接続のプロバイダー名として使用するテキスト値。これは、Microsoft 認証を使用するときに使用されます。
-   `Batch Size`: サーバーへの 1 回の呼び出しでフェッチされる行数。


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



