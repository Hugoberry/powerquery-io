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

        Devolve uma tabela que lista os projetos disponíveis no QuickBooks Online. Pode especificar um parâmetro de registo opcional, <code>options</code>, para controlar as opções seguintes:      <ul>        <li><code>ConnectionTimeout</code>: Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor.</li>        <li><code>CommandTimeout</code>: Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada.</li>         </ul>    O parâmetro de registo é especificado como [option1 = value1, option2 = value2...].    


