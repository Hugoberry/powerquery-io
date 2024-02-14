---
title: HdInsight.Contents
---

# HdInsight.Contents


Azure ストレージ資格情報コンテナーの、指定されたアカウントで見つかったコンテナーを含むナビゲーション テーブルを返します。


## Syntax

```powerquery
HdInsight.Contents(
    account as text
) as table
```


## Remarks

Azure ストレージ資格情報コンテナーのアカウント URL <code>account</code> で見つかった各コンテナーの行を含むナビゲーション テーブルを返します。各行には、コンテナー BLOB へのリンクが含まれます。



## Category
Accessing data
