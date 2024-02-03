---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Returnerer en tabel med data fra et MailChimp-slutpunkt.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Foretager et kald til MailChimp-API'en og returnerer det resulterende datasæt som en tabel. Alle resultaterne gennemgås automatisk. Du kan evt. anvende en entityName-parameter til API-slutpunkter, når rodslutpunktet og det primære entityName i JSON-svaret ikke stemmer overens.


## Examples

### Example #1 
Udtrækker en datatabel fra slutpunktet for MailChimp-API&#39;ens liste.
```powerquery
MailChimp.Collection("lister")
```

Result: 
```powerquery
En tabel med listedata.
```


### Example #2 
Udtrækker en datatabel fra slutpunktet for MailChimp-API&#39;ens kampagnemapper.
```powerquery
MailChimp.Collection("kampagnemapper", "mapper")
```

Result: 
```powerquery
En tabel med data fra kampagnemapper.
```



