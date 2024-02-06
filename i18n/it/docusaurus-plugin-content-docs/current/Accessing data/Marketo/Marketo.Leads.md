---
title: Marketo.Leads
---

# Marketo.Leads


Restituisce una tabella con i dettagli relativi ai lead.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Effettua una chiamata all'endpoint dell'API REST Marketo all'indirizzo <code>url</code>/rest/v1/leads.json. Verranno restituiti tutti i lead nell'elenco <code>leadIds</code>.


## Examples

### Example #1 
Esegue il pull dei dettagli per tre lead
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tabella con i dettagli per i lead specificati
```



