---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


Escriba la dirección URL del punto de conexión de la API de REST de Azure Enterprise que se ha asociado a su inscripción


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Remarks

Devuelve los resultados binarios de la llamada a la dirección URL que se ha proporcionado para la API de Azure Enterprise.


## Examples

### Example #1 
Usar la función AzureEnterprise.Contents para devolver los resultados de un informe específico.
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
Tabla
```



