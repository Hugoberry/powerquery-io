---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importar dados de um banco de dados do Google BigQuery usando o Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Retorna uma tabela listando os projetos disponíveis no Google BigQuery usando o Azure AD para <code>ID do Projeto de Cobrança</code>. Um parâmetro de registro opcional, <code>opções</code>, pode ser especificado para controlar as seguintes opções:      <ul>        <li><code>ConnectionTimeout</code>: uma duração que controla quanto tempo esperar antes de abandonar uma tentativa de fazer uma conexão com o servidor. O valor padrão é o valor de Tempo Limite de Conexão ODBC.</li>        <li><code>CommandTimeout</code>: uma duração que controla por quanto tempo a consulta do lado do servidor pode ser executada antes de ser cancelada.</li>        <li><code>UseStorageApi</code>: Especifica se a API de Armazenamento do BigQuery deve ser usada para grandes conjuntos de resultados. O valor padrão é true para usar a API de armazenamento. Defina como falso para não usar a API de armazenamento</li>        <li><code>AudienceUri</code>: Este é o URI do público que o driver ODBC pode usar para suas solicitações de troca de token. Este campo deve ser um URI totalmente qualificado (i.e. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) onde pool_id é um nome globalmente exclusivo para identificar o pool de força de trabalho.</li>      </ul>    O parâmetro de registro é especificado como [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Listar os projetos disponíveis no Google BigQuery usando o Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



