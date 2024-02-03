---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importați date din QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Returnează un tabel cu tabelele disponibile în QuickBooks Online. Un parametru de înregistrare opțional, <code>options</code>, se poate specifica pentru a controla următoarele opțiuni:          <ul>            <li><code>ConnectionTimeout</code>: o durată care stabilește cât se așteaptă înainte să abandonați o încercare de creare a unei conexiuni la server.</li>            <li><code>CommandTimeout</code>: o durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată.</li>          </ul>        Parametrul de înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...].    


