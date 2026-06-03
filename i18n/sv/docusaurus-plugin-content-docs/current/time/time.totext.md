---
title: Time.ToText
---

# Time.ToText


Returnerar en textrepresentation av tidsvärdet.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnerar en textrepresentation av `time`. En valfri `record`\-parameter, `options`kan tillhandahållas för att ange ytterligare egenskaper. `culture` Används endast för äldre arbetsflöden. Den `posten` kan innehålla följande fält:

-   `Format`: Ett `text`\-värde som anger vilket format som ska användas. Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger `null` kommer datumet att formateras med standarden definierad av `Culture`.
-   `Culture`: När `Format` inte är null styr `Culture` vissa formatspecificerare. Till exempel, i `"en-US"` är `"tt"` `"AM" eller "PM"`, medan i `"ar-EG"` är `"tt"` `"ص" eller "م"`. När `Format` är `null` styr `Culture` det standardformat som ska användas. När `Culture` är `null` eller utelämnas används `Culture.Current`.

För att stödja äldre arbetsflöden kan `options` och `culture` också vara textvärden. Detta har samma beteende som om `alternativ = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertera `#tid(01, 30, 25)` till ett `text` värde. *Resultatresultatet kan variera beroende på aktuell kultur.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Konvertera med standardtidsformat.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
