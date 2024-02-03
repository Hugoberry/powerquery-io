---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importujte data z QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Vrátí tabulku s výpisem dostupných tabulek v QuickBooks Online. Je možné zadat volitelný parametr záznamu <code>options</code> k nastavení následujících možností:          <ul>            <li><code>ConnectionTimeout</code>: Časový interval určující, jak dlouho se má čekat, než se ukončí neúspěšný pokus o připojení k serveru.</li>            <li><code>CommandTimeout</code>: Časový interval určující, jak dlouho může běžet dotaz na straně serveru, než bude zrušen.</li>          </ul>        Parametr záznamu se zadává ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].    


