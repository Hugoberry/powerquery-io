---
title: Marketo.Leads
---

# Marketo.Leads


Vráti tabuľku s podrobnosťami o potenciálnych zákazníkoch.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Uskutočňovanie volania do koncového bodu rozhrania Marketo REST API na adrese `url`/rest/v1/leads.json. Vrátia sa všetci potenciálni zákazníci v zozname `leadIds`.


## Examples

### Example #1
Stiahne podrobnosti o troch potenciálnych zákazníkoch
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tabuľka s podrobnosťami o zadaných potenciálnych zákazníkoch
```



