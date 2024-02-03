---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Enter the URL of the Azure Enterprise REST API endpoint associated with your enrollment


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Returns the binary results of the call to the url provided for the Azure Enterprise API.


## Examples

### Example #1 
Using the AzureEnterprise.Contents function to return the results of a specific report.
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
Table
```



