---
title: Time.FromText
---

# Time.FromText


Skapar en tid från lokala och universella och anpassade tidsformat.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Skapar ett `time` värde från en textrepresentation av `text`. En valfri `post` parameter, `options`, kan tillhandahållas för att ange ytterligare egenskaper. Den `posten` kan innehålla följande fält:

-   `Format`: Ett `text`\-värde som anger vilket format som ska användas. Gå till https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger `null` kommer det att resultera i att tiden analyseras med bästa möjliga ansträngning.
-   `Culture`: När `Format` inte är null styr `Culture` vissa formatspecificerare. Till exempel, i `"en-US"` är `"tt"` `"AM" eller "PM"`, medan i `"ar-EG"` är `"tt"` `"ص" eller "م"`. När `Format` är `null` styr `Culture` det standardformat som ska användas. När `Culture` är `null` eller utelämnas används `Culture.Current`.

Om du vill stödja äldre arbetsflöden kan `options` också vara textvärden. Detta har samma beteende som om `options = [Format = null, Culture = alternativ]`.


## Examples

### Example #1
Konvertera `"10:12:31am"` till ett tidsvärde.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Konvertera `"1012"` till ett tidsvärde.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Konvertera `"10"` till ett tidsvärde.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
