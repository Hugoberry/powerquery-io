---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

SharePoint сайтындағы мазмұнды қамтитын кестені қайтарады.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Көрсетілген <code>url</code> SharePoint сайтында табылған әр қалта және құжат үшін жолды қамтитын кестені қайтарады. Әр жол қалтаның немесе файлдың сипаттарын және оның контентіне сілтемені қамтиды. Келесі параметрлерді басқару үшін <code>options</code> көрсетілуі мүмкін:    <ul><li><code>ApiVersion</code> : Осы сайтқа пайдаланылатын SharePoint API нұсқасын көрсететін (14 немесе 15) саны немесе &quot;Авто&quot; мәтіні. Көрсетілмеген кезде, API нұсқасы 14 пайдаланылады. &quot;Авто&quot; көрсетілген кезде сервер нұсқасы мүмкін болған жағдайда автоматты түрде анықталады, керісінше жағдайда нұсқаның әдепкі мәні 14 болады. Ағылшын тілінде емес SharePoint сайттары үшін кемінде 15-нұсқа қажет.</li></ul>    



## Category
Accessing data
