---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Atgriež tabulu, kurā ir ietverts SharePoint saraksta saturs.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietverta viena rinda atbilstoši katram saraksta vienumam, kas atrasts norādītajā SharePoint sarakstā <code>url</code>. Katrā rindā ir ietverti saraksta rekvizīti. Var norādīt parametru <code>options</code>, lai kontrolētu tālāk norādītās opcijas.    <ul><li><code>ApiVersion</code> : Skaitlis (14 vai 15) vai teksts “Auto”, kas norāda šai vietnei izmantojamo SharePoint&#160;API versiju. Ja šī vērtība nav norādīta, tiek izmantota API&#160;versija 14. Ja ir norādīta vērtība Auto, servera versija tiek noteikta automātiski, bet, ja tas nav iespējams, pēc noklusējuma tiek izmantota versija 14. SharePoint vietnēm, kas nav angļu valodā, nepieciešama vismaz versija 15.</li><li><code>Implementation</code> : Neobligāti. Norāda, kuru SharePoint savienotāja versiju izmantot. Akceptētās vērtības ir &quot;2.0&quot; vai Null. Ja vērtība ir &quot;2.0&quot;, tiek izmantota SharePoint savienotāja 2.0 implementācija. Ja vērtība ir Null, tiek izmantota sākotnējā SharePoint savienotāja implementācija.</li><li><code>ViewMode</code> : Neobligāti. Šī opcija ir derīga tikai 2.0 implementācijai. Pieņemtās vērtības ir &quot;Visi&quot; un &quot;Noklusējums&quot;. Ja vērtība nav norādīta, vērtība tiek iestatīta kā &quot;Visi&quot;. Ja ir norādīta vērtība &quot;Visi&quot;, skatā ir iekļautas visas lietotāja izveidotās un sistēmas definētās kolonnas. Ja ir norādīta vērtība &quot;Noklusējums&quot;, skats atbildīs tam, ko lietotājs redz, skatot sarakstu tiešsaistē neatkarīgi no tā, kurš lietotājs iestatījumos ir iestatījis kā &quot;Noklusējums&quot;. Ja lietotājs rediģē savu noklusējuma skatu, lai pievienotu vai noņemtu lietotāja izveidotas vai sistēmas definētas kolonnas vai izveido jaunu skatu un iestata to kā noklusējumu, šīs izmaiņas tiks izplatītas, izmantojot savienotāju.</li><li><code>DisableAppendNoteColumns</code> : Neļauj savienotājam piezīmju kolonnās izmantot atsevišķu galapunktu.</li></ul>    



## Category
Accessing data
