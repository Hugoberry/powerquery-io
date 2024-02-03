---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

從 MailChimp 端點傳回含有資料的資料表。


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

呼叫 MailChimp API，並以資料表形式傳回產生的資料集。所有結果都會經過自動分頁。在根端點與 JSON 回應中主要 entityName 不符的 API 端點，可以選擇使用 entityName 參數。


## Examples

### Example #1 
從 MailChimp API 的 lists 端點提取資料表。
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
含有清單資料的資料表。
```


### Example #2 
從 MailChimp API 的 campaign-folders 端點提取資料表。
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
含有 campaign-folders 資料的資料表。
```



