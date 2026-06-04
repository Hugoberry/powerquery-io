---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importuoti duomenis iš „Amazon Redshift“ duomenų bazės.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Pateikia lentelę, kurioje nurodytos lentelės „Amazon Redshift“ sankaupos `server` duomenų bazėje `database`. Galima nurodyti pasirenkamą įrašo parametrą `Parinktys`, kad būtų galima valdyti šias parinktis:

-   `Teikėjo pavadinimas`: tekstinė reikšmė, naudojama kaip ryšio teikėjo pavadinimas. Ji naudojama naudojant „Microsoft“ autentifikavimą.
-   `Paketo dydis`: eilučių, kurios gautos vienu serverio iškvietimu, skaičius.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



