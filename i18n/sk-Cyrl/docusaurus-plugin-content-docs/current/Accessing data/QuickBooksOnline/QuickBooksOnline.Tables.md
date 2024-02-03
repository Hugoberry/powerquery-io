---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importuje údaje zo služby QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Vráti tabuľku so zoznamom dostupných tabuliek v službe QuickBooks Online. Môže sa zadať voliteľný parameter záznamu <code>options</code> na ovládanie nasledujúcich možností:          <ul>            <li><code>ConnectionTimeout</code>: Časový interval ovládajúci, ako dlho treba čakať pred ukončením pokusu o vytvorenie pripojenia k serveru.</li>            <li><code>CommandTimeout</code>: Časový interval ovládajúci, ako dlho je povolené, aby bol spustený dotaz na strane servera pred zrušením.</li>          </ul>        Parameter záznamu sa zadáva vo formáte [option1 = value1, option2 = value2...].


