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

<code>url</code> の Azure Cosmos DB データベースのテーブルを返します。<code>database</code> が指定されている場合、コレクションのテーブルが代わりに返されます。また、<code>options</code> レコードにフィールド <code>Query</code> が指定されている場合、指定されたデータベースおよび/またはコレクションのいずれかで実行されたクエリの結果が返されます。


