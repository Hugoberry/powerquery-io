---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Введіть URL-адресу кінцевої точки інтерфейсу REST API програми Azure Enterprise, пов’язану з вашою реєстрацією.


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Повертає двійкові результати виклику URL-адреси, наданої для інтерфейсу API Azure Enterprise.


## Examples

### Example #1 
Використовується функція AzureEnterprise.Contents, щоб повернути результати конкретного звіту.
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
Таблиця
```



