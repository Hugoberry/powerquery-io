---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Smartsheet インデックス エンドポイントからデータのテーブルを返します。


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

特定のエンドポイントで Smartsheet 2.0 REST API への呼び出しを実行し、返されたデータ要素をテーブルに変換します。


## Examples

### Example #1 
Smartsheet API からユーザー情報のテーブルをプルします
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Smartsheet API によって返されるユーザー情報を含むテーブル
```



