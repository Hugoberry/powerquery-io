---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Zadejte adresu URL koncového bodu Azure Enterprise REST API přidruženého vaší registraci.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Vrátí binární výsledky volání adresy URL zadané pro rozhraní Azure Enterprise API.


## Examples

### Example #1 
Použití funkce AzureEnterprise.Contents k vrácení výsledků určité sestavy
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
Tabulka
```



