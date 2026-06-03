---
title: Date.ToText
---

# Date.ToText


Returnerar en textrepresentation av datumvärdet.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnerar en textrepresentation av `date`. En valfri `record`\-parameter, `options`kan tillhandahållas för att ange ytterligare egenskaper. `culture` Används endast för äldre arbetsflöden. Den `posten` kan innehålla följande fält:

-   `Format`: Ett `text`\-värde som anger vilket format som ska användas. Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger `null` kommer datumet att formateras med standarden definierad av `Culture`.
-   `Culture`: När `Format` inte är null styr `Culture` vissa formatspecificerare. Exempel: i `en-US` är `MMM` `Jan, Feb, Mar, ...` men i `ru-RU` är `MMM` `"ннв", "фев", "мар", ...`. När `Format` är `null` styr `Culture` det standardformat som ska användas. När `Culture` är `null` eller utelämnas används `Culture.Current`.

För att stödja äldre arbetsflöden kan `options` och `culture` också vara textvärden. Detta har samma beteende som om `alternativ = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertera `#datum(2010, 12, 31)` till ett `text` värde. *Resultatresultatet kan variera beroende på aktuell kultur.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Hitta året i Hijri-kalendern som motsvarar den 1 januari 2000 i den gregorianska kalendern.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
