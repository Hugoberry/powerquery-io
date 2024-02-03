---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importe datos de QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Devuelve una tabla en la que se enumeran las tablas disponibles en QuickBooks Online. Es posible especificar un parámetro de registro opcional, <code>options</code>, para controlar las opciones siguientes:          <ul>            <li><code>ConnectionTimeout</code>: duración que controla el período de espera antes de abandonar un intento de establecer una conexión con el servidor.</li>            <li><code>CommandTimeout</code>: duración que controla el período durante el que puede ejecutarse una consulta del lado servidor antes de cancelarse.</li>          </ul>        El parámetro de registro se especifica como [opción1 = valor1, opción2 = valor2...].    


