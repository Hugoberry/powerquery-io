---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

從 Webtrends 傳回內含報告內容的資料表。


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

呼叫指定的 Webtrends 報告端點，並以資料表格式傳回所有資料。


## Examples

### Example #1 
呼叫 Webtrends 訪客報告端點，以取得過去 30 天內的資料
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
內含訪客資料的資料表
```



