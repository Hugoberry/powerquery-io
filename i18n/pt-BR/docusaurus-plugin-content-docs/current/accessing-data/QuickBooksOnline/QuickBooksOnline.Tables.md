---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


Importar dados do QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

        Retorna uma lista de tabela nas tabelas disponíveis no QuickBooks Online. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:          <ul>            <li><code>ConnectionTimeout</code>: uma duração que controla quanto tempo esperar antes de abandonar uma tentativa de fazer uma conexão com o servidor.</li>            <li><code>CommandTimeout</code>: uma duração que controla por quanto tempo uma consulta de lado do servidor pode ser executada antes de ser cancelada.</li>          </ul>        O parâmetro de registro é especificado como [option1 = value1, option2 = value2...].    


