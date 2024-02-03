---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Amazon Redshift データベースからデータをインポートします。


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

データベース <code>database</code> 内の Amazon Redshift クラスター <code>server</code> 上のテーブルを一覧表示するテーブルを返します。 省略可能なレコード パラメーター <code>options</code> は、次のオプションを制御するために指定できます:<ul><li><code>Provider Name</code>: 接続のプロバイダー名として使用するテキスト値。これは、Microsoft 認証を使用する場合に使用されます。</li><li><code>Batch Size</code>: サーバーへの 1 回の呼び出しで取り入れられる行の数。</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



