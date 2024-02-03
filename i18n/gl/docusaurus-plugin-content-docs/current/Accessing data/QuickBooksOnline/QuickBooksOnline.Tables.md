---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importa datos de QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Devolve unha táboa na que se mostran as táboas de QuickBooks Online. Pode especificarse un parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:      <ul>        <li><code>ConnectionTimeout</code>: unha duración que controla canto tempo se espera antes de abandonar un intento para realizar unha conexión co servidor.</li>        <li><code>CommandTimeout</code>: unha duración que controla canto tempo ten a consulta do servidor antes de cancelarse.</li>      </ul>    O parámetro de rexistro se especifica como [option1 = value1, option2 = value2...].    


