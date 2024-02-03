---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Azure ストレージ資格情報コンテナーの、指定されたアカウントで見つかったテーブルを含むナビゲーション テーブルを返します。


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Azure ストレージ コンテナーから、アカウント URL <code>account</code> で見つかったテーブルにつき 1 行ずつが含まれているナビゲーション テーブルを返します。各行には、Azure テーブルへのリンクが含まれています。省略可能なレコード パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。レコードに含まれていることのあるフィールドは次のとおりです:    <ul><li><code>Timeout</code> : サーバーへの要求が破棄されるまで待機する時間を制御する期間。既定値はソース固有です。</li></ul>



## Category
Accessing data
