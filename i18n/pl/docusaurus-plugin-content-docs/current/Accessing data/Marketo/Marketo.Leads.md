---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Zwraca tabelę zawierającą szczegóły potencjalnych klientów.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Nawiązuje połączenie z punktem końcowym interfejsu API REST usługi Marketo pod adresem <code>url</code>/rest/v1/leads.json. Zwracani są wszyscy potencjalni klienci z listy <code>leadIds</code>.


## Examples

### Example #1 
Tworzy listę szczegółów dla trzech potencjalnych klientów
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tabela zawierająca szczegóły wybranych potencjalnych klientów
```



