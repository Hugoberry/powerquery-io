---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Anna rekisteröintiisi liittyvän Azure Enterprise REST -sovellusrajapinnan päätepisteen URL-osoite


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Palauttaa Azure Enterprise -sovellusrajapinnalle annetun URL-osoitteen kutsun binaaritulokset.


## Examples

### Example #1 
Palautetaan määritetyn raportin tulokset käyttämällä AzureEnterprise.Contents-funktiota.
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
Taulukko
```



