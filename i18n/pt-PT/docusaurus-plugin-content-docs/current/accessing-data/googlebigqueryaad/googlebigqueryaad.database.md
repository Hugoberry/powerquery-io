---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importe dados de uma base de dados Google BigQuery com o Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Devolve uma tabela que lista os projetos disponíveis no Google BigQuery com o Azure AD para <code>Billing Project ID</code>. Pode ser especificado um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:      <ul>        <li><code>ConnectionTimeout</code>: uma duração que controla o tempo de espera antes de abandonar uma tentativa de fazer uma ligação ao servidor. O valor predefinido é o valor de Tempo Limite de Ligação de ODBC.</li>        <li><code>CommandTimeout</code>: uma duração que controla durante quanto tempo a consulta do lado do servidor é autorizada a ser executada antes de ser cancelada.</li>        <li><code>UseStorageApi</code>: especifica se a API de Armazenamento do BigQuery deve ser utilizada para conjuntos de resultados grandes. O valor predefinido é true para utilizar a API de Armazenamento. Defina como false para não utilizar a API de Armazenamento</li>        <li><code>AudienceUri</code>: este é o URI da audiência que o controlador ODBC pode utilizar para os pedidos de troca de tokens. Este campo tem de ser um URI completamente qualificado (ou seja, //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) em que o pool_id é um nome globalmente exclusivo para identificar o conjunto da equipa de trabalhadores.</li>      </ul>    O parâmetro de registo é especificado como [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Listar os projetos disponíveis no Google BigQuery com o Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



