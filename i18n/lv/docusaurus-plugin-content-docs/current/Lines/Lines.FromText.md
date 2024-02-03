---
title: Lines.FromText
---

# Lines.FromText


## Description

Teksta vērtība tiek pārvērsta par teksta vērtību sarakstu, kas ir sadalīts atbilstoši rindiņu pārtraukumiem. Ja parametra includeLineSeparators (Ietvert rindiņu atdalītājus) vērtība ir “patiess”, rindiņu pārtraukuma rakstzīmes tiek ietvertas tekstā.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Teksta vērtība tiek pārveidota par teksta vērtību sarakstu, kas ir sadalīts atbilstoši rindiņu pārtraukumiem. Ja parametra includeLineSeparators (Ietvert rindiņu atdalītājus) vērtība ir “patiess”, rindiņu atdalītāju rakstzīmes tiek ietvertas tekstā.        <div>          <ul>            <li><code>QuoteStyle.None</code> (Pēdiņu stils: nekādas) (pēc noklusējuma): pēdiņu lietošana nav nepieciešama.</li>            <li><code>QuoteStyle.Csv</code> (Pēdiņu stils: CSV): pēdiņu lietojums atbilstoši CSV. Dubultpēdiņu rakstzīme tiek izmantota, lai atdalītu šādus reģionus, un divas dubultpēdiņu rakstzīmes tiek izmantotas, lai norādītu vienu dubultpēdiņu rakstzīmi šādā reģionā. </li>          </ul>        </div>    



## Category
Lines
