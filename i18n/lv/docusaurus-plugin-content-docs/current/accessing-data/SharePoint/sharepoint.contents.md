---
title: SharePoint.Contents
---

# SharePoint.Contents


Tiek atgriezta tabula, kurā ir ietverts SharePoint vietnes saturs.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietverta viena rinda atbilstoši katrai mapei un dokumentam, kas atrasts norādītajā SharePoint vietnē `url`. Katrā rindā ir ietverti mapes vai faila rekvizīti un saite uz tā saturu. Var norādīt parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `ApiVersion` : Skaitlis (14 vai 15) vai teksts “Auto”, kas norāda šai vietnei izmantojamo SharePoint API versiju. Ja šī vērtība nav norādīta, tiek izmantota API versija 14. Ja ir norādīta vērtība Auto, servera versija tiek noteikta automātiski, bet, ja tas nav iespējams, pēc noklusējuma tiek izmantota versija 14. SharePoint vietnēm, kas nav angļu valodā, nepieciešama vismaz versija 15.
-   `Implementation` : Neobligāti. Norāda, kuru SharePoint savienotāja versiju izmantot. Akceptētās vērtības ir "2.0" vai Null. Ja vērtība ir "2.0", tiek izmantota SharePoint savienotāja 2.0 implementācija. Ja vērtība ir Null, tiek izmantota sākotnējā SharePoint savienotāja implementācija.



## Category
Accessing data
