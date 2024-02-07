---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


加入契約に関連付けられた Azure エンタープライズ REST API エンドポイントの URL を入力します


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Azure エンタープライズ API に指定された URL への呼び出しのバイナリの結果を返します。


## Examples

### Example #1 
AzureEnterprise.Contents 関数を使用して、特定のレポートの結果を返します。
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
テーブル
```



