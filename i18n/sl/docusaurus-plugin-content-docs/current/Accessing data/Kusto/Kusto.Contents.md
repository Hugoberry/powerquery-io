---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Uvozi podatke iz storitve Raziskovalec podatkov Azure (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Uvozi podatke iz vašega primerka storitve Raziskovalec podatkov Azure (Kusto)


## Examples

### Example #1 
Vrne tabelo z informacijami o dogodkih Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabela z dogodki Storm iz zbirke podatkov »Vzorci« v gruči »pomoč«
```



