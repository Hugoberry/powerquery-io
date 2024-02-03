---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importeu dades del QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Torna una taula en què s'enumeren les taules disponibles al QuickBooks Online. És possible especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:          <ul>            <li><code>ConnectionTimeout</code>: durada que controla el període d'espera abans d'abandonar un intent d'establir una connexió amb el servidor.</li>            <li><code>CommandTimeout</code>: durada que controla el període durant el qual pot executar-se una consulta per part del servidor abans de cancel·lar-se.</li>          </ul>        El paràmetre de registre s'especifica com a [opció1 = valor1, opció2 = valor2...].    


