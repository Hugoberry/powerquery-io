---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Smartsheet API から JSON の結果を返します


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

特定のエンドポイントで Smartsheet 2.0 REST API への呼び出しを実行し、 JSON レコードとして結果を返します。


## Examples

### Example #1 
追加の引数を指定して、シート Smartsheet API エンドポイントからデータをプルします
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Smartsheet API によって返されるシート情報を含むテーブル
```



