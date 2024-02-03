---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

MailChimp エンドポイントからのデータを含むテーブルを返します。


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

MailChimp API に対する呼び出しを行い、結果のデータセットをテーブルとして返します。すべての結果のページを自動的に移動します。ルート エンドポイントと JSON 応答内のメイン entityName が一致しない API エンドポイントに対して、オプションの entityName パラメーターを使用できます。


## Examples

### Example #1 
MailChimp API のリスト エンドポイントからデータのテーブルをプルします。
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
リストのデータを含むテーブル。
```


### Example #2 
MailChimp API のキャンペーン フォルダー エンドポイントからデータのテーブルをプルします。
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
キャンペーン フォルダーのデータを含むテーブル。
```



