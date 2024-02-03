---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Vnesite URL končne točke vmesnika REST API za Azure Enterprise, ki je povezan z vašo včlanitvijo


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Vrne dvojiške rezultate klica naslova URL, ki je naveden za vmesnik API za Azure Enterprise.


## Examples

### Example #1 
Uporabite funkcijo &#34;AzureEnterprise.Contents&#34;, da pridobite rezultate določenega poročila.
```powerquery
        let
            poročilo = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            preskoki = Table.Skip(report, 2),
            razdelitev =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            povišano = Table.PromoteHeaders(split)
        in
            povišano
```

Result: 
```powerquery
Tabela
```



