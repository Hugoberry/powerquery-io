---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

輸入與您的註冊相關聯的 Azure 企業版 REST API 端點 URL


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

傳回對 URL 呼叫的二進位結果，該 URL 是針對 Azure 企業版 API 所提供的。


## Examples

### Example #1 
使用 AzureEnterprise.Contents 函數傳回特定報表的結果。
```powerquery
        let
            report = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            skips = Table.Skip(report, 2),
            split =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            promoted = Table.PromoteHeaders(split)
        in
            promoted
```

Result: 
```powerquery
資料表
```



