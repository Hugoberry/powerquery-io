---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Επιστρέφει έναν πίνακα με στοιχεία του υποψήφιου πελάτη.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Κάνει κλήση στο τελικό σημείο API REST Marketo στο <code>url</code>/rest/v1/leads.json. Επιστρέφονται όλοι οι υποψήφιοι πελάτες στη λίστα <code>leadIds</code>.


## Examples

### Example #1 
Έλκει τα στοιχεία τριών υποψήφιων πελατών
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Ένας πίνακας με στοιχεία για τους υποψήφιους πελάτες που παρασχέθηκαν
```



