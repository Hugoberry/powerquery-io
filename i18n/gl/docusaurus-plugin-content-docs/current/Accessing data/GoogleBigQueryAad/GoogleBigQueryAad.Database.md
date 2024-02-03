---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Importar datos dunha base de datos de Google BigQuery mediante Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Devolve unha táboa que enumera os proxectos dispoñibles en Google BigQuery mediante Azure AD para <code>Billing Project ID</code>. Pódese especificar un parámetro de rexistro opcional, <code>options</code>, para controlar as opcións seguintes:      <ul>        <li><code>ConnectionTimeout</code>: duración que controla o tempo de espera antes de abandonar un intento de establecer unha conexión co servidor. O valor predefinido é o valor de tempo de espera da conexión de ODBC</li>        <li><code>CommandTimeout</code>: duración que controla durante canto tempo pode executarse a consulta no servidor antes de cancelarse.</li>        <li><code>UseStorageApi</code>: especifica se se vai usar a API de almacenamento de BigQuery para conxuntos de resultados de gran tamaño. O valor predefinido é true para usar a API de almacenamento. Configúreo en false para non usar a API de almacenamento</li>        <li><code>AudienceUri</code>: é o URI do público, que o controlador ODBC pode usar para as súas solicitudes de intercambio de tokens. Este campo debe ser un URI totalmente cualificado (é dicir, //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), onde pool_id é un nome único global para identificar o grupo de persoa</li>      </ul>    O parámetro de rexistro especifícase así: [optión1 = value1, optión2 = value2...].    


## Examples

### Example #1 
Enumerar os proxectos dispoñibles en Google BigQuery mediante Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



