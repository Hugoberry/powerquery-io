---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Introduceți URL-ul punctului final API REST Azure Enterprise asociat cu înscrierea dvs.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Returnează rezultatele binare ale apelului la URL-ul furnizat pentru API-ul Azure Enterprise.


## Examples

### Example #1 
Utilizarea funcției AzureEnterprise.Contents pentru a returna rezultatele unui raport specificat.
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
Tabel
```



