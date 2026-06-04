---
title: SharePoint.Tables
---

# SharePoint.Tables


Atgriež tabulu, kurā ir ietverts SharePoint saraksta saturs.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietverta viena rinda atbilstoši katram saraksta vienumam, kas atrasts norādītajā SharePoint sarakstā `url`. Katrā rindā ir ietverti saraksta rekvizīti. Var norādīt parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `ApiVersion` : Skaitlis (14 vai 15) vai teksts “Auto”, kas norāda šai vietnei izmantojamo SharePoint API versiju. Ja šī vērtība nav norādīta, tiek izmantota API versija 14. Ja ir norādīta vērtība Auto, servera versija tiek noteikta automātiski, bet, ja tas nav iespējams, pēc noklusējuma tiek izmantota versija 14. SharePoint vietnēm, kas nav angļu valodā, nepieciešama vismaz versija 15.
-   `Implementation` : Neobligāti. Norāda, kuru SharePoint savienotāja versiju izmantot. Akceptētās vērtības ir "2.0" vai Null. Ja vērtība ir "2.0", tiek izmantota SharePoint savienotāja 2.0 implementācija. Ja vērtība ir Null, tiek izmantota sākotnējā SharePoint savienotāja implementācija.
-   `ViewMode` : Neobligāti. Šī opcija ir derīga tikai 2.0 implementācijai. Pieņemtās vērtības ir "Visi" un "Noklusējums". Ja vērtība nav norādīta, vērtība tiek iestatīta kā "Visi". Ja ir norādīta vērtība "Visi", skatā ir iekļautas visas lietotāja izveidotās un sistēmas definētās kolonnas. Ja ir norādīta vērtība "Noklusējums", skats atbildīs tam, ko lietotājs redz, skatot sarakstu tiešsaistē neatkarīgi no tā, kurš lietotājs iestatījumos ir iestatījis kā "Noklusējums". Ja lietotājs rediģē savu noklusējuma skatu, lai pievienotu vai noņemtu lietotāja izveidotas vai sistēmas definētas kolonnas vai izveido jaunu skatu un iestata to kā noklusējumu, šīs izmaiņas tiks izplatītas, izmantojot savienotāju.
-   `DisableAppendNoteColumns` : Neļauj savienotājam piezīmju kolonnās izmantot atsevišķu galapunktu.



## Category
Accessing data
