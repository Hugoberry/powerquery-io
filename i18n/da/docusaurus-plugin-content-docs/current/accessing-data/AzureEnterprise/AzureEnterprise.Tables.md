---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Angiv URL-adressen til slutpunktet for den Azure Enterprise REST-API, der er knyttet til tilmeldingen


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Returnerer en liste over tilgængelige rapporter over måneder fra Azure Enterprise-API'en


## Examples

### Example #1 
Anvend funktionen AzureEnterprise.Tables, og naviger til en bestemt værdi for at hente resultaterne.
```powerquery
lad
    Kilde = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Indhold = Kilde{[Key="Contents"]}[Data]
in
    Indhold
```

Result: 
```powerquery
Tabel
```



