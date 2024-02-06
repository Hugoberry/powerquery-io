---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Введите URL-адрес конечной точки REST API Azure Enterprise, связанной с вашим соглашением о регистрации


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Возвращает результаты двоичных значений для вызова URL-адреса, указанного для Azure Enterprise API.


## Examples

### Example #1 
Использование функции AzureEnterprise.Contents для извлечения результатов конкретного отчета.
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
Таблица
```



