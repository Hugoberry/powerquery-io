---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

返回包含 MailChimp 终结点中数据的表。


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

调用 MailChimp API 并将结果数据集作为表返回。自动对所有结果进行分页。当根终结点和 JSON 响应中的主要 entityName 不匹配时，可以对 API 终结点使用可选的 entityName 参数。


## Examples

### Example #1 
拉取包含 MailChimp API 列表终结点中数据的表。
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
包含列表数据的表。
```


### Example #2 
拉取包含 MailChimp API 市场活动文件夹终结点中数据的表。
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
包含市场活动文件夹数据的表。
```



