---
title: SharePoint.Files
---

# SharePoint.Files


Tiek atgriezta tabula, kurā ir ietverti SharePoint vietnē esošie dokumenti.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietverta viena rinda atbilstoši katram dokumentam, kas atrasts norādītajā SharePoint vietnē `url` un apakšmapēs. Katrā rindā ir ietverti mapes vai faila rekvizīti un saite uz tā saturu. Var norādīt parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `ApiVersion` : Skaitlis (14 vai 15) vai teksts “Auto”, kas norāda šai vietnei izmantojamo SharePoint API versiju. Ja šī vērtība nav norādīta, tiek izmantota API versija 14. Ja ir norādīta vērtība Auto, servera versija tiek noteikta automātiski, bet, ja tas nav iespējams, pēc noklusējuma tiek izmantota versija 14. SharePoint vietnēm, kas nav angļu valodā, nepieciešama vismaz versija 15.



## Category
Accessing data
