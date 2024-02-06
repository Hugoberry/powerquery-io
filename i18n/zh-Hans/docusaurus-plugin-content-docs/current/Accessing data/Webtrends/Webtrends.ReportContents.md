---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


从 Webtrends 返回包含报表内容的表。


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

调用给定的 Webtrends 报表终结点，并将所有数据作为表返回。


## Examples

### Example #1 
调用 Webtrends 访问者报表终结点，以返回最近 30 天内的数据
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
包含访问者数据的表
```



