---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Restituisce una tabella con le attività relative ai lead.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Effettua una chiamata all'endpoint dell'API REST Marketo all'indirizzo <code>url</code>/rest/v1/activities.json. Verranno restituite tutte le attività nell'elenco <code>activityIds</code> che si sono verificate a partire da <code>startTime</code>.


## Examples

### Example #1 
Esegue il pull di una tabella di attività &#34;Visita pagina Web&#34; a partire dal 1° novembre 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabella con i dettagli di tutte le attività "Visita pagina Web" a partire dal 1° novembre
```



