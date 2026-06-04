---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importa dades d'una base de dades de l'Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula amb una relació de les taules del `servidor` de clústers de l'Amazon Redshift a la base de dades `database`. Es pot especificar un paràmetre de registre opcional, `opcions`, per controlar les opcions següents:

-   `Nom del proveïdor`: un valor de text per fer-lo servir com a nom del proveïdor per a la connexió. Es fa servir quan es fa servir l'autenticació de Microsoft.
-   `Mida del lot`: el nombre de files que es recullen en una única trucada al servidor.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



