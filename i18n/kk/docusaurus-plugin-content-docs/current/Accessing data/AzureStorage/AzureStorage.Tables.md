---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Azure қоймасындағы көрсетілген тіркелгідегі кестелерді қамтитын шарлау кестесін қайтарады.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Azure қоймасынан <code>account</code> тіркелгі URL мекенжайы бойынша табылған әр кесте үшін жол бар навигациялық кестені қайтарады. Әрбір жолда Azure кестесіне сілтеме бар. Қосымша сипаттарды көрсету үшін міндетті емес <code>options</code> жазба параметрі  берілуі мүмкін. Жазбада мына өрістер болуы мүмкін:    <ul><li><code>Timeout</code> : Серверге сұраудан бас тартуға дейінгі күту уақытын басқаратын ұзақтық. Әдепкі мәні деректер көзіне тәуелді.</li></ul>



## Category
Accessing data
