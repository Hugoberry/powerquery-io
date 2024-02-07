---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Wprowadź adres URL punktu końcowego interfejsu API REST usługi Azure Enterprise skojarzonego z Twoją rejestracją


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Zwraca binarny wynik wywołania adresu URL dostarczonego do interfejsu API usługi Azure Enterprise.


## Examples

### Example #1 
Użycie funkcji AzureEnterprise.Contents w celu zwrócenia wyników konkretnego raportu.
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
Tabela
```



