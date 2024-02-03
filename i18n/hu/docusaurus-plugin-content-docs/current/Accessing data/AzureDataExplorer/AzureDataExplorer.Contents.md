---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Adatok importálása az Azure Data Explorerből (Kusto)


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Adatokat importál az Ön Azure Data Explorer- (Kusto-) példányából


## Examples

### Example #1 
A Storm-események információit tartalmazó táblát adja vissza
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
A „súgó” fürtben lévő „Samples” adatbázisból származó Storm-események táblája
```



