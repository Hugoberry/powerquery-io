---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Returnerar objekten från Salesforce-kontot.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Returnerar objekten för det Salesforce-konto som tillhandahållits i autentiseringsuppgifterna. Kontot ansluts genom den tillhandahållna miljön <code>loginUrl</code>. Om ingen miljö tillhandahålls ansluter kontot till produktionen (https://login.salesforce.com). Du kan tillhandahålla en valfri postparameter, <code>options</code>, om du vill ange ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>CreateNavigationProperties</code> : Ett logiskt v&#228;rde (sant/falskt) som anger huruvida navigeringsegenskaper ska genereras f&#246;r returnerade v&#228;rden eller inte (standard &#228;r sant).</li><li><code>ApiVersion</code> : Den Salesforce API-version som ska anv&#228;ndas f&#246;r den h&#228;r fr&#229;gan. Om n&#229;gon s&#229;dan inte anges s&#229; anv&#228;nds API-version 29.0 is.</li><li><code>Timeout</code> : En varaktighet som styr hur l&#229;ng tid som ska g&#229; innan f&#246;rfr&#229;gan till servern avbryts. Standardv&#228;rdet &#228;r k&#228;llspecifikt.</li></ul>    



## Category
Accessing data
