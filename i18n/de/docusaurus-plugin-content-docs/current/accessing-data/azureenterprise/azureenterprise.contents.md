---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Geben Sie die URL des Azure Enterprise-REST-API-Endpunkts an, der Ihrer Registrierung zugeordnet ist.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Gibt die binären Ergebnisse des Aufrufs an die URL zurück, die für die Azure Enterprise-API angegeben wurde.


## Examples

### Example #1
Verwendet die AzureEnterprise.Contents-Funktion, um die Ergebnisse eines bestimmten Berichts zurückzugeben.
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
Tabelle
```



