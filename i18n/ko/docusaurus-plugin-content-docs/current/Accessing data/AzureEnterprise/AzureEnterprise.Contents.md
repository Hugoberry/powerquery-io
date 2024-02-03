---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

등록에 연결된 Azure 엔터프라이즈 REST API 끝점의 URL을 입력합니다.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

호출의 이진 결과를 Azure 엔터프라이즈 API에 대해 제공된 URL에 반환합니다.


## Examples

### Example #1 
AzureEnterprise.Contents 함수를 사용하여 특정 보고서의 결과를 반환합니다.
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
테이블
```



