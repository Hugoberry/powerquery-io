---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Returnerar en textrepresentation av datetimezone-värdet.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnerar en textrepresentation av `dateTimeZone`. En valfri `record`\-parameter, `options`kan tillhandahållas för att ange ytterligare egenskaper. `culture` Används endast för äldre arbetsflöden. Den `posten` kan innehålla följande fält:

-   `Format`: Ett `text`\-värde som anger vilket format som ska användas. Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger `null` kommer datumet att formateras med standarden definierad av `Culture`.
-   `Culture`: När `Format` inte är null styr `Culture` vissa formatspecificerare. Exempel: i `en-US` är `MMM` `Jan, Feb, Mar, ...` men i `ru-RU` är `MMM` `"ннв", "фев", "мар", ...`. När `Format` är `null` styr `Culture` det standardformat som ska användas. När `Culture` är `null` eller utelämnas används `Culture.Current`.

För att stödja äldre arbetsflöden kan `options` och `culture` också vara textvärden. Detta har samma beteende som om `alternativ = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertera `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` till ett `text` värde. *Resultatresultatet kan variera beroende på aktuell kultur.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Konvertera med iso 8601-mönstret.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
