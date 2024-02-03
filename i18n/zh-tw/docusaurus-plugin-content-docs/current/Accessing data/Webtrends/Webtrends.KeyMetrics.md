---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

傳回內含關鍵 Webtrends 計量的資料表。


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

呼叫 Webtrends KeyMetrics 端點，並以資料表格式傳回所有資料。


## Examples

### Example #1 
提取內含租用戶 98765 在過去 30 天內之關鍵計量的資料表
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
內含關鍵計量的資料表
```



