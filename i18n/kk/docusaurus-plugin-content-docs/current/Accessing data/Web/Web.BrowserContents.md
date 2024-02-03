---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Көрсетілген URL мекенжайы үшін веб-браузер арқылы көргендегідей HTML кодын қайтарады.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Веб-браузер арқылы көргенде, көрсетілген <code>url</code> үшін HTML қайтарады. Қосымша сипаттарды көрсету үшін <code>options</code> деген міндетті емес жазба параметрі қамтамасыз етілуі мүмкін. Жазба келесі өрістерді қамти алады:     <ul>        <li><code>ApiKeyName</code>: Мақсатты сайтта API кілті түсінігі болса, бұл параметрді URL мекенжайында пайдалану керек кілт параметрдің атауын (мәнін емес) көрсету үшін пайдалануға болады. Іс жүзіндегі кілт мәні тіркелгі деректерінде қамтамасыз етіледі.</li>        <li><code>WaitFor</code>: Беттің жүктелуін күтуге (ол әрқашан орындалады) қоса, HTML жүктеп алмай тұрып күту керек шартты көрсетеді. "Күту уақыты" және/немесе "Селектор" өрістерін қамтитын жазба бола алады. Тек "Күту уақыты" көрсетілген болса, функция HTML жүктеп алмай тұрып көрсетілген уақыт мөлшері бойы күтеді. "Селектор" және "Күту уақыты" өрістерінің екеуі де көрсетілген болса әрі "Күту уақыты" бетте "Селектор" бар болмай тұрып өтсе, қате көрсетіледі. "Күту уақыты" жоқ "Селектор" көрсетілсе, 30 секундтан тұратын әдепкі "Күту уақыты" қолданылады.</li>      </ul>    


## Examples

### Example #1 
https://microsoft.com үшін HTML қайтарады.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
CSS селекторының болуын күткеннен кейін https://microsoft.com үшін HTML қайтарады.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Он секунд күткеннен кейін https://microsoft.com үшін HTML қайтарады.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
CSS селекторының болуын он секундқа дейін күткеннен кейін https://microsoft.com үшін HTML қайтарады.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Деректерге қол жеткізу
