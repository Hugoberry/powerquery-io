---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importuoti duomenis iš „Amazon Redshift“ duomenų bazės.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikia lentelę, kurioje nurodytos lentelės „Amazon Redshift“ sankaupos <code>server</code> duomenų bazėje <code>database</code>.  Galima nurodyti pasirinktinį įrašo parametrą <code>options</code>, kad būtų galima valdyti šias parinktis:<ul><li><code>Provider Name</code>: tekstinė reikšmė, naudojama kaip ryšio teikėjo pavadinimas. Ji naudojama naudojant „Microsoft“ autentifikavimą.</li><li><code>Batch Size</code>: eilučių, kurios gautos vienu serverio iškvietimu, skaičius.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



