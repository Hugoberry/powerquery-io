---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importa dades d&#39;una base de dades de l&#39;Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna una taula amb una relació de les taules del <code>server</code> de clústers de l'Amazon Redshift a la base de dades <code>database</code>.  Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:<ul><li><code>Provider name</code>: un valor de text que s'utilitzarà com a nom del proveïdor per a la connexió. Això s'utilitza quan es fa servir l'autenticació de Microsoft.</li><li><code>Batch Size</code>: el nombre de files que s'obtenen en una sola trucada al servidor.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



