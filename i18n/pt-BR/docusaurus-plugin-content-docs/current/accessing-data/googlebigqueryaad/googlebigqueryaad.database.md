---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importar dados de um banco de dados do Google BigQuery usando o Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela que lista os projetos disponíveis no Google BigQuery usando o Microsoft Entra ID para a `ID do Projeto de Cobrança` . Um parâmetro de registro opcional, `opções`, pode ser especificado para controlar as seguintes opções:

-   `ConnectionTimeout`: uma duração que controla o tempo de espera antes de abandonar uma tentativa de fazer uma conexão com o servidor. O valor padrão é o valor do Tempo Limite da Conexão ODBC.
-   `CommandTimeout`: uma duração que controla por quanto tempo a consulta do lado do servidor tem permissão para ser executada antes de ser cancelada.
-   `UseStorageApi`: especifica se deve ser utilizada a API de Armazenamento do BigQuery para grandes conjuntos de resultados. O valor padrão é true para usar a API de Armazenamento. Defina como false para não usar a API de Armazenamento
-   `AudienceUri`: este é o URI da audiência que o driver ODBC pode usar para suas solicitações de troca de token. Esse campo deve ser um URI totalmente qualificado (ou seja, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) em que pool\_id é um nome globalmente exclusivo para identificar o pool de força de trabalho.

O parâmetro de registro será especificado como \[opção1 = valor1, opção2 = valor2...\].


## Examples

### Example #1
Listar os projetos disponíveis no Google BigQuery usando o Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



