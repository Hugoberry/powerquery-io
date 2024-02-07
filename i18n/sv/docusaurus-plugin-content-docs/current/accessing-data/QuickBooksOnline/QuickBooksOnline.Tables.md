---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


Importera data från QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

      Returnerar en tabell som listar tillgängliga tabeller i QuickBooks Online. En valfri postparameter, <code>options</code>, kan anges för att kontrollera följande alternativ:      <ul>        <li><code>ConnectionTimeout</code>: En varaktighet som kontrollerar hur länge man ska vänta innan man överger ett försök att ansluta till servern.</li>        <li><code>CommandTimeout</code>: En varaktighet som kontrollerar hur länge som en fråga på serversidan ska få köras innan den avbryts.</li>      </ul>    Postparametern anges som [option1 = value1, option2 = value2...].    


