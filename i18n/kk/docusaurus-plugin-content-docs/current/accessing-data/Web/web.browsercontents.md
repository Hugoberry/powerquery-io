---
title: Web.BrowserContents
---

# Web.BrowserContents


Көрсетілген URL мекенжайы үшін веб-браузер арқылы көргендегідей HTML кодын қайтарады.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Веб-браузер арқылы көргенде, көрсетілген `url`үшін HTML қайтарады. Қосымша сипаттарды көрсету үшін `options` деген міндетті емес жазба параметрін көрсетуге болады. Жазба келесі өрістерді қамтуы мүмкін:

-   `ApiKeyName`: Мақсатты сайтта API кілті түсінігі болса, бұл параметрді URL мекенжайында пайдалану керек кілт параметрдің атауын (мәнін емес) көрсету үшін пайдалануға болады. Нақты кілт мәні тіркелгі деректерінде көрсетіледі.
-   `WaitFor`: Беттің жүктелуін күтуге (ол әрқашан орындалады) қоса, HTML жүктеп алмай тұрып күту керек шартты көрсетеді. "Күту уақыты" және/немесе "Селектор" өрістерін қамтитын жазба бола алады. Тек "Күту уақыты" көрсетілген болса, функция HTML жүктеп алмай тұрып көрсетілген уақыт мөлшері бойы күтеді. "Селектор" және "Күту уақыты" өрістерінің екеуі де көрсетілген болса әрі "Күту уақыты" бетте "Селектор" бар болмай тұрып өтсе, қате пайда болады. "Күту уақыты" жоқ "Селектор" көрсетілсе, 30 секундтан тұратын әдепкі "Күту уақыты" қолданылады.


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
Accessing data
