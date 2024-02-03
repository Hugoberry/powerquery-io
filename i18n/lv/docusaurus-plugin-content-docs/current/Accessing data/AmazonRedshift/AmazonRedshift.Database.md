---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importējiet datus no Amazon Redshift datu bāzes.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā uzskaitītas tabulas Amazon Redshift klasterī <code>server</code> datu bāzē <code>database</code>. Var norādīt neobligātu ieraksta parametru, <code>opcijas</code>, lai kontrolētu šādas opcijas:<ul><li><code>Provider Name</code>: teksta vērtība, kas savienojumam jāizmanto kā nodrošinātāja nosaukums. To lieto, izmantojot Microsoft Authentication.</li><li><code>Batch Size</code>: rindu skaits, kas tiek ienestas vienā servera izsaukumā.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



