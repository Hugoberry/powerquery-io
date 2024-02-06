---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


Gegevens uit QuickBooks Online importeren.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

      Hiermee wordt een tabel geretourneerd met de beschikbare tabellen QuickBooks Online. Een optionele recordparameter, <code>options</code>, kan worden opgegeven om de volgende opties te bepalen:      <ul>        <li><code>ConnectionTimeout</code>: Een duur waarmee wordt bepaald hoe lang wordt gewacht voordat er wordt gestopt te proberen verbinding te maken met de server.</li>        <li><code>CommandTimeout</code>: Een duur waarmee wordt bepaald hoe lang de query aan de serverzijde kan worden uitgevoerd voordat deze wordt geannuleerd</li>          </ul>        De recordparameter wordt opgegeven als [option1 = value1, option2 = value2...].    


