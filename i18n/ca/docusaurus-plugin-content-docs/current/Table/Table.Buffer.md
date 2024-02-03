---
title: Table.Buffer
---

# Table.Buffer


## Description

Emmagatzema a la memòria intermèdia una taula i l&#39;aïlla de canvis externs durant l&#39;avaluació.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Emmagatzema una taula a la memòria intermèdia i l'aïlla dels canvis externs durant l'avaluació.    L’emmagatzematge a la memòria intermèdia és superficial. Força l'avaluació de tots els valors de cel·la escalars, però deixa tal qual els valors no escalars (registres, llistes i taules, etc.).    <br />    <br />    Cal tenir en compte que fer servir aquesta funció tant pot accelerar l’execució de les consultes com no. En alguns casos, pot fer que s'executin més a poc a poc a causa del cost afegit     de llegir totes les dades i emmagatzemar-les a la memòria, així com pel fet que l’emmagatzematge a la memòria intermèdia impedeix el plegament descendent. Si les  dades no s’han     d’emmagatzemar a la memòria intermèdia i només voleu impedir el plegament descendent, utilitzeu <code>Table.StopFolding</code>.


## Examples

### Example #1 
Carrega a la memòria totes les files d&#39;una taula SQL perquè les operacions descendents deixin de poder fer consultes a la instància d&#39;SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
