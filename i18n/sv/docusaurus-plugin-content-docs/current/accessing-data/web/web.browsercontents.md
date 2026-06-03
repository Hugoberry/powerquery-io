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

Returnerar HTML-filen för angiven `url` enligt en webbläsare. Parameter för valfri post, `options`, kan tillhandahållas för ytterligare egenskaper. Posten kan innehålla följande fält:

-   `ApiKeyName`:Om målwebbplatsen innehåller en notering om en API-nyckel, kan den här parametern användas för att ange namnet (inte värdet) för den nyckelparameter som måste användas i webbadressen. Det faktiska nyckelvärdet anges i autentiseringsuppgiften.
.-   `WaitFor`: Anger hur lång tid som ska gå innan HTML-filen laddas ned, utöver den tid det tar att läsa in sidan (vilket alltid görs). Kan vara en post som innehåller Timeout- och/eller Selector-fält. Om endast ett Timeout-värde anges laddas HTML-filen ned efter den angivna tiden. Om både Selector och Timeout anges och Timeout löper ut innan Selector finns på sidan, genereras ett fel. Om ett Selector-värde anges utan Timeout-värde tillämpas en standardtidsgräns på 30 sekunder.


## Examples

### Example #1
Returnerar HTML för https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Returnerar HTML för https://microsoft.com efter att ha väntat på en CSS-väljare att visas.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Returnerar HTML för https://microsoft.com efter att ha väntat i tio sekunder.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Returnerar HTML för https://microsoft.com efter att ha väntat i upp till tio sekunder på att en CSS-väljare ska visas.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
