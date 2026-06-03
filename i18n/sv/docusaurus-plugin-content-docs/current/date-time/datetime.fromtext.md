---
title: DateTime.FromText
---

# DateTime.FromText


Skapar ett datetimezone-värde från lokala och universella datetime-format.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Skapar ett `datetime` värde från en textrepresentation av `text`. En valfri `post` parameter, `options`, kan tillhandahållas för att ange ytterligare egenskaper. Den `posten` kan innehålla följande fält:

-   `Format`: Ett `text`\-värde som anger vilket format som ska användas. Gå till https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger `null` kommer det att resultera i att datumet parsas efter bästa förmåga.
-   `Culture`: När `Format` inte är null styr `Culture` vissa formatspecificerare. Exempel: i `en-US` är `MMM` `Jan, Feb, Mar, ...` men i `ru-RU` är `MMM` `"ннв", "фев", "мар", ...`. När `Format` är `null` styr `Culture` det standardformat som ska användas. När `Culture` är `null` eller utelämnas används `Culture.Current`.

Om du vill stödja äldre arbetsflöden kan `options` också vara textvärden. Detta har samma beteende som om `options = [Format = null, Culture = alternativ]`.


## Examples

### Example #1
Konvertera `"2010-12-31T01:30:00"` till ett datetime-värde.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Konvertera `"2010-12-31T01:30:00.121212"` till ett datetime-värde.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Konvertera `"2010-12-31T01:30:00"` till ett datetime-värde.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Konvertera `"20101231T013000"` till ett datetime-värde.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
