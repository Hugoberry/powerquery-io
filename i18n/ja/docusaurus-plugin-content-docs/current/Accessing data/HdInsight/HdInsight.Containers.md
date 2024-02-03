---
title: HdInsight.Containers
---

# HdInsight.Containers


## Description

Azure ストレージ資格情報コンテナーの、指定されたアカウントで見つかったコンテナーを含むナビゲーション テーブルを返します。


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Details

Azure ストレージ資格情報コンテナーのアカウント URL <code>account</code> で見つかった各コンテナーの行を含むナビゲーション テーブルを返します。各行には、コンテナー BLOB へのリンクが含まれます。



## Category
Accessing data
