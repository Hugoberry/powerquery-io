---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


अपने नामांकन से संबंधित Azure Enterprise REST API समाप्ति बिंदु का URL दर्ज करें


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Azure Enterprise API के लिए प्रदत्त url हेतु कॉल के बाइनरी परिणाम लौटाता है.


## Examples

### Example #1 
किसी विशिष्ट रिपोर्ट के परिणाम लौटाने के लिए AzureEnterprise.Contents फ़ंक्शन का उपयोग करना.
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
तालिका
```



