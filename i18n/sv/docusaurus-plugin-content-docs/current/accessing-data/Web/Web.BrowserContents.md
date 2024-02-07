---
title: Web.BrowserContents
---

# Web.BrowserContents


Returnerar HTML-koden för den angivna URL:en enligt en webbläsare.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Returnerar HTML-koden för den angivna <code>url</code>enligt en webbläsare. En valfri postparameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. Posten kan innehålla följande fält: <ul> <li><code>ApiKeyName</code>: Om målwebbplatsen innehåller en notering om en API-nyckel, kan den här parametern användas för att ange namnet (inte värdet) för den nyckelparameter som måste användas i webbadressen. Det faktiska nyckelvärdet anges i autentiseringsuppgiften..</li>        <li><code>WaitFor</code>: Anger ett villkor att vänta på innan HTML laddas ned, förutom att vänta på att sidan ska läsas in (vilket alltid görs). Kan vara en post som innehåller timeout- och/eller selector-fält. Om endast en timeout anges väntar funktionen den angivna tiden innan HTML-koden laddas ned. Om både en väljare och timeout har angetts och tidsgränsen förflutit innan väljaren finns på sidan, utlöses ett fel. Om en väljare anges utan timeout tillämpas en standardtidsgräns på 30 sekunder.</li> </ul>    


## Examples

### Example #1 
Returnerar HTML för https://microsoft.com.
```powerquery
Web.BrowserContents(”https://microsoft.com”)
```

Result: 
```powerquery
<!DOCTYPE html><html xmlns=...
```


### Example #2 
Returnerar HTML för https://microsoft.com efter att ha väntat på en CSS-väljare att visas.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
<!DOCTYPE html><html xmlns=...
```


### Example #3 
Returnerar HTML för https://microsoft.com efter att ha väntat i tio sekunder.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
<!DOCTYPE html><html xmlns=...
```


### Example #4 
Returnerar HTML för https://microsoft.com efter att ha väntat i upp till tio sekunder på att en CSS-väljare ska visas.
```powerquery
Web.BrowserContents(”https://microsoft.com”, [WaitFor = [Selector = ”div.ready”, Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
<!DOCTYPE html><html xmlns=...
```




## Category
Öppnar data
