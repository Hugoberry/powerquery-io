---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Specificare l&#39;URL dell&#39;endpoint API REST Azure Enterprise associato alla registrazione


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Restituisce i risultati binari della chiamata all'URL specificato per l'API Azure Enterprise.


## Examples

### Example #1 
Utilizzo della funzione AzureEnterprise.Contents per restituire i risultati di un report specifico.
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
Tabella
```



