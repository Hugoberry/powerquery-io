---
title: Marketo.Leads
---

# Marketo.Leads


Vrátí tabulku s podrobnostmi potenciálních zákazníků.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Zavolá koncový bod služby Marketo REST API na adrese `url`/rest/v1/leads.json. Vrátí všechny potenciální zákazníky ze seznamu `ID_zákazníků`.


## Examples

### Example #1
Vrátí podrobnosti o třech potenciálních zákaznících.
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tabulka s podrobnostmi o zadaných potenciálních zákaznících
```



