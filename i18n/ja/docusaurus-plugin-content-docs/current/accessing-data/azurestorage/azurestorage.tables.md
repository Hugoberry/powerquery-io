---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Azure ストレージ資格情報コンテナーの、指定されたアカウントで見つかったテーブルを含むナビゲーション テーブルを返します。


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Azure ストレージ コンテナーから、アカウント URL `account` で見つかったテーブルにつき 1 行ずつが含まれているナビゲーション テーブルを返します。各行には、Azure テーブルへのリンクが含まれています。オプションのレコード パラメーター `options` を設定して追加のプロパティを指定することができます。レコードには、次のフィールドを含めることができます:

-   `Timeout` : サーバーへの要求が破棄されるまで待機する時間を制御する期間。既定値はソース固有です。



## Category
Accessing data
