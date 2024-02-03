---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Тіркелумен байланысты Azure Enterprise REST API соңғы нүктесінің URL мекенжайын енгізіңіз


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Azure Enterprise API үшін берілген url мекенжайын шақырудың екілік нәтижелерін қайтарады.


## Examples

### Example #1 
Арнайы есептің нәтижелерін қайтару үшін AzureEnterprise.Contents функциясын пайдаланыңыз.
```powerquery
        let
            report = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            skips = Table.Skip(report, 2),
            split =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            promoted = Table.PromoteHeaders(split)
        in
            деңгейі көтерілген
```

Result: 
```powerquery
Кесте
```



