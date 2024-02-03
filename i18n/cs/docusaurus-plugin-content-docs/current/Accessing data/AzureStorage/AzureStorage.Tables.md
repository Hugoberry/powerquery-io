---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Vrátí navigační tabulku obsahující tabulky nalezené v zadaném účtu úložiště služby Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Vrátí navigační tabulku obsahující řádek pro každou tabulku, která se nachází na URL účtu, <code>account</code>, z trezoru úložiště Azure. Jednotlivé řádky obsahují propojení na tabulku Azure. Pokud chcete zadat další vlastnosti, použijte volitelný parametr záznamu, <code>options</code>. Záznam může obsahovat následující pole:    <ul><li><code>Timeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se ž&#225;dost serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na zdroji.</li></ul>



## Category
Accessing data
