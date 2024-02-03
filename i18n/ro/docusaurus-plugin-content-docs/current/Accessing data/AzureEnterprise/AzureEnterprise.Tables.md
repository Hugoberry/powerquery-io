---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Introduceți URL-ul punctului final API REST Azure Enterprise asociat cu înscrierea dvs.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Returnează o listă de rapoarte și luni disponibile din API-ul Azure Enterprise


## Examples

### Example #1 
Utilizarea funcției AzureEnterprise.Tables pentru a naviga la o valoare anume și a obține rezultatele.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabel
```



