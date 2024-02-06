---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


输入与你的注册相关联的 Azure Enterprise REST API 终结点的 URL


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

返回调用为 Azure Enterprise API 提供的 URL 的二进制结果。


## Examples

### Example #1 
使用 AzureEnterprise.Contents 函数返回特定报表的结果。
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
表
```



