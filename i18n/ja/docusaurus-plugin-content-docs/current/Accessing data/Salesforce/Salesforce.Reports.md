---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Salesforce アカウントからレポートを返します。


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

資格情報で指定された Salesforce アカウントのレポートを返します。アカウントは指定された環境 <code>loginUrl</code> を通じて接続されます。環境が指定されていない場合、アカウントは運用環境 (https://login.salesforce.com) に接続されます。省略可能なレコード パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。レコードには、次のフィールドを含めることができます。    <ul><li><code>ApiVersion</code> : このクエリに使用される Salesforce API のバージョン。指定しない場合は API バージョン 29.0 が使用されます。</li><li><code>Timeout</code> : サーバーへの要求が破棄されるまで待機する時間を制御する期間。既定値はソース固有です。</li></ul>    



## Category
Accessing data
