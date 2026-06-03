---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Azure Cosmos DB アカウントの URL を入力します。


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

`url` の Azure Cosmos DB データベースのテーブルを返します。`database` が指定されている場合、コレクションのテーブルが代わりに返されます。また、`options` レコードにフィールド `Query` が指定されている場合、指定されたデータベースおよび/またはコレクションのいずれかで実行されたクエリの結果が返されます。


