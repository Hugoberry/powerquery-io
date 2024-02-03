---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

SharePoint тізіміндегі контентті қамтитын кестені қайтарады.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Көрсетілген <code>url</code> SharePoint тізімінде табылған әр тізім элементі үшін жолды қамтитын кестені қайтарады. Әр жол тізімнің сипаттарын қамтиды. Келесі параметрлерді басқару үшін <code>options</code> көрсетілуі мүмкін:    <ul><li><code>ApiVersion</code> : Осы сайтқа пайдаланылатын SharePoint API нұсқасын көрсететін (14 немесе 15) саны немесе &quot;Авто&quot; мәтіні. Көрсетілмеген кезде, API нұсқасы 14 пайдаланылады. &quot;Авто&quot; көрсетілген кезде сервер нұсқасы мүмкін болған жағдайда автоматты түрде анықталады, керісінше жағдайда нұсқаның әдепкі мәні 14 болады. Ағылшын тілінде емес SharePoint сайттары үшін кемінде 15-нұсқа қажет.</li><li><code>Implementation</code> : Міндетті емес. SharePoint қосқышының қай нұсқасын пайдалану керек екенін көрсетеді. Қабылданатын мәндер: “2.0” немесе null. Егер мән “2.0” болса, SharePoint қосқышының 2.0 жүзеге асырылуы пайдаланылады. Егер мән null болса, SharePoint қосқышының бастапқы жүзеге асырылуы пайдаланылады.</li><li><code>ViewMode</code> : Міндетті емес. Бұл параметр тек 2.0 жүзеге асырылуы үшін жарамды. Қабылданатын мәндер: “Барлығы” және “Әдепкі”. Егер мән көрсетілмеген болса, мән “Барлығы” деп орнатылады. “Барлығы” мәні көрсетілген болса, көрініс барлық пайдаланушы жасаған және жүйе анықтаған бағандарды қамтиды. “Әдепкі” мәні көрсетілген болса, көрініс пайдаланушы параметрлерінде “Әдепкі” деп орнатқан көріністе тізімге онлайн қарап тұрғанда пайдаланушы көретін нәрсеге сәйкес болады. Егер пайдаланушы өзі жасаған немесе жүйе анықтаған бағандарды қосу немесе жою үшін я болмаса жаңа көріністі жасау және оны әдепкі ретінде орнату арқылы әдепкі көрінісін өңдесе, бұл өзгерістер қосқыш арқылы таратылады.</li><li><code>DisableAppendNoteColumns</code> : Жазба бағандары үшін қосқыштың жеке соңғы нүктені пайдалануына жол бермейді.</li></ul>    



## Category
Accessing data