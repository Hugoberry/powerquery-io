---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Naimportuje údaje z databázy služby Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku s tabuľkami na serveri <code>server</code> klastra služby Amazon Redshift v databáze <code>database</code>.  Možno zadať voliteľný parameter záznamu <code>options</code> na ovládanie týchto možností:<ul><li><code>Provider Name</code>: Textová hodnota, ktorá sa použije ako názov poskytovateľa na pripojenie. Toto sa použije, keď používate Microsoft Authentication.</li><li><code>Batch Size</code>: Počet riadkov načítaných v rámci jedného volania servera.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



