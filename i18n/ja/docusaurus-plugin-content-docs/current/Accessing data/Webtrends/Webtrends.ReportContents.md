---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Webtrends からレポート コンテンツを含むテーブルを返します。


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

指定された Webtrends レポート エンドポイントへの呼び出しを実行して、すべてのデータをテーブルとして返します。


## Examples

### Example #1 
過去 30 日間のデータを得るために Webtrends 訪問者のレポート エンドポイントへの呼び出しを実行する
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
訪問者データのテーブル
```



