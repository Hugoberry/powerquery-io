---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Vrátí navigační tabulku obsahující tabulky nalezené v zadaném účtu úložiště služby Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Vrátí navigační tabulku obsahující řádek pro každou tabulku, která se nachází na URL účtu, `account`, z trezoru úložiště Azure. Jednotlivé řádky obsahují propojení na tabulku Azure. K zadání dalších vlastností lze zadat volitelný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `Timeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se žádost serveru opustí. Výchozí hodnota závisí na zdroji.



## Category
Accessing data
