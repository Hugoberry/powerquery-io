---
title: Salesforce.Reports
---

# Salesforce.Reports


Returnerar rapporterna från Salesforce-kontot.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Returnerar rapporterna för det Salesforce-konto som tillhandahållits i autentiseringsuppgifterna. Kontot ansluts genom den tillhandahållna miljön `loginUrl`. Om ingen miljö tillhandahålls ansluter kontot till produktionen (https://login.salesforce.com). Du kan tillhandahålla en valfri postparameter, `options`, om du vill ange ytterligare egenskaper. Posten kan innehålla följande fält:

-   `ApiVersion` : Den Salesforce API-version som ska användas för den här frågan. Om någon sådan inte anges så används API-version 29.0 is.
-   `Timeout` : En varaktighet som styr hur lång tid som ska gå innan förfrågan till servern avbryts. Standardvärdet är källspecifikt.



## Category
Accessing data
