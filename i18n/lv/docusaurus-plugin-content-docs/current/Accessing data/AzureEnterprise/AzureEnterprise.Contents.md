---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Ievadiet ar reģistrāciju saistītā Azure Enterprise REST API galapunkta vietrādi URL


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Atgriež bināros rezultātus izsaukumam uz vietrādi URL, kas norādīts saskarnei Azure Enterprise API.


## Examples

### Example #1 
Funkcijas AzureEnterprise.Contents izmantošana, lai atgrieztu noteiktas atskaites rezultātus.
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
Tabula
```



