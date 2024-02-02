---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Import data from a Google BigQuery database using Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Returns a table listing the available projects in Google BigQuery using Azure AD for <code>Billing Project ID</code> . An optional record parameter, <code>options</code>, may be specified to control the following options:      <ul>        <li><code>ConnectionTimeout</code>: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is ODBC Connection Timeout value.</li>        <li><code>CommandTimeout</code>: A duration which controls how long the server-side query is allowed to run before it is canceled.</li>        <li><code>UseStorageApi</code>: Specifies whether to use the BigQuery Storage API for large result sets. The default value is true to use Storage API. Set to false to not use Storage API</li>        <li><code>AudienceUri</code>: This is the audience URI which the ODBC driver can use for its token exchange requests. This field must be a fully qualified URI (i.e. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) where pool_id is a globally-unique name to identify the workforce pool.</li>      </ul>    The record parameter is specified as [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
List the available projects in Google BigQuery using Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



