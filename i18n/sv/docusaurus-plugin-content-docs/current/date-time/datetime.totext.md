---
title: DateTime.ToText
---

# DateTime.ToText


Returnerar en textrepresentation av datetime-värdet.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnerar en textrepresentation av `dateTime`. En valfri `record`\-parameter, `options`kan tillhandahållas för att ange ytterligare egenskaper. `culture` Används endast för äldre arbetsflöden. Den `posten` kan innehålla följande fält:

-   `Format`: Ett `text`\-värde som anger vilket format som ska användas. Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger `null` kommer datumet att formateras med standarden definierad av `Culture`.
-   `Culture`: När `Format` inte är null styr `Culture` vissa formatspecificerare. Exempel: i `en-US` är `MMM` `Jan, Feb, Mar, ...` men i `ru-RU` är `MMM` `"ннв", "фев", "мар", ...`. När `Format` är `null` styr `Culture` det standardformat som ska användas. När `Culture` är `null` eller utelämnas används `Culture.Current`.

För att stödja äldre arbetsflöden kan `options` och `culture` också vara textvärden. Detta har samma beteende som om `alternativ = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertera `#datetime(2010, 12, 31, 01, 30, 25)` till ett `text` värde. *Resultatresultatet kan variera beroende på aktuell kultur.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Konvertera med iso 8601-mönstret.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
