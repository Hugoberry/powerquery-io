---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

レコードを URI クエリ文字列に統合します。


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

必要に応じて文字をエスケープして、レコード <code>query</code> を URI クエリ文字列に統合します。


## Examples

### Example #1 
特殊文字が含まれるクエリ文字列をエンコードします。
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
