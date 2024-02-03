---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

QuickBooks Online қызметінен деректерді импорттау.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

      QuickBooks Online қызметінде қолжетімді кестелер тізімі бар кестені қайтарады. Келесі параметрлерді басқару үшін <code>options</code> қосымша жазба параметрін көрсетуге болады:      <ul>        <li><code>ConnectionTimeout</code>: серверге қосылу әрекетінен бас тартуға дейінгі күту қажет уақытты басқаратын ұзақтық.</li>            <li><code>CommandTimeout</code>: сервер жақтағы сұрау бас тартқанға дейін қанша уақыт орындалатынын басқаратын ұзақтық.</li>          </ul>        Жазба параметрі былай көрсетіледі: [option1 = value1, option2 = value2...].    


