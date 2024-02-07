---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


Importuj dane z usługi QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

        Zwraca tabelę z listą dostępnych tabel w usłudze QuickBooks Online. Opcjonalny parametr rekordu <code>options</code> może zostać określony do sterowania następującymi opcjami:          <ul>            <li><code>ConnectionTimeout</code>: Czas trwania decydujący o tym, jak długo należy czekać przed zarzuceniem próby nawiązania połączenia z serwerem.</li>            <li><code>CommandTimeout</code>: Czas trwania decydujący o tym, jak długo zapytanie po stronie serwera może być wykonywane przed anulowaniem.</li>          </ul>        Parametr rekordu jest określany w postaci [opcja1 = wartość1, opcja2 = wartość2...].    


